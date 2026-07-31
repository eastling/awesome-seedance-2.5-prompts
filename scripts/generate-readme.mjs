import { writeFile } from "node:fs/promises";
import path from "node:path";
import { ROOT, loadPrompts, loadTaxonomy, thumbnailUrl } from "./lib.mjs";

const prompts = await loadPrompts();
const taxonomy = await loadTaxonomy();

const evidenceLabels = {
  official: { en: "Official source", zh: "官方来源" },
  "creator-confirmed": { en: "Creator-confirmed", zh: "作者确认" },
  reproduced: { en: "Reproduced", zh: "已复现" }
};

const inputTypeLabels = {
  text: { en: "Text", zh: "文本" },
  image: { en: "Image", zh: "图片" },
  video: { en: "Video", zh: "视频" },
  audio: { en: "Audio", zh: "音频" }
};

function labelsFor(prompt, axis, locale) {
  return prompt[axis]
    .map((value) => taxonomy.axes[axis].values[value][locale === "zh" ? "label_zh" : "label"])
    .join(" · ");
}

function promptBlock(prompt, index, locale) {
  const zh = locale === "zh";
  const title = zh ? prompt.title_zh : prompt.title;
  const description = zh ? prompt.description_zh : prompt.description;
  const evidence = evidenceLabels[prompt.evidence][locale];
  const sourceLabel = zh ? "官方来源" : "Official source";
  const videoLabel = zh ? "观看官方视频" : "Watch official video";
  const promptLabel = zh ? "提示词（官方英文版）" : "Prompt";
  const inputs = prompt.input_types
    .map((value) => inputTypeLabels[value][locale])
    .join(" + ");
  const references = prompt.reference_count
    ? zh
      ? ` · ${prompt.reference_count} 个参考素材`
      : ` · ${prompt.reference_count} reference${prompt.reference_count === 1 ? "" : "s"}`
    : "";

  return `### ${index + 1}. ${title}

${description}

| ${zh ? "字段" : "Field"} | ${zh ? "信息" : "Details"} |
|---|---|
| ${zh ? "证据等级" : "Evidence"} | \`${evidence}\` |
| ${zh ? "输入" : "Inputs"} | ${inputs}${references} |
| ${zh ? "使用场景" : "Use case"} | ${labelsFor(prompt, "use_cases", locale)} |
| ${zh ? "工作流" : "Workflow"} | ${labelsFor(prompt, "workflows", locale)} |
| ${zh ? "创作技法" : "Techniques"} | ${labelsFor(prompt, "techniques", locale)} |
| ${zh ? "规格" : "Format"} | ${prompt.duration_seconds}s · ${prompt.aspect_ratio} |
| ${zh ? "发布者" : "Publisher"} | ${prompt.source_publisher} |

<a href="${prompt.video_url}">
  <img src="${thumbnailUrl(prompt.video_url)}" width="720" alt="${title}">
</a>

[${videoLabel}](${prompt.video_url}) · [${sourceLabel}](${prompt.source_url})

#### ${promptLabel}

\`\`\`text
${prompt.prompt}
\`\`\`
`;
}

function categorySummary(axis, locale) {
  const values = taxonomy.axes[axis].values;
  const counts = new Map();
  for (const prompt of prompts) {
    for (const value of prompt[axis]) counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([value, count]) => {
      const label = values[value][locale === "zh" ? "label_zh" : "label"];
      return `- **${label}** — ${count}`;
    })
    .join("\n");
}

