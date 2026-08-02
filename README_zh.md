[English](README.md) · **简体中文**

# Awesome Seedance 2.5 Prompts

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/eastling/awesome-seedance-2.5-prompts?style=social)](https://github.com/eastling/awesome-seedance-2.5-prompts)
[![Prompts](https://img.shields.io/badge/prompts-46-blue)](#prompt-collection)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](CONTRIBUTING.md)

一个围绕信息整理构建的 Seedance 2.5 提示词库：保留原始来源、成片、输入方式和多轴分类，方便查找、比较与复现。

> 成片链接指向原始来源，本仓库不重新托管媒体文件。第三方内容仍归原作者或发布者所有。

## 分类浏览

分类采用独立维度，而不是把每条 Prompt 塞进一个固定目录。这样同一案例可以同时属于一个使用场景、一种工作流和多个创作技法。

### 按使用场景

- **创意实验** — 37
- **影视与叙事** — 32
- **品牌与营销** — 13
- **产品演示** — 6
- **教育与教程** — 2
- **音乐与表演** — 2

### 按工作流

- **文生视频** — 25
- **图生视频** — 11
- **多图参考** — 7
- **多模态参考** — 2
- **音频驱动** — 1
- **视频编辑** — 1
- **视频参考** — 1

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


## 贡献

欢迎提交新的 Seedance 2.5 案例。请阅读 [贡献指南](CONTRIBUTING.md)，并使用 [Prompt 投稿表单](https://github.com/eastling/awesome-seedance-2.5-prompts/issues/new?template=submit-prompt.yml)。

## 许可与归属

仓库代码采用 [MIT License](LICENSE)。收录的提示词、参考素材和视频不因进入本仓库而被重新授权；它们仍受原始发布者的条款约束。详情见 [NOTICE.md](NOTICE.md)。
