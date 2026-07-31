import { loadPrompts, loadTaxonomy } from "./lib.mjs";

const requiredFields = [
  "id",
  "slug",
  "title",
  "title_zh",
  "description",
  "description_zh",
  "model",
  "source_type",
  "source_publisher",
  "source_url",
  "evidence",
  "duration_seconds",
  "aspect_ratio",
  "prompt_language",
  "input_types",
  "reference_count",
  "use_cases",
  "workflows",
  "techniques",
  "video_url"
];

const prompts = await loadPrompts();
const taxonomy = await loadTaxonomy();
const ids = new Set();
const slugs = new Set();
const allowedEvidence = new Set(["official", "creator-confirmed", "reproduced"]);
const allowedInputTypes = new Set(["text", "image", "video", "audio"]);

if (prompts.length === 0) throw new Error("No prompt files found.");

for (const prompt of prompts) {
  for (const field of requiredFields) {
    if (prompt[field] === undefined || prompt[field] === "") {
      throw new Error(`${prompt.filename}: missing ${field}`);
    }
  }

  if (ids.has(prompt.id)) throw new Error(`${prompt.filename}: duplicate id ${prompt.id}`);
  if (slugs.has(prompt.slug)) throw new Error(`${prompt.filename}: duplicate slug ${prompt.slug}`);
  ids.add(prompt.id);
  slugs.add(prompt.slug);

  if (!allowedEvidence.has(prompt.evidence)) {
    throw new Error(`${prompt.filename}: unsupported evidence level ${prompt.evidence}`);
  }

  if (!Array.isArray(prompt.input_types) || prompt.input_types.length === 0) {
    throw new Error(`${prompt.filename}: input_types must be a non-empty list`);
  }
  for (const inputType of prompt.input_types) {
    if (!allowedInputTypes.has(inputType)) {
      throw new Error(`${prompt.filename}: unsupported input type ${inputType}`);
    }
  }
  if (!Number.isInteger(prompt.reference_count) || prompt.reference_count < 0) {
    throw new Error(`${prompt.filename}: reference_count must be a non-negative integer`);
  }

  for (const axis of ["use_cases", "workflows", "techniques"]) {
    if (!Array.isArray(prompt[axis]) || prompt[axis].length === 0) {
      throw new Error(`${prompt.filename}: ${axis} must be a non-empty list`);
    }
    const values = taxonomy.axes[axis].values;
    for (const value of prompt[axis]) {
      if (!values[value]) throw new Error(`${prompt.filename}: unknown ${axis} value ${value}`);
    }
  }

  for (const field of ["source_url", "video_url"]) {
    try {
      const url = new URL(prompt[field]);
      if (url.protocol !== "https:") throw new Error();
    } catch {
      throw new Error(`${prompt.filename}: ${field} must be an HTTPS URL`);
    }
  }

  if (prompt.prompt.length < 20) {
    throw new Error(`${prompt.filename}: prompt text is unexpectedly short`);
  }
}

console.log(`Validated ${prompts.length} prompts, ${ids.size} unique IDs, and all taxonomy values.`);