function generate(locale) {
  const zh = locale === "zh";
  const title = zh ? "Awesome Seedance 2.5 Prompts" : "Awesome Seedance 2.5 Prompts";
  const intro = zh
    ? "一个围绕信息整理构建的 Seedance 2.5 提示词库：保留原始来源、官方成片、输入方式和多轴分类，方便查找、比较与复现。"
    : "A source-linked Seedance 2.5 prompt library organized for discovery, comparison, and reproduction. Every entry keeps its provenance, official output, input workflow, and multi-axis classification.";
  const languageSwitch = zh
    ? "[English](README.md) · **简体中文**"
    : "**English** · [简体中文](README_zh.md)";
  const browseTitle = zh ? "分类浏览" : "Browse the collection";
  const evidenceTitle = zh ? "证据等级" : "Evidence levels";
  const collectionTitle = zh ? "首批官方案例" : "Official launch collection";
  const contribution = zh
    ? "欢迎提交新的 Seedance 2.5 案例。请阅读 [贡献指南](CONTRIBUTING.md)，并使用 [Prompt 投稿表单](https://github.com/eastling/awesome-seedance-2.5-prompts/issues/new?template=submit-prompt.yml)。"
    : "New Seedance 2.5 examples are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and use the [prompt submission form](https://github.com/eastling/awesome-seedance-2.5-prompts/issues/new?template=submit-prompt.yml).";

  return `${languageSwitch}

# ${title}

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/eastling/awesome-seedance-2.5-prompts?style=social)](https://github.com/eastling/awesome-seedance-2.5-prompts)
[![Prompts](https://img.shields.io/badge/prompts-${prompts.length}-blue)](#official-launch-collection)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](CONTRIBUTING.md)

${intro}

> ${zh ? "视频由官方地址提供，本仓库首版不重新托管媒体文件。第三方内容仍归原作者或发布者所有。" : "Videos are linked from official sources and are not re-hosted in this first release. Third-party content remains the property of its original author or publisher."}

## ${browseTitle}

${zh ? "分类采用独立维度，而不是把每条 Prompt 塞进一个固定目录。这样同一案例可以同时属于一个使用场景、一种工作流和多个创作技法。" : "Classification uses independent axes instead of forcing each prompt into one rigid folder. One example can belong to a use case, a workflow, and several techniques at the same time."}

### ${zh ? "按使用场景" : "By use case"}

${categorySummary("use_cases", locale)}

### ${zh ? "按工作流" : "By workflow"}

${categorySummary("workflows", locale)}

## ${evidenceTitle}

| Level | ${zh ? "含义" : "Meaning"} |
|---|---|
| \`Official source\` | ${zh ? "来自火山方舟、BytePlus、Dreamina 等官方页面；不代表我们独立复现。" : "Published on an official Volcengine, BytePlus, Dreamina, or equivalent source; not independently reproduced by us."} |
| \`Creator-confirmed\` | ${zh ? "原作者明确说明使用 Seedance 2.5，并提供提示词和结果。" : "The original creator explicitly names Seedance 2.5 and provides the prompt and result."} |
| \`Reproduced\` | ${zh ? "维护者在 Seedance 2.5 中重新运行并记录结果。" : "Maintainers reran the prompt with Seedance 2.5 and recorded the result."} |

<a id="official-launch-collection"></a>

## ${collectionTitle}

${prompts.map((prompt, index) => promptBlock(prompt, index, locale)).join("\n---\n\n")}

## ${zh ? "贡献" : "Contributing"}

${contribution}

## ${zh ? "许可与归属" : "License and attribution"}

${zh ? "仓库代码采用 [MIT License](LICENSE)。收录的提示词、参考素材和视频不因进入本仓库而被重新授权；它们仍受原始发布者的条款约束。详情见 [NOTICE.md](NOTICE.md)。" : "Repository code is licensed under the [MIT License](LICENSE). Included prompts, reference media, and videos are not relicensed by their inclusion here; they remain subject to their original publishers' terms. See [NOTICE.md](NOTICE.md)."}
`;
}

await writeFile(path.join(ROOT, "README.md"), generate("en"), "utf8");
await writeFile(path.join(ROOT, "README_zh.md"), generate("zh"), "utf8");
console.log(`Generated README.md and README_zh.md from ${prompts.length} prompt files.`);
