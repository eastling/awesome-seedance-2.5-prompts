# Contributing

Thank you for helping organize high-quality Seedance 2.5 examples.

## What qualifies

A submission should include:

1. A complete or meaningfully reproducible prompt.
2. A playable result video.
3. The original author and source URL.
4. Evidence that the result used Seedance 2.5.
5. Input references or a clear description of them when the workflow depends on images, video, or audio.

News posts, reposts without provenance, Seedance 2.0 examples, and prompts without an observed output are not accepted as examples.

## Evidence levels

- `official`: published by an official model or product account.
- `creator-confirmed`: the original creator explicitly names Seedance 2.5.
- `reproduced`: a maintainer reran the prompt with Seedance 2.5.

Only `reproduced` means independently verified by this project.

## Classification

Do not invent a new top-level folder for every niche. Classify the prompt across three independent axes:

- **Use case** — why someone would use it.
- **Workflow** — which input/editing path it uses.
- **Technique** — how the creative result is achieved.

If the existing taxonomy does not fit, explain the proposed addition in the pull request or issue.

## Media and rights

Link to the original video by default. Do not upload or mirror someone else's video, image, voice, or reference asset without permission. Keep attribution and takedown information intact.

## Local validation

```bash
npm run validate
npm run generate
```

Generated README files must be committed together with prompt changes.
