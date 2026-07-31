import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

export const ROOT = path.resolve(import.meta.dirname, "..");
export const PROMPTS_DIR = path.join(ROOT, "prompts");

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const content = trimmed.slice(1, -1).trim();
    return content ? content.split(",").map((item) => item.trim()) : [];
  }
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  return trimmed.replace(/^"(.*)"$/, "$1");
}

export function parsePromptFile(content, filename) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`${filename}: missing front matter`);

  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`${filename}: invalid front matter line: ${line}`);
    meta[line.slice(0, separator).trim()] = parseScalar(line.slice(separator + 1));
  }

  const promptMatch = match[2].match(/## Prompt\r?\n\r?\n```text\r?\n([\s\S]*?)\r?\n```/);
  if (!promptMatch) throw new Error(`${filename}: missing Prompt text block`);

  return {
    ...meta,
    prompt: promptMatch[1].trim(),
    filename
  };
}

export async function loadPrompts() {
  const filenames = (await readdir(PROMPTS_DIR))
    .filter((filename) => filename.endsWith(".md"))
    .sort();

  return Promise.all(
    filenames.map(async (filename) => {
      const content = await readFile(path.join(PROMPTS_DIR, filename), "utf8");
      return parsePromptFile(content, filename);
    })
  );
}

export async function loadTaxonomy() {
  return JSON.parse(await readFile(path.join(ROOT, "data", "taxonomy.json"), "utf8"));
}

export function thumbnailUrl(videoUrl) {
  const url = new URL(videoUrl);
  if (!url.hostname.endsWith(".volces.com")) return null;
  return `${videoUrl}?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast`;
}
