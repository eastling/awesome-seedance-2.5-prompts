[English](README.md) · **简体中文**

# Awesome Seedance 2.5 Prompts

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/eastling/awesome-seedance-2.5-prompts?style=social)](https://github.com/eastling/awesome-seedance-2.5-prompts)
[![Prompts](https://img.shields.io/badge/prompts-78-blue)](#prompt-collection)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](CONTRIBUTING.md)

一个围绕信息整理构建的 Seedance 2.5 提示词库：保留原始来源、成片、输入方式和多轴分类，方便查找、比较与复现。

> 成片链接指向原始来源，本仓库不重新托管媒体文件。第三方内容仍归原作者或发布者所有。

## 分类浏览

分类采用独立维度，而不是把每条 Prompt 塞进一个固定目录。这样同一案例可以同时属于一个使用场景、一种工作流和多个创作技法。

### 按使用场景

- **创意实验** — 62
- **影视与叙事** — 56
- **品牌与营销** — 22
- **产品演示** — 10
- **教育与教程** — 4
- **音乐与表演** — 2

### 按工作流

- **文生视频** — 46
- **图生视频** — 18
- **多图参考** — 11
- **多模态参考** — 3
- **视频编辑** — 2
- **视频参考** — 2
- **音频驱动** — 1

## 证据等级

| Level | 含义 |
|---|---|
| `Official source` | 来自火山方舟、BytePlus、Dreamina 等官方页面；不代表我们独立复现。 |
| `Creator-confirmed` | 原作者明确说明使用 Seedance 2.5，并提供提示词和结果。 |
| `Reproduced` | 维护者在 Seedance 2.5 中重新运行并记录结果。 |

<a id="prompt-collection"></a>

## 案例合集

### 1. 水晶球卡点 Match-cut 短片

水晶球始终锁定画面中央，八个场景随音乐重拍完成匹配剪辑。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 匹配剪辑 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 20s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group1/1.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group1/1.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="水晶球卡点 Match-cut 短片">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group1/1.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
A fast-paced, cinematic Match-cut short film synced to a driving electronic beat. A flawless crystal ball stays fixed dead-center throughout, a glowing "seedance" logo etched inside it. The ball holds razor-sharp focus while, on every strong musical beat, the background match-cuts seamlessly: Scene 1: macro close-up, cinematic water splashing around the ball, refracting intricate light. Scene 2: a vintage morning cafe, the ball on a raw-wood table, rising coffee steam and blurred commuters beyond the window. Scene 3: golden-hour dusk, a skater youth tosses and catches the ball one-handed, street racing backward behind them in gorgeous backlit sunset. Scene 4: a frenzied music festival, hands raise the ball high, refracting dazzling stage lasers. Scene 5: a lively family party table, the ball resting center-frame, blurred figures toasting and reaching for food. Scene 6: a dim cinema, hands cupping the ball as the giant screen's faint glow drifts across its surface. Scene 7: the ball on a violently vibrating speaker diaphragm, match-cutting on the climax to a spinning DJ turntable center. Scene 8: an outdoor camping night, background becoming warm bonfire and swaying string-light bokeh. Finale: on the final downbeat the ball is hurled up out of frame; cut to pure black, a minimal white-on-black "seedance" appearing dead-center. Beat-synced match-cut editing, top-tier cinematic color grading, photoreal glass refraction, ray tracing, global illumination. Subject razor-sharp, background heavy motion blur.
```

---

### 2. 蒸汽朋克发条世界：30 秒一镜到底

连续 30 秒运镜穿透并环绕不断演变的蒸汽朋克微缩世界。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 视觉特效 |
| 规格 | 30s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group2/2.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group2/2.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="蒸汽朋克发条世界：30 秒一镜到底">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group2/2.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
A high-end, deeply cinematic 30-second 3D motion-graphics sequence in refined steampunk and vintage-miniature style, with continuous fluid orbiting and pass-through camera moves. [0-10s] Macro close-up of an antique brass clock face that unfolds layer by layer into meshing rotating gear rings and volumetric fog. The camera pierces down through the gears; a mechanical ornithopter spirals up from a miniature canyon of stacked weathered old books. [10-20s] The camera glides forward tracking the ornithopter, seamlessly passing into a fast-spinning ornate brass zoetrope projecting galloping mechanical-horse light. The light leaps out and the scene becomes a brass floating cable car on glimmering copper rails through a forest of gears, bathed in cinematic golden-hour light. [20-30s] The camera pans elegantly down; below appears an exquisite clockwork wooden sailing ship cutting deep-blue glass-textured waves, which morph into a glowing giant moon with lantern-holding explorer silhouettes trekking a crystal-vein ridge under stars. The camera spirals smoothly back through ethereal clouds to the ticking brass clock face. Hyper-real mechanical textures, rich brass and gold tones, cinematic shallow depth of field, smooth seamless pass-through camerawork, epic fantastical adventure atmosphere.
```

---

### 3. 穿过窗户进入不同世界

五张参考图引导镜头穿越风景、水下世界、不同窗户，最终落在人眼特写。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 图片 · 5 个参考素材 |
| 使用场景 | 品牌与营销 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 匹配剪辑 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group3/output.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group3/output.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="穿过窗户进入不同世界">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group3/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
A cinematic brand concept short. @image1 is the first frame; the picture trembles slightly, the camera pushes in to tree shadows rushing backward outside the window, their retreat accelerating, then abruptly cuts to @image2, speed easing as the camera glides slowly along a stream, birdsong and blossoms. The camera drops underwater — bubble sounds — as orange jellyfish drift gracefully past the lens @image3; the camera pulls back as small fish flit past and swim from the water into the window @image4, a girl looking around, watching them. The camera pulls back, defocuses, then refocuses sharp, switching to the music's rhythm: a Chinese-garden lattice window @image5 with light circling, church stained glass, an airplane porthole, a dome skylight, a bay window, louver blinds, a European dormer, a door peephole, a camera viewfinder, a bird's eye, a human eye close-up. It settles on the human eye; the eye closes, screen black, then suddenly opens — "seedance" appearing in the center of the eye on the accent beat.
```

---

### 4. 一镜到底穿越六个情绪房间

八张参考图定义六个不同情绪与视觉风格的房间，主角以一镜到底方式连续穿过。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 图片 · 8 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 角色一致性 · 运镜控制 · 视觉特效 |
| 规格 | 30s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group2/output.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group2/output.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="一镜到底穿越六个情绪房间">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group2/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
One continuous take. The camera smoothly follows a person in a black coat (reference @image1) moving left to right through six connected rooms of different tones and moods. Every room shares the same structure: white walls, light herringbone wood floor, French floor-to-ceiling windows, white sheer curtains (reference @image2) but the outside view and mood differ each time. The protagonist walks at a constant pace, passing through every open door. 0-5s room one, American-comic fight: the protagonist fights a character (@image3), who is defeated; 5-10s room two, warmth, felt-craft style, window view a sunflower field (@image4), warm-orange soft light, a painter painting sunflowers (@image5), the protagonist turning felt-style on entering; 10-15s room three, sorrow, black-and-white comic stop-motion, rain outside, cold-grey light, a person alone on the floor hugging their knees, a phone glowing with an unanswered call; on entering, the light blinks off then on, the room turns color, flowers bursting into bloom; 15-20s room four, joy, a room submerged in the sea (reference @image6), the protagonist turning transparent among coral and fish; 20-25s room five, surprise, window view a sky of fireworks (reference @image7), colorful flickering light, the protagonist swept up in a cheering crowd; 25-30s a blank white room, the protagonist snaps their fingers — snap SFX — frame goes black, "seedance" in the middle (reference @image8). Cinematic quality, high-fashion advertising style, lighting entirely determined by the window views for strong emotional contrast, no text in frame.
```

---

### 5. 视频编辑：删除主角以外的所有人物

用一句精确编辑指令删除画面中除主角外的所有人物，并保持原镜头结构。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 视频 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 视频编辑 |
| 创作技法 | 角色一致性 |
| 规格 | 20s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part2/group1/output.mov">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part2/group1/output.mov?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="视频编辑：删除主角以外的所有人物">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part2/group1/output.mov) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
Video editing: remove everyone in @video1 except the protagonist.
```

---

### 6. 八国语言海边 Rap MV

海边乐队以硬切节奏完成说唱表演，并精准同步八种语言的“你好”口型。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 音乐与表演 · 品牌与营销 |
| 工作流 | 图生视频 |
| 创作技法 | 口型同步 · 多语言音频 · 硬切 · 多镜头 · 声音设计 |
| 规格 | 20s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part3/group1/output.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part3/group1/output.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="八国语言海边 Rap MV">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part3/group1/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
Cinematic hip-hop / rap music video, photoreal quality, high-end tone, seaside setting. Build the frame from @image1: a band performs at a golden sand beach with crashing waves — a lead vocalist gripping a mic on a stand in the wet sand, one guitarist left, one right, a drummer at the back; a vast coastline behind, rolling waves, a warm golden-hour sun shimmering on the water, sea mist in the air. The lead in a red tracksuit raps to camera — lips and jaw precisely synced to every word, head punching to the beat. Bright, punchy, fast, confident rap. HARD CUT on the beat, each switch a double contrast (shot size and type change together). Lyrics (the lead sings "hello" in each language in turn, precisely lip-synced): English "Hello", Chinese "你好", Japanese "こんにちは", Korean "안녕하세요", Portuguese "Olá", Thai "สวัสดี", Spanish "Hola", Arabic "مرحبا". 8 hard-cut shots (low-angle wide establishing; close-up rap to camera; macro guitar-string insert; 3/4 prowling orbit; lateral track at shore; drummer tilt-up; tight push on the lead; heroic full-band push-in), one language per shot. White balance 4000K, teal-and-amber grade, 35mm, shallow depth of field, film grain, sea mist, golden-hour flare. Premium feel, precise lip-sync, no subtitles, no text overlays, hard cuts only, total 20 seconds.
```

---

### 7. 胶囊咖啡机安装使用教程

六张产品参考图引导完整的安装、通电和首次冲洗教程，并配合逐步旁白。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 图片 · 6 个参考素材 |
| 使用场景 | 教育与教程 · 产品演示 |
| 工作流 | 多图参考 |
| 创作技法 | 时间轴分镜 · 多镜头 · 产品一致性 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group3/output.mov">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group3/output.mov?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="胶囊咖啡机安装使用教程">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group3/output.mov) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
A 30-second tutorial video on installing and using a capsule coffee machine. 0-2s: the opening title card reads "seedance capsule coffee machine setup tutorial". 2-5s, Step 1: install the water tank, reference @image1, medium shot from a slightly high angle, rear of the machine body, align the water tank with the slot on the back of the body and push it straight down until it clicks firmly into place, clearly showing how the tank's bottom clips align with the body's slot, the water level line visible through the tank's transparent section, voiceover "First, install the water tank. Align the tank with the slot on the back of the machine; a click means it is locked in place.". 5-9s, Step 2: install the drip tray, reference @image2, close-up front view, front bottom of the body, slide the drip tray horizontally into the guide rails at the bottom until fully seated, voiceover "Next, install the drip tray. Align the tray with the bottom rails.". 9-13s, Step 3: install the used-capsule collection box, reference @image3, close-up from a slightly low angle, the cavity beneath the drip tray, align the collection box with the recess and push it in flush with the drip tray, voiceover "Then insert the capsule collection box. Used capsules will drop down here automatically.". 13-18s, Step 4: first fill with water, reference @image4, close-up side view, the water tank at the top/back of the body, open the tank lid and pour in clean water up to the MAX water level line, then close it, emphasizing the water level line, voiceover "Open the tank lid, pour in clean water, being careful not to exceed the maximum water level line, then close the tank lid.". 18-25s, Step 5: power on, reference @image5, medium shot front view, front of the body, plug in the power cord and press the power button; the indicator light goes from blinking to steady (preheating complete), voiceover "Connect the power and press the power button. The indicator light starts blinking, which means it is preheating. When the light turns steady, the machine is ready.". 25-30s, Step 6: first rinse (without a capsule), reference @image6, medium shot moving to a close-up front-side view, without inserting a capsule press the brew button directly so hot water flows out and rinses the lines, emphasizing the "no capsule needed" note, voiceover "The last step, the first rinse. Note that this step does not require a capsule; just press the brew button. Once the rinse is done, your coffee machine is ready to use."
```

---

### 8. 水果曲奇多模态商业广告

一张产品图与六段视频分别控制构图、动作、运镜、爆浆特效和动态文字。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 图片 + 视频 · 7 个参考素材 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 多模态参考 · 视频参考 |
| 创作技法 | 动作参考 · 产品一致性 · 硬切 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab2/group2/output.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab2/group2/output.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="水果曲奇多模态商业广告">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab2/group2/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
A bright, colorful commercial style with fruity cookies as the hero, in four flavors — strawberry, apple, grape, and orange; strawberry flavor reference @image1. The cookies and their matching fruits are arranged in a strongly ordered geometric array; the overall frame is clean, premium, and high-energy. It opens with the fruits orbiting rapidly around the central cookie to quickly establish visual focus — reference the composition of @video1 — cutting in on a strong musical beat. Then cookies of different flavors advance toward the lens along spiral paths, forming clear spatial depth — reference the motion and camera work of @video2 — switching colors and flavors on the beat with the background music. The array of cookies pans left and right with fast plane-to-plane cuts, strawberry, apple, grape, and orange flavors alternating as the frame jump-cuts quickly to the rhythm — reference the movement of @video3. The mid-section adds up-and-down panning; the neat cookie array rises and falls vertically like a machine — reference the movement of @video4 — highlighting the beauty of order and the richness of the product. In the climax a cookie is snapped in two and the moment enters slow motion as the fruity filling bursts open, crumbs scattering, the juicy sensation and grainy impact amplified — reference the explosion effect of @video5 — then quickly returns to the fast-paced edit. The ending brings in the English text "Fresh on Seedance, made for viral vision", entering word by word in quick succession with strong rhythmic text motion and a product freeze-frame — reference @video6 — the four cookie flavors lined up neatly with the fruits bouncing in sync for a final brand-forward close, the frame full of a young, energetic, delicious, shareable ad atmosphere.
```

---

### 9. 沙漠角蜥与西柚 3D 广告

单张角色参考图驱动喜剧 3D 广告，西柚汁最终将沙漠变成夏日海洋。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 品牌与营销 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 角色一致性 · 视觉特效 · 多镜头 |
| 规格 | 30s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group1/output.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group1/output.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="沙漠角蜥与西柚 3D 广告">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group1/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
A 3D animated commercial style, bright and translucent colors; the pulp and juice must feel intensely refreshing and impactful. The overall vibe is like a high-quality commercial animated short with a touch of exaggerated humor. The desert horned lizard character is cute, lively and expressive, reference @image1. The image texture references that soft natural light, delicate fuzz/skin texture, dreamy macro depth of field, and a realistic-yet-slightly-childlike feel from the reference image. 0-3s: a desert scorched by the blazing sun, the air shimmering with heat and the sand searing hot; a desert horned lizard lies on the scalding sand, tongue slightly out, eyes glazed, nearly dried out, swaying with every couple of steps as if about to "evaporate". 3-6s: it suddenly stops, its nose twitches, and looking down it spots a cool, plump, dew-covered grapefruit half-buried in the sand, glistening like a desert miracle; the lizard's eyes go wide in an instant. 6-8s: it pounces over, hugging the grapefruit tightly with both hands, pressing its whole face against the rind with a blissful "I'm finally alive" expression; the frame holds for 1 second, forming an exaggerated, funny memory beat. 8-11s: it looks up, opens its mouth and takes a big bite; the grapefruit rind splits open, the plump pulp shining with a translucent gloss, and the next moment the juice erupts like a tsunami. 11-16s: orange-pink, translucent, glistening grapefruit juice gushes out wildly, pouring down the dunes and rapidly flooding the entire desert; the dry yellow sand instantly turns into a cool, sparkling, fruit-scented summer sea, cacti, rocks and small dunes swallowed by the waves of juice, the lizard's expression turning from delight to terror. 16-20s: nearly drowned by the "grapefruit sea", it frantically clutches half a grapefruit like a life buoy and floats, poking its soaked head out looking dazed. 20-24s: cut to a white screen; the brand name and slogan appear dead-center: "Seedance Grapefruit — bite in for the pulp, what pours out is summer." The voiceover reads the whole line. 24-30s: cut back from white; the desert horned lizard is now lounging on the floating grapefruit, wearing tiny sunglasses and holding a cup with a straw, drifting leisurely on the "juice sea" on vacation, surrounded by floating orange pulp, little ice cubes, cool splashes and a clear blue sky; the mood shifts from "survival" to "vacation", and finally it leans back contentedly on the grapefruit as the camera pulls out and freezes on a refreshing, bright, playful summer frame.
```

---

### 10. 醉汉屋顶坠落黑色喜剧短片

单张角色参考图锁定主角，通过巨响与静默的硬切构成 30 秒赛博朋克黑色喜剧。

| 字段 | 信息 |
|---|---|
| 证据等级 | `官方来源` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 角色一致性 · 多镜头 · 硬切 · 声音设计 · 运镜控制 |
| 规格 | 30s · 16:9 |
| 发布者 | Volcengine Ark |

<a href="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group2/output.mp4">
  <img src="https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group2/output.mp4?x-tos-process=video/snapshot,t_0,f_jpg,w_1280,h_720,m_fast" width="720" alt="醉汉屋顶坠落黑色喜剧短片">
</a>

[观看成片](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group2/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词

```text
[Drunk Man's Rooftop Fright — falls off the edge — grabs a rope through the window — passes out on the spot | black-comedy short | about 30 seconds] One-line premise: a chubby, cute, drunk middle-aged man is eating a burger and drinking beer on the rooftop of a building; as he stands up and stretches he accidentally loses his footing and falls, in his panic grabs a lifesaving rope and immediately crashes through a window into an interior, is dazed and stunned for one second, then just lies down where he is and falls fast asleep. Reference image @image1 — a chubby, cute, drunk middle-aged man: round and stocky build with a big round beer belly, short in stature, movements loose, slow and wobbly from drinking; round face, double chin, drink-flushed cheeks and nose, eyes narrowed to slits with a bleary gaze, an untrimmed ring of short stubble, messy hair, a silly, cute, carefree expression; wearing a white tank-top undershirt stained with burger sauce hanging loosely over his round belly, old jeans, shuffling along in loose slippers, always clutching a half-eaten burger in his hand. There is only this one character in the whole film, a 100% match to the reference image. Overall look: a nighttime cyberpunk mega-city, a dense forest of glass-and-steel skyscrapers, neon signs (cyan / magenta / electric blue), holographic billboards, wet reflective ground, volumetric fog, distant flying-car light trails and drones. Real live-action texture, physical cinema lenses, no 3D rendering / game engine / anime feel. The camera mixes handheld with jib / drone; after the fall the camera plunges down with him as the building's exterior wall and the neon streak upward to convey speed, 24-35mm widescreen cinematic lens texture, 180-degree shutter motion blur. Sound design is the key to the black comedy: hard-cutting repeatedly between "a huge roar" and "total silence". Real gravity throughout. Storyboard (about 30 seconds): S1 (0-4s) opening chewing big close-up (with sound) the man's face fills the screen, chewing the burger in big bites, a satisfied drunken state; S2 (4-9s) pull to a wide shot, stretching -> losing footing and falling (with sound) he wobbles to his feet and stretches big, leans back, can't keep his balance, his foot slips and he tumbles backward over the edge of the rooftop, never letting go of the burger, with a panicked "Eh——!"; S3 (9-12s) cut to a startled facial close-up (a loud scream, huge roar) drunken eyes bulging round, double chin bunched up, mouth wide in a screaming "Ahh——!!", wind howling; S4 (12-16s) cut to a long shot at eye level (total silence) seen from the building across the way, a tiny white figure plummeting straight down from the high-rise, the neon city vast and indifferent, the total silence forming a black-comedy contrast with the huge roar a second earlier; S5 (16-21s) cut to a facial close-up (screaming) -> grabbing the rope, still screaming, hands flailing in the air, he suddenly grabs a lifesaving cable, the cable snapping taut and bending under his weight with a twang, the scream cutting off abruptly as he is jerked and swings out (a brief slow motion at the moment he grabs the rope); S6 (21-26s) cut to an interior angle (quiet) -> the glass shatters -> he crashes in, the interior first quiet with only the hum of the air conditioner, the next second the glass explosively bursts inward (a brief bullet time) as the drunk man, burger and all, smashes through the window, shards flying out radially, neon light streaming in, and he crashes heavily into the room onto the floor / sofa, broken glass clinking; S7 (26-30s) ending, a startled second -> falls asleep, the man sprawled spread-eagle on the floor, covered in broken glass, still clutching the burger, slowly opens his eyes, dazed, blank and startled for a full second, looking around as if thinking "where am I?", then the drunkenness takes over and, not caring at all, he smacks his lips, tucks the burger into his arms, rolls over, lies down right there and falls fast asleep, even snoring lightly, the camera pulls out and freezes, hard cut to black. Only on-set live sound, no music, no subtitles; the core is hard cuts repeatedly between "huge roar" and "silence".
```

---

### 11. 三分钟暴雨山寺写实武打电影

一条完整的三分钟动作电影提示词，让独行刀客在暴雨山寺迎战二十余名敌人，并严格控制连续性、空间逻辑和声音设计。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 角色一致性 · 多镜头 · 运镜控制 · 声音设计 |
| 规格 | 180s · 16:9 |
| 发布者 | 擎苍 (@baqiceloudezhu) |


[观看成片](https://x.com/baqiceloudezhu/status/2083105322919731519) · [原始来源](https://x.com/baqiceloudezhu/status/2083105322919731519)

#### 提示词

```text
生成一段完整连续的3分钟写实古装武打电影片段。横屏16:9，2.35:1电影宽银幕构图，24fps，4K电影质感，冷峻低饱和蓝灰色调，真实物理动作，凌厉但克制的写实武侠风格。动作设计强调力量、速度、重心、惯性和空间利用，不使用仙术、轻功飞行或夸张能量特效。

故事发生在暴雨深夜的一座废弃山寺。青石庭院积满雨水，屋檐不断滴水，破损灯笼在风中摇晃，暖黄色火光与冷蓝色月光形成强烈对比。男主约三十岁，黑发高束，穿深靛蓝色窄袖短袍、黑色长裤和旧皮护腕，身形精悍，神情冷静，右手握一把带有磨损痕迹的窄刃长刀。二十余名蒙面敌人穿统一黑色夜行衣，从山门、回廊和屋顶逐渐包围男主，分别使用短刀、长枪、铁棍和锁链。所有人物外形、服装、兵器、伤势和位置前后保持一致，敌人数量随着战斗逐渐减少，不得凭空增加。

0-15秒：暴雨中的山寺全景，镜头穿过密集雨幕缓慢下降，越过残破屋檐和摇晃灯笼，落到青石庭院中央。男主背对镜头独自站立，雨水顺着刀鞘不断滴落。二十余名黑衣敌人从四面回廊、山门和屋顶无声出现，形成层层包围。镜头贴近男主右手，他用拇指缓缓顶开刀镡，刀刃露出一线寒光。敌人首领在回廊阴影中低声说道：“拿下。”男主抬起眼睛，平静回答：“让开。”伴随低沉雷声，第一批敌人突然冲出。

15-30秒：四名持短刀敌人从正面和两侧同时夹击。镜头采用贴身手持跟拍，男主侧身避开第一刀，用刀鞘撞开第二人的手腕，反手拔刀格挡第三人的横斩，金属碰撞迸出短促火星。他不做多余动作，连续使用肩撞、肘击、扫腿和刀背重击，将三名敌人迅速击倒。第四名敌人从背后扑来，男主听到脚步声，低头避开刀锋，转身用刀柄击中对方面部，再借对方身体挡住迎面刺来的长枪。镜头绕男主半圈，其他敌人立刻收紧包围，没有停下来等待。

30-45秒：六名长枪敌人组成半圆枪阵，同时向男主逼近，枪尖不断封锁他的退路。男主没有正面硬拼，而是快速退向庭院狭窄石阶，引诱枪阵收缩。第一排长枪同时刺出时，他踩着湿滑石阶侧身滑下，刀锋由下向上连续斩断两根枪杆，随后抓住断裂枪杆向侧面拨打，令另外三支长枪互相碰撞。他踩上一尊倾斜的石狮，借高度越过低扫的枪杆，落下时以膝撞击倒一名枪手。镜头从低角度跟随落地动作，雨水被双脚猛烈溅开。

45-60秒：屋顶上的敌人突然跃下，前后夹击男主。镜头迅速仰拍，两道黑影穿过灯笼和雨幕落向庭院。男主翻身滚过地面，刀锋贴着敌人的靴底掠过，顺势来到回廊入口。他利用廊柱阻挡多人围攻，让敌人无法同时展开。两名敌人一左一右贴近，男主用刀背压住左侧短刀，抬腿踢中右侧敌人的膝弯，再借廊柱反弹转身，将左侧敌人撞进后方人群。一个灯笼被刀锋割断，从空中落下，在积水中熄灭，画面短暂陷入半明半暗。

60-75秒：战斗进入第一次高潮。剩余敌人分成前后两队，在回廊中高速追击男主。镜头采用侧面长距离跟拍，男主一边后退一边格挡连续刀击，刀锋、雨水和火星在画面中交错。他突然踢翻长凳，迫使前排敌人跳跃躲避，自己从长凳下方滑过，起身后连续击中两人的腰腹和手腕。另一名敌人从柱后偷袭，男主用左手抓住对方持刀手臂，将其带向廊柱，迫使刀锋嵌入木柱，再用肩膀将其撞倒。动作紧凑、真实、清晰，不出现无意义旋转。

75-90秒：山门外的弩手突然射击。弩箭穿过雨幕击碎回廊木窗，男主迅速掀起一张木桌作为盾牌。镜头紧贴木桌另一侧，数支弩箭接连穿透桌面，箭头距离男主面部只有几厘米。男主顶着木桌向前冲撞，将两名敌人压倒在台阶上，随后把木桌推向弩手方向，趁遮挡翻滚进入大殿。敌人紧随其后冲进殿内。最后一支弩箭擦过男主左肩，划破衣袖，留下明显但不过度血腥的伤口。从此刻开始，男主左臂活动受到轻微影响，呼吸逐渐沉重。

90-105秒：大殿内部空间狭窄，残破佛像和木柱形成复杂障碍。一个身材魁梧的敌人挥舞铁棍迎面砸下，男主横刀抵挡，却被巨大力量震退，长刀脱手滑到佛像台阶下。魁梧敌人连续挥棍横扫，男主俯身闪避，铁棍击碎木柱表面。男主贴近对方，让长兵器无法发挥，用掌根、肘击和膝撞连续攻击对方胸腹，然后抓住铁棍中段借力旋转，将魁梧敌人摔过肩膀，砸碎旁边长桌。男主没有时间拾刀，只能夺下一根断裂枪杆作为短棍迎敌。

105-120秒：四名敌人在大殿中同时围攻。男主使用断枪进行近身棍法，挡住两把短刀，利用枪杆两端分别打击敌人的手腕、喉前和膝盖。镜头在木柱之间快速横移，通过柱子遮挡完成自然转场。男主故意露出破绽，引诱两名敌人同时进攻，最后一刻侧身闪开，让二人的兵器互相卡住。他用断枪横扫二人腿部，再踩住掉落的短刀，将短刀踢到手中。另一名敌人从佛像上方扑下，男主举起短刀格挡，巨大的冲击让两人同时摔出殿门，重新落入暴雨庭院。

120-135秒：男主在积水中翻滚起身，敌人首领终于从回廊阴影中走出。首领身材高瘦，使用一把带锁链的弯刃，动作冷静而危险。剩余敌人退到四周封锁出口。首领甩动锁链，弯刃贴着地面划过，激起一道水浪。男主连续后退闪避，弯刃缠住他的短刀并猛然拉走。首领第二次甩出锁链，缠住男主脚踝，将他拖倒在湿滑地面。男主在被拖动过程中抓住一块破碎瓦片，割开缠绕脚踝的布带，翻身避开从上方劈落的弯刃。弯刃重重砸进青石地面，火星和雨水同时炸开。

135-150秒：三名剩余敌人趁男主倒地同时冲来。男主已经疲惫，左肩受伤，动作明显不再轻松。他故意保持半跪姿势，引诱第一人靠近，突然抓住对方手腕，将其带入首领再次甩来的锁链轨迹。锁链缠住敌人的兵器，造成短暂混乱。男主利用湿滑地面低身旋转扫腿，使另外两人失去平衡，再用刀鞘和拳肘连续击倒。最后一名敌人试图从背后刺击，男主在积水倒影中看见对方，头也不回地向后撞肘，随后转身用掌根将其击倒。庭院里只剩男主与首领相对而立。

150-165秒：最终决斗。雷声骤然炸响，首领抽回锁链弯刃，发动连续快速攻击。镜头在广角全景和刀锋特写之间切换：弯刃横扫、锁链回旋、男主侧闪、格挡、翻滚，每一次动作都清晰连贯。男主捡回落在庭院边缘的长刀，用刀身缠住锁链，却被首领猛力拉近。两人在极近距离展开拳肘搏斗，首领击中男主伤肩，男主痛苦后退，长刀再次险些脱手。首领高举弯刃完成最后一击时，画面短暂升格，男主没有后退，而是突然向前贴身进入锁链内圈，用护腕架开首领手臂，以刀柄重击其胸口。

165-180秒：恢复正常速度。首领踉跄后退仍想挥刀，男主踩住落在积水中的锁链，旋身夺下弯刃，再用长刀精准架在首领颈侧，动作突然停止。雨声重新变得清晰，首领手中的兵器缓缓掉落，跪倒在地。男主没有补刀，只是收刀入鞘。镜头缓慢拉远，庭院中敌人全部失去战斗能力，兵器散落在雨水里，没有血腥特写。男主扶着受伤的左肩穿过山门，破晓的微光从远处云层后出现。最后一个镜头停留在积水中的刀痕和逐渐平静的波纹上，远处传来男主渐行渐远的脚步声，画面自然淡出。

镜头要求：整段战斗保持明确的空间方向和人物位置，使用大远景交代战场，中近景呈现攻防动作，适量使用贴身手持跟拍、低角度跟拍、环绕移动、遮挡转场和关键动作升格；不要频繁无意义快切，不要让镜头晃动到看不清动作。敌人必须采取包围、夹击、枪阵、远程掩护和多人协同，不能排队等待男主逐个攻击。男主通过地形、廊柱、石阶、长凳、木桌和敌人之间的位置关系化解人数劣势。

声音设计：全程保留真实暴雨声、雷声、急促脚步声、衣料摩擦声、呼吸声、刀剑碰撞声、木材碎裂声和兵器落地声。配乐以前半段低沉鼓点和弦乐持续积累，中段加入快速鼓点，最终决斗时音乐达到高潮；首领跪倒后音乐立刻停止，只保留雨声和脚步声。

禁止出现：仙术、飞行、能量波、武器发光、夸张爆炸、血腥肢解、现代物品、字幕、文字、LOGO和水印；禁止人物脸部突变、服装变化、额外肢体、兵器凭空出现或消失、敌人数量突然增加、同一个敌人重复出现、动作穿模、无重力漂浮、连续无意义空翻以及男主毫发无伤。整段必须像一场真正拍摄完成、叙事清楚、动作连贯、逐步升级的3分钟电影级武打戏。
```

---

### 12. 连续镜头街头时装变装

一条 9:16 连续跟拍通过甩发、反射、遮挡和动作，让同一位女性在校服、洛丽塔、街头、汉服、未来和舞台造型间无缝切换。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 角色一致性 · 运镜控制 · 视觉特效 |
| 规格 | 28s · 9:16 |
| 发布者 | BubbleBrain (@BubbleBrain) |


[观看成片](https://x.com/BubbleBrain/status/2083103619260514423) · [原始来源](https://x.com/BubbleBrain/status/2083103619260514423)

#### 提示词

```text
30 seconds, 9:16 vertical format, viral street transformation short-video style.

Real cinematic live-action footage, filmed as one continuous dynamic tracking shot.

The protagonist is a young woman who remains the exact same person throughout the entire video, with consistent facial features, hairstyle, body proportions, and identity.

She walks alone through a modern city street, while the camera continuously moves backward in front of her, capturing her confident natural walk, outfit transformations, and evolving aura.

The overall style combines a high-fashion music video aesthetic with the feel of a viral street-style transformation video.

Use realistic natural lighting, authentic urban environments, subtle wind movement in her hair and clothing, and smooth natural motion.

Each transformation is triggered by the character’s movements, avoiding hard cuts or obvious flashes.

The outfit changes happen seamlessly through actions such as turning around, flipping her hair, passing behind objects, raising her hand, looking back, or using environmental occlusion.

0-5s | First Encounter: School Girl

A modern city street in the early morning.

The girl wears a classic school uniform and walks toward the camera from a distance.

She carries a backpack, walks with a light and youthful rhythm, slightly lowers her head with a gentle smile, then looks up directly at the camera.

Sunlight shines through gaps between buildings.

Her skirt and tie move naturally with each step.

The camera slowly pushes closer, creating the feeling of the opening scene of a coming-of-age movie.

5-10s | Sweet Transformation: Lolita & Street Sport Style

The girl continues walking forward.

She gently flips her head, and her long hair sweeps across the camera lens.

During the brief moment of occlusion, her outfit seamlessly transforms.

When she appears again, she is wearing an elegant Lolita-inspired outfit.

The skirt flows and spins naturally with her steps.

Then she walks past a glass storefront reflection.

She raises her hand to adjust her hair, and in the next moment, her outfit transforms into a trendy sporty streetwear look.

Her movements become lighter and more energetic, like a character walking through a high-fashion street editorial.

10-16s | Eastern Elegance & Futuristic Transformation

The girl walks past a wall or a city pillar.

As her body passes behind the obstacle, her outfit naturally changes into an elegant traditional Eastern hanfu-inspired dress.

She slows her pace.

The long sleeves flow gently in the wind, making it feel as if she has stepped from a modern city into an ancient painting.

Then she reaches out and touches a nearby city light.

As the light passes across her body, her outfit transforms into a futuristic sweet-cool fashion style.

Neon reflections appear on her face and clothing.

Her presence becomes more mature and charismatic.

16-23s | Aura Upgrade: Idol Stage Energy

The girl keeps walking forward.

She looks down and adjusts her collar.

When she raises her head again, her outfit transforms into a K-pop performance stage costume.

She is no longer just a young girl — she feels like a star who has just stepped off the stage.

While walking, she performs a simple dance movement, raising her hand as if holding a microphone, and gives the camera a confident expression.

Then her outerwear transforms into a premium street-style denim look.

She zips up her jacket, slightly raises her chin, and reaches the peak of her confidence and presence.

23-30s | Final Return: Still the Same Girl

The music gradually slows down.

The girl arrives at the center of the city street.

She turns around, her hair flowing in the wind.

After being briefly blocked by a passing pedestrian, she seamlessly transforms back into the original school uniform.

But this time, she is no longer the shy girl from the beginning.

She confidently walks toward the camera.

Finally, she stops, smiles softly, and looks directly into the lens.

The scene freezes.

Text appears on screen: "Every version of me was always here."
```

---

### 13. 第一人称牵手穿越六个世界

一位女性牵着摄影者，以不间断的第一人称手持镜头穿过六个硬边空间入口，从派对一路加速至寂静山巅。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 一镜到底 · 运镜控制 · 角色一致性 · 视觉特效 · 声音设计 |
| 规格 | 30s · 2.39:1 |
| 发布者 | Adil Alimzhanov (@adilinthewild) |


[观看成片](https://x.com/adilinthewild/status/2083120787737972851) · [原始来源](https://x.com/adilinthewild/status/2083120787737972851)

#### 提示词

```text
image_1 is the first frame. The woman from image_1 — straight black hair, white short-sleeve collared shirt, navy pleated skirt, brown belt, braided bracelet — is holding the camera operator's hand and pulling him forward through the world. Camera is first-person POV, loose handheld, her hand visible in the lower right of frame gripping the operator's wrist, pulling. She walks ahead, glancing back over her shoulder occasionally. She walks, then runs, then sprints as the scale of the world gets bigger and more overwhelming.

Every few seconds a vertical floor-to-ceiling insert appears ahead floating in open air — no border, no frame, no door, no arch, just a hard rectangular cut in space where one world ends and another begins — and she pulls him straight through it into the next world. Six locations total, one continuous uncut shot.

Location 1 — 1970s apartment party interior from image_1: warm amber light, sequin curtain, strangers in background, she turns and pulls him out of the room forward.

Location 2 — Petra, Jordan, midday: the narrow Siq canyon walls rising hundreds of meters on both sides, sunlight cutting down in a single strip, she runs pulling him through the corridor of ancient rock.

Location 3 — Shibuya crossing, Tokyo, rush hour: hundreds of people crossing in every direction, she weaves pulling him through the crowd, neon signs and screens overhead in daylight.

Location 4 — Sahara desert at golden hour: vast open dunes, no horizon line visible, wind moving the sand, she runs pulling him up a dune face, her skirt and hair flying.

Location 5 — Venice, Italy, acqua alta flooding: St Mark's Square underwater, ankle-deep reflective water, pigeons displaced onto benches, she splashes forward pulling him across the flooded piazza.

Location 6 — top of a mountain at dawn, clouds below: nothing ahead but open sky and light. She slows to a walk. Then stops. Still holding his hand. She turns and looks directly into the camera — directly at him — for the first time. Silence.

Sound: party ambience fading, then canyon echo of running footsteps, then Tokyo crowd noise and distant traffic, then open desert wind, then Venice water splash and bells, then pure silence and wind at altitude. Her breathing gets heavier location by location.

Style: photorealistic cinematic, 2.39:1 Cinemascope, warm film grain consistent across all six spaces, first-person handheld POV, one unbroken take from start to finish.
```

---

### 14. 暗黑幻想摩托追逐

五张视觉参考锁定角色与载具，通过十二个镜头完成巨型城市追逐、导弹爆炸、翻滚落地和魔法符文反击。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 5 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 时间轴分镜 · 多镜头 · 角色一致性 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | RafaSimon (@rafalors) |


[观看成片](https://x.com/rafalors/status/2083119527848751220) · [原始来源](https://x.com/rafalors/status/2083119527848751220) · [提示词来源](https://x.com/rafalors/status/2083119532202418489)

#### 提示词

```text
Use the provided references consistently across the full 30 seconds: Image 1 is the first faceless black-armored chaser rider; Image 2 is Kestrel's charcoal courier motorcycle with amber light strip; Image 3 is the dark chaser motorcycle with red taillight and no amber; Image 4 is Kestrel, the broad-shouldered slicked-back male hero in a single-shouldered charcoal jacket with an amber sash; Image 5 is the second faceless black-armored chaser variant. Kestrel stays in front and the two dark pursuit riders stay behind or beside him as visual pressure.

Create an original high-speed dark-fantasy motorcycle pursuit scene, 30 seconds, very fast-paced, readable, designed as an edit-friendly trailer cut with rapid cinematic shots. No background music, no soundtrack music, no subtitles, no text, no logos.

Setting: elevated highway through a dense dystopian megacity, monolithic concrete arcologies, industrial haze, flat overcast daylight, no rain, imposing and orderly rather than chaotic. Empty roadway, brutal concrete barriers, smoke, sparks, glowing energy trails, and stylized road-impact flashes.

FAST 12-SHOT STRUCTURE:

SHOT 1, 0:00–0:02 — Cold open. A bright energy flare streaks past the camera toward the highway, motion-blurred, then blooms behind Kestrel's bike in a dramatic orange-black shockwave. Camera shakes. Kestrel is already in front, escaping.

SHOT 2, 0:02–0:04 — High aerial reveal. Three motorcycles tear along the elevated highway far below, Kestrel's amber light strip visible at the front, two matte-black pursuit bikes behind in staggered formation. Camera dive accelerates downward.

SHOT 3, 0:04–0:06 — Extreme low road-level shot. The hero bike blasts over the lens, amber strip streaking; two dark pursuit bikes thunder after him with red taillights and black armor. Heavy motion blur, road grit, heat shimmer.

SHOT 4, 0:06–0:08 — Close-up on Kestrel. Slicked-back wet ash-grey hair, sharp masculine face, amber sash whipping violently, gloved hand twisting the throttle. His eyes stay calm while light flashes bloom behind him.

SHOT 5, 0:08–0:11 — Rear chase cam. The left pursuit rider closes in tight and releases a bright warning energy streak. Kestrel drops his shoulder and leans the bike underneath it; the streak passes his shoulder and showers sparks from the concrete barrier.

SHOT 6, 0:11–0:14 — Side-by-side pressure. The right pursuit rider surges up beside Kestrel and forces him toward the lane edge. Kestrel kicks the side of his bike frame and snaps the bike sideways in a controlled drift, narrowly avoiding contact while staying ahead. The camera whip-pans with the movement.

SHOT 7, 0:14–0:17 — Front tracking angle looking backward. A heavier guided light trail launches from behind, weaving between the bikes with a bright trail. Kestrel cuts through a narrow gap between broken road plates. The guided light hits the road ahead and erupts into concrete dust, debris mist, and black smoke.

SHOT 8, 0:17–0:20 — Hero stunt beat. Kestrel and the charcoal motorcycle punch through the blast wash. The bike performs one clean slow-motion barrel-roll through smoke and flying road dust, amber strip glowing, then lands hard with sparks and instantly accelerates. Make the rotation clean and physically readable.

SHOT 9, 0:20–0:22 — Pursuit rider close-ups. Rapid cuts: faceless black mirrored visor reflecting Kestrel's amber light; armored gauntlet gripping throttle; red taillight streak; tire sliding through sparks. The two pursuit riders regroup behind him, still closing.

SHOT 10, 0:22–0:25 — Power reveal. Low side profile at extreme speed. Kestrel rises upright on the moving bike, balanced and confident, turning backward toward the two riders. Four compact golden magical sigils bloom around his shoulders and hands, spinning like hot geometric halos. The road and city blur around him.

SHOT 11, 0:25–0:28 — Climax escape. The golden sigils fire concentrated beams backward down the highway. The beams carve glowing lines through the haze and strike the road around the pursuing bikes, creating a wall of golden-orange light, smoke, sparks, and shockwave energy. The two pursuit riders disappear into the smoke and fall far behind, ending the chase. Keep it stylized, non-graphic, cinematic, and readable.

SHOT 12, 0:28–0:30 — Final hero exit. Medium rear tracking beside Kestrel. He drops back into the seat, leans low over the charcoal bike, gives a small confident smirk, then rockets away down the elevated highway. Smoke columns recede behind him. End with forward acceleration, no title card.

Visual style: original premium dark-fantasy action cinema, high quality Unreal Engine cinematic render, modern high-end fantasy game visual quality, not copying any existing franchise characters, armor, weapons, symbols, or scenes. Anamorphic lens, speed-ramped action, rapid cinematic cuts, whip-pan transitions, camera shake from road impacts, heavy motion blur, atmospheric haze, film grain, cinematic color grade, strong silhouettes, consistent character and vehicle design, dynamic but readable action, no rain.

Audio instruction: no background music, no soundtrack music. If audio is generated, use only sparse cinematic sound effects such as engine roars, wind rush, energy pulses, road-impact booms, tire skids, debris impacts, and magical beam crackle.
```

---

### 15. 废墟都市电影级动漫决斗

一场 30 秒高规格动漫决斗，以作画级动作、速度渐变、屋顶坍塌、能量碰撞和最终静默一击持续升级。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 匹配剪辑 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | OscarAI (@Artedeingenio) |


[观看成片](https://x.com/Artedeingenio/status/2083119776058970157) · [原始来源](https://x.com/Artedeingenio/status/2083119776058970157) · [提示词来源](https://x.com/Artedeingenio/status/2083119779208925226)

#### 提示词

```text
30-second cinematic anime action sequence, breathtaking high-budget anime film, ultra-dynamic editing, fluid sakuga animation, spectacular fight choreography, seamless kinetic camera movement, aggressive speed ramps, rapid match cuts, whip pans, rotating camera moves, dramatic perspective shifts, cinematic lens distortion, volumetric lighting, dust, sparks, debris, explosive impacts, emotionally intense, premium animation quality, no dialogue.

0–5s

A ruined futuristic city stands silent beneath storm clouds. Two lone warriors face each other hundreds of meters apart. The camera rapidly alternates between extreme wide shots, close-ups of determined eyes, hands tightening around weapons, feet scraping broken concrete, fluttering coats and drifting dust. A heartbeat. Absolute silence.

5–10s

Both fighters explode forward simultaneously. The camera races alongside them before instantly switching to overhead drone views, impossible low angles beneath their feet, first-person perspectives, and ultra-fast lateral tracking shots. Shockwaves ripple across the ground as they collide. The first impact sends debris flying in every direction.

10–15s

An overwhelming combat montage. Lightning-fast sword strikes. Acrobatic flips. Mid-air clashes. Wall running. Buildings collapse around them. The camera never stays still: continuous orbit shots, rapid whip pans, rotating 360-degree movements, crash zooms, Dutch angles, seamless transitions through clouds of dust and sparks. Constant speed ramps amplify every decisive strike.

15–20s

The battle escalates. Energy erupts with every collision. One fighter launches the other through multiple rooftops. The camera follows in a single uninterrupted shot before cutting to an extreme close-up as both instantly reappear, colliding again in mid-air. Fragments of glass, steel and concrete freeze momentarily before exploding outward.

20–25s

The choreography becomes almost impossible to follow. Dozens of rapid exchanges. The camera jumps between ultra-wide cinematic compositions, intimate facial close-ups, spinning aerial shots, slow-motion impacts, handheld ground-level tracking, and impossible anime-style perspective shifts. Every cut increases the intensity. The music reaches its peak.

25–30s

Everything suddenly slows. The two warriors cross paths one final time. Silence. A single decisive strike. The camera follows the blade in extreme slow motion before rapidly pulling back into an enormous aerial shot revealing the devastated city beneath dark skies. Dust slowly settles. Hard cut to black.

Sound design: colossal cinematic orchestra blended with modern hybrid percussion, taiko drums, distorted synth pulses, thunderous impacts, rushing wind, metallic blade clashes, explosive shockwaves, collapsing buildings, debris showers, aggressive cinematic whooshes, deep bass hits, brief silence before the final strike, overwhelming orchestral finale with massive surround sound.
```

---

### 16. 发光全球网络品牌片

一支从太空俯瞰地球的品牌片，以优雅的蓝金色连接路径包裹全球，并避开服务器、代码和区块链的陈词滥调。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 文生视频 |
| 创作技法 | 运镜控制 · 视觉特效 |
| 规格 | 20s · 16:9 |
| 发布者 | OpenGPU Network (@openGPUnetwork) |


[观看成片](https://x.com/openGPUnetwork/status/2083148415412879447) · [原始来源](https://x.com/openGPUnetwork/status/2083148415412879447)

#### 提示词

```text
Create a cinematic video showing a beautiful global network of OpenGPU connections spreading across the world. Start with Earth from space at night. Elegant streams of light connect every continent. Soft glowing nodes and flowing blue-gold paths. Premium, clean, alive. No code, no servers, no blockchain clichés. End with Earth fully wrapped in a luminous mesh.
```

---

### 17. 播客访谈变成橄榄球混战

一场西班牙语播客访谈从长发笑料升级为橄榄球队混战，最后以一声命令和全员化作羽毛收束。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 + 音频 · 3 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多模态参考 · 音频驱动 |
| 创作技法 | 角色一致性 · 口型同步 · 多镜头 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Nabilidoso (@Nabilidosoo) |


[观看成片](https://x.com/Nabilidosoo/status/2083148007843774669) · [原始来源](https://x.com/Nabilidosoo/status/2083148007843774669)

#### 提示词

```text
El entrevistador esta en su podcast entrevistando a @8993a3ce-444a-414b-9800-6798a9c997eb y le pregunta con su voz @0949c9e6-24ae-4895-b567-94aa844e0150: " Buenas mi gente, tenemos un nuevo modelo de IA y hemos traido a un experto en ello, Nabil cuentanos" y entonces el invitado dice con su voz @8993a3ce-444a-414b-9800-6798a9c997eb: "Buenas jordi, la verdad que es una cosa de locos. Gracias a este modelo puedo hacer cosas como esta" y se levanta chasquea los dedos y le sale pelo. Se sienta y dice con su voz @7ac71528-ba91-42ec-92e1-89875ed6e49f: "inténtalo tú" y jordi se levanta y chasquea los dedos y entra un equipo de rugby en el podcast y nabil y jordi empiezan a empujarse con el equipo entero como en una pelea. De repente la camara enfoca a nabil en medio de la pelea y este con su voz @7ac71528-ba91-42ec-92e1-89875ed6e49fdice :" Esto solo es posible con el nuevo modelo de seedance, que loco!" y le da un empujon al que tiene encima forcejeando. De repente jordi en medio de la pelea grita con su voz @0949c9e6-24ae-4895-b567-94aa844e0150: "STOP" y todos los de rugby se convierten en plumas que caen al suelo. Jordi y Nabil se miran y les entra un ataque de risa
```

---

### 18. 三语茶水间蛋糕谜案

三个造型固定的卡通角色在 30 秒蛋糕失窃喜剧中分别使用英语、西班牙语和法语对话，并精确控制口型与声音节拍。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 多语言音频 · 口型同步 · 角色一致性 · 运镜控制 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Jay Nwabueze (@jaynwabueze) |


[观看成片](https://x.com/jaynwabueze/status/2083166430522921048) · [原始来源](https://x.com/jaynwabueze/status/2083166430522921048) · [提示词来源](https://x.com/jaynwabueze/status/2083166434880839733)

#### 提示词

```text
High-quality 3D animated cartoon, stylized modern family-animation film look, oversized heads, huge expressive eyes, exaggerated proportions, smooth rounded clay-like 3D surfaces, subsurface scattering skin, vibrant saturated colors, warm cinematic animated lighting.

NOT realistic, NOT live action. 30 seconds, snappy comedic pacing.

LOCATION: a bright office break room, cheerful cartoon kitchen counter, a small round table, an open fridge door behind them. On the table sits a white plate holding nothing but crumbs and a smear of chocolate frosting.

CHARACTERS (locked, no drift):

MAYA — woman, oversized round head, curly dark hair, green blazer, huge suspicious eyes, arms folded. Speaks English.

DIEGO — tall skinny man, light blue shirt, enormous eyebrows, very dramatic hand gestures. Speaks Spanish.

LUC — short round man, grey knit sweater, sweet innocent face, a tiny smear of chocolate frosting on his cheek that he never notices. Speaks French.

COLOR 60:30:10 — 60% bright clean office whites and warm wood / 30% soft mint-green wall / 10% accent of Maya's green blazer and the chocolate frosting.

0–4s: wide shot. All three stand around the table staring down at the empty plate in dramatic silence. Slow push-in on the crumbs like a crime scene. Tense low strings.

4–8s: MAYA leans in, eyes narrowing, and says in English: "Okay. Which one of you ate the last slice?" Cut to her suspicious glare.

8–13s: DIEGO throws both hands up theatrically, offended, and says in Spanish: "¿Yo? ¡Yo ni siquiera como azúcar!" He clutches his chest, scandalised.

13–18s: LUC blinks innocently, shrugs with total sincerity, and says in French: "Moi non plus. Je suis complètement innocent." The frosting is clearly visible on his cheek. Diego slowly turns and stares at him.

18–23s: MAYA points at Luc's face without a word. Beat of silence. LUC touches his cheek, looks at his finger, and freezes, eyes going enormous.

23–27s: LUC, quietly, in French: "...Bon. J'ai peut-être goûté un petit morceau." Maya and Diego both explode in overlapping outrage.

27–30s: Luc slowly licks the frosting off his finger anyway, completely unrepentant, as the other two throw their arms up. Freeze on his guilty little smile.

CAMERA: slow push-in on the plate, then natural shot-reverse-shot coverage cutting to whoever speaks, a wide two-shot on the accusation, tight close-up on Luc's frozen face, wide comedic final shot on all three.

AUDIO: tense low comedic strings during the standoff, a dramatic sting on Maya's question, cartoon gasp from Diego, dead silence during the pointing beat, overlapping outraged shouting at the end, one cheeky little xylophone note on the final lick. Each character's lips match their own line and language precisely. No background music over the dialogue.

FORBIDDEN: no auto-generated subtitles, no background music bed, no voice crossing to the wrong character, no design drift, no realistic or live-action rendering, no named studio references, no readable text or logos.
```

---

### 19. 暮色乡野心碎对谈

两个参考角色在克制的乡野分手戏中完成触碰、首饰连续性、走位、对白和环境声的精细调度。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 2 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 多镜头 · 角色一致性 · 运镜控制 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | taruma sakti (@tarumainfo) |


[观看成片](https://x.com/tarumainfo/status/2083165453153931689) · [原始来源](https://x.com/tarumainfo/status/2083165453153931689) · [提示词来源](https://dreamina.capcut.com/ai-tool/work-detail/7668614240588074260?workDetailType=AiVideo&itemType=53&isShared=1)

#### 提示词

```text
Create a melancholic, high-drama cinematic scene starring ROBERT as Robert and SARAH as Sarah experiencing a quiet, devastating emotional heartbreak. Maintain spatial logic during physical touch and rejection. Track the precise location of the hands, wedding bands, and Sarah's pendant across cuts.

[AESTHETIC]
Medium: 35mm film, soft organic grain, naturalistic texture
Palette: Pale amber horizon, cold blue-grey sky, dried ochre grass, sage green, dark navy
Lighting: Late dusk, natural low-contrast ambient light with fading horizon warmth
Location: Vast English countryside wildflower field, dry stalks, dead seed heads
Wardrobe (Robert): White linen shirt, dark olive wool jacket, tan chinos, leather bracelet on right wrist, wedding band on left hand
Wardrobe (Sarah): Navy anorak, muted sage-green dress, gold pendant necklace, wedding band on left hand
Sound: Foley and ambient only. No music. Wind through dry grass, crunching footsteps, raw dialogue

[OPENING]
WS, TRACKING BACKWARD head-on at their walking pace. The low horizon sits in the upper third of the frame under a cooling sky. Sarah is frame-left, arms folded tight across her chest, eyes forward. Robert is frame-right, half a step behind her, gazing intensely at her profile.

[EXECUTION]
[CAM] WS, TRACKING BACKWARD -> [ACT] Robert glances down at his own hand, then looks back at Sarah. Wind blows hair across Sarah's cheek; she ignores it -> [ENV] Fading amber light on the dry weeds, constant wind hum.

[CAM] MCU, LOCKOFF, eye level on Sarah's profile from her left -> [ACT] Sarah keeps her gaze locked forward, her chin lifting slightly as she speaks -> [AUDIO] Sarah: "When did you find out." -> [ENV] Wind rustling.

[CAM] MCU, HANDHELD, OTS from behind Robert's left shoulder -> [ACT] Robert reaches his right hand across to touch Sarah's left arm sleeve. Sarah instantly pulls her arm away without breaking stride, opening a physical gap. Robert's hand hangs in the empty air -> [AUDIO] Robert: "Sarah, can we just—" -> Sarah: "I asked you when."

[CAM] MCU, LOCKOFF, slight low angle, three-quarter view of Robert -> [ACT] Robert drops his hand back to his side, letting out a long, visible exhale through his nose. His eyes shift to the right, jaw tightening -> [AUDIO] Robert: "...February. The week before Venice."

[CAM] WS, STEADICAM SIDE-TRACKING -> [ACT] Sarah now ahead of Robert. Her arms unfold and her right hand presses flat against the gold pendant at her collarbone. Her stride slows down, her weight hesitating on her next step -> [AUDIO] Footsteps crunching slower on dry soil

[CAM] MCU, eye level on Sarah -> [ACT] Sarah abruptly plants her left foot and pivots her body right to face Robert head-on, eyes locking onto him. Robert steps into the right edge of the frame, pulling up inches from her face -> [AUDIO] Sarah: "(sigh) ... You held my hand, on every bridge in that city."

[CAM] MS, HANDHELD, profile view, Robert Frame-Right, Sarah Frame-Left -> [ACT] Sarah's arms hang at her sides, her right hand making a sharp flicking gesture as she speaks. Robert steps half a pace forward, leaning in desperately -> [AUDIO] Sarah: "You laughed at that waiter who spilled the wine." -> Robert: "Because I meant all of it—"

[CAM] MCU, eye level, on Sarah -> [ACT] Sarah's eyes fill with tears, her lower lip trembling as her voice drops to a raw, quiet tone -> [AUDIO] Sarah: "Every day... EVERY DAY! you didn't tell me was a day you let me live in a world that doesn't exist." -> [ENV] Cold howling wind.

[CAM] MCU, OTS HANDHELD, over Sarah's left shoulder looking at Robert -> [ACT] Robert's mouth parts, jaw working silently as he searches her eyes. Sarah slowly drops her chin, breaking eye contact and turning away -> [AUDIO] Breath catching, ambient wind.

[CAM] WS, perpendicular to their path -> [ACT] Robert remains frozen center-frame. Sarah walks past him, she continues walking right-to-left, increasing the physical distance -> [AUDIO] Wind rustling, footsteps fading
```

---

### 20. 午夜清算

两个参考角色在雨夜空中连廊展开企业惊悚对峙，通过严格走位、道具连续性和动作匹配剪辑维持叙事逻辑。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 2 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 多镜头 · 匹配剪辑 · 角色一致性 · 运镜控制 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | taruma sakti (@tarumainfo) |


[观看成片](https://dreamina.capcut.com/ai-tool/work-detail/7668644297599749397?workDetailType=AiVideo&itemType=53&isShared=1) · [原始来源](https://x.com/tarumainfo/status/2083181384009662530) · [提示词来源](https://dreamina.capcut.com/ai-tool/work-detail/7668644297599749397?workDetailType=AiVideo&itemType=53&isShared=1)

#### 提示词

```text
Create a tense corporate drama scene featuring ARTHUR as ARTHUR, a disgraced financial strategist, and ROBERT as ROBERT, a cold senior partner, confronting each other on a rain-drenched skyscraper skybridge late at night.

[LOGIC]
Ensure rigid spatial continuity across the narrow glass skybridge walkway. Maintain screen direction with Arthur moving backward on frame-left and Robert advancing relentlessly along frame-right on a strict 180-degree axis. Preserve prop states: the wet audit file remains crumpled in Arthur's right hand once gripped, and Robert's silver briefcase stays locked in his left hand. Ensure match-on-action cuts between shots, matching head turns, heavy breathing, and physical proximity seamlessly.

[AESTHETIC]
Medium: 35mm anamorphic film style, cold atmospheric corporate thriller
Palette: Steel blue, obsidian black, cold cyan, neon amber reflections
Lighting: High-contrast chiaroscuro, wet glass reflections, distant sodium city lights
Location: High-altitude glass skybridge, structural steel trusses, rain-streaked curtain walls
Wardrobe: Arthur wears a dark charcoal trench coat over a wrinkled cream dress shirt without a tie; Robert wears a double-breasted graphite wool suit with a burgundy silk tie and a sleek titanium audio band on his right temple
Audio: Diegetic sound only; ambient rain hitting glass, muffled wind, echoing shoe leather, rhythmic HVAC hum, suppressed vocal rasps, no music

[OPENING]
Medium wide tracking shot along the glass skybridge corridor. Frame-left, Arthur steps backward in a hurried posture, holding a wet document stack in his right hand. Frame-right, Robert walks forward with steady momentum, holding a silver briefcase in his left hand. Rain streams down the exterior curtain wall, casting blue reflections across the polished floor.

[EXECUTION]
[CAM 01] MS, tracking backward -> [ACT] Arthur shoves wet papers against Robert's chest aggressively -> [AUDIO] ARTHUR: (gasping) "...and my signature is right on the ledger!" -> [ACT] Robert brushes Arthur's arm away cleanly.

[CAM 01] -> [ACT] Robert maintains his forward stride calmly -> [AUDIO] ROBERT: (scoffing) "...you signed those authorization forms willingly, Arthur." -> [ENV] Raindrops strike the exterior glass loudly.

[CAM 01] -> [ACT] Arthur steps backward rapidly while pointing a trembling finger -> [AUDIO] ARTHUR: (snarls) "...because you swore it was routine audit compliance!" -> [ACT] Arthur stumbles slightly on the sleek floor.

[CAM 01] -> [ACT] Robert steps around Arthur without breaking stride -> [AUDIO] ROBERT: (cold sigh) "...innocence is a luxury for junior associates." -> [ACT] Robert shifts his silver briefcase to his outer hip.

[CAM 02] MCU, OTS on Robert -> [ACT] Arthur pivots violently to block Robert's path -> [AUDIO] ARTHUR: (choking back tears) "...the board planned this throwaway sacrifice months ago!" -> [ACT] Arthur's chest heaves heavily.

[CAM 02] -> [ACT] Robert stops briefly, leaning in close -> [AUDIO] ROBERT: (hissing whisper) "...someone had to take the fall for the shortfall." -> [ACT] Robert narrows his eyes with cold detachment.

[CAM 02] -> [ACT] Arthur grabs Robert's suit lapel frantically -> [AUDIO] ARTHUR: (desperate rasp) "...you built my whole career just to destroy it!" -> [ACT] Robert grips Arthur's wrist firmly.

[CAM 02] -> [ACT] Robert pries Arthur's hand off his lapel cold-bloodedly -> [AUDIO] ROBERT: (disdainful exhale) "...I built an asset, and I liquidated it." -> [ENV] A distant lightning flash illuminates the glass ceiling.

[CAM 03] WS, low-angle static -> [ACT] Robert steps past Arthur briskly into the dark corridor -> [AUDIO] ARTHUR (O.S.): (gutted groan) "...look at me when you kill my life!" -> [ACT] Arthur freezes completely in mid-track.

[CAM 03] -> [ACT] Robert continues walking away without turning his head -> [AUDIO] ROBERT: (smoothly) "...clear your desk before security arrives at midnight." -> [ACT] Robert's footsteps echo rhythmically down the hall.

[CAM 03] -> [ACT] Arthur slowly crumples the wet papers tightly inside his right fist -> [AUDIO] ARTHUR: (trembling exhale) "...you rot in hell, Robert." -> [ACT] The paper crushes into a dense wet ball.

[CAM 03] -> [ACT] Arthur stands alone in the center of the vast empty skybridge -> [AUDIO] ROBERT (O.S.): (faint chuckle) "...goodnight, Arthur." -> [ENV] Water drips steadily from the steel ceiling girders.
```

---

### 21. 高速 FPV 一镜到底穿越

同一女主角在 30 秒竖屏一镜到底中高速穿越十三个世界，以具体物体作为无缝传送口，并让尾帧重新接回开场眼睛。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 匹配剪辑 · 角色一致性 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 30s · 9:16 |
| 发布者 | John (@johnAGI168) |


[观看成片](https://x.com/johnAGI168/status/2083178644130640005) · [原始来源](https://x.com/johnAGI168/status/2083178644130640005)

#### 提示词

```text
【风格】高速FPV一镜到底穿越（Hyperspeed FPV One-Take Portal Travel），虚幻引擎5写实渲染，8K，运动模糊拉满，每次穿越用"冲进物体/被吸入"做无缝转场，禁止黑屏硬切，竖屏9:16

【时长】30秒

【角色】同一位亚洲女性（每个世界换形态换装，但脸100%锁定，观众能一眼认出是同一个人）

【核心机制】镜头是一颗永不停下的高速飞行体，全程向前冲，每约2秒穿过一个"传送口"(瞳孔/水面/火焰/裂缝/门)进入下一个截然不同的世界，一镜到底不断

[00:00-00:01] 怼脸极特写：她的眼睛猛地睁开，镜头急速推入瞳孔，被吸进黑洞般的瞳孔深处。

[00:01-00:03] 冲出瞳孔→热带雨林瀑布，她抓着藤蔓从瀑布后荡出，水花糊镜头。

[00:03-00:05] 穿过水花→赛博朋克霓虹雨夜，她穿发光机甲踩在飞行摩托上贴脸掠过镜头。

[00:05-00:07] 冲进一块霓虹广告牌→深海，她一身鲛人鳞尾与巨鲸并肩下潜，气泡upward飞过。

[00:07-00:09] 钻进鲸鱼喷出的气柱→金色沙漠风暴，她骑改装越野车碾过沙丘腾空。

[00:09-00:11] 冲进扬起的沙墙→零重力空间站，她太空服漂浮翻转，地球在她背后转。

[00:11-00:13] 钻进舷窗反光→古代宫殿，她红衣长袖凌空甩袖起舞，红绸缠满整个画面。

[00:13-00:15] 冲进红绸漩涡→活火山口，她跃过喷发的熔岩，火星拖成流星线。

[00:15-00:17] 穿过火星→极光雪原，她策一匹白马狂奔，雪雾在马蹄下炸开。

[00:17-00:19] 钻进雪雾→蒸汽朋克钟楼内部，齿轮咬合，她踩着转动的巨齿轮跳跃。

[00:19-00:21] 冲进钟表齿轮缝→末日废土，她持长刀在沙暴中回身劈开镜头前的什么。

[00:21-00:23] 刀光劈开画面→水墨江湖，一切变黑白水墨，她一袭白衣立于竹尖，墨点飞溅。

[00:23-00:25] 钻进一滴墨→未来都市天际线，她张开机械双翼从摩天楼顶一跃而下俯冲。

[00:25-00:28] 俯冲穿过云层→所有世界的碎片像玻璃一样向中心坍缩,汇成一个亮点。

[00:28-00:30] 亮点收缩回她的瞳孔——镜头猛地拉回到开头那张脸,她眨了一下眼,嘴角一勾。画面定格,可无缝接回第0秒。

音效：全程无BGM，只有高频呼啸风声+每次穿越"轰"的一声穿透音+材质环境音(水/火/风/金属)，最后眨眼一声轻响戛然而止。

【导演备注】
1.节奏铁律：镜头全程向前高速冲，绝不停顿、绝不减速停留，每个世界只停留约2秒立刻穿入下一个；
2.转场铁律：每次切换必须用"冲进/穿过一个具体物体"完成无缝转场(瞳孔/水花/气柱/沙墙/红绸/火星/墨滴)，禁止黑屏、禁止闪白、禁止叠化；
3.身份锁定：@图1脸部五官全程100%一致，只换服装形态，观众每个世界都要能认出是同一个她；
4.物理真实：水花、沙、火星、雪雾、红绸都要真实惯性和运动模糊；
5.首尾帧对齐做无缝循环。

【负面提示词】黑屏转场，闪白，叠化，镜头停顿减速，换脸，五官漂移，认不出同一人，真实地标品牌，可读文字，水印，塑料CG，卡顿掉帧，多余手指，未成年人形象。
```

---

### 22. 涂鸦怪兽城市大战

三次 30 秒生成组成一场手绘怪兽大战，每段都将上一段尾帧作为下一段起始图，以保持动作与场景衔接。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 2 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 多镜头 · 匹配剪辑 · 角色一致性 · 视觉特效 |
| 规格 | 71s · 16:9 |
| 发布者 | WHORANGE (@whorange__) |


[观看成片](https://x.com/whorange__/status/2083177210563952753) · [原始来源](https://x.com/whorange__/status/2083177210563952753) · [提示词来源](https://x.com/whorange__/status/2083177214988976366)

#### 提示词

```text
Prompt 1:

A military force invades the city. Tanks, soldiers, and fighter jets attack a giant blue monster. Fearless, the monster smashes streets, destroys tanks and aircraft, and terrorizes the city.

Workflow tip: Save the last frame of video 1, then use it as the start frame for video 2.

Prompt 2:

Use [Image] as the start frame. As the giant blue monster continues attacking the city, a giant green monster suddenly charges in.

Repeat the same trick: Use the last frame of Video 2 as the Start Frame for Video 3.

Prompt 3:

Use [Image] as the start frame. The two giant monsters clash in a brutal fight. The green monster dominates at first, but the blue monster eventually overpowers it. The final frame shows the blue monster standing on its defeated opponent with one arm raised in victory.
```

---

### 23. 从地下俱乐部走入伦敦夜色

一位忧郁女性从拥挤的伦敦地下电子俱乐部穿过肮脏后廊走到街外，在不间断的 30 秒手持镜头中靠墙坐下抽烟。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | JMS.vid (@JMSvid) |


[观看成片](https://x.com/JMSvid/status/2083210992343756893) · [原始来源](https://x.com/JMSvid/status/2083210992343756893)

#### 提示词

```text
Original scene, 30 seconds, one continuous shot, no cuts.

0–8 seconds:
Inside a packed underground London techno club. The camera holds tightly on the face of a young English woman. She is Caucasian, brunette, with delicate features and melancholy behind her eyes. She remains centered in frame and only sways subtly with the music. Around her, the crowd moves intensely and chaotically, with bodies, arms, shoulders and faces constantly passing close to camera, creating strong motion blur and a sense of pressure and overwhelm. Fast white strobe lights flash continuously, pushing the image back and forth between near-total darkness and sudden bursts of harsh illumination. In the darker intervals, only silhouettes, rim light, glints of sweat and fragmented movement are visible. Each flash briefly reveals fragments of her face—her eyes, cheekbones, wet strands of hair, and distant expression—before she disappears again into darkness. She feels strangely still and emotionally detached while the crowd around her becomes a mass of blurred bodies and flickering light. Heavy four-on-the-floor techno dominates the soundscape, loud, compressed and physically overwhelming.

8–16 seconds:
She stays in this space for a moment longer, absorbing the intensity, then finally breaks her gaze, turns and begins pulling herself out of the crowd. The camera does not cut. It releases from the locked close-up and shifts into a close handheld follow shot, staying just behind and slightly beside her as she pushes through dancers. Bodies knock into her shoulders. Arms and backs occasionally obscure the frame. The camera feels intimate, bumped and instinctive, struggling through the same crowded space with her. As she leaves the center of the dancefloor, the strobing becomes less dominant and the club lighting grows dirtier and more practical. She enters a narrow back passage leading away from the main room.

16–23 seconds:
She moves through a cramped, dirty corridor with graffiti-covered walls, peeling paint, torn posters, exposed pipes, damp patches, flickering fluorescent lights and littered plastic cups on the floor. People lean against the walls smoking, chatting, waiting, watching others pass. She threads through them silently. The camera stays close and observational, catching the rustle of fabric, brief shoulder contact and bodies slipping past in the narrow space. The music becomes more muffled and distant as she moves farther from the dancefloor. The heavy techno remains present only as a low, dulled throb through the walls. Footsteps, clothing friction, breathing, shuffling bodies and indistinct overlapping crowd chatter become clearer. No individual conversation is intelligible. She does not speak.

23–30 seconds:
She pushes through the exit and steps into the cold London night. Outside the club, groups of people stand smoking, talking, drifting in and out of the entrance. Streetlight mixes with spill from the doorway and practical urban light. She walks to the nearest dirty exterior wall and pauses. With slightly shaky hands, she lights a cigarette. The flame briefly illuminates her face. She takes a drag, leans back against the wall, then slowly slides down into a seated position on the pavement. The camera follows her downward and settles at her level, then holds. She sits smoking in silence, looking past the moving crowd into the distance, disconnected from everything around her. People continue crossing the frame, talking, laughing and smoking nearby, but she feels completely alone inside the busy environment. The sound transitions from overwhelming club techno, to muffled bass and corridor ambience, to distant low-frequency vibration outside mixed with cigarette lighter clicks, breathing, street ambience, footsteps and indistinct smoker chatter. No dialogue.

The overall image should feel raw, naturalistic and grounded, with visible film grain, slight exposure fluctuation, realistic skin texture and subtle handheld instability. Avoid glossy polish, commercial beauty lighting and music-video slickness.
```

---

### 24. 零提示词布加迪时尚运镜

将一张 AI 生成的时尚人像作为唯一参考图，不输入视频提示词，直接生成 10 秒 Seedance 2.5 运镜成片。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 品牌与营销 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 运镜控制 · 角色一致性 · 产品一致性 |
| 规格 | 10s · 3:4 |
| 发布者 | John (@johnAGI168) |


[观看成片](https://x.com/johnAGI168/status/2083226179369083027) · [原始来源](https://x.com/johnAGI168/status/2083226179369083027) · [提示词来源](https://x.com/johnAGI168/status/2083208741764075662)

#### 提示词

```text
Reference-image creation prompt (GPT Image 2):

Photorealistic 3:4 full-body luxury fashion portrait of an exceptionally beautiful adult East Asian woman sitting elegantly on the front hood of a glossy purple-and-black Bugatti Chiron inside a high-end underground parking garage. She has a refined sweet face, fair luminous skin, large almond-shaped eyes, soft pink lips and very long silver-gray hair with subtle lavender tips, flowing past her waist in loose waves. Her figure is naturally voluptuous and feminine, with a full bust, narrow waist and softly rounded hips. She wears a fitted deep-purple long-sleeve top with an elegant V-neckline, paired with a glossy lavender high-waisted asymmetrical wrap skirt featuring a high front slit and long flowing hem, sheer black pantyhose and glossy black strappy platform stilettos. She sits on the front edge of the hood with both hands resting beside her, torso upright with a gentle back arch. Her long legs extend diagonally toward the camera and cross neatly at the ankles. She looks directly at the camera with a calm, confident and subtly alluring expression. Immaculate VIP underground parking garage, polished dark stone floor, architectural concrete columns, black wall panels, linear LED ceiling lights and soft reflections across the Bugatti’s sculpted bodywork. Cool cinematic lighting with subtle purple highlights, shallow depth of field, high-end editorial photography, realistic skin, hair, sheer fabric and automotive details, accurate anatomy and hands, no anime, no text, no watermark.

Seedance 2.5 workflow:

Use one resulting 3:4 image as the sole image input. Leave the video prompt empty and generate a 10-second video.
```

---

### 25. MiniDV 风筝自拍日志

一位年轻女性用消费级 MiniDV 自拍记录放风筝的下午，以不完美构图、轻声对白和丰富户外 ASMR 营造真实个人日志感。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 时间轴分镜 · 运镜控制 · 声音设计 |
| 规格 | 31s · 16:9 |
| 发布者 | 𝐌 (@Strength04_X) |


[观看成片](https://x.com/Strength04_X/status/2083763307672981913) · [原始来源](https://x.com/Strength04_X/status/2083763307672981913)

#### 提示词

```text
CAMERA / LOOK: Handheld mini DV camcorder footage filmed by the subject herself. Slight hand shake, occasional focus hunting, imperfect framing, natural zoom adjustments, soft tape-like image quality, subtle grain, realistic auto-exposure shifts from bright open-sky daylight. Natural skin tones, mild motion blur, authentic consumer camcorder aesthetic rather than polished cinematic footage.

STYLE: Cozy outdoor kite-flying vlog with gentle ASMR elements. Relaxed pacing, minimal dialogue, candid moments, natural pauses. Focus on satisfying everyday sounds: kite fabric flapping in the wind, string spool unwinding, grass rustling underfoot, light breeze against the microphone.

SUBJECT: Young woman in her mid-20s, plain windbreaker, hair tied back in a loose ponytail, minimal jewelry, no visible logos or branded items. Cheerful, carefree energy on a breezy afternoon.

SETTING: Small open field on a bright breezy afternoon. Wide open sky, plain grass field, no visible signage, buildings with branding, or logos anywhere in frame.

STORYBOARD:
→ (3s, propped medium shot) Places camera on a low tripod in the grass, unrolls a plain kite. "Perfect windy day for this."
→ (3s, overhead shot) Unwinds the string spool, checking it's free of tangles.
→ (3s, close-up) Attaches the string firmly to the kite frame.
→ (3s, handheld shot) Walks backward a few steps, testing the wind direction. "Feels strong enough today."
→ (3s, detail shot) Releases the kite gently into the air. No dialogue.
→ (3s, medium shot) Watches it climb higher, letting the string out slowly. "There it goes."
→ (3s, macro shot) Kite fabric flapping steadily against the open sky.
→ (3s, propped shot) Sits down on the grass, holding the string loosely.
→ (3s, warm ending shot) Looks up at the kite soaring, happy smile. "Love days like this."
→ (5s, final shot) Reels the string in slowly, glances toward camera. "See you next time." Reaches down and covers the lens as recording ends.

AUDIO NOTES: Natural outdoor ambience — kite flapping, string unwinding, breeze, grass rustling should be clearly audible. Dialogue quiet and casual, as if speaking to a small personal audience.

REALISM NOTES: Authentic body language, natural blinking, genuine cheerful smiles, occasional pauses adjusting the string, imperfect framing, focus breathing, bright open-sky lighting shifts. No copyrighted characters, logos, brand names, or recognizable public figures anywhere in frame. Fully original personal vlog content, not AI-generated or commercial in style.
```

---

### 26. 埃及女王拒绝罗马和约

埃及女王拒绝罗马的和平提议，并在 30 秒写实历史短片中展示集结军队，以克制表演、精准对白和逐步扩大的场面推进剧情。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 时间轴分镜 · 口型同步 · 角色一致性 · 运镜控制 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Lincanvas (@AIcanvas_Frames) |


[观看成片](https://x.com/AIcanvas_Frames/status/2083758894770540828) · [原始来源](https://x.com/AIcanvas_Frames/status/2083758894770540828)

#### 提示词

```text
30-second cinematic historical epic, 16:9. Photorealistic late Egyptian royal court with grounded human behavior, real skin texture, natural facial micro-expressions, historically inspired linen, bronze, gold, leather, horses, papyrus, firelight and stone. Preserve the queen in ivory and deep-blue gown, the kneeling Roman envoy in dark red cloak and bronze armor, the emerald-robed priestess, the enormous blue-and-gold throne hall, burning braziers, reflective black floor, and the Nile beyond the open arches.

0-5s: [Slow low dolly from behind the kneeling Roman envoy toward the queen] The queen studies the Roman treaty in silence. Firelight flickers across her face; the envoy's hands are tense around the ivory tablet. Behind the throne, Egyptian palace guards stand still with bronze spears and large blue-and-gold shields. Envoy, restrained English: “Rome offers peace.”

5-10s: [Medium close-up on the queen] She looks up slowly. Her expression is calm, intelligent, and cold rather than theatrical. Queen, clear English: “Rome offers surrender.” The envoy swallows, briefly losing his composure.

10-15s: [Over-the-shoulder on the envoy, queen in focus behind him] He glances toward the open Nile archway. Envoy: “Their legions wait at the river.” The priestess watches the queen closely; only the flames and curtains move.

15-21s: [Camera tracks alongside the queen as she rises and descends the throne steps] The queen hands the treaty to the priestess, who drops it into a bronze brazier. The papyrus burns naturally. The queen walks forward, her heavy blue train sliding across the black stone floor. Palace guards step apart in two disciplined lines, creating a path toward the open terrace. No magical effects, only fire, smoke, fabric, metal, and human tension.

21-26s: [Camera follows behind her, then cranes upward over her shoulder] She reaches the vast palace terrace overlooking the Nile. Below, a real Egyptian royal army fills the riverbank and courtyard: rows of bronze-armored infantry, tall standards moving in hot wind, horse-drawn chariots, shield-bearing guards, priests carrying gold sun emblems, and long riverboats waiting beside the water. Dust hangs in the warm dawn light. The scale is enormous but physically believable.

26-30s: [Low-angle close-up, army blurred behind her] The queen stops at the terrace edge. Wind lifts the edge of her blue train. She looks toward the Roman envoy, then toward her assembled army. Queen, low and final: “Then Rome will learn whom Egypt follows.” Hold on her face as the army below strikes spear shafts once against their shields in a single thunderous response.

Grand historical scale, grounded realism, emotionally restrained acting, physically accurate crowd movement, detailed bronze armor, natural fire and smoke, believable horse and chariot motion, rich blue, gold, ivory and desert-stone palette, elegant stable camera movement, precise English lip sync. No magic, no supernatural symbols, no modern objects, no sci-fi effects, no random text, no logos, no extra main characters, no duplicate limbs, no warped faces or hands, no costume drift, no unstable architecture, no chaotic camera shake.
```

---

### 27. 欧洲乡村生活纪录片

从日出到金色时刻，一位女性的欧洲乡村日常以超写实观察式纪录片呈现，全部依靠自然动作和环境 ASMR 推进。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 角色一致性 · 运镜控制 · 声音设计 |
| 规格 | 28s · 16:9 |
| 发布者 | Nexora (@frametheory058) |


[观看成片](https://x.com/frametheory058/status/2083751397070397910) · [原始来源](https://x.com/frametheory058/status/2083751397070397910) · [提示词来源](https://x.com/frametheory058/status/2083751909605949754)

#### 提示词

```text
Create a 30-second ultra-photorealistic cinematic slice-of-life film that is visually indistinguishable from real footage. Every frame should resemble a premium Netflix lifestyle documentary or luxury commercial, captured on a professional full-frame cinema camera using 50mm and 85mm prime lenses in true 8K HDR. Use physically accurate lighting, natural dynamic range, realistic optical lens characteristics, shallow depth of field, subtle film grain, authentic motion blur, lifelike skin with visible pores, realistic eye reflections, accurate fabric simulation, and natural environmental details. Avoid any CGI or AI-generated appearance.

The film follows a 30-year-old European woman living a peaceful countryside life. She has naturally tied brown hair with loose flyaway strands, minimal makeup, expressive eyes, realistic skin texture, and wears comfortable linen clothing in warm neutral tones. Every movement should feel subconscious and naturally observed—never posed or performed. She never looks directly into the camera, and her expressions remain subtle and genuine.

The story begins inside a cozy farmhouse at sunrise as warm morning light fills the bedroom. She wakes naturally, opens the wooden window, and breathes in the fresh countryside air while looking across mist-covered fields. She then prepares fresh bread in a rustic kitchen, kneading dough by hand, placing it into a traditional oven, and cleaning the wooden countertop with calm, deliberate movements. Next, she walks into her small garden, gently watering herbs, collecting ripe tomatoes, and brushing her fingers across fresh plants while sunlight creates soft natural lens flares. Afterwards, she pours fresh coffee into a handmade ceramic mug and quietly reads a book beside a large window as sunlight illuminates floating dust particles. The journey continues with a relaxed walk through a charming European village lined with stone cottages, flower-filled windows, bicycles, and narrow streets before she visits a small local market to purchase fresh flowers and seasonal fruit. The film ends during golden hour as she returns home, arranges the flowers in a glass vase, sits peacefully by the window overlooking the countryside, and the camera slowly pulls away before fading naturally to black.

Performance Direction: Every action should feel authentic and unplanned. Include natural blinking, relaxed breathing, realistic eye movement, subtle posture adjustments, correct body weight shifts, accurate finger anatomy, believable hand interaction with objects, natural walking speed, realistic hair movement, and true-to-life fabric physics. Nothing should resemble acting or posing.

Audio Design (Critical): No dialogue, no narration, no subtitles, and absolutely no background music. Tell the story entirely through immersive environmental ASMR. Synchronize every sound naturally with the visuals, including birds singing, gentle wind, wooden floor creaks, curtain movement, dough kneading, ceramic bowls, oven door, running water, leaves rustling, footsteps on grass and stone paths, distant village ambience, market sounds, paper bags, coffee pouring, spoon stirring, page turns, doors opening, evening insects, and quiet countryside room tone.

Creative Goal: Deliver a calm, intimate, emotionally grounded slice-of-life film that feels as though it was captured by a real documentary filmmaker. The final result should be so realistic, natural, and immersive that viewers genuinely question whether it was filmed with a real camera rather than generated by AI.
```

---

### 28. 复古绘图程序星形幻觉

一名表演者从 1990 年代末的桌面绘图程序中升起，用指尖围绕自己画出发光五角星，镜头随后仿佛穿过显示器进入画布。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 创意实验 · 影视与叙事 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 视觉特效 · 声音设计 · 角色一致性 |
| 规格 | 20s · 16:9 |
| 发布者 | BMX (@bmx_ai13) |


[观看成片](https://x.com/bmx_ai13/status/2083769258236866658) · [原始来源](https://x.com/bmx_ai13/status/2083769258236866658)

#### 提示词

```text
Create a ten second cinematic live action illusion in a sixteen by nine frame at thirty frames per second. Begin inside a faithfully recreated late nineteen nineties desktop paint program. Use a cool gray window frame, navy title bar, simple menus, chunky pixel tool icons on the left, scroll bars, and small color swatches along the bottom. The canvas shows a saturated blue sky with soft white clouds and a vivid green grassy hill, nostalgic but photographed with realistic depth, subtle cloud movement, and light atmospheric haze.

0 to 1.2 seconds. Hold a locked frontal camera on the full paint window. The empty landscape fills the canvas. A slim young adult man rises smoothly from the bottom center with his back to camera. He wears a red athletic shirt with white collar and sleeve stripes, a backward royal blue cap, a thin silver chain, and black ink forearm tattoos. Give his movement real body weight, natural shoulder motion, and slight cloth drag.

1.2 to 2.5 seconds. He lifts his tattooed right arm toward the upper left of the canvas as though touching an invisible drawing tool. Keep the interface perfectly stable and sharp. He turns clockwise toward camera, lowers his hand, and settles into a relaxed waist up pose at center. Use soft frontal daylight, a gentle key from camera left, believable skin texture, clear eyes, fine facial hair, and a faint contact shadow.

2.5 to 6.2 seconds. He looks into camera with a playful calm expression, raises one index finger, and draws in midair. A warm ivory line appears exactly at the fingertip and follows every gesture without delay. It looks like a real textured paint stroke with slight thickness variation, dry brush edges, and a soft glow. He draws one continuous five point star around his body. Make the tall upper point above his cap, the right point beside his shoulder, the lower left point across his torso, the lower right point, then close the shape near his raised hand. Preserve correct hand anatomy, stable identity, perfect line continuity, and natural reactions from his free hand.

6.2 to 7.4 seconds. When the star closes, perform a smooth optical push into the canvas until the interface edges slide beyond the frame. The move should feel like a real camera passing through a monitor, with subtle lens breathing and no cut. He smiles softly and lifts both palms in a small satisfied reveal while the completed ivory star floats around him.

7.4 to 10 seconds. He glances right and walks naturally out of frame. Keep the camera locked on the empty hill and sky. The star remains suspended, slowly loses brightness, and becomes slightly transparent without vanishing. End with one cloud drifting through its center.

Maintain one continuous shot, realistic motion blur, natural blinking, stable clothing and tattoos, accurate perspective, clean edges, no warped limbs, no duplicate fingers, no facial changes, no flicker, no random objects, no extra people, and no artificial plastic skin. Make it feel like a practical live action performance composited into an authentic retro computer interface.

Audio. Add an original playful retro electronic instrumental at about one hundred and five beats per minute with a warm drum machine groove, soft bass, bright synth plucks, and subtle digital ambience. Sync a light mouse click to the first hand gesture, delicate paint stroke swishes to the fingertip, a sparkling chime when the star closes, and a soft whoosh during the push into the canvas. No vocals and no dialogue.
```

---

### 29. 龟兔赛跑

骄傲的兔子与坚持前进的乌龟之间的完整寓言，被浓缩成一段色彩鲜明的 30 秒家庭向三维动画。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 教育与教程 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 角色一致性 |
| 规格 | 30s · 16:9 |
| 发布者 | Pan (@sebatheepan) |


[观看成片](https://x.com/sebatheepan/status/2083768136172552259) · [原始来源](https://x.com/sebatheepan/status/2083768136172552259)

#### 提示词

```text
Once upon a time there lived a hare. The hare could run very fast. It was proud of its speed. One day, the hare saw a tortoise walking very slowly. The hare laughed at the tortoise and said, “Oh! You are so slow, such a slowcoach!” The tortoise said, “My dear friend, you are so proud. Let’s have a race to see who is faster.”

So the hare and the tortoise had a race. The hare ran very fast and very far. Then it turned back to see where the tortoise was. The tortoise was far behind the hare. It was walking so slowly! The proud hare thought, “The tortoise will take a very long time to come near me. Let me have a nap.” So it stopped running and went to sleep.

The tortoise slowly but steadily went past the hare. The hare suddenly woke up and saw the tortoise just crossing the finishing line. It started running very fast. But it was too late. The tortoise had already won the race.

A fun 3D Pixar-style family animation.
```

---

### 30. 印尼后巷第一人称威慑

一段紧张的后巷对峙采用连续手持第一人称视角、精准计时的印尼语对白、口型同步和非暴力肢体调度。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 口型同步 · 多语言音频 · 运镜控制 · 声音设计 |
| 规格 | 15s · 16:9 |
| 发布者 | Kick Nost (@kicknost) |


[观看成片](https://x.com/kicknost/status/2083773192561410406) · [原始来源](https://x.com/kicknost/status/2083773192561410406) · [提示词来源](https://x.com/kicknost/status/2083775697479410020)

#### 提示词

```text
Cinematic 15-second POV short film, 16:9 aspect ratio, Hollywood IMAX ultra-cinematic photorealistic style, handheld POV camera representing the victim's own eyes, shallow depth of field, HDR DolbyVision look, anamorphic lens flare, natural skin texture, subtle film grain, 35mm IMAX lens characteristics.

SETTING:
Narrow back-alley at golden hour, dramatic low warm sunlight cutting through graffiti-covered walls, dust particles floating in the light beam, distant ambient city noise.

POV DETAIL:
Camera is the victim's eyes — only the victim's trembling hand occasionally enters frame at the edges. The victim steps back once at the very start. No victim face is shown.

MAIN CHARACTER (thug, standing 30-40cm from camera lens):
Fierce aggressive expression, eyes wide and unblinking, jaw clenched tight, faint neck veins visible from tension, authentic Indonesian street demeanor.
Left hand grips the front of the victim's shirt collar firmly but without violent shaking.
Right hand points repeatedly toward the lens, finger almost touching it, intimidating and controlled — never striking.

TIMELINE:
0–3s: Victim steps back one pace. Thug immediately yanks the victim's collar forward. Sharp piercing stare directly into lens. Heavy controlled breathing audible.
3–7s: Thug leans closer, index finger nearly touching the lens.
Loud aggressive voice: “Apa lihat-lihat, hah?” Hold a natural 0.5-second pause after the line, tension sustained through stillness.
7–11s: Grip on collar remains firm. Voice stays raised and sharp: “Kenapa berhenti scroll, hah?”
Expression stays hard and serious, no change in aggression.
11–15s: Thug smirks mockingly, points at the camera once more, delivers:
“Paling juga nggak kasih komentar, kan? Cupu lu!”
Immediately after the line, thug gently pushes the camera backward with his index finger (a light push, not a strike) — then hard cut to black.

ACTING DIRECTION:
Eyes never leave the camera lens throughout. Minimal blinking. Jaw stays clenched.
Eyebrows lowered in aggression. Lip movement must match dialogue with highly accurate lip-sync.
Voice delivery must carry authentic Indonesian street intonation — natural, human, never robotic or monotone.

AUDIO DESIGN:
Heavy controlled breathing, fabric friction sound as the collar is yanked, distant alley ambience, faint birds far away, a motorbike passing faintly in the background, light natural reverb off the alley walls.
Voice must be crystal clear and dominant in the mix. No music during dialogue.
After the final line, add one cinematic bass hit sting timed with the cut to black.

CAMERA WORK:
Realistic handheld POV with micro camera shake for authenticity. 35mm IMAX lens character.
HDR exposure, Dolby Vision color response. Subtle natural film grain.
One rack focus transition shifting from the pointing finger to the thug's eyes mid-scene.
Natural exposure balance, no artificial over-brightening.
Hollywood blockbuster color grading — warm highlights, deep controlled shadows, slight teal-orange contrast.

DIALOGUE INSTRUCTION (critical for AI voice accuracy):
Use native Indonesian speech with perfect lip synchronization.
Every spoken word must exactly match this script without omissions, substitutions, repetitions, or pronunciation errors. Speak naturally with an authentic Indonesian street accent, maintaining aggressive emotion while preserving perfect articulation. Do not improvise or alter the dialogue.

FINAL DIALOGUE (must match exactly):
“Apa lihat-lihat, hah?... Kenapa berhenti scroll, hah?... Paling juga nggak kasih komentar, kan? Cupu lu!”

TECHNICAL SPECS:
Duration 15 seconds exactly. Aspect ratio 16:9. No text overlays, no subtitles, no watermark, no on-screen captions. Continuous single POV take, no cuts until the final hard cut to black.
Photorealistic lighting throughout, no physical violence, no striking or hitting — intimidation conveyed entirely through proximity, gaze, vocal tone, and blocking.
```

---

### 31. 高空第一人称钢杆跳跃

胸前机位以一镜到底的第一人称视角记录摩天楼边缘的连续钢杆跳跃，包含一次惊险滑脱，并以狂风、喘息、心跳和金属撞击声强化临场感。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 运镜控制 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Martin (@martindacol) |


[观看成片](https://x.com/martindacol/status/2083790529251496153) · [原始来源](https://x.com/martindacol/status/2083790529251496153)

#### 提示词

```text
A hyper-realistic, 8K resolution, adrenaline-fueled single-take POV action sequence. The camera is chest-mounted on a man wearing camouflage joggers and worn-out black-and-white sneakers. He stands on the dizzying edge of a rusted skyscraper, 1000 feet above a crystalline turquoise ocean. No clouds, no haze—just a sheer, terrifying vertical drop into the deep blue.

[The Initial Freefall]
The sequence begins with a sudden, heart-stopping leap into a 20-meter vertical freefall. The camera points directly at his feet as the sea surface rushes toward the lens. A deafening, high-pitched whistling 'Hyuo' wind screams past the microphone. Just before the impact, he catches a lower rusted horizontal bar with both hands—white wristband visible—and swings his body forward to land on a tiny vertical pole.

[The Rhythmic Jumps & The Near-Death Slip]
He immediately begins a rhythmic series of high-speed jumps:
Jump 1: A clean, agile spring to a second vertical pole 2 meters away.
Jump 2: A rapid leap to a thin, rusted horizontal pipe.
Jump 3 (The Slip): As he jumps toward the third vertical pole, his right sneaker completely misses the mark and slides off the rusted metal. The camera tilts violently over the edge, staring straight down at the 1000-foot abyss. He lets out a sharp, panicked gasp. For a terrifying second, his body leans into the void, but he desperately claws at the pole with his fingers, his boots scrambling against the side until he manages to hook his leg and haul himself back up.
Jump 4: Still trembling, he forces a frantic, heavy-breathing leap to the next bar to keep the momentum.
Jump 5: A final, explosive long-distance jump to a swaying metal platform. He lands with a heavy, jarring metallic 'Clang', his body hunching low, gripping the vibrating metal for dear life.

[The Ending]
The camera remains in a low, fetal position on the final bar, shaking from the adrenaline. No dialogue. The audio is a visceral layer of the aggressive 'Hyuo' wind, his intense, ragged, and rapid gasping for air, and a loud, thumping heartbeat that resonates as if inside his chest. The harsh midday sun glints off the ocean waves far below, creating a blinding, beautiful, yet lethal glare. Cinematic materials, fluid 120fps motion, hyper-detailed rust and skin textures.
```

---

### 32. 双人同步 K-pop 棚拍 MV

两名表演者在粉色影棚、蓝色聚光舞台、金属亮片幕布和魅力特写之间切换，以精确时间轴完成一支 30 秒同步编舞 K-pop MV。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 音乐与表演 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 时间轴分镜 · 角色一致性 · 口型同步 · 运镜控制 |
| 规格 | 30s · 16:9 |
| 发布者 | AqibAi (@Aqib__786Ai) |


[观看成片](https://x.com/Aqib__786Ai/status/2083787627531034977) · [原始来源](https://x.com/Aqib__786Ai/status/2083787627531034977)

#### 提示词

```text
30-second ultra-realistic K-pop MV featuring two young East Asian women with flawless synchronization, cinematic lighting, glossy skin, realistic hair and fabric physics, natural body motion, and 4K live-action quality. Vibrant hot pink, electric blue, and silver color palette.

0–2s: Wide shot in a bright circular pink studio with reflective floor. Pink-haired woman (left) and black-haired woman (right) perform energetic opening pose and synchronized dance.

2–4s: Medium close-up of the black-haired woman on a blue spotlight stage, confidently pointing at the camera.

4–6s: Pink-haired woman dances before shimmering blue-silver tinsel curtains, dramatic hair flip and fluid arm movements.

6–8s: Back to the pink studio. Both perform synchronized choreography with sharp arm waves, hip sways, and strong formations.

8–10s: Extreme close-up of both faces against a blue background, glossy makeup, subtle smiles, and direct eye contact.

10–14s: Solo shots at the tinsel backdrop. Pink-haired woman mouths lyrics and gestures confidently, followed by the black-haired woman with relaxed jacket styling.

14–18s: Pink studio. Coordinated jacket choreography, hair flips, powerful synchronized dance, ending hands-on-hips.

18–22s: Glamour close-ups. Black-haired woman under glittering bokeh lights, then pink-haired woman with wind-blown hair against a soft pink background.

22–24s: Blue spotlight stage. Mirrored black-haired performer effect with synchronized spins and flowing hair.

24–26s: Both walk confidently toward the camera in front of shimmering tinsel curtains, reflections visible on the floor.

26–29s: Final synchronized dance and ending pose in the pink circular studio, standing together and looking into the camera.

Style: Hyper-realistic live action, Seedance 2.5-quality motion realism, perfect lip sync, natural weight shifts, flowing hair, realistic fabric simulation, polished K-pop music video cinematography.
```

---

### 33. 风暴海洋驭龙一镜到底

一名使用人脸参考图的骑手驾驭生物发光巨龙掠过风暴海面，在慢动作中拔出点燃的长剑，并以一镜到底斩开庞大海兽。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 一镜到底 · 运镜控制 · 视觉特效 · 角色一致性 |
| 规格 | 15s · 16:9 |
| 发布者 | Oogie (@oggii_0) |


[观看成片](https://x.com/oggii_0/status/2083805091476431325) · [原始来源](https://x.com/oggii_0/status/2083805091476431325)

#### 提示词

```text
single continuous shot, one take no cuts, cinematic oner, cinematic lighting, photorealistic, 8K ultra-high-definition, hyperdetailed, 35mm film quality, professional color grading, sharp focus, high detail texture, film grain, depth of field mastery, steadicam fluidity

A lone rider tears through a violent tempest low over a black storm-tossed ocean on the back of a flying dragon, shot in full third person. The rider is a young Indonesian man (use attached face reference — face fully visible, no helmet, black windswept hair whipping in the storm), a wiry figure in layered fur-and-leather flight gear, a wind-torn dark cloak streaming behind, gloved hands gripping a harness strap — a long dormant sword sheathed across his back, its hilt faintly glowing amber. The dragon is an original design — a sleek serpentine flier with deep teal-black storm-scaled hide, broad membranous wings, ridged spine, and faint warm amber bioluminescence glowing along its scale-seams and throat, the only warmth over a black sea. The storm rages in inky blue-black and sea-foam white: towering thunderheads stacked over mountainous rolling waves, rain and spray streaking sideways, lightning forking through the cloud canyons and striking the water.

The hook arrives as a second, far larger leviathan-dragon erupting head-on from a wall of sea-spray and fog — a crash zoom slams into the rider as he draws his sword, slow motion holding the blade-ignition, before a cataclysmic light-slash cleaves the giant and its sundered body crashes into the ocean in twin geysers. The take is one unbroken oner, the camera flowing from frontal tracking to rear chase to crash zoom, the only speed shift the slow-motion draw before the slash.

[VFX: amber scale-glow bioluminescence, colossal second dragon, volumetric sea-spray fog, lightning, molten burning cut-seam, blinding light-blade slash arc, ocean-impact geysers and tidal spray]

Single continuous shot 15s: The shot opens on a frontal tracking medium close-up flying backward ahead of the rider — his unmasked face filling the frame with wind-torn black hair and hard focused eyes, rain streaking past between him and the lens, the dragon's head bobbing into frame beneath him as they skim just above a towering wave crest. The camera dynamically swings and orbits around his shoulder to settle behind him, revealing the storm-choked open sea ahead, then chases low and tight as the dragon weaves and snakes hard between rolling wave-mountains, wings carving the spray, banking left and right with the cloak lashing, the amber scale-glow the only warmth in the inky-black storm.

Without warning the colossal leviathan-dragon erupts head-on from a wall of sea-fog directly ahead, its vast jaws opening — and the camera crash zooms into a medium shot of the rider as time violently ramps into extreme slow motion: he rises on the saddle, face set with total resolve, and draws the sword from his back in one flowing motion, the blade igniting into blinding amber-white light, rain and sea-spray hanging frozen around him, horizontal anamorphic flares raking the lens, the giant's enormous amber eye looming huge and reflecting his tiny burning silhouette.

Time cracks back to full speed as he swings with his entire body — a colossal crescent arc of searing light erupts from the blade, tearing across the sky and flooding the whole frame white, the shockwave blasting the storm clouds outward in a perfect expanding ring — and as the glare fades a molten amber seam burns across the leviathan's full length where the arc passed, erupting in chains of white-gold detonations as the colossal body sunders into two immense halves, each edge cauterized in glowing ember-light with no gore, the severed silhouettes plummeting in opposite directions trailing fire and steam until they slam into the ocean below — twin apocalyptic impacts that hurl up towering geysers of black water, send shockwave rings racing across the wave-tops, and briefly boil the sea to mist; the camera pulls back into a vast trembling wide as the blast wave rocks the rider's dragon mid-air, the rider standing braced on the saddle with the dimming sword lowered, a tiny victorious silhouette against the burning crash-glow, the falling ember-rain, and the lightning-lit sea.
```

---

### 34. 火山灰暴驭龙一镜到底

一名使用人脸参考图的骑手驾驭黑曜石巨龙穿越火山灰暴，在慢动作急推镜头中点燃长剑，并将庞大海兽斩落进喷发的火山口。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 一镜到底 · 运镜控制 · 视觉特效 · 角色一致性 |
| 规格 | 15s · 16:9 |
| 发布者 | Ciri (@Ciri_ai) |


[观看成片](https://x.com/Ciri_ai/status/2083803575915044941) · [原始来源](https://x.com/Ciri_ai/status/2083803575915044941)

#### 提示词

```text
single continuous shot, one take no cuts, cinematic oner, cinematic lighting, photorealistic, 8K ultra-high-definition, hyperdetailed, 35mm film quality, professional color grading, sharp focus, high detail texture, film grain, depth of field mastery, steadicam fluidity

A lone rider tears through a violent ashfall across a chain of active volcanic peaks on the back of a flying dragon, shot in full third person. The rider is a young Indonesian man (use attached face reference — face fully visible, no helmet, black windswept hair whipping in the ash-wind), a wiry figure in layered fur-and-leather flight gear, a wind-torn dark cloak streaming behind, gloved hands gripping a harness strap — a long dormant sword sheathed across his back, its hilt faintly glowing amber. The dragon is an original design — a sleek serpentine flier with charcoal-black obsidian-scaled hide, broad membranous wings, ridged spine, and faint warm amber bioluminescence glowing along its scale-seams and throat, the only cool light in a molten world. The storm rages in ash-grey and magma-orange: black eruption clouds stacked between glowing lava-veined calderas, ash and cinders streaking sideways, lava-lightning forking through the plumes.

The hook arrives as a second, far larger leviathan-dragon erupting head-on from a wall of ash — a crash zoom slams into the rider as he draws his sword, slow motion holding the blade-ignition, before a cataclysmic light-slash cleaves the giant and its sundered body crashes into the calderas in fountains of lava. The take is one unbroken oner, the camera flowing from frontal tracking to rear chase to crash zoom, the only speed shift the slow-motion draw before the slash.

[VFX: amber scale-glow bioluminescence, colossal second dragon, volumetric ash fog, lava-lightning, molten burning cut-seam, blinding light-blade slash arc, caldera-impact lava fountains]

Single continuous shot 15s: The shot opens on a frontal tracking medium close-up flying backward ahead of the rider — his unmasked face filling the frame with wind-torn black hair and hard focused eyes, ash streaking past between him and the lens, the dragon's head bobbing into frame beneath him as they punch through a plume of eruption smoke. The camera dynamically swings and orbits around his shoulder to settle behind him, revealing the ash-choked volcanic chain ahead, then chases low and tight as the dragon weaves and snakes hard between glowing calderas, wings carving the smoke, banking left and right with the cloak lashing, the amber scale-glow blending into the magma-orange glow below.

Without warning the colossal leviathan-dragon erupts head-on from a wall of ash directly ahead, its vast jaws opening — and the camera crash zooms into a medium shot of the rider as time violently ramps into extreme slow motion: he rises on the saddle, face set with total resolve, and draws the sword from his back in one flowing motion, the blade igniting into blinding amber-white light, ash and cinders hanging frozen around him, horizontal anamorphic flares raking the lens, the giant's enormous amber eye looming huge and reflecting his tiny burning silhouette.

Time cracks back to full speed as he swings with his entire body — a colossal crescent arc of searing light erupts from the blade, tearing across the sky and flooding the whole frame white, the shockwave blasting the ash clouds outward in a perfect expanding ring — and as the glare fades a molten amber seam burns across the leviathan's full length where the arc passed, erupting in chains of white-gold detonations as the colossal body sunders into two immense halves, each edge cauterized in glowing ember-light with no gore, the severed silhouettes plummeting in opposite directions trailing fire and smoke until they slam into the calderas below — twin apocalyptic impacts that erupt in fountains of molten lava, hurl up mushrooming clouds of ash and cinder, and send fresh lava flows cascading down every slope; the camera pulls back into a vast trembling wide as the blast wave rocks the rider's dragon mid-air, the rider standing braced on the saddle with the dimming sword lowered, a tiny victorious silhouette against the burning crash-glow, the falling ember-rain, and the lava-lit peaks.
```

---

### 35. 精灵公主迎战 36 名兽人一镜到底

一名精灵公主在精密编排的 30 秒连续追随镜头中，通过严格计数的闪现位移与剑击，逐一击败 36 名外形不同的兽人。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 视觉特效 · 角色一致性 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Kōda (@aimikoda) |


[观看成片](https://x.com/aimikoda/status/2083822392212635938) · [原始来源](https://x.com/aimikoda/status/2083822392212635938) · [提示词来源](https://x.com/aimikoda/status/2083822518658334946)

#### 提示词

```text
16:9, 30-second photoreal live-action fantasy battle in clear daylight, crisp high-resolution cinema detail, natural textures, clean HDR contrast, one wide lens and one uninterrupted controlled handheld pursuit shot.

The elf princess is tall and slender, with fair freckled skin, blue-gray eyes, long wavy platinum-blonde hair, pointed ears, a silver branch circlet, and a flowing silver battle gown with a scale-textured mantle. Keep one identical princess throughout. She holds one silver longsword in her right hand.

Exactly 36 distinct armored green-skinned orcs enter over time, each with a different weapon, helmet, armor, or silhouette; orc 36 is a heavy captain with a cleaver. Never reuse an orc. Every stroke hits exactly one target. Show 36 separate contacts, green-fluid releases, and individual defeats. No multi-target cut; shockwaves move dust only. Each next orc actively attacks, guards, evades, or intercepts.

Rotate Zornhau, Zwerchhau, Unterhau, Krumphau, Scheitelhau, straight thrust, moulinet reverse cut, draw cut, and pivoting back cut without adjacent repetition.

Every relocation uses this rhythm: clean micro-anticipation; a white-silver flash fully hides the princess and she vanishes; the camera continues its normal physical follow with the environment visible; a second local flash reveals her beside the next target in a fully formed attack pose. Show no transit body movement and no whip pan.

The camera stays close, following with smooth handheld sidesteps, retreats, arcs, drops, rises, and pivots. It travels toward each flash destination without snapping, resetting, teleporting, or hiding a cut. Keep princess, orcs, background, debris, hair, cloth, fluid, and particles sharply resolved. No motion blur anywhere.

SEQUENCE: ONE CONTINUOUS SHOT

Beat 1 / 0-3s: Rear 3/4 WS, follow behind the princess into a sunlit battle already in progress. The orcs occupy successive depth pockets, not one flat crowd; only nearby attackers are readable. Orc 1 charges while she forms the opening anticipation pose.

Beat 2 / 3-10s: CONTINUE SAME SHOT through orcs 1-9. Follow attacks from alternating sides with physical sidesteps and arcs. Perform nine fast but separate vanish, follow, reappear, single-target cycles using different techniques. Preserve each crisp contact, green-fluid release, recoil, and fall before the next attack. End with nine defeated as orc 10 attacks from behind.

Beat 3 / 10-17s: CONTINUE SAME SHOT through orcs 10-18. Pivot around the princess to catch the rear attack, move ahead, backpedal while leading, then arc around as threats enter from different directions. Show nine more individual attacks and one-orc cuts in a changed order. She appears only in sharp anticipation, contact, and finishing poses. End with eighteen defeated and orc 19 intercepting.

Beat 4 / 17-24s: CONTINUE SAME SHOT through orcs 19-27. Drop beside timber, rise around a shield, pass behind an axe raider, then turn toward an attacker descending from rubble. Increase tempo across nine distinct parries, evasions, lunges, guards, and single-target finishes. Each relocation uses two local flashes with continuous environment between them. End with twenty-seven defeated as the final nine surround her.

Beat 5 / 24-30s: CONTINUE SAME SHOT through orcs 28-36. Enter a tight controlled pursuit orbit, changing proximity and height along one physical path. Orcs 28-35 each receive a separate technique, contact, green-fluid release, and fall. The captain attacks last; sidestep his cleaver as one flash hides the princess and the next reveals her beyond him in a sharp Scheitelhau finish. His delayed impact affects only him. End with all 36 individually defeated.

SOUND: No dialogue or subtitles. Daylight battle ambience, sword transients, 36 distinct contact accents, individual orc reactions, dry flash cracks, and accelerating percussion.

VFX: Local white-silver flashes cover only the princess during vanish and reveal. Green fluid begins only at sword contact. Render every effect with crisp edges and zero motion blur.

EXCLUDE: Motion blur anywhere, whip pans, cuts, hidden cuts, lens changes, camera resets or teleports, visible transit, morphing, stretched limbs, extra or smeared anatomy, duplicates, multi-target strikes, low resolution, soft focus, haze, grain, compression artifacts, and night lighting.
```

---

### 36. 隐形室友

一名看不见的室友洗碗、做饭、偷吃薯条，为疲惫的人类盖好毯子，最后用一罐冰啤酒结束这段温馨的 30 秒喜剧短片。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 视觉特效 · 角色一致性 |
| 规格 | 30s · 16:9 |
| 发布者 | Dheepan Ratnam (@Dheepanratnam) |


[观看成片](https://x.com/Dheepanratnam/status/2083838244211376638) · [原始来源](https://x.com/Dheepanratnam/status/2083838244211376638) · [提示词来源](https://x.com/Dheepanratnam/status/2083838246459408833)

#### 提示词

```text
The Invisible Roommate

Concept: An invisible being lives with a human and tries to be helpful… but gets a bit too comfortable.

Full Prompt:

A small messy apartment in the late afternoon. A young man comes home, drops his keys, and goes to the kitchen. Unseen by him, an invisible figure is already there — only faint heat shimmers and subtle air movements reveal its presence.

The invisible being starts helping: floating dishes clean themselves in the sink, the fridge door opens and ingredients float out, a pan starts cooking perfect food on its own. The human walks past, confused but too tired to question it.

The invisible being grows bolder — it sits on the couch (cushion sinks), steals a fry from the plate, and even puts its “feet” up on the table.

Later that night, the human falls asleep on the couch. The invisible being carefully pulls a blanket over him, then opens the fridge again, takes out a cold Budweiser, and sits in the armchair. The can opens by itself.

After a long sip, the being lets out a quiet, satisfied sigh and the camera slowly reveals a faint outline of a smile in the air.

Warm apartment lighting, subtle visual effects for invisibility, cozy comedy tone, satisfying final shot.
```

---

### 37. TALON 啤酒广告

一支 30 秒高端啤酒广告，以时间轴快切、动感运镜、微距产品镜头、荒漠公路氛围和最终产品英雄镜头推进。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 产品一致性 · 硬切 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | TechHalla (@techhalla) |


[观看成片](https://x.com/techhalla/status/2083854169782325248) · [原始来源](https://x.com/techhalla/status/2083854169782325248)

#### 提示词

```text
High-energy American premium beer commercial in the kinetic visual language of top Spanish beer ads (Águila-style dynamism): extremely fast rhythmic cutting, aggressive camera movement, constant forward energy, product always the absolute hero. Shot on anamorphic cinema lenses with rich contrast, warm golden highlights, deep blacks, subtle film grain, perfect motion blur, and hyper-detailed product beauty. Every frame feels alive, expensive, and addictive.

Brand: TALON

Logo: bold condensed American industrial sans-serif “TALON” in pure gold, with a sharp geometric falcon talon gripping a single hop cone integrated into the letter “A”.

Bottle: tall elegant amber-glass longneck, matte black body label with the gold TALON logo centered, thin gold foil neck collar, embossed talon mark on the shoulder, heavy cold condensation beads, liquid a luminous deep-golden amber with dense creamy white head when poured.

0-2s: [Extreme close-up, rapid whip-pan] Ice explodes as a hand yanks a freezing TALON bottle from a metal cooler. Condensation flies. Instant cut.

2-4s: [Dynamic tracking, low angle] Bottle spins in slow-motion mid-air against a blazing desert sunset highway, gold logo catching the last light. Hard cut.

4-6s: [Handheld kinetic] Young crew in a vintage convertible flying down an empty American desert road at golden hour, wind ripping through hair, laughing. Driver raises a cold TALON without looking away from the road. Cut on the laugh.

6-8s: [Macro beauty, 120fps] Perfect pour: thick golden liquid cascades into a chilled glass, dense foam rising in ultra-slow motion, tiny bubbles racing upward, condensation racing down the glass. Sound of liquid is almost tactile.

8-10s: [Fast montage, 4 cuts in 2 seconds] Rooftop at dusk – city lights ignite. Friends clink bottles hard. Foam overflows. A girl throws her head back laughing. A guy points at the sky. Every cut lands on the bottle or the foam.

10-13s: [Steadicam push through crowd] Night football tailgate, American flags, smoke from grills, pure energy. Someone cracks a TALON, the distinctive sound cuts through the noise. Camera finds the bottle first, then the smiling faces around it.

13-16s: [Ultra-close product sequence] Three rapid macro shots:
– condensation drop sliding down the gold logo
– thick white head collapsing slowly over the rim
– bottle rotating under hard practical light, label flashing gold
Hard rhythmic cuts timed like drum hits.

16-19s: [Aerial + ground hybrid] Drone diving over a nighttime desert campfire circle. Friends sit around the flames, bottles in hand. Camera lands on one bottle standing upright in the sand, glowing from the firelight, logo sharp. Instant cut to a hand grabbing it.

19-22s: [Aggressive handheld, pure chaos energy] Bar bathroom mirror selfie energy turns into a full dance-floor explosion. Bottles raised high above the crowd. Liquid flying. Faces pure joy. Camera never stops moving, always finding the TALON label in the chaos.

22-25s: [Slow-motion climax beauty] Single perfect bottle of TALON held against a black background, spinning slowly. Gold logo catches every light. Then the same bottle is slammed down onto a wooden table in real time – foam erupts. Freeze on the eruption for half a second.

25-28s: [Final product hero] Extreme close-up of the open bottle and a full glass side-by-side, both sweating, foam perfect, gold logo glowing. Soft anamorphic flare. The word “TALON” appears in the same gold type over the image.

28-30s: [Hard cut to pure black] Gold TALON logo + talon icon slam on screen with the line: “TALON. Grip the night.” Hold for one beat of pure silence, then cut to black.

Cinematic anamorphic look, rich golden color grade, deep contrast, aggressive rhythmic editing, constant kinetic camera energy, hyper-detailed product macro photography, perfect condensation and liquid physics, zero dead frames, pure American freedom energy filtered through European beer-commercial precision, no dialogue, pure visual and emotional momentum.

Place your product as reference, tweak the prompt a bit and you are good to go!
```

---

### 38. 时间戳香水广告

一支 20 秒奢华香水广告，以 Omni Reference 人像和六段时间戳分镜控制人物一致性、节奏、运镜、产品揭示与台词。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 1 个参考素材 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 产品一致性 · 声音设计 |
| 规格 | 20s · 16:9 |
| 发布者 | Ege (@egeberkina) |


[观看成片](https://x.com/egeberkina/status/2083845184891003156) · [原始来源](https://x.com/egeberkina/status/2083845184891003156)

#### 提示词

```text
Use the provided Omni Reference image for the main character. Preserve his facial features, beard, clothing style, and overall identity consistently across every shot.

Luxury fragrance commercial. Duration: 20 seconds. Cinematic. Film grain. Muted earthy colors. Soft overcast daylight. Shallow depth of field. Slow, elegant camera movement. Natural ambient sound mixed with subtle orchestral strings and deep cinematic bass. No logos, no existing brand references, no text overlays.

[0-3s] Extreme close-up. The man adjusts the collar of his wool coat. His fingers briefly touch the side of his neck where fragrance would normally be applied, but nothing is shown. Natural fabric sounds. Slow inhale. Camera gently pushes in.

[3-6s] Wide shot. He walks alone across an open countryside path. The wind moves his coat and flat cap. Everything feels calm and deliberate. No rush.

[6-9s] As he passes an elderly gentleman, the man subtly pauses and smiles with quiet admiration. No dialogue. Just a respectful nod before continuing.

[9-12s] A woman reading on a nearby bench instinctively looks up as he walks by. She follows him with her eyes for a brief moment, smiling naturally before returning to her book. No exaggerated reactions.

[12-15s] A medium tracking shot from behind. A large dog notices him and calmly walks beside him for a few steps before stopping. Leaves move gently across the ground. The atmosphere feels effortless and magnetic.

[15-18s] Interior. He enters a quiet, refined apartment. Golden evening light spills through the windows. He removes his flat cap and places a minimalist fragrance bottle onto a wooden shelf for the very first time. Only now is the product revealed. No label is visible.

[18-20s] Hero close-up of the bottle beside him. The camera slowly racks focus from the bottle to his eyes. He looks directly into the lens with complete confidence. He quietly says: "You'll remember the scent. But never forget the man." Fade to black.

Premium cinematic lighting. Ultra realistic. Natural facial animation. Elegant pacing. Luxury editorial photography aesthetic. Kodak Portra film look. 35mm anamorphic feel. High-end fragrance commercial quality.
```

---

### 39. 摩洛哥沙漠骑手模型对比

同一条 15 秒沙漠骑手一镜到底提示词分别测试 Seedance 2.5、Seedance 2.0 与 MiniMax H3，以固定侧向跟拍和持续变化的背景动作进行对比。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 创意实验 · 影视与叙事 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 运镜控制 · 角色一致性 · 视觉特效 |
| 规格 | 15s · 16:9 |
| 发布者 | shirish (@shiri_shh) |


[观看成片](https://x.com/shiri_shh/status/2083647664152100999) · [原始来源](https://x.com/shiri_shh/status/2083647664152100999) · [提示词来源](https://x.com/shiri_shh/status/2083661898579693766)

#### 提示词

```text
Continuous 15-second single unbroken take, hyperrealistic, 35mm film look, golden hour. Camera tracks sideways at constant speed alongside a lone rider on horseback galloping across Moroccan desert dunes, keeping the horse and rider perfectly framed in profile the entire duration. As they ride, the background continuously evolves: sandstone city walls give way to open dunes, a caravan of camels passes in the distance, dust devils swirl, and the sun sinks lower turning the light from gold to deep amber. A falcon swoops into frame, flies alongside them, and lands on the rider's outstretched glove without the camera ever changing position or speed. Sand kicks up in natural motion blur. No cuts, fixed lateral tracking shot from start to finish, consistent grade.
```

---

### 40. 被选中的手作陶杯

一只手作陶杯在完美的瓷杯后方等待被选择；这支 30 秒风格化 3D 短片使用三张参考图、严格限定的角色动画和 13 段情绪分镜。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 图片 · 3 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 时间轴分镜 · 多镜头 · 角色一致性 · 硬切 · 声音设计 |
| 规格 | 30s · 2.35:1 |
| 发布者 | Dheepan Ratnam (@Dheepanratnam) |


[观看成片](https://x.com/Dheepanratnam/status/2083869160677704006) · [原始来源](https://x.com/Dheepanratnam/status/2083869160677704006) · [提示词来源](https://x.com/Dheepanratnam/status/2083869167791305173)

#### 提示词

```text
[SCENE]
A 30-second stylised 3D animated short. A handmade clay mug at the back of a kitchen cupboard waits to be chosen, while the perfect porcelain cups at the front are used every day. Warm, funny, quietly moving. 2.35:1.

[REFERENCES]
All three: reproduce 100%, appearance only, do not inherit the reference background, lighting or camera.

<<<image_1@986ea8f7-24f6-4221-a537-b7b9b9885e83>>>
PIP: a small lopsided handmade clay mug, wobbly uneven walls, rim not level, small crooked handle, patchy cornflower-blue glaze thick at the base and thin at the rim showing terracotta beneath, a thumbprint in one side. Alive — two large expressive eyes with glassy highlights, small simple mouth. No arms, no legs.

<<<image_2@865a51f2-ef24-4faa-bf27-3a6c094df42c>>>
CLIVE: a flawless white porcelain teacup with a fine gold band at rim and foot, perfectly symmetrical, thin-walled. Alive — two large expressive eyes, small refined mouth, serene and faintly superior. No arms, no legs.

<<<image_3>>> the set@1b654fff-0b6e-4531-8cc4-61af3d39f6aa — cupboard interior, light and atmosphere ONLY: sage-green shelves with chipped paint, a front row of gold-rimmed cups, a dusty gap at the back, door ajar with a warm shaft of morning sun and dust motes.

[TECHNICAL]
High-end stylised 3D animated feature quality. Soft global illumination, physically based rendering, subsurface scattering in glaze and porcelain, warm colour science, shallow depth of field, volumetric light shaft. Beautiful CG animation — NOT photoreal, NOT live action, NOT stop-motion, NOT illustration, NOT anime.

ANIMATION LAW: performance is eyes, mouth and tilt only. Neither has arms or legs. They rock, lean and settle on the shelf — never walk, hop or fly.

[STRUCTURE]
13 segments, 12 hard cuts. S1/S13 = 84° wide inside the cupboard · characters = 47° at 30-60cm · reactions = 35° close · one 18° macro on the hand. No zooming.

[TIMELINE]
0:00-0:03 — 84° wide. Inside the dark cupboard. The front row of gold-rimmed cups gleams. Far at the back, in shadow, <<<image_1>>> sits alone.

0:03-0:05 — 35° close on <<<image_1>>>, eyes bright, leaning forward hopefully. PIP: "Today's the day."

0:05-0:07 — 47°. <<<image_2>>> at the front of the shelf, not turning round. CLIVE: "You said that yesterday."

0:07-0:09 — The cupboard door swings open. A shaft of morning light. Both squint. A hand reaches in and takes <<<image_2>>> from the front row.

0:09-0:11 — 35° close on <<<image_1>>>, light fading from his face as the door closes. His shoulders drop. PIP: "Tomorrow, then."

0:11-0:16 — MONTAGE, fast cuts on the same 84° angle: the door opens and closes six times, light shifting from morning gold to grey to evening amber to blue. Each time a hand takes a cup from the front. Each time <<<image_1>>> leans forward hopefully and settles back.

0:16-0:18 — 35° close on <<<image_1>>> in the dark, eyes lowered, no longer leaning.

0:18-0:20 — 47°. The door opens again. Grey rainy light this time, slower.

0:20-0:22 — 18° macro. The hand comes in — and stops. It hovers over the front row. It doesn't take one.

0:22-0:25 — 47°. The hand moves past the front row, reaching into the shadow at the back, and closes gently around <<<image_1>>>.

0:25-0:27 — 35° close on <<<image_2>>>, eyes wide, entirely surprised. CLIVE: "...Huh."

0:27-0:29 — 47°. <<<image_1>>> lifted out into the grey light, eyes enormous, overwhelmed. PIP: "Told you."

0:29-0:30 — 84° wide from inside the cupboard, out through the open door: <<<image_1>>> on the counter in soft light, steam rising. Hold.

[PHYSICS]
Ceramic weight — both rock and settle with real mass, wobbling on their bases, never bouncing lightly. The clay is duller and heavier than the porcelain, which rings faintly. The door swings with real hinge weight. Steam rises and curls. Dust drifts slowly in the shaft.

[LIGHTING]
One warm shaft through the door as the only source, shifting colour through the montage. 60:30:10 — deep cupboard shadow 60% / the shaft 30% / accent gold rims and PIP's blue glaze 10%. The back is genuinely dark; PIP is barely lit until 0:22.

[AUDIO]
MUSIC: warm score, solo piano with light strings — a simple hopeful theme entering at 0:03, thinning through the montage, dropping to almost nothing at 0:16, blooming warmly at 0:22 and holding. No comedy stings, no plucked cuteness.

SFX: door hinge and latch, ceramic settling on wood, the fine ring of porcelain, a distant kettle, rain on a window at 0:18, hot liquid pouring at 0:29.

DIALOGUE: five short lines only, warm and understated, never shouted, never cartoonish.

[LOCKS]
Exactly two characters, both crockery — nothing else comes alive, no faces on any other object. No human is shown beyond a single hand and forearm — no face, no body. Neither character has arms, legs, or moves on its own. PIP is never repaired, never becomes perfect, never cruelly mocked. Nothing breaks, nothing is dropped. No text, labels, logos or watermarks. Never photoreal, never live action, never stop-motion.
```

---

### 41. 古罗马泄露手机影像

一支 30 秒竖屏一镜到底视频，将公元 80 年的古罗马拍成粗粝不稳的手机纪实影像，依次经过市场、奴隶交易、酒馆斗殴、军团和斗兽场。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 声音设计 |
| 规格 | 30s · 9:16 |
| 发布者 | TechieSA (@TechieBySA) |


[观看成片](https://x.com/TechieBySA/status/2083864652388151426) · [原始来源](https://x.com/TechieBySA/status/2083864652388151426) · [提示词来源](https://x.com/TechieBySA/status/2083864656796422309)

#### 提示词

```text
FORMAT: Vertical 9:16 smartphone video. 30 seconds of continuous handheld footage. A real modern person walking through ancient Rome, 80 AD, filming on their phone. NOT a film. NOT cinematic. NOT color graded. Raw casual smartphone footage — looks like genuinely leaked impossible footage someone reposted.

CAMERA BEHAVIOR: Handheld, walking pace the entire time — camera bobs naturally with each step, micro-shaky, never stabilized. The filmer is exploring casually, phone half-raised, glancing the camera toward whatever catches their attention — never lingering more than a few seconds on anything. Autofocus hunts twice. Framing is instinctive and imperfect — tops of buildings get cut off, horizon tilts. One brief pixelated digital zoom. No deliberate composition ever.

VISUAL TEXTURE: Compressed digital smartphone video. Slightly overexposed Mediterranean sky. Natural noise in shadows. Flat, ungraded phone-camera color in harsh midday sun. Bleached stone, dusty ochre, terracotta. Noon light, no mood lighting.

SECONDS 0–5: Opens mid-stride, no intro. Walking through a packed Roman street market — vendors shouting in Latin, stalls of bread, olives, live chickens, amphorae. People brush past close to the lens. The camera sweeps across the chaos while walking, catching fragments — a merchant weighing coins, a woman haggling, a donkey. Keeps moving.

SECONDS 5–10: The filmer turns a corner and passes a slave market — a raised wooden platform, a trader calling out in Latin, a line of men and women standing while buyers inspect them. The camera catches it in passing — a few seconds, slightly too long, the way you’d film something disturbing without stopping — then the filmer keeps walking. Crowd noise continues, nobody around reacts, it’s an ordinary sight to them.

SECONDS 10–15: Shouting erupts ahead — two men are brawling outside a tavern, wrestling into a vegetable stall, produce scattering, the vendor screaming at them. A small crowd instantly forms, laughing and jeering. The camera swings toward it while still walking, gets a shaky half-view through the gathered onlookers’ shoulders, then the filmer pushes past and moves on. The shouting fades behind.

SECONDS 15–21: The street opens up. A column of Roman legionaries marches directly across the filmer’s path — red tunics, segmented armor, shields, hobnailed sandals hammering the stone in unison. The filmer stops walking for a moment to let them pass, camera panning along the line. Loud, rhythmic, intimidating. The last soldier passes and the filmer immediately walks on.

SECONDS 21–27: The filmer rounds a final corner and the Colosseum fills the frame — brand new, one year old, blinding white travertine, massive beyond the phone’s ability to capture it. Enormous crowds stream toward its arches. Colored awnings. Vendors selling food outside. The filmer tilts the phone up while walking toward it, trying to fit the full height — fails, cuts off the top. Tries the digital zoom on the upper arches — pixelates badly — pulls back out.

SECONDS 27–30: Still walking closer, camera on the arches and the crowds funneling in. A muffled roar erupts from inside the arena — tens of thousands of voices at once. The camera instinctively jerks up toward the sound. Cuts off abruptly mid-motion. No resolution.

AUDIO: Constant walking footsteps on stone. Wind buffeting the mic. Overlapping Latin everywhere — vendors, arguments, the slave trader’s calls, the brawl crowd jeering, marching boots in unison, and finally the massive interior roar of the Colosseum crowd. No music. No narration.

PEOPLE: Historically accurate. Plain wool tunics in undyed cream, brown, rust. Real weathered Mediterranean faces. No Hollywood Romans, no togas on commoners. Nobody performs for the camera. Everyone mid-task, mid-transaction, mid-argument. A real living city.
```

---

### 42. 鱼眼纽约街头时尚

一支高能量城市时尚短片，以超广角鱼眼镜头跟随模特穿行纽约，结合极低机位、甩镜、跳切、光轨和音乐播放器界面叠加。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 运镜控制 · 多镜头 · 角色一致性 · 硬切 · 视觉特效 · 声音设计 |
| 规格 | 20s · 16:9 |
| 发布者 | BMX (@bmx_ai13) |


[观看成片](https://x.com/bmx_ai13/status/2083863629590352329) · [原始来源](https://x.com/bmx_ai13/status/2083863629590352329)

#### 提示词

```text
A 15 second urban fashion film shot on dynamic ultra wide fisheye lens capturing a trendy female model strutting through New York street corners. She wears a black crop top low rise baggy white cargo pants high top sneakers silver sunglasses and large over ear headphones around her neck. High energy camera movements include extreme low angle worm eye perspective fast tracking whip pans tilt ups and energetic jump cuts. Scene alternates between bright natural daylight along urban brick storefronts with graffiti shutter doors and moody evening streetlights featuring subtle neon glow. Fast motion city traffic blurred in background. Fluid transitions include quick lens light leaks digital HUD music player UI overlays dynamic trailing light effects and a triple visual echo effect of the model. Photorealistic skin texture natural movement crisp urban ambient audio synced with rhythmic electronic music beats 16 ratio high contrast cinematic grading.
```

---

### 43. 水墨化身赛博朋克巨龙

一个连续跟拍镜头将落下的墨滴变成活体书法、液态飘带、悬浮巨龙与霓虹涂鸦，最终让巨龙吞没镜头。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 创意实验 · 影视与叙事 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 运镜控制 · 视觉特效 |
| 规格 | 30s · 16:9 |
| 发布者 | Pan (@sebatheepan) |


[观看成片](https://x.com/sebatheepan/status/2083877876550561800) · [原始来源](https://x.com/sebatheepan/status/2083877876550561800) · [提示词来源](https://x.com/sebatheepan/status/2083877878517670041)

#### 提示词

```text
A single drop of black ink falls onto a blank sheet of paper in extreme close-up. It spreads into intricate calligraphy that rapidly forms into living brush strokes. The strokes lift off the paper, becoming three-dimensional liquid ribbons that whip through the air, wrapping around floating books and scrolls that open and dissolve into swirling galaxies of letters. The ribbons accelerate, weaving a massive floating calligraphy dragon that coils through a storm of flying pages. The dragon dives, smashing through the paper world into a neon-lit cyberpunk city where the same ink now crawls across skyscrapers as living graffiti, reforming into the dragon’s face that opens its mouth and swallows the camera into pure black, only for a single glowing character to appear and explode into light. Continuous tracking, accelerating camera, constant liquid morphing and particle chaos.
```

---

### 44. 家庭包子早餐广告

一支 15 秒竖屏食品广告，在保持四名家庭成员一致性的同时，协调产品微距镜头、中文旁白、角色对白和精确口型同步。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 角色一致性 · 产品一致性 · 口型同步 · 多语言音频 · 声音设计 |
| 规格 | 15s · 9:16 |
| 发布者 | Kent Dhani (@kentdhani) |


[观看成片](https://x.com/kentdhani/status/2083875538435985692) · [原始来源](https://x.com/kentdhani/status/2083875538435985692) · [提示词来源](https://x.com/kentdhani/status/2083875542663582142)

#### 提示词

```text
Create a 15-second vertical 9:16 photorealistic Chinese baozi breakfast commercial in 4K at 24fps.

Use the same four Chinese family members throughout: a young woman around 24 years old with shoulder-length dark hair, a cream blouse, and a pastel cardigan; a mother around 46 years old with a neat low bun and beige blouse; a father around 48 years old with short black hair and a light-gray shirt; and a young man around 22 years old wearing a light-blue overshirt over a white shirt. Preserve their exact faces, hairstyles, ages, clothing, and body proportions in every scene. Their acting must feel warm, restrained, believable, and naturally affectionate.

The featured product is freshly steamed Chinese pork-and-scallion baozi with fluffy white dough, neat pleated tops, fully cooked juicy filling, and gentle realistic steam.

From 0.0–2.0 seconds, show a wide establishing shot of the family seated around a bright round wooden table. A bamboo steamer filled with baozi sits at the center as morning sunlight enters through large windows. An off-screen Mandarin female narrator says: 「清晨，从一笼热气开始。」 Only the narrator speaks. All visible mouths remain still.

From 2.0–4.0 seconds, cut to a medium close-up of the young woman presenting the bamboo steamer toward the camera with a friendly smile. She says clearly in Mandarin: 「刚出笼的包子，快尝尝！」 The narrator remains completely silent. Use precise Mandarin lip synchronization.

From 4.0–6.0 seconds, show an extreme macro shot of a hand opening the bamboo-steamer lid as warm steam reveals several soft white baozi. The narrator says: 「皮薄松软，热气腾腾。」 No visible person speaks.

From 6.0–8.0 seconds, show the family sharing baozi with wooden chopsticks. The father serves one to the mother and says: 「大家一起吃吧。」 Only the father speaks.

From 8.0–10.0 seconds, show the young man taking one natural bite, swallowing fully, then smiling and saying: 「太香了！」 He must not speak with food visible inside his mouth. The narrator remains silent during both dialogue scenes.

From 10.0–11.5 seconds, show an extreme macro close-up of a baozi opened in half, revealing fluffy dough and moist fully cooked pork-and-scallion filling. The narrator says: 「鲜香肉馅，汁水饱满。」

From 11.5–13.0 seconds, show the family happily enjoying breakfast together. The young woman says: 「吃饱了，今天有精神！」 Only she speaks; the others respond silently with natural smiles.

From 13.0–14.0 seconds, show wooden chopsticks gently lifting one baozi from the steaming basket. No dialogue or narration.
```

---

### 45. 森林守护者发现啤酒

一支 30 秒奇幻喜剧一镜到底，古老森林精灵化身人类走进营地，并以一本正经的啤酒广告式包袱收尾。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 品牌与营销 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 角色一致性 · 视觉特效 · 口型同步 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Dheepan Ratnam (@Dheepanratnam) |


[观看成片](https://x.com/Dheepanratnam/status/2083892598029078685) · [原始来源](https://x.com/Dheepanratnam/status/2083892598029078685) · [提示词来源](https://x.com/Dheepanratnam/status/2083892601036345506)

#### 提示词

```text
Deep in an ancient forest at dusk. The trees slowly part as a massive, majestic forest spirit rises from the earth — towering body made of living bark and moss, glowing green eyes, and large antlers formed from twisted branches. Birds fall silent. The ground gently trembles under its weight. It stands tall and powerful, looking like an ancient god. The forest spirit begins walking forward with slow, heavy steps, speaking in a deep, resonant voice: “For a thousand years I have guarded these woods… protected the balance… watched over every creature…” It suddenly stops mid-step. Its glowing eyes narrow. It sniffs the air. “…What is that smell?” It follows the scent through the trees, shrinking and transforming as it walks. Bark turns to skin, antlers disappear, until it becomes a rugged, normal-looking man in outdoor clothes. He steps out of the treeline into a small campsite where three friends are grilling food and laughing around a fire. The man walks up seriously and continues in the same deep voice: “I have seen empires rise and fall… I have felt the turning of ages…” He pauses, staring at the cooler next to the grill. “…Do you have any Beer?” The group stares at him in silence. One of them slowly nods and hands him a cold bottle. The man takes it, cracks it open, takes a long satisfied sip, then exhales deeply and says with complete sincerity: “This… is worth the wait.” The camera slowly pulls back as warm firelight glows on his face. A smooth, confident commercial voiceover comes in: “When you’ve been waiting a thousand years… make it count. Cinematic fantasy lighting in the forest that transitions into warm, golden campsite firelight. Epic presence that becomes casually human. Strong comedic timing. Clean, modern commercial feel on the final voiceover.
```

---

### 46. 末日街头武士刀大战巨兽

一段 30 秒时间轴动作戏，在锁定金发战士战术服装一致性的同时，连续编排武士刀特技、群怪战斗与黑暗骑士首领战。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 视觉特效 |
| 规格 | 30s · 16:9 |
| 发布者 | Trailsahead (@Linkinpark3Park) |


[观看成片](https://x.com/Linkinpark3Park/status/2083885540076851290) · [原始来源](https://x.com/Linkinpark3Park/status/2083885540076851290) · [提示词来源](https://x.com/Linkinpark3Park/status/2083885953626829071)

#### 提示词

```text
[视觉风格与整体基调] 电影级科幻动作场面，写实真人风格，8K分辨率。场景设定在末日氛围下的城市商业街，时间为日落“黄金时刻”；街道上遍布混凝土瓦砾、破碎玻璃和废弃店面，背景中矗立着巨大的外星或奇幻风格怪物。

0:00 - 0:03：自拍视角。金发主角手持镜头，自信微笑并比出“剪刀手”对着镜头说话，背景中废墟街道上隐约可见狰狞的怪物。

0:03 - 0:07：动态攻击序列。她转身拔出武士刀，刀身拖曳着紫色光芒，随即挥出一记横斩，将一头长角的石像魔像击碎，使其化作飞溅的碎石与紫色粘液。

0:07 - 0:10：低身闪避滑铲。一辆侧翻的汽车在她附近坠落，她迅速贴地滑铲穿过沥青路面，以此躲避袭来的攻击与飞溅的残骸。

0:10 - 0:14：多重怪物连击。[服装一致性修正：严格锁定其修身黑色战术战斗服；战斗期间服装不得变形或改变]。她向前突进，挥出紫色能量弧光将一头体型巨大的怪物一分为二，随后转身踢飞一只多肢生物，将其撞穿商店的玻璃橱窗。

0:14 - 0:17：氛围停顿。玻璃碎片与尘埃纷纷落下，她持剑戒备，注视着周围溅满紫色液体的破碎店面。

0:17 - 0:21：BOSS登场镜头。一名身披重甲、手持巨型尖刺狼牙棒的黑暗骑士从天而降，重重砸向地面，巨大的冲击力使混凝土路面开裂。

0:21 - 0:25：高速闪避镜头。重甲骑士猛烈挥舞巨型狼牙棒；她身形灵巧，在骑士双腿间穿梭，躲避重击与横扫攻势。

0:25 - 0:28：高潮能量打击。她为武士刀注入强烈的紫色灵气，向着身披重甲的骑士颈部猛然挥出一记强力上挑斩，将这名首领级敌人彻底粉碎，化作一大团紫色能量与液体的混合物。

0:28 - 0:30：定格特写镜头。她将武士刀垂于身侧，在废墟街道上闪烁的紫色残光中傲然伫立，镜头随之向后拉远。

负面提示词（高级设置）：卡通、3D渲染、动漫风格、低分辨率。
```

---

### 47. 中世纪耻辱游街

一段 30 秒时间轴中世纪游街戏，从克制的公开羞辱逐步升级为钟声与人群呼喊的压迫声浪，并持续刻画贵族女子逐渐崩溃的情绪。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | TechHalla (@techhalla) |


[观看成片](https://x.com/techhalla/status/2083908360118616268) · [原始来源](https://x.com/techhalla/status/2083908360118616268) · [提示词来源](https://x.com/techhalla/status/2083908360118616268)

#### 提示词

```text
[STYLE + CAMERA + ATMOSPHERE]
Gritty high-end medieval television production look. Shot on ARRI Alexa XT with Cooke anamorphic lenses, mix of Steadicam tracking and handheld inside the crowd. Natural overcast daylight, desaturated dirty palette, visible film grain, realistic crowd physics and fabric movement. No modern polish.

[CHARACTERS]
Central figure: proud middle-aged noblewoman with roughly cropped short blonde hair, wearing a plain rough grey woolen penitential robe that fully covers her, barefoot, pale skin, rigid upright posture that slowly cracks under public condemnation. Stern middle-aged woman in plain brown religious robes walking just behind her, continuously ringing a large heavy iron handbell and chanting in a loud flat voice. Dense crowd of dirty medieval city dwellers of every age and class in period clothing packed on both sides and leaning from windows.

[LOCATION]
Narrow winding cobblestone streets of a medieval coastal city, high stone walls, arched doorways, wooden shutters, mud on the ground.

[TIMELINE]
0-6s: [Steadicam tracking medium-wide from the side] The woman in the plain robe walks steadily forward with forced dignity. The robed woman stays half a step behind ringing the bell and chanting “Shame. Shame. Shame.” Crowd begins to notice, first heads turn, early shouts of “Shame!” rise.

6-12s: [Handheld inside the pack, pushing closer] Crowd presses tighter along the path. Faces show pure contempt. Children point and call out. The woman keeps her chin high but her eyes start to glaze. Bell never stops. Chant continues: “Shame. Shame. Shame.”

12-18s: [Low tracking shot moving with her feet then tilting up to face] Bare feet slap wet cobblestones. A woman leans from a window and shouts “Shame!” The central woman’s jaw tightens, first tears form but she does not break stride. Crowd noise becomes a continuous wall of overlapping “Shame!” mixed with the bell.

18-24s: [Medium close-up handheld, slight shake] Camera stays locked on her face as the controlled mask cracks. Tears finally fall. She stares straight ahead, breathing harder. Behind her the religious woman rings harder and keeps the flat chant. The plain robe shifts with every step under the weight of the stares.

24-30s: [Pull-back Steadicam wide tracking] The full street is visible: wall of bodies on both sides, continuous shouting of “Shame! Shame! Shame!” mixed with the bell. The woman continues walking, posture still upright but now visibly broken, tears streaming, until the frame holds on her isolated figure moving through the condemnation.

[STYLE & QUALITY BOOSTERS]
Exact period production texture of a major series, coherent physics of every body and fabric movement, stable character continuity, natural motion blur, no modern digital cleanliness, no artificial enhancement.
```

---

### 48. 武装直升机突袭

一段 30 秒高预算空战片段，以五秒为单位编排高速运镜、变速、曳光弹与导弹攻击，并在穿越云层的金色日光中收束。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | OscarAI (@Artedeingenio) |


[观看成片](https://x.com/Artedeingenio/status/2083910367692910818) · [原始来源](https://x.com/Artedeingenio/status/2083910367692910818) · [提示词来源](https://x.com/Artedeingenio/status/2083910371086139759)

#### 提示词

```text
30-second cinematic combat helicopter assault, breathtaking high-budget military action film, ultra-dynamic editing, relentless aerial combat choreography, premium feature film quality, seamless kinetic camera movement, aggressive speed ramps, rapid match cuts, whip pans, rotating camera moves, dramatic perspective shifts, cinematic lens distortion, volumetric smoke, rotor wash, dust clouds, sparks, flying debris, golden sunset lighting, emotionally intense, no dialogue.

0–5s
Golden sunlight breaks through heavy storm clouds.
A formation of attack helicopters flies low across an endless mountain valley.
Rotor blades slice through the morning mist.
Extreme close-ups.
Pilot visor.
Hands gripping the cyclic.
Warning lights.
Missile pods.
The cockpit vibrates with engine power.
The camera rapidly alternates between enormous aerial vistas, intimate cockpit shots and dramatic fly-bys only meters from the helicopters.
Complete silence.

5–10s
The formation descends into the valley.
Rotor wash sends dust, leaves and debris spiraling into the air.
The helicopters weave between cliffs at incredible speed.
The camera races alongside them before instantly switching to nose-mounted perspectives, overhead tracking shots, impossible low angles beneath the rotor blades and first-person cockpit views.
Everything accelerates.

10–15s
An overwhelming aerial action montage.
The helicopters skim over rivers.
Bank sharply between rocky canyons.
Rise above dense forests.
Bright tracer streams illuminate the valley.
The camera never stops moving: continuous orbit shots, rapid whip pans, crash zooms, rotating 360-degree movements and seamless transitions through smoke, dust and sunlight.
Constant speed ramps amplify every maneuver.

15–20s
The lead helicopter dives toward an abandoned industrial complex.
Missile trails streak across the landscape.
Rotor blades narrowly clear rooftops and power lines.
The camera follows in one uninterrupted shot beneath the helicopter before climbing above the formation into an enormous panoramic flyover.
Every cut increases the spectacle.

20–25s
The formation splits into multiple attack runs.
Helicopters cross paths only meters apart.
Smoke rolls through the valley.
Mountains echo with rotor thunder.
The camera jumps between ultra-wide aerial compositions, spinning chase shots, cockpit close-ups, dramatic slow motion, impossible FPV movements and breathtaking crane-like flyovers.
The pace becomes almost overwhelming.

25–30s
Everything suddenly slows.
The helicopters climb through the clouds into brilliant golden sunlight.
The valley disappears beneath drifting mist.
The camera rapidly pulls thousands of feet upward into an immense aerial shot as the formation flies toward the horizon in perfect formation.
Hard cut to black.

Sound design: colossal hybrid orchestral score, thunderous helicopter rotors, turbine engines, rushing wind, distant explosions, metallic vibrations, cinematic fly-by whooshes, deep brass, taiko drums, powerful bass impacts, subtle radio chatter, overwhelming orchestral crescendo during the final climb.
```

---

### 49. 镜像空间双女主决斗

一段三场景武侠奇幻对比案例，使用三张图片参考，将折叠的赛博客栈镜像空间、雪地峡谷转场与沙漠巨兽决战通过匹配剪辑组合起来。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 3 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 多镜头 · 匹配剪辑 · 运镜控制 · 角色一致性 · 视觉特效 · 声音设计 |
| 规格 | 49s · 16:9 |
| 发布者 | 探路AI (@TanLuAI) |


[观看成片](https://x.com/TanLuAI/status/2083912044596830649) · [原始来源](https://x.com/TanLuAI/status/2083912044596830649) · [提示词来源](https://x.com/TanLuAI/status/2083912049508417552)

#### 提示词

```text
一段红衣女子与黑衣女子在镜像空间打斗的画面。画面必须呈现出极致逼真的电影级质感，完全消除任何 AI 生成的塑料感与平滑感。

人物设定：红衣女子气质极度高贵、冷酷、从容不迫，能施展魔法和控制金属。黑衣女子：武器为手中的短刀，会武侠轻功，并使用意念控制短刀的飞行。客栈：图3。

其他设定：画面有极强的电影感、节奏感，采用不同分镜和视角切换。画面动作有很强的冲击力。仅生成音效，不要生成背景音乐。

【渲染引擎与画质基准】
采用虚幻引擎 5.4（Unreal Engine 5.4）级别的物理演算标准，开启全景光线追踪（Ray Tracing）、路径追踪（Path Tracing）以及全局光照（Global Illumination）。画面分辨率锁定为原生 8K（7680 × 4320），无损 60fps 帧率输出。开启 Lumen 动态全局光照系统，确保所有间接光反射、色彩溢出达到最真实的物理状态。开启 Nanite 虚拟微多边形几何体系统，确保背景中每一块岩石、每一粒沙子、每一片雪花的几何切面都具有无限细节。

【摄影机与光学镜头参数】
全片采用 IMAX 70mm 胶片摄影机拍摄质感，模拟 ARRI Alexa 65 顶级数字电影机的色彩科学与宽容度。镜头群主要采用 Panavision Sphero 65 超广角与中焦段镜头。画面必须包含极其真实的电影级镜头缺陷，包括但不限于：轻微的边缘色散（Chromatic Aberration）、自然的镜头暗角（Vignetting）、高光区域的变形宽银幕拉丝眩光（Anamorphic Lens Flares）、以及随着动作极其自然过渡的动态运动模糊（Motion Blur）。景深控制（Depth of Field）需要根据主体的运动轨迹进行毫秒级的精准跟焦（Rack Focus），在特写镜头时呈现柔和且具有奶油般质感的焦外散景（Bokeh）。

【全局色彩科学与调色预设】
采用好莱坞史诗级大片的“Teal and Orange”（青橙色调）色彩空间作为基础，但在三个不同的场景中进行无缝的 LUT（色彩查找表）硬切转换。赛博客栈场景强调高对比度的冷雨青蓝色（Cyan）与霓虹洋红色（Magenta）、亮橙色（Neon Orange）的冲突；雪地峡谷场景剥离所有暖色，呈现极度冷酷、压抑的极地灰白（Polar Grey）、深邃的普鲁士蓝（Prussian Blue）与花岗岩黑（Granite Black）；荒原沙漠场景则被极度饱和的焦糖黄（Caramel Yellow）、烈日金（Sunburst Gold）与末日沙尘的赭石色（Ochre）所统治，最终在雷暴云的电光紫（Electric Purple）中达到色彩的高潮。

每个画面内容的提示词（分开生成，组合在一起）：

画面一：侧面近景视角，红衣女子微微笑了一下，极其优雅地抬起白皙的右手，在空气中极其轻柔地拨动了一下。就在这一绝对瞬间，极其恐怖的镜像空间（Mirror Dimension）维度法则瞬间降临！

画面二：整个赛博客栈、漫天的雨水、交错的黑色电缆以及闪烁的霓虹灯牌，在这一秒钟如同一面被巨锤砸碎的万花筒，瞬间分崩离析。巨大粗壮的红木梁柱和整片的瓦片屋顶被不可抗拒的力量切割成无数的几何区块，并开始以极其夸张的角度向内塌陷、90 度翻转甚至倒置。物理重力彻底消失，呈现出极其宏大且荒诞的 M.C. 埃舍尔（M.C. Escher）矛盾空间。

人物设定：红衣女子气质极度高贵、冷酷、从容不迫，能施展魔法和控制金属。黑衣女子：武器为手中的短刀，会武侠轻功，并使用意念控制短刀的飞行。客栈：图3。

画面一：近景面部侧面，潜伏在客栈高处阴暗空间悬梁处的黑衣女子突然在空间折叠的瞬间被无形的力甩飞了出去，彻底失去了地心引力，表情震惊，身体向着深渊般的“天空”无重力、背部朝下、双手朝上，非常高速地坠落。巨大粗壮的红木梁柱和整片的瓦片屋顶被不可抗拒的力量切割成无数的几何区块，周围环境呈现出极其宏大且荒诞的 M.C. 埃舍尔（M.C. Escher）矛盾空间。

画面二：高速跟拍下落。下落过程中，她左手腕部机括瞬间向空中弹射出一道半透明高强度细线。细线如触手般极其精准地缠绕在一块正在半空中疯狂翻滚的“客栈招牌”上。借着细线的拉力，黑衣女子高高拽住飞在镜像世界，通过发射细线和轻功，在多个建筑物间飞跃，如同武林高手结合忍者一样。

画面一：借着细线的拉力，黑衣女子稳稳地落在了一段已经垂直翻转 90 度的墙壁外立面上。在这光怪陆离的镜像维度中，她那绝顶的轻功得到了极其恐怖的展现。她在垂直的、甚至倒置的木质墙板与悬浮的建筑碎片上如履平地般极速奔跑（飞檐走壁）。

画面二：在高速的穿梭中，她意念一动，手中的短刀脱手而出。短刀飞速旋转，在扭曲的重力场中以极其刁钻的角度，飞向位于折叠空间中心的红衣女子。而红衣女子姿态优雅如初。面对刺来的飞刀，她不退反进，手指微微一勾。客栈废墟中极其大量的金属元素——生锈的铁钉、铜制的窗棂、排水管道的金属格栅，瞬间受到极其恐怖的磁场剥离，在半空中解体、熔炼，化作无数锋利的暗银色金属碎片。这些金属碎片如深海鱼群般在她周身极速环绕，瞬间交织成一面流线型的物理金属御守。飞刀击中金属墙，反弹回黑衣女子手中。

镜头保持高速运动，采用极其硬朗的无缝转场（Match Cut），将极其繁复的建筑碎片瞬间替换为极其纯粹的自然风貌。红衣女子优雅地挥动指尖，那环绕在她周身的无数暗银色金属碎片瞬间汇聚成一个巨大的金属钻头，直接向上方极其暴烈地击碎了镜像维度的空间壁垒。

伴随着玻璃碎裂般的清脆巨响，所有折叠的客栈木块、霓虹碎片在半空中毫无缝隙地溶解。周围的环境瞬间硬切为一个暴风雪肆虐的极地冰雪峡谷。这是一个极其短暂的过渡维度。狂风如刀，极其密集的六角形雪花粒子在画面中狂舞。两人在高达数千米的黑色冰封峭壁间高速穿越，随后坠入下一个空间。

黑衣女子在滚烫的沙丘上极其敏捷地连续翻滚卸力。近景特写她起身的瞬间，沙漠的天空被暗紫色的雷暴云笼罩。前方沙丘轰然塌陷，一头体长超过 300 米的超巨型机械沙虫，带着震耳欲聋的金属轰鸣声破沙而出，巨口仿佛要吞噬天地；而在雷电交织的后方，一个身高超过 100 米的远古沙骸巨人在风暴中拔地而起，巨大的沙质手掌带着毁天灭地的威势拍下。

然而，黑衣女子彻底无视了那足以令人精神崩溃的巨兽，双腿在沙地上猛然一蹬，高高跳起，挥动短刀，极其强硬地穿透了那头巨大的机械沙虫幻象（沙虫躯体如同被打散的光影般产生像素化溶解）。她冲破了一切魔法伪装，径直杀向站在沙丘最高处的红衣女子。

真正的死斗在黄沙中引爆！极具压迫感的手摇肩部摄影（Shaky Handheld on Shoulder Level）强势介入，镜头极度贴近角色的面部表情与刀刃碰撞的微距特写（Macro Close-up），强调近身搏斗的极度危险与真实感。黑衣女子的动作凌厉到了极致，她的短刀，每一招都是冲着咽喉、心脏等致命要害部位而去的毒辣突刺与劈砍。

反观红衣女子，面对这狂风骤雨般的近身刺杀，依然保持着那份令人绝望的从容与优雅。她的身姿如同在沙漠中漫步和瞬移，每一次漫不经心的格挡都妙到毫巅，并且非常巧妙地躲过黑衣女子的攻击，并多次重掌打中黑衣女子的面部。全程红衣女子都未曾受过哪怕一丝一毫的轻伤，连一根头发丝都未曾断裂。武林高手过招的电影感画面。

面对黑衣女子拼尽全力的一记险恶直刺，红衣女子没有使用格挡，而是以一种近乎艺术般的优雅瞬移。就在黑衣女子因刺空而重心轻微前倾的绝对瞬间，红衣女子的右手以一种看似缓慢实则极速的诡异节奏极其轻柔地探出。没有绚丽的光影，这只白皙的手掌就那么极其安静、极其优雅地印在了黑衣女子打斗胸口上。

但这极其轻柔的一掌，蕴含的却是直接撕裂宇宙维度的恐怖纯物理震荡！“轰！”一股没有掺杂任何光影颜色的、极其纯粹的空间震荡波（Spatial Shockwave）猛烈爆发，直接将前方数百米范围的空气压缩成透明的音障云。镜头切入中焦段的标准电影特写（Cinematic Medium Close-up），坚决摒弃任何慢动作（Zero Slow-motion），保持极其凌厉、顺滑的 60 帧真实物理时间流速。黑衣女子以极其恐怖的速度向后倒飞。

在她倒飞的轨迹上，沙漠的虚空壁垒像巨大的玻璃穹顶般被彻底坍缩，一个极度深邃的多元宇宙时空隧道。虫洞内部只有纯粹的黑暗与流转着扭曲重力场的引力波。最后镜头跟随表情震惊的黑衣女子的倒飞轨迹极速后拉，黑衣女子毫无反抗之力，被深渊般的恐怖引力无情吸入，身影在扭曲的时空中迅速缩小、彻底吞噬。
```

---

### 50. 金色时刻屋顶跑者

一段 30 秒时间轴屋顶短片，从静态环境建立镜头转入齐胯跟拍，最后环绕至跑者正面，以亮起灯光的城市天际线收束。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 角色一致性 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | LudovicCreator (@LudovicCreator) |


[观看成片](https://x.com/LudovicCreator/status/2083915958524031087) · [原始来源](https://x.com/LudovicCreator/status/2083915958524031087) · [提示词来源](https://x.com/LudovicCreator/status/2083915958524031087)

#### 提示词

```text
[Global Setting]
Base Environment & Texture: A city rooftop garden at golden hour, warm orange light raking across wet pavement from earlier rain, soft haze in the skyline behind, string lights beginning to flicker on.

[Opening beat, 0–8s]: Wide shot. A runner in a grey hoodie jogs into frame along the rooftop path, breath visible in the cool evening air, camera holds static.

[Mid beat, 8–22s]: Camera begins a slow tracking pan alongside the runner at hip height, matching pace. Passing shots of string lights, a couple sharing a bench, steam rising from a nearby vent. Light shifts from orange to a deeper blue as the sun dips further.

[Closing beat, 22–30s]: Runner slows to a stop at the rooftop edge, camera arcs around to a three-quarter front view, city skyline fully lit behind them, runner catches breath and looks out over the view. Hold on final frame.

Audio: Footsteps on wet concrete, distant city ambience, wind, no music.
```

---

### 51. 贴纸式时尚换装

一段 30 秒竖屏时尚短片，以四个固定服装贴纸、鼠标指针和全身贴纸飞入重叠机制，让同一位女主角连续切换五套韩系偶像造型。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 品牌与营销 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 角色一致性 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 30s · 9:16 |
| 发布者 | BubbleBrain (@BubbleBrain) |


[观看成片](https://x.com/BubbleBrain/status/2083939966594527607) · [原始来源](https://x.com/BubbleBrain/status/2083939966594527607) · [提示词来源](https://x.com/BubbleBrain/status/2083939966594527607)

#### 提示词

```text
30-Second Vertical Fashion Transformation Video (9:16)

Style: High-end fashion magazine motion cover + K-pop idol styling collage + social media outfit transition video.

Use the uploaded reference image for the female protagonist’s identity, facial features, hairstyle, makeup, and overall appearance. Use the generated image as reference for the overall collage composition, layout, floating sticker characters, white dashed outline effect, and five modern fashion / K-pop idol outfits.

Create a 30-second 9:16 vertical fashion transformation video with a clean luxury studio aesthetic. The visual style should feel like a dynamic fashion editorial cover mixed with K-pop idol concept photoshoot materials and viral outfit transition videos. The image should look premium, elegant, minimal, and realistic. All movements should feel natural. Every transformation must be smooth and stylish. The protagonist must always remain the exact same person.

CHARACTER CONSISTENCY

The central female protagonist must always be the same young adult woman from the reference image.

Maintain consistent:
facial structure
eyes, nose, lips, face shape
skin tone
hairstyle and hair volume
makeup style
age appearance
body proportions
jewelry style
overall Korean idol aesthetic

Appearance anchor:
cool fair skin tone
long black wavy hair
soft airy bangs
delicate Korean-style makeup
subtle pink blush
soft nude lips
pearl earrings
thin necklace
delicate rings and bracelets
slim elegant figure
calm, refined, slightly distant idol aura

The central character starts wearing the main stage outfit:
White / ivory crystal stage outfit
diamond decorated bustier-style top
matching high-waisted short skirt
sequins
pearls
layered folds
flowing sheer fabric details

Overall feeling: luxurious, glowing, like a K-pop group center performer stage costume.

COLLAGE LAYOUT

Scene:
A bright white / light gray seamless studio background. The background and floor blend naturally together. Soft diffused fashion studio lighting. Clean luxury editorial atmosphere.

Camera:
fixed front-facing camera
slightly elevated angle
close distance
no zoom
no camera movement
no rotation
no panning

Composition:
Main protagonist positioned slightly right of center
Largest figure in the frame
Four smaller floating outfit sticker characters around her
Bottom-right area remains clean and empty
The composition must match the reference collage layout.

FOUR FLOATING OUTFIT STICKER CHARACTERS

Around the central character, place four smaller floating versions of the same woman. They are not thumbnails.

Each one must be:
a complete full-body cutout
naturally cropped following the body silhouette
surrounded by a white hand-drawn dashed outline
like a floating fashion sticker

All four characters remain fixed in position throughout the video.

Top Left
White trainee / practice outfit
white cropped hoodie
white pleated skirt
youthful clean athletic feeling
rehearsal room idol trainee style
relaxed natural pose

Top Right
Black and white airport fashion outfit
white inner top
white knit cardigan
black details / buttons
black high-waisted bottoms
black shoulder bag
sunglasses resting on head
Feeling: idol airport fashion, casual street style.

Middle Left
Black and white secondary stage outfit
black and white cropped performance top
metallic decorations
chains
studs
decorative straps
black and white pleated skirt
Feeling: cooler, stronger comeback stage outfit.

Bottom Left
Black luxury editorial dress
black satin fitted dress
subtle slit or folded fabric details
elegant
mature
cold fashion magazine feeling

TRANSFORMATION MECHANISM

A white hand-shaped mouse cursor appears. It sequentially clicks the four floating outfit stickers.

Every click follows the same transformation:
The selected small character remains in its original position.
A duplicate full-body sticker version is created.
The sticker flies toward the central character.
It gradually scales up.
The white dashed outline stays attached to the silhouette.
When the flying sticker perfectly overlaps the central character’s head, shoulders, waist, and pose:
The outfit changes instantly and smoothly.

The flying element must always be:
a complete human figure
not clothing pieces
not isolated accessories
not rectangular cards
not abstract effects

TIMELINE

0-3.5s — Fashion Cover Comes Alive

Central character wears the white crystal stage outfit. She stands slightly turned toward camera.

Pose:
one hand near collarbone or hair
other arm relaxed
calm magazine-cover expression

She slowly raises her eyes toward the camera. A subtle head tilt. A very small relaxed smile. The four sticker characters remain frozen around her. The scene should feel like a static fashion collage suddenly becoming alive.

Audio:
soft studio ambience
subtle fabric movement
quiet breathing
minimal luxury electronic beat begins

3.5-7.2s — First Transformation: White Trainee Look

Cursor moves to the top-left sticker. Click. The sticker flies diagonally toward the center and enlarges.

During the transition:
The woman gently lowers her hand from her hair.
Shoulders relax.
Body weight shifts naturally.

At 7.2s:
Transformation completes.

New outfit:
white cropped hoodie + white pleated skirt.

Movement after transformation:
straighten posture
slightly playful trainee energy
one hand behind waist
slight forward lean toward camera

Audio:
mouse click
clean swoosh
fashion transition hit
soft fabric movement

7.2-12.5s — Trainee Outfit Showcase

She performs small natural idol movements:
slight head tilt
looks into camera then away
gently touches skirt edge
hands return behind body
subtle side-to-side movement

Hair moves naturally. A small restrained smile. Not exaggerated cute. More like a professional idol photoshoot. Cursor slowly moves toward top-right sticker.

12.5-16.8s — Second Transformation: Airport Fashion

Cursor clicks top-right sticker. Sticker flies diagonally toward center.

At 16.8s:
Transformation completes.

New outfit:
white inner top
white cardigan
black high-waisted bottoms
black shoulder bag
sunglasses on head

She immediately grabs the bag strap.

Pose:
relaxed shoulder line
slight body turn
one leg slightly forward

Feeling: idol airport street photo comes alive.

16.8-21.2s — Airport Look Showcase

Natural fashion movements:
adjust cardigan
hold bag strap
turn into three-quarter profile
slowly return to camera
slightly lift chin

Expression: quiet confidence, elegant distance. Cursor moves toward middle-left sticker.

21.2-24.8s — Third Transformation: Black White Stage Look

Cursor clicks middle-left sticker. Sticker flies from left side into center. Transformation completes.

New outfit: black and white performance costume. Energy becomes sharper.

Movement:
slight shoulder drop then rise
one hand near waist
other hand touching hair
stronger eye contact
subtle stage pose

Audio:
stronger transition hit
metallic accessory sounds
sharper fashion beat

24.8-27.6s — Stage Outfit Showcase

Controlled performance movements:
slight forward lean
arms open slightly
hand follows body line
fingers brush hair or shoulder
eyes return to camera
subtle chin lift

More powerful idol stage aura. Cursor moves toward bottom-left sticker.

27.6-30s — Final Transformation: Black Editorial Dress

Cursor clicks bottom-left sticker. Sticker flies upward toward center.

Around 28.9s:
Final transformation completes.

New outfit: black satin fitted luxury dress.

Final pose:
one hand resting naturally in front
other arm relaxed
slight head tilt
slow return to camera
direct eye contact

Hair and dress fabric move slightly with natural inertia.

Final frame:
A premium fashion collage cover freezes.
Feeling: luxury magazine editorial, elegant, mature, cinematic.

Audio:
final click
elegant transition sound
subtle ending tone
soft breathing
music fades out

SOUND DESIGN

Overall sound: minimal, premium, fashion-focused.

Include:
minimal electronic fashion beat
mouse clicking sound
sticker flying swoosh
transformation impact sounds
fabric movement
hair brushing shoulders
bag strap movement
jewelry and metallic accessory sounds
subtle breathing

Avoid:
lyrics
dialogue
cartoon effects
exaggerated game sounds
noisy environments

STRICT RULES

Must have only:
one central woman
four fixed floating sticker versions

All characters are the same person.

Maintain:
same face
same hairstyle
same makeup
same identity
same body proportions

Four transformations must happen only through:
full-body sticker flying → scaling → overlapping → outfit change.

Do NOT create:
rectangular thumbnails
clothing flying separately
body duplicates
ghost images
double faces
extra people
distorted hands
face drift
changing identity

Camera must remain completely static.
No zoom.
No pan.
No rotation.

Style:
Modern Korean idol fashion.
Luxury studio photography.
High-end fashion collage.
Realistic human movement.

No:
anime
cartoon
fantasy
historical costume
exaggerated CGI effects.
```

---

### 52. Indomie Soto Ayam 日语广告

一支由分镜参考图驱动的 15 秒日语电视广告，在四位朋友、明亮厨房、泡面制作、包装、旁白、口型及最终产品英雄镜头之间保持严格一致。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 产品一致性 · 角色一致性 · 口型同步 · 多语言音频 · 声音设计 |
| 规格 | 15s · 16:9 |
| 发布者 | Kent Dhani (@kentdhani) |


[观看成片](https://x.com/kentdhani/status/2084082240578036223) · [原始来源](https://x.com/kentdhani/status/2084082240578036223) · [提示词来源](https://x.com/kentdhani/status/2084082246949187843)

#### 提示词

```text
Use @image1 as the exact approved storyboard reference for the four adult Japanese friends, female lead, bright modern kitchen, dining-table arrangement, Indomie Soto Ayam packaging, noodle preparation, ingredients, completed serving, wardrobe, lighting, shot order, and cheerful Japanese advertising style. Follow panels 01 through 09 in the exact order and transform them into one continuous 15-second, full-screen, photorealistic 16:9 television commercial. Do not show the storyboard grid, borders, panel numbers, headings, timecodes, Japanese captions below the panels, subtitles, or presentation layout.

From 0.0–2.0 seconds, show the same four adult Japanese friends enjoying Indomie Soto Ayam together around a wooden dining table in a bright sunlit kitchen. From 2.0–4.0 seconds, show the adult Japanese female lead smiling while holding one green Indomie Soto Ayam package toward the camera, with the front label and Indomie logo clearly visible. Preserve the same cast identities, hairstyles, pastel wardrobe, kitchen geography, table arrangement, and product package throughout.

From 4.0–6.0 seconds, show springy yellow noodles cooking in gently bubbling golden broth while one pair of chopsticks lifts a smooth portion from the pot. From 6.0–8.0 seconds, show one seasoning sachet pouring fine Soto Ayam seasoning naturally into a prepared noodle bowl with shredded chicken, scallions, and fried shallots. From 8.0–10.0 seconds, pour one continuous stream of clear golden broth into the bowl without splashing or overflowing. Keep the noodle, seasoning, steam, broth, hand, and utensil physics realistic.

From 10.0–11.5 seconds, reveal the completed premium bowl with springy noodles, clear golden chicken-flavored broth, shredded chicken, fresh scallions, fried shallots, one egg half, and one lime slice. From 11.5–13.0 seconds, return to the same four friends enjoying the noodles together with natural smiles and restrained nonverbal laughter. From 13.0–14.0 seconds, show the same female lead lifting one small portion of noodles with chopsticks, taking one natural bite, smiling warmly, and saying only: “おいしい！” Use clear native Japanese pronunciation and precise natural lip synchronization.

Use a bright and friendly native Japanese female narrator during the first six scenes. The narration is: “明るい食卓に、みんなの笑顔。” from 0.2–1.7 seconds; “インドミー・ソトアヤムで、インドネシアの味を。” from 2.2–3.7 seconds; “ふっくら、もちもちの麺を茹でて。” from 4.1–5.7 seconds; “香り豊かな特製スパイスを加えます。” from 6.1–7.6 seconds; “鶏のうまみが広がる、黄金色のスープ。” from 8.1–9.6 seconds; and “心まであたたまる、おいしい一杯。” from 10.0–11.0 seconds. The narrator remains off-screen and stops completely at 11.0 seconds. Narrator and model must never overlap, all other people remain silent, and no human voice continues after 13.8 seconds.

From 14.0–15.0 seconds, finish with a clean premium hero shot of one green Indomie Soto Ayam package standing upright beside the completed noodle bowl. Display only “インドミー・ソトアヤム,” “INDOMIE SOTO AYAM,” and “おうちで、インドネシアの味。” Hold the final composition steadily for the final 0.4 second.
```

---

### 53. 东京拉面店时间冻结与倒放

一段 30 秒写实拉面店短片，在碰撞泼洒的顶点冻结时间，环绕悬停的汤汁与面条，再将事故精准倒放复原，最后以女主心照不宣的特写收束。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 视觉特效 · 硬切 |
| 规格 | 30s · 16:9 |
| 发布者 | Oogie (@oggii_0) |


[观看成片](https://x.com/oggii_0/status/2084118983507312869) · [原始来源](https://x.com/oggii_0/status/2084118983507312869) · [提示词来源](https://x.com/oggii_0/status/2084118983507312869)

#### 提示词

```text
Style: Photorealistic cinematic realism. A cramped, atmospheric late-night Tokyo ramen shop — steam curling off broth pots, red paper lanterns, worn wooden counter, dangling bulb lighting, condensation on the windows, rain-slicked street glowing outside, subtle handheld camera movement, rich analog film grain.

0–4s: Medium-wide shot. A young woman in an oversized denim jacket sits alone at the counter, composed with the faintest hint of amusement, slowly slurping noodles with chopsticks. Behind her, a young cook crosses the narrow kitchen carrying two steaming bowls of ramen in one hand and a full kettle of hot broth in the other. Near the entrance, an elderly regular begins to rise from his stool to leave.

4–8s: Dynamic tracking shot. The elderly man stumbles backward and collides heavily with the cook. The bowls, noodles, broth, and kettle explode upward into the air. Broth stretches into long steaming ribbons with suspended droplets, noodles frozen mid-arc, steam curling in slow motion. The camera immediately performs a smooth orbital move around the collision as time freezes at the exact peak of the spill. Every face is locked in an expression of shock. Only the young woman at the counter continues moving naturally, calmly lifting another bite to her mouth.

8–17s: Slow 360-degree orbit. The camera gracefully circles the frozen shop. Broth hangs in midair like molten glass ribbons and floating spheres, noodles suspended in delicate loops, steam frozen into soft drifting clouds. The bowls, kettle, and chopsticks drift weightlessly in suspended time. The woman takes another slow bite, her eyes half-closed with an almost bored expression. Then the frozen world begins to rewind elegantly. Every droplet, every noodle, and every person moves backward with perfect precision, returning toward their original positions.

17–24s: Medium shot. The rewind ends flawlessly. The cook is once again carrying the bowls and kettle steadily. The woman looks up and casually raises two fingers, softly calling the cook by name. The cook turns his head at exactly the right moment, stepping around the elderly man as he rises. The collision never happens. A subtle, private smile flickers across the cook's face.

24–30s: Extreme close-up. Hard cut to the woman's face. She takes one final slow slurp with a knowing smile, her eyes almost completely closed. Very shallow depth of field. The red lanterns behind her melt into soft, warm bokeh.

Visual Quality: Photorealistic, cinematic image quality with highly accurate fluid and steam simulation, realistic gravity and collisions, motion blur only on moving objects, stable character consistency, seamless cinematic temporal continuity, natural facial performances, and premium filmic color grading.
```

---

### 54. 月光烘焙坊

一条结构化的 30 秒文生视频提示词，通过八个定时镜头、生成对白、连续角色和温柔的视觉包袱，讲述困倦小鼠与嘴硬心软猫头鹰的深夜故事。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 口型同步 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Dheepan Ratnam (@Dheepanratnam) |


[观看成片](https://x.com/Dheepanratnam/status/2084120407662031331) · [原始来源](https://x.com/Dheepanratnam/status/2084120407662031331) · [提示词来源](https://x.com/Dheepanratnam/status/2084120410140893413)

#### 提示词

```text
{
  "title": "Moonlight Bakery",
  "style": "3D Pixar family animation. Cobblestone alley at 2 AM, glowing bakery window, purple and amber tones, flour dust sparkling.",
  "shots": [
    {
      "time": "00:00-00:03",
      "type": "EXT. WIDE",
      "action": "Empty cobblestone alley. Single window glows warm. 'OWL & CROISSANT' sign.",
      "camera": "Static, slight breeze. Leaf rolls.",
      "dialogue": "(none)"
    },
    {
      "time": "00:03-00:05",
      "type": "INT. CLOSE-UP",
      "action": "Owl locks cash register. A bell tings.",
      "camera": "Over-shoulder. Flour dust catches light.",
      "dialogue": "Owl: (sighs)"
    },
    {
      "time": "00:05-00:08",
      "type": "LOW ANGLE",
      "action": "Door creaks. Mouse in striped pajamas shuffles in, eyes closed, swaying.",
      "camera": "Push-in. Mouse shadow huge and wobbly.",
      "dialogue": "Mouse: 'Mmm... one dream. Warm. With stars.'"
    },
    {
      "time": "00:08-00:11",
      "type": "TWO-SHOT",
      "action": "Owl stares. Mouse sways into display case. Owl catches falling macaron with one wing.",
      "camera": "Slight comedy zoom. Owl eyes widen.",
      "dialogue": "Owl: 'We're closed, little one.'"
    },
    {
      "time": "00:11-00:15",
      "type": "CLOSE-UP",
      "action": "Owl pulls out croissant with tiny star-shaped sesame seeds. Blows flour; it sparkles.",
      "camera": "Macro.",
      "dialogue": "Owl: 'This one's on the house. But you have to eat it here.'"
    },
    {
      "time": "00:15-00:20",
      "type": "WIDE",
      "action": "Mouse takes one bite, eyes closed. Curls up on flour sack. Crumbs form constellation.",
      "camera": "High angle, gentle.",
      "dialogue": "(contented sigh)"
    },
    {
      "time": "00:20-00:25",
      "type": "CLOSE-UP",
      "action": "Owl tucks tea towel over mouse. Turns 'CLOSED' sign around. Back says 'NAPPING.'",
      "camera": "Focus pull from mouse to sign.",
      "dialogue": "Owl: (soft hoot)"
    },
    {
      "time": "00:25-00:30",
      "type": "EXT. WIDE",
      "action": "Owl dims lights. Through window, mouse belly rises and falls. Stray cat curls by door.",
      "camera": "Pull back through window. Bakery light becomes small star.",
      "dialogue": "(none)"
    }
  ]
}
```

---

### 55. 地中海 16 毫米纪录片漫步

一段 15 秒档案纪录片风格短片，以不完美的手持跟拍、自然生活互动和 4:3 海边收尾，记录年轻女子漫步地中海滨小镇的过程。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 |
| 规格 | 15s · 4:3 |
| 发布者 | Cherry (@hey_am_cherry) |


[观看成片](https://x.com/hey_am_cherry/status/2083561941004685471) · [原始来源](https://x.com/hey_am_cherry/status/2083561941004685471) · [提示词来源](https://x.com/hey_am_cherry/status/2083562105186418695)

#### 提示词

```text
Style: Authentic late-1970s Mediterranean documentary captured on vintage 16mm Kodak film, naturally faded colors, subtle film grain, real optical imperfections, slight gate weave, shoulder-mounted handheld camera with imperfect human movement, soft vintage lenses, warm afternoon sunlight, realistic skin texture, no cinematic polish, feels like forgotten archival footage discovered decades later.

0–3 seconds: A close handheld tracking shot follows a young woman in her 20s walking slowly through a narrow seaside alley lined with whitewashed houses, hanging linen curtains gently moving in the ocean breeze. She wears a simple linen dress, a woven shoulder bag, and naturally messy hair with no makeup. Instead of posing, she lightly brushes her fingertips across the textured walls while quietly observing everyday life around her.

3–7 seconds: The camera naturally falls slightly behind her as she enters a tiny open courtyard where local people casually gather. An elderly man repairs a bicycle, someone waters colorful plants from a balcony above, laundry sways overhead, and a sleepy orange cat crosses directly in front of the lens. The camera subtly adjusts to avoid the cat, creating an authentic human reaction.

7–11 seconds: A young child runs toward a rolling wooden toy that passes close to her feet. She instinctively bends down, catches it with one hand, smiles warmly, and hands it back without stopping her walk. The child laughs and runs away. No one performs for the camera; everything feels naturally observed.

11–15 seconds: She reaches a small overlook facing the sparkling sea. Instead of stopping dramatically, she casually rests one elbow on an old stone railing while watching distant fishing boats. A gust of wind lifts loose strands of hair across her face. She gently moves them aside and continues walking out of frame as the handheld camera hesitates for a second before slowly following behind.

Image Quality: Ultra-photorealistic vintage documentary, authentic analog exposure, realistic human motion, organic focus breathing, imperfect framing, Kodak 16mm archival texture, subtle light leaks, soft highlight bloom, natural skin pores, no AI smoothness, 4:3 aspect ratio.
```

---

### 56. 生物机械末日 FPV

一段高速 FPV 镜头穿越被有机体吞噬的生物科技废城，攀爬活体高楼、旋转进入破裂内部，并在酸雨与发光碎片中俯冲重返战场。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 运镜控制 · 视觉特效 |
| 规格 | 12s · 16:9 |
| 发布者 | yes& (@yesand_ai) |


[观看成片](https://x.com/yesand_ai/status/2084129973682753965) · [原始来源](https://x.com/yesand_ai/status/2084129973682753965) · [提示词来源](https://x.com/yesand_ai/status/2084129973682753965)

#### 提示词

```text
In a ruined biotech city overtaken by organic growth, a hyper-speed FPV camera blasts forward through streets consumed by biomechanical structures; mutated soldiers clash with armored squads as acid rain streaks diagonally across the frame; the camera snaps into vertical climbs along living skyscraper walls, spins through ruptured interiors pulsing with bioluminescent veins, then dives back into open combat zones filled with explosions and collapsing terrain; organic particles and debris smear into luminous trails, creating a nightmarish fusion of technology, decay, and relentless motion.
```

---

### 57. 城市街头滑板 POV

一条精简的 15 秒第一人称滑板提示词穿行城市街道，并以墙面品牌涂鸦作为最终视觉落点。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 运镜控制 |
| 规格 | 15s · 16:9 |
| 发布者 | yes& (@yesand_ai) |


[观看成片](https://x.com/yesand_ai/status/2084129980351656404) · [原始来源](https://x.com/yesand_ai/status/2084129980351656404) · [提示词来源](https://x.com/yesand_ai/status/2084129980351656404)

#### 提示词

```text
Skateboarding city streets POV, 15s. The video should end with a wall featuring a doodle that says “yes&”.
```

---

### 58. 地下车库猫咪 FPV 追逐

一台超广角微距 FPV 摄影机紧贴逃跑猫咪的局部特写，在潮湿地下车库中高速追逐，并从猛烈加速切入 120fps 打滑细节，最终完成脱险。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 15s · 16:9 |
| 发布者 | yes& (@yesand_ai) |


[观看成片](https://x.com/yesand_ai/status/2084129984202096937) · [原始来源](https://x.com/yesand_ai/status/2084129984202096937) · [提示词来源](https://x.com/yesand_ai/status/2084129984202096937)

#### 提示词

```text
Ultra-wide-angle macro FPV body-hugging tracking shot chasing a cat. The subject is never shown fully, only fragmented close-ups pass the lens: the tip of an ear, whiskers, the edge of a paw, fur on the back brushing across the camera. The image performs rapid focus shifts between the trembling ear/whiskers and nearby environmental obstacles. 120fps high-frame-rate cinematography captures the high-frequency vibration and subtle tremors when the cat runs and lands.

Setting: an underground parking garage. Rough concrete floor, numbered pillars with unreadable markings, puddles and tire tracks reflecting light. The air is filled with fine dust and condensation mist. Distant headlights and cold white ceiling LEDs create sweeping contrast lighting. The space echoes, empty, oppressive, and cavernous.

Movement dynamics are highly irregular. The cat follows a nonlinear predator path through narrow gaps between pillars and parked cars, sharp 90° turns, explosive ground-level acceleration, tight lateral rolls skimming past door seams and guardrail edges. The camera follows with high-frequency vibration synchronized with the rhythm of the cat’s footsteps, producing forced micro-shakes. Exaggerated motion parallax makes pillars and wheels rapidly enlarge and streak past the lens.

Key physical interaction moment: An invisible downwash gust (from a passing vehicle and ventilation airflow) whips loose parking tickets, thin plastic bags, and fine dust from the ground into a spiraling tunnel. As the cat bursts through, scraps of paper stretch into radial speed lines under fisheye distortion. A tire rolls through a puddle, splashing fine droplets; water beads create realistic refraction and caustics in front of the lens.

Climactic moment: A car headlight suddenly sweeps across the scene. The wet ground flashes like a mirror. The cat’s paws slip briefly into a chaotic spiral loss of control, not injured, just a dangerous skid. The footage instantly switches to 120fps slow motion: claws gripping the ground, fur trembling, droplets flinging outward in arcs, surface tension stretching the water into threads. Immediately afterward the motion returns to extreme speed. The cat sprints along the edge of a ramp, hugging the wall, and precisely darts into a half-open maintenance door / narrow fence gap, escaping.

Atmosphere: claustrophobic, frantic, life-or-death tension—but ultimately a successful escape. Sound design suggests sharp rushing wind, echoing tire-water splashes, and metallic vibrations as guardrails whip past. The scene ends as the cat leaps into a safe shadowy corner, while the camera’s residual vibrations slowly settle into stillness.
```

---

### 59. 微缩雪村雪崩片场

一条竖屏手机一镜到底短片记录微缩电影片场：画外口令触发雪崩，吞没村庄并冲过镜头，最后在安静的“停机”口令中结束。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 视觉特效 · 声音设计 |
| 规格 | 15s · 9:16 |
| 发布者 | yes& (@yesand_ai), prompt credited to Assh sensei |


[观看成片](https://x.com/yesand_ai/status/2084129987003912503) · [原始来源](https://x.com/yesand_ai/status/2084129987003912503) · [提示词来源](https://x.com/yesand_ai/status/2084129987003912503)

#### 提示词

```text
Vertical 9:16 handheld phone video, 15 seconds, one unbroken take, no cuts. Close, high, looking down onto a miniature snow village. White powder snow with tiny wooden chalets and a frozen lake on the right. Miniature <ENTER CITY/TOWN NAME> — At the very bottom of the frame, the back of a woman's head and shoulders in a black "EFFECTS CREW" hoodie, cropped by the frame edge, very close to the lens. A black crane arm hangs into the upper right corner, a fine mist of fake snow drifting from it.

0–2s — Village silent, snow falling softly. An unseen voice calls out across the stage, echoing: "…and — ACTION!"

2–4s — A sharp mechanical crack: pneumatic release, metal pin dropping, deep rumble building underground. A wall of white powder begins sliding from the mountain slope above.

4–9s — The avalanche crashes down over the village. Loud roaring snow-rush. Over the roar, shouted instructions: "Camera two — push in on the chalets!" Snow buries the rooftops, tiny pine trees snap and vanish, the frozen lake cracks and swallows a chalet whole.

9–13s — The wave of snow pours over the near foreground edge, spraying past the lens; the crew member's shoulder flinches back instinctively.

13–15s — Sudden silence. Snow settles into a smooth white blanket over the ruined village. A beat of stillness, then a second voice, calmer, off-frame: "…cut it there."
```

---

### 60. 《地心引力》式空间站碰撞

两座巨型轨道空间站发生灾难性碰撞，金属撕裂、大气结晶、太阳能板破碎、残骸翻滚，一名宇航员从镜头前失控飞过。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 运镜控制 · 视觉特效 |
| 规格 | 10s · 16:9 |
| 发布者 | yes& (@yesand_ai) |


[观看成片](https://x.com/yesand_ai/status/2084130823054201207) · [原始来源](https://x.com/yesand_ai/status/2084130823054201207) · [提示词来源](https://x.com/yesand_ai/status/2084130823054201207)

#### 提示词

```text
A catastrophic collision between two massive space stations in low Earth orbit. Metal shears apart in slow motion as the stations grind into each other, sending a hailstorm of debris spiraling outward. Entire modules crumple like tin cans. Pressurized compartments blow out in violent bursts of crystallizing atmosphere. Solar panels shatter and cartwheel into the void. The camera tumbles through the wreckage as an astronaut ragdolls past, arms flailing. Explosions ripple down the station spine. Earth looms enormous in the background, serene and indifferent. Hyper-realistic, catastrophic scale, ISO debris field, 8k, Gravity collision sequence energy.
```

---

### 61. 静止人物延时流动

固定机位让中央人物如雕像般完全静止，同时周围人群与环境加速成具有强烈运动模糊的延时流动。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 运镜控制 · 视觉特效 |
| 规格 | 5s · 16:9 |
| 发布者 | yes& (@yesand_ai) |


[观看成片](https://x.com/yesand_ai/status/2084129993052021093) · [原始来源](https://x.com/yesand_ai/status/2084129993052021093) · [提示词来源](https://x.com/yesand_ai/status/2084129993052021093)

#### 提示词

```text
Keep the central person completely motionless and frozen like a statue. Animate only the surrounding background and people with fast-paced movement and heavy motion blur, creating a dynamic time-lapse effect around the static subject. The camera must remain perfectly fixed.
```

---

### 62. 东京多维自由落体

一名男子从东京摩天楼坠落，穿越浮世绘、鸟居、樱花星云等日式梦境，最终跌回涩谷十字路口，全程锁定面部与身体比例。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 运镜控制 · 角色一致性 · 视觉特效 · 多镜头 · 硬切 |
| 规格 | 30s · 16:9 |
| 发布者 | Martin (@martindacol) |


[观看成片](https://x.com/martindacol/status/2084145439176036502) · [原始来源](https://x.com/martindacol/status/2084145439176036502) · [提示词来源](https://x.com/martindacol/status/2084145439176036502)

#### 提示词

```text
A 30-second cinematic, ultra-wide photorealistic sequence. The camera dynamically orbits the subject, changing angles and trajectories every 2 seconds for continuous engagement. The focus strictly locks onto the character's full facial details, ensuring zero distortion to his face or body proportions throughout the chaotic motion.

[0-3 Seconds: The Accidental Fall]
The Asian man from the attached image (wearing round glasses, a black t-shirt, black athletic shorts, black socks, and black sneakers) walks casually atop a skyscraper overlooking Tokyo’s twilight Shibuya Crossing. He accidentally trips, gasps silently, and tumbles backward over the edge into free fall.

[3-25 Seconds: The Orbital Dreamscape Plunge]
As gravity accelerates his fall, he thrashes instinctively. The camera continuously orbits him every 2 seconds, tracking his undistorted expressions of terror as he crashes through rapid spatial rifts:

Ukiyo-e Abyss: Plunging through glowing, liquid-ink Hokusai waves and geometric indigo voids.
Torii Corridor: Orbiting through infinitely folding vermilion gates and darting golden-eyed phantom foxes.
Sakura Nebula: Tumbling through weightless pink blossoms, Edo-period gold clouds, and shattered Mount Fuji ice.
Noh Kaleidoscope: Spinning amid a ringed array of floating Noh and Kabuki masks that blink and trail ghostly afterimages.
Koi Galaxy: Hurtling through infinite bamboo forests interlaced with liquid galaxies and luminous giant koi.
Shinkansen Vortex: Reaching terminal velocity within a multidimensional spiral of glowing train tracks and flickering neon Japanese station signs.

[25-30 Seconds: The Reality Crash]
A 2-second frenzy of high-frequency flash cuts (sushi, Daruma, neon signs) assaults the background while the man remains perfectly frozen in focus. He shatters the final rift, violently crashing back into reality. His immense inertia halts instantly as he lands perfectly on his feet at the center of the Shibuya Crossing crowds. The camera snaps to a stable, frontal extreme close-up of his face—sweating, panting, and in shock (features fully preserved and undistorted). Surrounding pedestrians in earbuds walk by indifferently, ending abruptly on the stark contrast between his surreal panic and their mundane reality.
```

---

### 63. 云朵牧羊人

一段 30 秒的奇趣 3D 动画：牧羊人在浮空岛上放牧会变形的云羊，并与羊群一起躲避一朵暴躁的雷雨云。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 口型同步 · 声音设计 · 视觉特效 |
| 规格 | 30s · 16:9 |
| 发布者 | Dheepan Ratnam (@Dheepanratnam) |


[观看成片](https://x.com/Dheepanratnam/status/2084145160875651566) · [原始来源](https://x.com/Dheepanratnam/status/2084145160875651566) · [提示词来源](https://x.com/Dheepanratnam/status/2084145163694129428)

#### 提示词

```text
{
  "title": "Cloud Shepherd",
  "style": "3D Pixar family animation. Floating islands, pastel sky, fluffy cloud-sheep with little legs, golden morning light, whimsical.",
  "shots": [
    {"time":"00:00-00:03","type":"EXTREME WIDE","action":"Crane shot down through cotton-candy clouds. Shepherd whistles, herding cloud-sheep with feather-duster staff.","camera":"Crane descending. Sun flares.","dialogue":"(whistling)"},
    {"time":"00:03-00:06","type":"WIDE","action":"One cloud-sheep drifts away, forms T-rex, then bicycle. Other clouds confused. Shepherd's shoulders drop.","camera":"Static.","dialogue":"Shepherd: 'Bramble, stop becoming a dinosaur! You are a sheep!'"},
    {"time":"00:06-00:09","type":"CLOSE-UP","action":"Cloud-sheep shifts into heart shape, floats down, nuzzles shepherd's cheek. She gets slightly damp.","camera":"Macro. Water droplets on freckles.","dialogue":"Shepherd: (giggles, softening) 'Okay, one dinosaur.'"},
    {"time":"00:09-00:13","type":"TRACKING","action":"Shepherd chases flock to wooden pen. Cloud-sheep becomes slide, duck, then sheep again, hops inside.","camera":"Side-tracking, fast. Vapor trails.","dialogue":"Shepherd: 'Then we go inside.'"},
    {"time":"00:13-00:17","type":"WIDE","action":"Dark grumpy-faced storm cloud approaches. Shepherd looks up worried. Opens tiny umbrella.","camera":"Low angle. Thunder rumbles.","dialogue":"(none)"},
    {"time":"00:17-00:23","type":"MEDIUM","action":"Cloud-sheep huddle under tiny umbrella, spilling out. Bramble becomes umbrella shape to help cover.","camera":"High angle. Rain falls golden around them, not on them.","dialogue":"(rain patter, contented baaing)"},
    {"time":"00:23-00:27","type":"CLOSE-UP","action":"Shepherd hugs Bramble. Feels like warm cotton. Rainbows in vapor. Eyes closed peaceful.","camera":"Extreme close-up.","dialogue":"(soft humming)"},
    {"time":"00:27-00:30","type":"WIDE","action":"Storm passes. Sun returns. Shepherd and flock walk across rainbow bridge to next island, perfectly in line.","camera":"Pull back. Pastel sky.","dialogue":"(whistling resumes)"}
  ]
}
```

---

### 64. 坠落穿越 Instagram 信息流

一名定格动画创作者连续坠入五条“活起来”的 Instagram 帖子，由滚动界面遮挡每次无缝转场，最终落入自己完成的广告片中。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 6 个参考素材 |
| 使用场景 | 品牌与营销 · 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 角色一致性 · 视觉特效 · 声音设计 |
| 规格 | 15s · 9:16 |
| 发布者 | Jan (@janmexico) |


[观看成片](https://x.com/janmexico/status/2084140258396946606) · [原始来源](https://x.com/janmexico/status/2084140258396946606) · [提示词来源](https://x.com/janmexico/status/2084140262310166813)

#### 提示词

```text
Style: Playful cinematic stop motion, slightly choppy, exaggerated physical comedy
Output frame rate: 24 frames per second, but animate the character with a deliberate 5 frames-per-second stop-motion rhythm

CHARACTER IDENTITY LOCK
The man in every scene is the same man from reference image 1: tall and slim, lean build, short dark hair, round red glasses that never leave his face, black t-shirt, black jeans, white sneakers. His eyes are completely natural, symmetrical human eyes with normal pupils; the red glasses have thin clear lenses that do NOT magnify, bend, distort or blur his eyes in any frame. Stable facial identity and consistent body proportions across all posts.

REFERENCE IMAGES (in upload order)
Bedroom post: reference image 1 (man asleep in bed Instagram post)
Coffee post: reference image 2 (espresso machine kitchen Instagram post)
Studio post: reference image 3 (creative studio with monitors Instagram post)
AI generation post: reference image 4 (giant screen with GENERAR button Instagram post)
Commercial set post: reference image 5 (empty cinematic spotlight set Instagram post)
Final commercial frame: reference image 6 (the man frozen in hero pose in the spotlight)

Create one continuous vertical Instagram feed where the same man secretly moves between different Instagram posts. The entire 9:16 frame is a single continuous Instagram feed. Do not treat each reference image as a separate scene or separate shot. Only the photo area inside each Instagram post becomes alive. The black Instagram headers, captions, icons, usernames, likes and comments remain visible and behave like fixed foreground interface layers. The character must always remain behind the Instagram interface. He must never overlap the caption, icons, usernames or engagement area.

CRITICAL SWIPE TRANSITION ENGINE
Every transition must visibly look like the Instagram feed is being swiped to the next post. Do not cut directly from one completed post to another completed post.

For every transition:
The man jumps downward inside the current post. His body reaches the bottom edge of the photo area. The black caption section passes in front of him and hides him. While he is hidden behind the black interface, the entire Instagram feed physically slides upward in one continuous movement. The current post moves upward and partially leaves the screen. The next post rises into view from the bottom. For several frames, both the outgoing post and incoming post must be visible together in the same 9:16 frame. The man immediately continues the same downward movement, reappearing from behind the upper black edge of the incoming post. He lands inside the next photo area without resetting his pose or speed.

Do not show a finger. Maintain the same screen-space horizontal position of the man throughout the jump. His downward momentum before disappearing must match his downward momentum when he reappears. Each swipe should last approximately 0.35 to 0.5 seconds.

During every swipe: no hard cut, no sudden replacement, no crossfade, no dissolve, no flash frame, no black frame, no full-screen blur, no teleportation, no camera repositioning, no instant background change, no separate establishing shot of the next post. The Instagram interface, outgoing post and incoming post must all move together as one long vertically stacked feed. Use slight vertical motion blur only on the moving feed during the fastest part of the swipe. The character and interface must remain readable.

0.0 TO 2.5 SECONDS POST 1: THE SLEEPING CREATOR WAKES
Start with: reference image 1
Hold the post completely still for 0.3 seconds so it appears to be an ordinary Instagram image. The sleeping man's eyes open behind his red glasses. He blinks. His eyebrows rise: an idea has arrived. He sits up suddenly, pushes off the duvet, grabs the notebook from the nightstand and tucks it under his arm. He tiptoes toward the bottom edge of the photo with clear stop-motion poses and brief holds. He crouches deeply and jumps straight downward from inside the photo. He does not jump toward the camera. As he crosses the bottom edge, the black Instagram caption section moves in front of him and progressively hides his body. At the same time, begin the Instagram swipe. The bedroom post slides upward, the coffee post rises from the bottom, both briefly visible together. He continues falling and reappears from behind the coffee post's upper black boundary.
Sound effects: duvet rustle, floor creak, spring compression, continuous vertical swipe sound

2.5 TO 4.7 SECONDS POST 2: THE COFFEE STOP
Reveal: reference image 2
The kitchen remains empty of other people. The man lands on the kitchen counter beside the espresso machine. Cups and plates rattle. He grabs the freshly poured espresso cup and takes one large exaggerated gulp. Steam puffs. His eyes widen with energy, he does a satisfied full-body shake, now fully awake. He sets the cup down, crawls quickly to the counter edge and performs another downward jump. The black caption panel hides his body while the coffee post slides upward and the studio post rises from the bottom, both visible together. He reappears from behind the studio post's upper black edge and continues falling without pause.
Sound effects: ceramic clink, espresso hiss, huge gulp, energized exhale, continuous vertical swipe

4.7 TO 7.3 SECONDS POST 3: THE CREATION FRENZY
Reveal: reference image 3
The man lands seated directly into the rolling ergonomic chair, which rolls fast across the studio. He plants his feet, scoots the chair to the desk and types furiously in exaggerated stop-motion bursts. The monitors flicker with storyboards and video timelines. Sticky notes flutter off the wall. He scribbles one storyboard frame, holds it up, gives a satisfied nod. He pushes off the desk, the chair spins once, and he leaps from the spinning chair diving down through the bottom edge of the photo. The black footer hides him while the studio post slides upward and the AI generation post rises from the bottom, both visible together. He reappears from behind the incoming post's upper black edge, continuing the same headfirst fall.
Sound effects: chair wheels rolling, frantic keyboard clacks, paper flutter, chair spin whoosh, continuous vertical swipe

7.3 TO 10.4 SECONDS POST 4: THE GENERATE CLICK
Reveal: reference image 4
The man lands in front of the giant wall screen and looks up at the huge glowing GENERAR button. One dramatic held beat. He slaps the button with his open palm. The interface floods with light: a progress bar races across the screen and the preview frame flashes bright. Light and wind from the screen blow his clothes and hair back. He shields his eyes, grins, steps back and dives down through the bottom edge of the photo while the glow intensifies. The interface hides his body while the AI post slides upward and the commercial set post rises from the bottom, both visible together. He reappears from behind the commercial post's upper black boundary, still falling.
Sound effects: deep UI click, rising electronic hum, whoosh of light, continuous vertical swipe

10.4 TO 15.0 SECONDS POST 5: INSIDE HIS OWN COMMERCIAL
Reveal: reference image 5
The set is empty when he arrives. No crew, no people. The man falls into the cinematic set and lands inside the spotlight beam. Haze swirls around him. He stands, adjusts his black t-shirt, and walks to the center mark leaving the haze curling behind him. The camera performs a smooth continuous forward push toward him. No cut. He plants his feet and straightens into a confident hero pose.

CRASH ZOOM: a rapid continuous camera push within the same unbroken shot. Do not hide a cut inside the crash zoom. No blur frame, no flash, no different image at the zoom peak. During the crash zoom the lighting perfects itself, the teal and amber commercial grade settles, and all of his movement gradually stops. He freezes in the final hero pose.

End matching: reference image 6. The final frame must emerge from the exact same continuous shot. No cut to the reference image, no instant replacement. At the end he remains frozen as the finished commercial frame. Only his eyes briefly glance sideways, then return to stillness.
Sound effects: spotlight buzz, footsteps on glossy floor, cinematic braam, crash-zoom impact, sudden silence

MOTION STYLE
Use deliberate stop-motion movement: choppy pose-to-pose animation, brief held reaction frames, strong anticipation before jumps, squash and stretch during landings, exaggerated scrambling, fast but readable actions, slightly reduced movement sampling, minimal motion blur outside the feed swipes, stable facial identity, consistent body proportions. The man's round red glasses stay on his face in every scene, and his eyes always stay natural, sharp and undistorted behind the lenses.

STRICT NEGATIVE INSTRUCTIONS
Do not hard-cut between posts. Do not show a completed empty post followed by a completed new post. Do not make the incoming post appear instantly. Do not zoom into a post to hide the transition. Do not fade between reference images. Do not teleport the man. Do not reset his falling pose between posts. Do not let him overlap captions, icons or usernames. Do not distort, warp, cross or enlarge his eyes at any moment. Do not create any magical portal, glow ring or ripple when he enters the commercial set. Do not cut during the crash zoom. The complete video must feel like one long Instagram feed physically scrolling upward while the man continuously falls downward through each post.
```

---

### 65. F1 土耳其大奖赛发布片

一支 30 秒文生视频概念片，以 F1 赛车从日出一路飞驰穿越伊斯坦布尔，最终在烟花点亮的夜幕中发布 2027 土耳其大奖赛。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 影视与叙事 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 视觉特效 · 声音设计 · 硬切 |
| 规格 | 30s · 16:9 |
| 发布者 | Ege (@egeberkina) |


[观看成片](https://x.com/egeberkina/status/2084228424919392301) · [原始来源](https://x.com/egeberkina/status/2084228424919392301) · [提示词来源](https://x.com/egeberkina/status/2084228424919392301)

#### 提示词

```text
100% photorealistic live-action IMAX blockbuster. Academy Award-winning cinematography. Official Formula 1 launch film quality. Absolutely no AI look. Everything feels physically filmed using real Formula 1 cars, practical effects, thousands of extras, helicopters, FPV drones, Russian Arm camera cars, cable cams, IMAX aerial units and invisible Hollywood-grade VFX.

Create a breathtaking 30-second cinematic launch film announcing the Formula 1 Turkish Grand Prix 2027.

The film opens in complete darkness. No music. Only distant Istanbul ambience. The Bosphorus gently moves. Seagulls fly overhead. The first call to prayer echoes across the skyline. Ferry horns sound in the distance. Wind whistles through the suspension cables of the Bosphorus Bridge. The city slowly wakes up.

Camera floats over the Bosphorus at sunrise. Ultra-wide IMAX drone shot. Golden morning light wraps around Hagia Sophia, the Blue Mosque, Galata Tower, Maiden's Tower and the Bosphorus Bridge.

Suddenly... One aggressive Formula 1 engine violently ignites. The sound explodes through the city. Windows shake. Birds scatter into the sky.

The music immediately begins. Massive hybrid orchestral trailer score. Deep cinematic sub bass. Aggressive taiko drums. Epic brass. Powerful string ostinatos. Huge choir. Modern electronic pulses. Heavy trailer impacts. Massive risers. Heartbeat percussion. Authentic Formula 1 broadcast energy mixed with Hans Zimmer-scale intensity.

The Ferrari Formula 1 car launches onto the Bosphorus Bridge at over 320 km/h. Immediately joined by Red Bull Racing, Mercedes, McLaren, Aston Martin and Williams. Wheel-to-wheel. No hesitation. No formation lap. Full attack.

The soundtrack constantly evolves. Engine notes become rhythmic. Gear shifts synchronize with percussion. Turbo whistles blend into the score. Crowd chants grow louder. Helicopters thunder overhead. Fireworks erupt. Ferry horns answer the engines. Every environmental sound is perfectly layered into the music.

Camera language is relentless. FPV drones fly inches above the halo. Wheel-mounted cameras. Ultra macro shots of glowing brake discs. Carbon fiber vibrating. Steering wheel buttons being pressed. Driver visor reflections. Cockpit POV. Helmet camera. Russian Arm pursuit vehicles. Cable cams flying over grandstands. IMAX helicopter flyovers. Ultra slow-motion tire deformation. Ground-level curb cameras. Tunnel fly-throughs. Hyper-speed whip pans. Long uninterrupted drone shots connecting entire districts. Impossible transitions between aerial, cockpit and FPV cameras.

Cars scream past Hagia Sophia. The reflections race across the ancient stone. They drift around Sultanahmet Square. Galata Tower rises behind them. Cars blast through the streets of Karaköy. Dive beside the Galata Bridge. Fishing boats rock from the pressure wave.

Massive aerial shot reveals cars crossing from Europe into Asia over the Bosphorus. The race continues along the waterfront. The Maiden's Tower stands surrounded by thousands of spectator boats. Luxury yachts follow the action.

Crowds completely fill rooftops, balconies, ferries, waterfronts and temporary grandstands. Red smoke fills the skyline. Thousands of Turkish flags wave together. Military jet flyover paints enormous red and white trails across the sky.

Night falls seamlessly. The circuit lights up. The city becomes a sea of light. Drone shows illuminate giant Formula 1 logos above the Bosphorus. Fireworks launch simultaneously from both continents. Lasers sweep across the skyline.

The score reaches maximum intensity. Choir. Massive brass. Explosive percussion. Heart-pounding bass. The engine sounds become almost musical.

The final lap. Six Formula 1 cars race side-by-side across the illuminated Bosphorus Bridge at sunset. The camera pulls higher. Higher. The entire city is now visible. The Formula 1 circuit glows through Istanbul like liquid light connecting Europe and Asia.

Silence. One final Ferrari engine rev echoes across the Bosphorus.

Cut to black.

Formula 1 Turkish Grand Prix 2027
Istanbul
Presented by Formula 1

Official Formula 1 branding throughout the event including authentic Rolex timing boards, Pirelli tire branding, DHL bridge signage, AWS timing graphics, Aramco runoff branding, Qatar Airways banners, Lenovo digital boards, TAG Heuer clocks, FIA safety barriers, official marshals, medical cars, safety cars, Paddock Club hospitality, real Formula 1 broadcast graphics and authentic race weekend atmosphere.

Every single frame must feel like it belongs in an official Formula 1 launch campaign with a high production budget.
```

---

### 66. 高端 SaaS 动效广告

一套重参考工作流：先生成风格帧，再用 Seedance 制作两段精确计时的镜头，通过白场匹配转场并剪辑成高端 SaaS 发布广告。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 + 视频 · 9 个参考素材 |
| 使用场景 | 品牌与营销 · 产品演示 · 教育与教程 |
| 工作流 | 多图参考 · 视频参考 · 多模态参考 · 视频编辑 |
| 创作技法 | 时间轴分镜 · 运镜控制 · 匹配剪辑 · 视觉特效 · 产品一致性 |
| 规格 | 27s · 16:9 |
| 发布者 | VoxelPlot (@voxelplot) |


[观看成片](https://x.com/voxelplot/status/2084190319399100452) · [原始来源](https://x.com/voxelplot/status/2084190319399100452) · [提示词来源](https://x.com/voxelplot/status/2084190329746399366)

#### 提示词

```text
WORKFLOW

1. Generate the interface style frames.

Use a screenshot of the official Dreamina website interface as the starting reference.

Prompt: The uploaded image is from the Dreamina website. The logo is blue, give me a color palette for a high-budget motion design video for this brand. It would be a background with light leaks and the image reference box with a slider like a tilted screen in 3D space.

Prompt: Give me, based on this style, an entire 3D image panel, with 16:9 images, flat tilted style formed by image panels and a close camera.

Prompt: Give me the image of just the background without the interfaces.

2. Generate the fantasy video images.

Prompt: Give me an image of a woman, sci-fi fantasy style, that matches the color palette of the reference image, rim light, medium shot from the waist up, pale face, and long white hair.

Prompt: Create an image of a white background with a double-ended spear where each end is the tip of a magic scepter (identical) and the weapon has many baroque-style ornamental details and then ends in magic gold circles with golden yellow light like an orb. Give me 3 versions. The style will be based on the reference image.

Prompt: An image in the same style but of frozen water flakes (in the style of their microstructure) in this style, floating, celestial background.

Prompt: An image of water drops, detail shot, extreme detail, where you can appreciate the light and sparkles and lens flare passing through it.

3. Generate a dynamic image carousel and 3D interface with a white-out dissolve.

High-budget SaaS motion design commercial, continuation shot. Reference vid2 provides the environment: an endless white void with tall translucent glass slabs, a vertical shaft of backlight, volumetric haze, polished reflective floor, high-key pale blue, periwinkle and silver-white palette, with soft slow-morphing light leaks in peach, amber, icy cyan and lavender drifting across the frame, heavily feathered, out of phase with one another. Reference img1 provides the interface design, its layout, proportions and its two image carousels.

PHASE 1 — The shot opens already in motion: a wide horizontal RIBBON of large 16:9 image panels, exactly one panel tall, races from left to right at high speed across the vid2 environment, the camera panning right to follow it. The ribbon and the camera both decelerate together with a long, smooth motion-design ease-out as they arrive at a new area of the white void, where the translucent interface panel from img1 materializes floating in space. The travelling ribbon merges seamlessly into the interface, becoming the upper-left carousel seen in img1: it enters from the right side of the frame, sweeps leftward across the composition and eases out to settle along the left edge, still flowing. Moments later a second identical ribbon forms in the lower part of the frame, emerging from the centre-bottom of the interface and extending toward the right. Both carousels run in the same direction, images travelling left to right at speed. The upper-left ribbon terminates at the centre of the composition with a soft dissolve, its panels fading out where they meet the interface; the lower-right ribbon begins at the centre-bottom with the same soft dissolve, its panels fading in from nothing. The camera glides smoothly through space and settles into its final framing, with the translucent glass interface panel floating centred, its empty central image slot visible as a clear frosted glass rectangle with glowing edges.

PHASE 2 — The camera is now nearly static. Both carousels continue flowing while, one after another, four image thumbnails appear inside the empty central slot of the interface, materializing sequentially from the centre outward with a soft opacity fade-in, each one a beat apart. As the images populate, both carousels gradually and gently decelerate, their speed easing down along a smooth motion-design deceleration curve until they are barely drifting. Throughout, the interface panel floats weightlessly in space, its inclination shifting by an extremely subtle amount, an almost imperceptible tilt, as if suspended in air.

PHASE 3 — A tunnel of light builds from behind the interface: a burned-out light leak expands rapidly toward the camera, bloom flooding outward, the glass and the panels dissolving into pure luminance until the entire frame turns completely white. Clean white-out transition.

Style of carousels and interface borders: dynamic glow travelling continuously along every edge, tracing the borders of the panel and of each image card like a running highlight, light glowing through translucent frosted glass. Broad specular reflections rake diagonally across the surfaces, momentarily blowing sections out to pure white before easing back. Prismatic fringing in peach, icy cyan, lavender and pale gold. Bloom is strong yet smooth. No magenta, no saturated colors. All motion follows strict ease-in and ease-out curves: every movement starts slowly, accelerates to gather speed, then decelerates softly. Motion-design grade smoothness, fluid and precisely controlled, no shake, no cuts, no handheld feel. Photorealistic 3D render, minimal, elegant, 4K.

4. Generate the opening and hand it over to the carousel clip.

TITLE CARD, THE FIRST THING THIS VIDEO SHOWS: bold sans-serif lettering fully present and legible in the very first frame at 00:00, floating in the foreground, sharp and in focus from the start. First line reads exactly "SEEDANCE 2.5", spelled S-E-E-D-A-N-C-E. Second smaller line beneath reads exactly "Up to 50 references". Dark charcoal type with the words "50 references" in bright cyan blue. Crisp, sharp-edged, perfectly legible. It sits weightlessly over the moving background and fades out cleanly just before 00:04.

High-budget SaaS motion design commercial. Total duration 14 seconds. FIXED TIMING, NON-NEGOTIABLE: reference vid1 starts at exactly 00:04 and plays for ten full seconds, ending at 00:14. Vid1 occupies the majority of this video. It runs from its very first frame to its very last frame as one single continuous playback, in its original order and at its original pace, with all ten seconds present. Its closing seconds play out completely and at full length. The generated portion is only the first four seconds and it must finish by 00:04 so that vid1 begins on time and has room to run whole.

THE ENTRY PASSAGE (00:00–00:04), starting from reference img1. It moves briskly and covers its ground within four seconds. Endless bright white space, pale blue, periwinkle and silver-white palette, soft fog, glossy floor with gentle reflections. RACK FOCUS: the passage opens completely out of focus, a soft creamy blur of luminous shapes and glowing colour with no legible detail. Over the first three seconds the focus pulls in gradually and continuously, edges resolving and card borders sharpening until by 00:03 the image is perfectly sharp and holds that way. A smooth cinematic lens rack, eased at both ends. The title lettering stays sharp throughout, unaffected by the blur behind it.

It opens on a tight crop of ONE continuous inclined 3D plane built from luminous image cards: only four large cards are visible, and the same grid carries on beyond all four edges of the frame, with further rows above and below and further columns left and right. The plane eases into a slow rotation, tilting toward a more vertical angle while staying inclined, floating weightlessly. A dolly-out then eases in and pulls back steadily from this identical surface. More of the same grid enters the frame in every direction while the four original cards stay visible and shrink, joined by hundreds of smaller cards from the same wall. It remains one single continuous plane at all times, the very same surface throughout, simply seen wider, until the full immense mosaic fills the frame edge to edge, intact and complete, light sweeping across it.

A wave of dissolution then sweeps inward from the top edge and the bottom edge simultaneously, cards fading softly into the white void band by band, the wall thinning until a single central horizontal strip remains. That strip enlarges into a BROAD CAROUSEL BELT of large 16:9 panels standing ONE PANEL TALL, a single chain joined only left to right, with open white void above it and open white void and reflective floor below it. Every panel shares the same top edge and the same bottom edge. The belt is slightly tilted in 3D, its ends converging toward vanishing points. The belt travels from left to right, accelerating continuously into a high-speed stream, the camera panning right with steadily increasing angular speed, still gaining momentum as the passage ends.

THE HANDOVER INTO VID1: the entry passage ends at 00:04 on a frame matching vid1's first frame exactly in belt speed, camera pan velocity, framing, angle, direction, light and focus, fully sharp on both sides of the join. The movement carries straight through as one continuous gesture and vid1 takes over seamlessly, then runs all the way to its end. The video finishes on vid1's own final frame, the white-out that closes it, arriving only after all ten of its seconds have already played through. The last moment is pure blinding white filling the entire frame, fully blown out edge to edge, held to the very last frame.

Panel effects in the entry passage: broad specular reflections rake diagonally across the surfaces like light sliding over polished glass, flaring brighter as they travel and momentarily blowing whole panels out to pure white before easing back. Panel borders glow with a fine luminous rim and prismatic fringing in peach, icy cyan, lavender and pale gold. Bloom is strong yet smooth, holding steady. Colours stay within the scene's own cool spectrum. The entry passage uses strict ease-in and ease-out curves, with the belt phase as one unbroken accelerating ramp. All motion stays fluid and precisely controlled, motion-design grade. Photorealistic 3D render, minimal, elegant, 4K.

5. Generate the fantasy second half from the reversed white dissolve and the four fantasy references.

REFERENCE MAP: "img" = vid1 (dissolve effect, opening dissolve only) · "27373ff8-c74f-4979-863c-4894866fbae4" = img1 (pale-haired woman in iridescent clothing before a crystalline city) · "c409cd40-4c07-47b3-88dc-650c08456f68" = img2 (ornate silver and gold double-bladed crystal spear, on white) · "783dd18a-c4a2-4311-b5f2-a2b23e679ca8" = img3 (STYLE REFERENCE ONLY, NOT A FRAME: perfectly round water droplets suspended motionless in bright blue air, each throwing sharp starburst flares, dense bokeh field behind) · "b9306d6d-06ab-4b02-b0f9-2c2c3f27ff91" = img4 (STYLE REFERENCE ONLY, NOT A FRAME: faceted ice snowflakes, starburst flares).

CRITICAL RULE: img3 and img4 ARE NOT FRAMES OF THIS VIDEO. They are style references only, never reproduced, recreated or shown as a shot. Do not copy their composition, framing or camera angle. Every droplet and snowflake shot is a completely new, originally composed image built only in the spirit of those references. img3 and img4 are never shown full-screen and never appear as an image inside the frame.

Cinematic fantasy VFX commercial, Hollywood grade. 15 seconds. Celestial high-key world, strong white backlight, rim light, heavy bloom, prismatic flares, pale blue and silver-white palette turning to brilliant white-gold in the final act. DEPTH OF FIELD IS THE DEFINING LOOK IN EVERY SHOT: extremely shallow focus, wide aperture, only the subject sharp, everything behind it heavy creamy bokeh.

00:00-00:04 - Opens from white and resolves through vid1's dissolve. img1's woman appears in extreme close-up, fully out of focus, a luminous blur. A slow rack focus brings her to perfect sharpness while the camera pushes out and orbits slightly, widening to waist-up. The city behind stays deeply defocused. She appears once.

00:04-00:05:15 - She snaps her fingers and img2's crystal spear materializes floating in the air beside her, four metres long, glowing, arcane glyphs spiralling around it. She reaches out and takes hold of it.

00:05:15-00:07 - Gripping the spear she thrusts it toward the lens, tip aimed straight at camera. Very wide short focal length grossly exaggerating perspective: the tip and her hand loom enormous in the foreground, her face far smaller behind them. The camera dollies fast along the shaft toward her face. Barrel distortion, extreme foreshortening. She casts a spell straight into the lens.

00:07-00:08 - The spell becomes a beam of magical light rushing at the camera: a luminous white-gold shaft built from swirling particles and thin trails of golden smoke, sparks streaming along its length.

00:08-00:10:30 - The beam arrives in a field of perfectly round water droplets in the spirit of img3, hanging completely motionless in the air against luminous blue, each bead crisp and throwing sharp starburst flares, hundreds of them receding into a deep bokeh field. The camera sits inside this suspended cloud and orbits through it at normal speed, weaving between the still drops, parallax sliding them past one another. The magical light threads through the field, its golden particles and smoke curling around each droplet, wrapping them one by one.

00:10:30-00:12 - The light enters the droplets. Each bead ignites from within and turns brilliant gold, no longer water but liquid gold suspended in mid-air, glowing white-hot at the core, then hardens and freezes solid.

00:12-00:13:15 - The frozen golden beads shatter. At the instant of the burst the focus is thrown off completely: the golden snowflake stars in the spirit of img4 are never sharp, appearing only as heavily defocused shapes and glowing bokeh orbs scattering in slow motion across a fully blurred frame. From every burst a thread of white-gold magic escapes and streams outward through the blur.

00:13:15-00:15 - All the threads of golden magic converge and weave together, and the title is revealed out of that light against the already defocused field: bold sans-serif lettering reading exactly "SEEDANCE 2.5", spelled S-E-E-D-A-N-C-E, forming from brilliant white-gold energy with bloom and lens flares. The lettering is the only sharp element in the frame, razor crisp against a completely melted background of golden bokeh, held to the very last frame.

Style: fantasy, celestial, photorealistic VFX, god rays, backlit, lens flares, bokeh, slow motion, golden particle magic. Camera fluid, eased. 4K.

6. Join the two parts on their matching white frames so the transition is unnoticeable.
```

---

### 67. 夏威夷旅行 Vlog 蒙太奇

一支梦幻的 30 秒高端旅行日记，跟随同一位女性经历八段夏威夷假日时刻，从热带城市清晨、海上体验一直到酒店夜晚的安静回望。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 影视与叙事 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 |
| 规格 | 30s · 16:9 |
| 发布者 | Sharon Riley (@Just_sharon7) |


[观看成片](https://x.com/Just_sharon7/status/2084238339469615320) · [原始来源](https://x.com/Just_sharon7/status/2084238339469615320) · [提示词来源](https://x.com/Just_sharon7/status/2084238339469615320)

#### 提示词

```text
A cinematic 30-second tropical travel vlog montage featuring a beautiful 20-year-old East Asian woman with dark hair exploring Hawaii during a dreamy summer vacation. Shot like an authentic luxury travel diary with handheld camera movement, candid moments, soft golden-hour sunlight, dreamy 35mm film aesthetics, warm vintage color grading, shallow depth of field, natural skin texture, atmospheric lighting, and cinematic storytelling.

Maintain the same woman throughout every scene: dark hair, youthful appearance, natural makeup, elegant summer outfits, relaxed happy expression.

Format: 4K cinematic video, 24fps, 35mm film grain, realistic handheld camera, soft focus, warm color palette, travel documentary style.

Scene 1 (0-4s) — Arrival & City Walk: A beautiful Hawaiian morning. The woman walks through a bright tropical city street wearing a flowing floral summer dress and sunglasses. Palm trees line the sidewalk, sunlight reflects off colorful buildings, people walk casually in the background. Camera follows from behind, then transitions into a close-up of her smiling face as wind moves through her hair.

Scene 2 (4-8s) — Beach Discovery: She steps onto a wide sandy beach with crystal blue ocean waves behind her. She walks barefoot along the shoreline, holding her dress slightly as waves touch her feet. Low-angle cinematic shots of footsteps in wet sand, ocean reflections, distant volcanic mountains under a clear sky.

Scene 3 (8-12s) — Tropical Nature Moments: A cinematic worm's-eye view looking upward through towering palm trees. Golden sunlight streams between the leaves with beautiful lens flares. Cut to a close-up of her standing near a rocky ocean cliff, wind blowing through her hair while she looks peacefully toward the sea.

Scene 4 (12-16s) — Beachfront Cafe & Slow Living: She sits alone at a cozy beachfront cafe near the window, drinking a tropical drink while watching waves outside. Soft sunlight enters through the glass. Close-up shots of her hands, coffee cup, ocean view, and thoughtful expression create an intimate travel diary feeling.

Scene 5 (16-20s) — Ocean Adventure: She floats peacefully on a surfboard in calm turquoise ocean water. Camera moves around her from water level, showing gentle waves, sunlight sparkling on the sea surface, tropical coastline and mountains in the distance. She laughs naturally while looking toward the camera.

Scene 6 (20-24s) — Night Market Exploration: A vibrant Hawaiian night market filled with warm lights, food stalls, and colorful decorations. She walks through the crowd, trying tropical fruit skewers and local street food. Cinematic close-ups of her reaction, glowing lanterns, neon bokeh, and bustling atmosphere.

Scene 7 (24-27s) — Golden Sunset Ending: Wide cinematic silhouette shot of her standing on the ocean shore during sunset. Orange and pink skies reflect on the water. Waves gently move around her feet as she watches the sun disappear behind the horizon. Emotional travel film ending.

Scene 8 (27-30s) — Hotel Night Reflection: Nighttime high-rise hotel balcony overlooking sparkling tropical city lights. She wears a simple white dress, leaning against the balcony while a warm breeze moves the curtains behind her. Final intimate close-up of her lying on the hotel bed, looking warmly into the camera lens with a peaceful smile.

Camera Style: Authentic travel vlog cinematography, handheld camera shake, smooth cinematic transitions, slow push-ins, natural movement, occasional POV shots, realistic autofocus adjustments, subtle motion blur.

Visual Style: Dreamy Hawaii vacation film, luxury travel advertisement aesthetic, soft golden sunlight, realistic skin texture, cinematic depth of field, nostalgic 35mm film look, warm atmospheric colors, natural expressions, emotional storytelling.

Avoid: cartoon style, CGI look, plastic skin, unrealistic face, inconsistent character appearance, changing hairstyle, extra fingers, distorted body, artificial lighting, oversaturated colors, blurry face, unnatural movements, duplicate people.
```

---

### 68. 动作 Vlog 女英雄变身

一段平静的手持街头 Vlog 突然升级为写实超级英雄大战：创作者变身装甲女英雄，击败巨型暗影怪物后恢复原貌并再次面对镜头。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 多镜头 · 运镜控制 · 角色一致性 · 口型同步 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Sania (@saniaspeaks_) |


[观看成片](https://x.com/saniaspeaks_/status/2084231786155081918) · [原始来源](https://x.com/saniaspeaks_/status/2084231786155081918) · [提示词来源](https://x.com/saniaspeaks_/status/2084231786155081918)

#### 提示词

```text
A cinematic action vlog in live-action photorealism. A young Japanese woman (image = her face and hair) leaves her house on a peaceful morning, casually filming herself with a handheld smartphone. As she walks through a busy Japanese street, people suddenly panic and run as a gigantic shadow monster appears in the distance, shaking the ground and roaring. She looks around in shock, then calmly places her phone on a nearby ledge.

A glowing aura surrounds her as she transforms into a powerful armored heroine with flowing energy effects, her appearance remaining recognizable. She charges toward the giant creature and engages in a fast-paced, cinematic battle using agile martial arts, powerful energy strikes, and dramatic dodges through the city streets.

After an intense final clash, she unleashes one decisive attack that defeats the monster, causing it to dissolve into glowing particles. The city becomes peaceful again. She transforms back into her normal appearance, smiling as relieved people gather around and respectfully bow in traditional Japanese style to thank her.

She picks up her phone, laughs softly, waves at the camera, and says, "Everything's okay now. See you next time!"

The video should feel like a high-budget live-action film with realistic physics, consistent character appearance, natural human movement, cinematic lighting, detailed visual effects, and no subtitles, logos, or watermarks.
```

---

### 69. 鲜花压制手作 Vlog

一支温馨的迷你 DV 风手作 Vlog，记录年轻女性压制鲜花、取出成品并装饰卡片的过程，突出纸张、花瓣与书本的 ASMR 触感声音。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 教育与教程 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 口型同步 · 声音设计 |
| 规格 | 31s · 16:9 |
| 发布者 | 𝐌 (@Strength04_X) |


[观看成片](https://x.com/Strength04_X/status/2084269139556761919) · [原始来源](https://x.com/Strength04_X/status/2084269139556761919) · [提示词来源](https://x.com/Strength04_X/status/2084269139556761919)

#### 提示词

```text
CAMERA / LOOK:
Handheld mini DV camcorder footage filmed by the subject herself. Slight hand shake, occasional focus hunting, imperfect framing, natural zoom adjustments, soft tape-like image quality, subtle grain, realistic auto-exposure shifts from bright natural daylight. Natural skin tones, mild motion blur, authentic consumer camcorder aesthetic.

STYLE:
Cozy flower-pressing vlog with gentle ASMR elements. Relaxed pacing, minimal dialogue, candid moments. Focus on satisfying sounds: petals rustling, paper pages turning, book weight settling, tweezers picking up petals, gentle smoothing.

SUBJECT:
Young woman in her early 20s, plain linen dress, hair loose, minimal jewelry, no visible logos or branded items. Calm, gentle energy while preserving flowers.

SETTING:
Small table near a window on a bright afternoon. Soft daylight, a plain heavy book, freshly picked flowers laid out, no visible brand names or packaging in frame.

STORYBOARD:
→ (3s, propped medium shot) Places camera on the table, lays out a few fresh flowers. "Pressing some flowers today."
→ (3s, overhead shot) Arranges petals flat between two sheets of plain paper.
→ (3s, close-up) Uses tweezers to gently position a delicate petal.
→ (3s, handheld shot) Closes the paper carefully over the flowers. "Just need to keep them flat."
→ (3s, detail shot) Places the paper between the pages of a heavy book. No dialogue.
→ (3s, medium shot) Stacks a few more books on top for weight. "That should do it."
→ (3s, macro shot) A previously pressed flower being lifted out, delicate and flat.
→ (3s, propped shot) Arranges the pressed flowers onto a small card.
→ (3s, warm ending shot) Admires the finished arrangement, soft smile. "So delicate and pretty."
→ (5s, final shot) Sets the card on the windowsill, reaches toward camera. "See you next batch." Hand covers lens as recording ends.

AUDIO NOTES:
Natural ambience — petals rustling, paper turning, book settling should be clearly audible. Dialogue quiet and casual.

REALISM NOTES:
Authentic body language, natural blinking, genuine soft smiles, occasional gentle pauses, imperfect framing, focus breathing, bright daylight shifts. No copyrighted characters, logos, brand names, or recognizable public figures anywhere in frame. Fully original personal vlog content, not AI-generated or commercial in style.
```

---

### 70. 精品超市购物 UGC Vlog

一支精致的创作者风超市购物 Vlog，从自拍入场、饮品试喝与购物车视角，推进到水果特写和暖色调结账收尾。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 运镜控制 · 产品一致性 · 声音设计 |
| 规格 | 20s · 16:9 |
| 发布者 | Synthia (@AIwithSynthia) |


[观看成片](https://x.com/AIwithSynthia/status/2084264050717045019) · [原始来源](https://x.com/AIwithSynthia/status/2084264050717045019) · [提示词来源](https://x.com/AIwithSynthia/status/2084264050717045019)

#### 提示词

```text
A realistic UGC-style from lifestyle grocery shopping vlog filmed vertically on a smartphone with natural handheld movement and subtle camera shake. The video opens with the young woman entering a modern premium organic grocery store with warm ambient lighting, clean wooden shelves, fresh produce, and a bright minimalist interior. She holds the phone in selfie mode, smiles naturally, and gestures for viewers to follow her. She walks toward the refrigerated drinks section, scans the shelves, and picks up a green cold-pressed juice bottle, turning it slowly so the label faces the camera. Cut to a cinematic close-up as she twists the cap open and takes a refreshing sip beside a large sunlit window, smiling with a satisfied expression. Transition to a POV shot from inside a shopping cart as she pushes it through wide grocery aisles, occasionally looking down into the cart and smiling. Follow with an over-the-shoulder walking shot through beautifully organized shelves filled with premium groceries. Close-up of her hand selecting fresh oranges, gently inspecting one before placing it into the cart. End with a close-up of her picking up a vibrant dragon fruit, rotating it naturally in her hand while admiring its color before placing it into the cart. Finish with her walking toward the checkout while smiling at the camera, pushing the cart under warm golden lighting. Ultra-realistic, authentic creator content, premium grocery aesthetic, natural body language, realistic facial expressions, soft cinematic lighting, shallow depth of field, smooth transitions, realistic store ambience, subtle background music, 4K HDR, 24fps, clean color grading, lifestyle commercial quality.
```

---

### 71. 面粉扑脸的烘焙意外

一支绘画质感的 3D 厨房短片，把安静的晨间烘焙变成面粉云扑脸的意外，并以咬面包和灿烂笑容温暖收尾。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 视觉特效 · 声音设计 · 硬切 |
| 规格 | 15s · 21:9 |
| 发布者 | Jay Nwabueze (@jaynwabueze) |


[观看成片](https://x.com/jaynwabueze/status/2084266008366178701) · [原始来源](https://x.com/jaynwabueze/status/2084266008366178701) · [提示词来源](https://x.com/jaynwabueze/status/2084266012908601826)

#### 提示词

```text
Stylized 3D animated short film, indie art-house animation aesthetic. Semi-realistic painterly 3D render, naturalistic slender proportions with elegant elongated limbs, NOT cartoon, NOT oversized heads. Soft painterly skin with heavy subsurface scattering, visible freckles across nose and cheeks, natural blush. Hair rendered in thick painterly clumps with warm rim light. Hazy golden diffused lighting, heavy soft bloom, shallow depth of field, dust motes suspended in light beams. Warm dusty palette. NOT photorealistic, NOT live action.

CHARACTER: a young woman, early 20s, thick wavy auburn hair falling past her shoulders, freckled face, soft features, a loose sage-green blouse tucked into a warm terracotta linen skirt, barefoot.

LOCATION: a cozy cluttered sunlit kitchen. Open wooden shelves crowded with glass jars, copper pots, dried herbs hanging, a worn enamel stove, linen curtains glowing with morning light, flour dusting the counter.

COLOR 60:30:10 — 60% warm cream and dusty rose / 30% muted terracotta wood and copper / 10% accent of sage green and her auburn hair.

0–4s: medium shot, she stands at the counter kneading dough, humming to herself, sleeves pushed up, a smudge of flour on her cheek. Golden light pours through the curtains behind her, dust motes drifting.

4–7s: she turns to the oven, crouches, and opens the door with a small proud smile, leaning in to check on her bread.

7–9s: a huge soft puff of flour and steam erupts from the oven directly into her face. Whip-cut to a close-up as she recoils, eyes squeezed shut, her whole face and hair now dusted completely white.

9–12s: slow motion as the flour cloud billows outward around her in the golden light, particles catching every sunbeam, her auburn hair lifting and settling, expression frozen in stunned stillness.

12–15s: back to real time. She slowly opens her eyes, blinks twice, looks down at the slightly burnt but very round loaf in her hands. A beat. Then she breaks into a delighted grin, tears off a corner, and eats it anyway. Hold on her happy flour-covered face.

CAMERA: warm medium shot on the kneading, low angle at the oven, whip-cut to close-up on the puff, slow drifting push-in through the flour cloud, static close hold on the final grin.

AUDIO: gentle morning ambience, birds outside, soft humming, dough kneading, an oven door creak, a soft whoosh on the puff, then quiet suspended silence during the slow motion with only faint drifting sound, a small cough, then a warm little laugh and a crisp bread crunch.

FORBIDDEN: no named studio references, no readable text or logos, no photorealistic rendering, no oversized cartoon heads, no design drift, no harsh lighting, no saturated primary colors.
```

---

### 72. 穿越四重艺术世界的华尔兹

两位参考图锁定的舞者完成一镜到底的华尔兹，四个参考舞厅在他们周围从中世纪手抄本、埃及壁画、东亚水墨连续变换到水彩宫殿。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 6 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 多图参考 |
| 创作技法 | 一镜到底 · 时间轴分镜 · 运镜控制 · 角色一致性 · 视觉特效 · 声音设计 |
| 规格 | 30s · 9:16 |
| 发布者 | Faith.Aifilm (@FaithAifilm) |


[观看成片](https://x.com/FaithAifilm/status/2084267201385918753) · [原始来源](https://x.com/FaithAifilm/status/2084267201385918753) · [提示词来源](https://x.com/FaithAifilm/status/2084267201385918753)

#### 提示词

```text
0:00–0:01 Scene Opening Camera Wide symmetrical establishing shot. 24mm lens. Eye-level. Very slow cinematic dolly forward. The ballroom fills the frame. Alex and Lia stand perfectly centered. Actor Blocking Alex already stands in classic Waltz lead posture. Weight evenly balanced. Left hand relaxed. Right hand prepared for ballroom frame. Lia stands three steps away facing Alex. Hands lowered. Gentle anticipation. Facial Expressions Alex Quiet confidence. Small natural inhale. Soft eyes. Lia Warm smile. Relaxed eyes. Slight excitement. Foley Large empty ballroom ambience. Very faint chandelier resonance. Natural breathing. Soft clothing movement. Environment

medieval_illuminated_manuscript_ballroom_environment

The Medieval Illuminated Ballroom is completely still. Nothing moves.

0:01–0:02 Camera Continue slow push-in. Blocking Alex calmly walks three measured steps toward Lia. Heel-toe ballroom walk. Natural posture. Lia remains still. She watches Alex approach. Facial Expression Alex Tiny smile. Lia Eyes soften. Dialogue None. Foley Three leather shoe steps. Soft fabric movement. Environment Still unchanged.

0:02–0:03 Camera Medium-wide. 35mm lens feel. Blocking Alex raises left hand naturally. Palm open. Invitation. Lia gently raises her right hand. Hands meet naturally. No exaggerated flourish. Dialogue Alex (soft) "May I?" Lia smiles. "Always." Foley Finger contact. Light sleeve movement. Quiet breathing. Environment No transition.

0:03–0:04 Blocking Alex places right hand naturally onto Lia's shoulder blade. Lia places left hand on Alex's upper arm. Proper ballroom frame established. Facial Expression Both maintain comfortable eye contact. Neither smiles excessively. Camera Camera slowly circles 15 degrees clockwise. Foley Fabric settling. Shoes adjusting.

0:04–0:05 Waltz Begins Blocking Alex begins classic Waltz Box. Forward Left Side Right Close Left Lia mirrors naturally. Perfect rise and fall. Camera Slow dolly continues. Foley Leather glides. Dress swish. Natural breathing. Environment Medieval ballroom remains stable.

0:05–0:06 First Natural Turn Camera Begins slow orbit. Blocking Alex leads Natural Turn. Clockwise. No sudden acceleration. Environment Transition Only background changes. Stone walls slowly flatten. Ancient manuscript textures peel away like turning illuminated pages. Characters remain untouched. Foley Paper flutter. Soft magical room shift.

0:06–0:07 Blocking Turn continues. Lia follows naturally. Dress swings from momentum. Camera Orbit continues. Environment Medieval architecture gradually becomes Egyptian painted walls. No effect touches the dancers. Foley Stone ambience fades. Temple ambience grows.

0:07–0:08 Blocking Natural Turn completes. Both continue gliding. Facial Expression Alex Focused. Lia Gentle admiration. Dialogue Lia "It feels different..." Alex "Keep following." Foley Heel pivot. Fabric sweep.

0:08–0:09 Environment

ancient_egyptian_mural_ballroom_environment

Egyptian ballroom fully formed. Columns. Hieroglyphs. Warm sunlight. Characters unchanged. Camera Wide orbit.

0:09–0:10 Blocking Progressive Waltz movement. Smooth diagonal travel. Foley Soft shoes. Dress movement. Temple room tone.

0:10–0:11 Underarm Turn Begins Alex gently releases left hand upward. Lia prepares naturally. Camera Moves closer. Medium shot. Dialogue Alex "Trust me."

0:11–0:12 Blocking Lia performs one elegant underarm turn. No excessive spin speed. Environment Egyptian murals begin dissolving into flowing ink strokes. Characters remain completely realistic. Foley Brush sweep. Fabric swirl.

0:12–0:13 Camera Pulls back slightly. Blocking Turn continues. Alex waits calmly. Facial Expression Lia smiles. Alex watches with quiet affection.

0:13–0:14 Environment

east_asian_ink_ballroom_environment

Ink-painted columns appear. Lanterns emerge. Wood replaces stone. Only background transforms. Foley Wood resonance. Silk ambience.

0:14–0:15 Blocking Hands reconnect naturally. Closed frame restored. Dialogue Lia "Beautiful..." Alex "We're not finished."

0:15–0:16 Camera Wide shot. Blocking Continue slow Waltz. Foley Dress layers. Shoes. Breathing.

0:16–0:17 Environment East Asian ballroom complete. Camera Begins close orbit.

0:17–0:18 Continuous Left Rotation Alex leads Left Turning Waltz. Blocking Natural rise and fall. Close frame. Environment Ink lines begin dissolving into watercolor pigments. Only architecture transforms. Foley Soft airy shimmer.

0:18–0:19 Camera Orbit continues around faces. Facial Expression Long eye contact. Quiet affection. Dialogue None.

0:19–0:20 Environment

watercolor_grand_ballroom_environment

Columns become marble. Windows appear. Sunlight grows warmer. Foley Chandelier resonance. Marble ambience.

0:20–0:21 Blocking Left Turn continues. Natural ballroom travel. Camera Slow pull-back.

0:21–0:22 Environment Watercolor ballroom nearly complete. Foley Dress brushing polished floor.

0:22–0:23 Blocking Alex prepares final figure. Dialogue Alex "One last step."

0:23–0:24 Blocking Lia nods softly. Camera Moves slightly lower. Elegant cinematic framing.

0:24–0:25 Final Dip Alex supports Lia securely. No exaggerated lean. Professional ballroom finish. Environment Watercolor ballroom fully complete. Golden sunlight fills room. Foley Soft shoe slide. Dress settles.

0:25–0:26 Camera Slow push toward faces. Facial Expression Lia Gentle smile. Alex Quiet tenderness. Dialogue Lia "Where will we dance next?"

0:26–0:27 Camera Closer. Faces remain perfectly sharp. Dialogue Alex "Wherever the next step leads." Foley Breathing. Soft room tone.

0:27–0:28 Blocking Alex slowly helps Lia rise from the dip. They return to a graceful closed ballroom hold. No abrupt movements. Environment Warm afternoon light intensifies through the watercolor ballroom windows, creating soft reflections across the polished floor while the architecture remains stable. Foley Gentle fabric rustle. Quiet shoe adjustment. Subtle chandelier shimmer.

0:28–0:29 Camera The camera eases backward into a balanced wide composition, revealing the couple centered within the grand ballroom. Blocking Alex and Lia take one final synchronized Waltz step together and come to a poised, elegant finish, maintaining eye contact. Dialogue None. Foley Single synchronized foot glide. Soft dress movement. Calm room ambience.

0:29–0:30 Episode Ending / Transition to Episode 02 Camera The camera slowly cranes upward while continuing its gentle pull-back, leaving Alex and Lia standing motionless in perfect ballroom frame at the center of the floor. Blocking Neither character moves. They hold the final pose naturally, breathing softly. Environmental Transition A subtle breeze stirs the ballroom curtains. Tiny watercolor pigments drift upward near the far windows, and a faint hint of a new architectural silhouette begins to appear beyond the ballroom doors. The current environment does not transform yet; it only foreshadows another world waiting beyond, providing a seamless visual bridge into Episode 02. Dialogue Alex (softly) "Our next dance has already begun." Lia gives a small smile without replying. Foley Soft curtain movement. Distant ambient breeze. Faint chandelier resonance. Leather shoes settling. Gentle breathing. No music. End Frame Fade to black over one second, holding the quiet ballroom ambience until silence. No text, logos, or subtitles appear. The final image leaves anticipation for the next background transformation while preserving the continuity of Alex and Lia's appearance, wardrobe, and emotional connection.
```

---

### 73. 热带海滩俱乐部蒙太奇

一支快节奏度假村蒙太奇，从泳池酒瓶托盘和舞动宾客切换到鸡尾酒微距、热闹海滩酒吧、棕榈树与面朝大海的 DJ 收尾。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 品牌与营销 · 影视与叙事 |
| 工作流 | 文生视频 |
| 创作技法 | 多镜头 · 运镜控制 · 产品一致性 · 声音设计 |
| 规格 | 28s · 16:9 |
| 发布者 | BMX (@bmx_ai13) |


[观看成片](https://x.com/bmx_ai13/status/2085313433281478886) · [原始来源](https://x.com/bmx_ai13/status/2085313433281478886) · [提示词来源](https://x.com/bmx_ai13/status/2085313433281478886)

#### 提示词

```text
A cinematic tropical beach club montage shot on a 35mm lens with bright summer lighting. A young smiling woman in an orange one shoulder swimsuit stands in a turquoise swimming pool managing a floating tray of orange liquor bottles. Quick cuts to resort guests warmly hugging and dancing under a thatched palapa roof on white sand. A tattooed DJ in a black shirt and cap mixes music on modern decks. Macro close up of sparkling wine pouring into a large glass filled with ice followed by bright orange liquor poured from a metal jigger with bright sunlight catching the liquid and creating lens flares. A lively shaded beach bar with guests laughing at wooden tables and a waiter walking past carrying a tray of colorful cocktails. Tilt up to green palm trees strung with warm lightbulbs against a bright sky. People relax at tables facing the ocean in the background. The scene ends with a soft focus fade on the DJ. Fast paced dynamic tracking shots shallow depth of field vibrant teal and orange color grading high energy music video style cinematic lighting photorealistic highly detailed 8k resolution.
```

---

### 74. 东京手机旅行 Vlog

一位通过参考图锁定形象的旅行者，以真实手机 Vlog 记录机场值机、起飞、抵达以及初到东京街头的全过程。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 口型同步 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Sania (@saniaspeaks_) |


[观看成片](https://x.com/saniaspeaks_/status/2085307691937767921) · [原始来源](https://x.com/saniaspeaks_/status/2085307691937767921) · [提示词来源](https://x.com/saniaspeaks_/status/2085307691937767921)

#### 提示词

```text
Preserve the exact face, hairstyle, identity, skin tone, and body proportions from @image1 throughout.

A 30-second photorealistic smartphone travel vlog filmed entirely like a real mobile phone recording with natural handheld movement, subtle hand shake, realistic autofocus, slight exposure shifts, authentic smartphone stabilization, and true-to-life colors. No cinematic camera moves, no beauty filters, no CGI look.

Scene 1 (0:00–0:04) – Airport entrance. She pulls a small suitcase toward the check-in counter, smiles at the selfie camera, and says, "Today's a travel day!"

Scene 2 (0:04–0:07) – Airport terminal. She holds up her boarding pass while walking toward the departure gate, excitedly showing the busy terminal.

Scene 3 (0:07–0:11) – Airplane window seat. She records the plane taking off, then turns the camera toward herself with the clouds visible through the window, smiling with excitement.

Scene 4 (0:11–0:15) – Landing. The aircraft touches down smoothly, and she captures her first glimpse of Tokyo through the airplane window.

Scene 5 (0:15–0:19) – Arrival hall. She walks through the airport with her suitcase, following the exit signs, looking excited for the adventure.

Scene 6 (0:19–0:24) – First moments in Tokyo. She steps outside into the lively streets, filming colorful signs, passing trains, cafés, and busy crosswalks while saying, "I finally made it!"

Scene 7 (0:24–0:28) – Exploring the city. She strolls through the streets, records the atmosphere, smiles at the camera, and points toward the city ahead.

Scene 8 (0:28–0:30) – Final selfie. She stops, gives a cheerful wave, smiles brightly, and says, "Let's explore!" before reaching toward the phone to end the recording.

Audio: Natural ambience only—airport announcements, rolling suitcase wheels, airplane cabin sounds, engine noise during takeoff and landing, footsteps, city traffic, train sounds, people talking, and light wind. No background music, no subtitles, no logos, and no watermarks. The entire video should feel exactly like a genuine smartphone travel vlog with natural human movement and consistent appearance throughout.
```

---

### 75. 金色时刻山路摩托骑行

一辆黑色运动摩托在蜿蜒山路上加速，跟拍、车载 POV、侧向追踪与最终航拍拉远共同突出速度感和山谷尺度。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | LudovicCreator (@LudovicCreator) |


[观看成片](https://x.com/LudovicCreator/status/2085304972208468260) · [原始来源](https://x.com/LudovicCreator/status/2085304972208468260) · [提示词来源](https://x.com/LudovicCreator/status/2085304994790510822)

#### 提示词

```text
[Global Setting]

Base Environment & Texture: A winding mountain road at golden hour, asphalt curves cutting through forested landscape, warm amber light raking across the road, distant valley visible below, slight atmospheric haze, road markings sharp and clear, realistic motorcycle cinematography aesthetic.

[Character/Subject Identity Lock]

A skilled rider on a sleek black sport bike (Kawasaki Ninja style), wearing a black leather jacket, dark helmet with gold visor reflecting light, leaned forward in aggressive riding position. The bike is low-slung, aggressive stance, chrome details catching sunlight.

[Opening beat, 0–4s]: Static wide shot of the empty mountain road at golden hour. Wind rustles trees. Suddenly, the distant sound of a powerful engine approaching. The black sport bike appears at the horizon, small at first, accelerating toward camera. Engine sound grows louder.

[Mid beat, 5–22s]: Dynamic action. Camera cuts to close follow-cam mounted on the bike, the road curves sharply left, lean angle increases, camera tilts with the physics, asphalt rushing past, trees blur. The rider carves the curve with precision, throttle down, engine screaming. Onboard POV shot looking over the rider's shoulder handlebars, speedometer climbing (120, 130, 140 kph visible), the road ahead snaking through forest. Cut to a tracking shot alongside the bike low angle, camera pacing the bike, rider's silhouette against the sky, leather jacket flapping with wind. The bike accelerates harder into a straightaway, camera pulls back to show the full scale bike tiny on the vast mountain road. Quick sequence of curves, each one tighter, each one faster, camera orbits around the bike's arc. The rider is completely in control, smooth inputs, confidence visible in the body position. Golden light catches the chrome, sunlight flashes through trees as speed increases.

[Closing beat, 22–30s]: One final sweeping curve, ultra-wide shot from above, the bike traces a perfect line through the mountain road like a brushstroke. Camera pulls back higher and higher, revealing the entire valley below, the road winding into the distance. The bike becomes a small silhouette against the vast landscape. Engine note fades as the bike accelerates away into the sunset. Aerial wide shot, the road, the forest, the golden light, the freedom. Hold on the expansive landscape with the bike a distant speck.

Audio: Motorcycle engine starting low and steady (idle), builds to a growl, throttle rolls create a rising mechanical roar, wind noise increases with speed, engine whine at high RPM through mid-beat, tire grip sounds on the curves (subtle grip and release), exhaust note snappy and powerful throughout, minimal music one sustained orchestral note at the very end as the view pulls back, wind and engine fade to silence.
```

---

### 76. 法拉利梦想礼物广告

一位参考图锁定的男主揭开车罩发现红色敞篷跑车，随后通过触摸细节、内饰镜头、车顶收折与最终英雄姿态完成高端广告叙事。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 品牌与营销 · 产品演示 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 产品一致性 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | Heisenberg (@rovvmut_) |


[观看成片](https://x.com/rovvmut_/status/2085304872522698838) · [原始来源](https://x.com/rovvmut_/status/2085304872522698838) · [提示词来源](https://x.com/rovvmut_/status/2085304876939272526)

#### 提示词

```text
Hyper-detailed cinematic 30-second luxury car commercial.

Clean modern white minimalist garage: seamless white walls, polished light-gray concrete floor with soft reflections, large grid of bright square LED ceiling panels giving even high-key studio lighting and clean specular highlights. Pure controlled environment, commercial-grade polish.

Character lock: A young handsome man in @image1, mid-20s, dark messy hair, well groomed beard wearing stylish sunglasses, calm confident expression that softens into quiet pride. Crisp off-white short-sleeve button-up shirt (collar slightly open), beige chinos, black-and-white Nike Dunk-style sneakers, black smartwatch on left wrist. Natural skin and fabric texture.

Car lock: Exact Rosso Corsa red Ferrari Portofino convertible. Glossy mirror paint, black soft-top, dual central chrome exhausts, yellow calipers, multi-spoke alloys, prancing-horse badges, black grille, red mirrors. Dubai plate “DUBAI EE 67554”. Large elegant purple satin gift bow with long ribbons centered on the hood (appears after initial reveal). Perfect ceiling-grid reflections on every panel.

Shot-by-shot timeline:

0.0–2.5s Wide slightly low-angle establishing. The red Ferrari sits fully under a black car wrap/cover on the left side of the empty white garage. Man enters from the right, back to camera, walks slowly and confidently toward the car. As he approaches, the black wrap begins to slide and peel off the car in a slow, elegant motion, gradually revealing the glossy red body underneath. Soft footsteps. Camera dollies forward and tracks left with him. Ceiling lights create geometric floor reflections.

2.5–5.0s Medium tracking. He reaches driver’s side, turns, looks at the car with a subtle almost-smile, places right hand gently on roof/A-pillar and slides it along the body. Low-angle close-up of face and hand on glossy red paint. Soft overhead key + gentle rim light.

5.0–7.5s Medium-wide. Purple satin bow now perfectly on hood. Man walks around the front from right to left, hands in pockets, stops at driver’s door and opens it smoothly. Camera slowly orbits front three-quarter as door opens.

7.5–12.5s Intimate interior sequence. Low angle from passenger side as he steps in. Settles into red leather driver’s seat, grips red Ferrari steering wheel with both hands, adjusts slightly, looks down then forward with quiet intensity. Realistic body weight shift. Red interior, black soft-top above, ceiling grid visible through windshield. Camera stays inside, gentle push-in toward face and hands.

12.5–15.5s Dramatic low front close-up of aggressive fascia, headlights and purple bow. Slow subtle push-in. Perfect light reflections on paint.

15.5–17.5s Low rear three-quarter tracking of dual exhausts and circular taillights. Camera slowly rises and orbits left, revealing more side profile.

17.5–20.5s Elevated wide shot. Man outside again, leaning forward carefully wiping front hood badge with his finger. Stands, walks around front toward passenger side, hands in pockets, calm and proud. Smooth cinematic orbit following him.

20.5–23.0s Medium of him beside open driver’s door looking at the car, then clean close-up of Ferrari prancing-horse badge on front fender with glossy red paint and ceiling reflections.

23.0–26.0s Wide side profile. Black soft-top retracts automatically — rear deck opens, roof folds and disappears into rear compartment. Man already seated inside looking toward camera. Camera slowly arcs around driver’s side as top fully opens.

26.0–28.0s Intimate medium close-up through open driver’s side. Man sits in red leather seat, one hand on wheel, looks directly at camera with composed, slightly proud expression. Soft light on face, red body framing him.

28.0–30.0s Final hero wide. Man stands casually leaning against driver’s side of fully open-top Ferrari, left hand in pocket, looking toward camera with quiet confidence. Purple bow still on hood. Perfect composition in bright white garage. Slow gentle push-in. Hold final beat.

Style & technical: Photorealistic cinematic commercial, 24fps filmic motion, shallow-to-medium DOF, ultra-clean high-end grade (rich reds, pure whites, soft neutrals). Perfect material response: mirror paint, soft satin bow, realistic leather and cotton. Smooth professional moves only (dollies, orbits, gentle push-ins). Exact character and car consistency every shot. Emotional tone: quiet luxury, personal achievement, understated joy of a dream gift.

Negative: blurry faces, deformed hands, extra people, text, watermarks, low quality, cartoon proportions, oversaturated colors, dark lighting, shaky cam.
```

---

### 77. 二战装甲列车突袭

一列巨型装甲列车在 30 秒战争史诗蒙太奇中冲过欧洲废墟城市，以高速追踪、贴轨视角、桥梁穿越、烟尘碎屑和最终航拍揭示制造压迫感。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 文生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 匹配剪辑 · 运镜控制 · 视觉特效 · 声音设计 · 硬切 |
| 规格 | 30s · 16:9 |
| 发布者 | OscarAI (@Artedeingenio) |


[观看成片](https://x.com/Artedeingenio/status/2085300093599592686) · [原始来源](https://x.com/Artedeingenio/status/2085300093599592686) · [提示词来源](https://x.com/Artedeingenio/status/2085300097072423051)

#### 提示词

```text
30-second cinematic World War II armored train sequence, breathtaking high-budget war epic, ultra-dynamic editing, relentless cinematic action, massive armored train assault, premium feature film quality, seamless kinetic camera movement, aggressive speed ramps, rapid match cuts, whip pans, rotating camera moves, dramatic perspective shifts, cinematic lens distortion, volumetric smoke, steam, dust, sparks, flying debris, colossal scale, emotionally intense, no dialogue.

0–5s A ruined European city lies beneath heavy storm clouds. An enormous armored train slowly emerges from thick smoke. Steam billows from the locomotive. Close-ups. Steel wheels. Massive pistons. Boiler pressure gauges. Crew members inside the armored locomotive. The camera rapidly alternates between breathtaking aerial shots and intimate mechanical details. Absolute silence.

5–10s The locomotive accelerates. Smoke pours into the sky. The train bursts through a collapsed railway station. The camera races alongside the locomotive before instantly switching to overhead tracking shots, impossible low angles beneath the wheels, FPV shots above the tracks and dramatic crane dives.

10–15s An overwhelming montage. The armored train roars across shattered bridges. Smoke engulfs entire streets. Buildings crumble nearby. Escort aircraft streak overhead. The camera never stops moving: continuous orbit shots, whip pans, crash zooms, rotating camera moves and seamless transitions through steam, sparks and collapsing masonry.

15–20s The train reaches maximum speed. It charges through narrow streets lined with ruined buildings. The camera follows inches above the rails before diving underneath the locomotive and rising through clouds of smoke into a spectacular aerial view. Every cut increases the scale.

20–25s The entire city shakes. The train crosses an enormous iron bridge. Columns of smoke rise everywhere. Aircraft sweep across the skyline. The editing becomes increasingly frantic with ultra-wide aerial shots, ground tracking, spinning perspectives and dramatic slow motion.

25–30s Everything suddenly slows. The armored train disappears into a mountain tunnel. Steam fills the valley. The camera cranes thousands of feet upward revealing the entire ruined city beneath dramatic skies. Hard cut to black.

Sound design: colossal hybrid orchestra, thunderous steam locomotive, steel wheels, deep brass, roaring engines, rushing steam, metallic echoes, distant aircraft, collapsing masonry, cinematic whooshes, overwhelming orchestral finale.
```

---

### 78. 餐厅碰撞冻结时间

一位参考图锁定的餐厅客人撞上服务员，在冻结的早餐与咖啡爆炸现场中穿行，并在抵达门口时迎来时间和重力的突然恢复。

| 字段 | 信息 |
|---|---|
| 证据等级 | `作者确认` |
| 输入 | 文本 + 图片 · 1 个参考素材 |
| 使用场景 | 影视与叙事 · 创意实验 |
| 工作流 | 图生视频 |
| 创作技法 | 时间轴分镜 · 多镜头 · 运镜控制 · 角色一致性 · 视觉特效 · 声音设计 |
| 规格 | 30s · 16:9 |
| 发布者 | TechHalla (@techhalla) |


[观看成片](https://x.com/techhalla/status/2085200942060691807) · [原始来源](https://x.com/techhalla/status/2085200942060691807) · [提示词来源](https://x.com/techhalla/status/2085200942060691807)

#### 提示词

```text
Photorealistic cinematic 1990s American diner, red vinyl booths, neon signs, chrome details, checkerboard floor, soft natural window light mixed with warm practicals, subtle handheld texture, rich lived-in period detail, heavy film grain. Shot with modern realism and precise temporal control.

Use the provided reference image as the exact character lock for the bald bearded man in black sunglasses and dark hoodie. Maintain perfect facial structure, beard, head shape, skin texture and clothing consistency at all times.

0–5s: [Medium Wide] The bald man sits in a red vinyl booth. He stands up, turns, and collides hard into a waitress carrying a full breakfast tray (eggs, bacon, toast, coffee pot). Impact is sudden and physical.

5–12s: [Dynamic Tracking into Super Slow-Motion] Collision detonates. Tray, plate, eggs, bacon strips and coffee pot explode upward. Coffee erupts into long liquid ribbons and perfect suspended droplets. Camera orbits smoothly around the impact. Time locks completely at the peak of the spill. Every face freezes in pure shock. Only the bald man remains free to move. He freezes for one beat with a clear “I fucked up” expression, then quickly grabs two bacon strips and a fried egg from the floating debris.

12–22s: [Tracking Shot] Still inside the frozen diner, he walks toward the exit door while taking deliberate bites of bacon then egg. All patrons, waitress and flying food stay perfectly suspended in mid-air.

22–27s: [Medium Shot] Just as he reaches the door and is about to push it open, time snaps back to normal speed. Everything that was floating crashes down at once — plates, eggs, bacon, tray and coffee slam onto the floor with a loud chaotic impact. The waitress and patrons react in sudden real-time shock.

27–30s: [Medium Close-Up] He pauses, turns slightly, raises his eyebrows and gives a small casual “it is what it is” shrug with a quiet half-smile of acceptance, still holding the remaining food.

Photorealistic, ultra-detailed fluid and object physics, perfect volume and surface tension on liquids, sharp motion blur only on moving elements, stable character, cinematic lighting, heavy natural film grain, no artifacts, movie-level temporal coherence, high rewatch value.
```


## 贡献

欢迎提交新的 Seedance 2.5 案例。请阅读 [贡献指南](CONTRIBUTING.md)，并使用 [Prompt 投稿表单](https://github.com/eastling/awesome-seedance-2.5-prompts/issues/new?template=submit-prompt.yml)。

## 许可与归属

仓库代码采用 [MIT License](LICENSE)。收录的提示词、参考素材和视频不因进入本仓库而被重新授权；它们仍受原始发布者的条款约束。详情见 [NOTICE.md](NOTICE.md)。
