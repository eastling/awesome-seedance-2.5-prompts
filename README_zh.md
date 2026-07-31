[English](README.md) · **简体中文**

# Awesome Seedance 2.5 Prompts

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/eastling/awesome-seedance-2.5-prompts?style=social)](https://github.com/eastling/awesome-seedance-2.5-prompts)
[![Prompts](https://img.shields.io/badge/prompts-10-blue)](#official-launch-collection)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](CONTRIBUTING.md)

一个围绕信息整理构建的 Seedance 2.5 提示词库：保留原始来源、官方成片、输入方式和多轴分类，方便查找、比较与复现。

> 视频由官方地址提供，本仓库首版不重新托管媒体文件。第三方内容仍归原作者或发布者所有。

## 分类浏览

分类采用独立维度，而不是把每条 Prompt 塞进一个固定目录。这样同一案例可以同时属于一个使用场景、一种工作流和多个创作技法。

### 按使用场景

- **创意实验** — 7
- **品牌与营销** — 5
- **影视与叙事** — 4
- **产品演示** — 2
- **教育与教程** — 1
- **音乐与表演** — 1

### 按工作流

- **图生视频** — 3
- **多图参考** — 3
- **文生视频** — 2
- **多模态参考** — 1
- **视频编辑** — 1
- **视频参考** — 1

## 证据等级

| Level | 含义 |
|---|---|
| `Official source` | 来自火山方舟、BytePlus、Dreamina 等官方页面；不代表我们独立复现。 |
| `Creator-confirmed` | 原作者明确说明使用 Seedance 2.5，并提供提示词和结果。 |
| `Reproduced` | 维护者在 Seedance 2.5 中重新运行并记录结果。 |

<a id="official-launch-collection"></a>

## 首批官方案例

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group1/1.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group2/2.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/firstScreen/group3/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group2/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part2/group1/output.mov) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part3/group1/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab1/group3/output.mov) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab2/group2/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group1/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

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

[观看官方视频](https://ark-common-storage-prod-cn-beijing.tos-cn-beijing.volces.com/presets/experience/gen_video/model-promotion/seedance-2-5/cn/part1/tab3/group2/output.mp4) · [官方来源](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 提示词（官方英文版）

```text
[Drunk Man's Rooftop Fright — falls off the edge — grabs a rope through the window — passes out on the spot | black-comedy short | about 30 seconds] One-line premise: a chubby, cute, drunk middle-aged man is eating a burger and drinking beer on the rooftop of a building; as he stands up and stretches he accidentally loses his footing and falls, in his panic grabs a lifesaving rope and immediately crashes through a window into an interior, is dazed and stunned for one second, then just lies down where he is and falls fast asleep. Reference image @image1 — a chubby, cute, drunk middle-aged man: round and stocky build with a big round beer belly, short in stature, movements loose, slow and wobbly from drinking; round face, double chin, drink-flushed cheeks and nose, eyes narrowed to slits with a bleary gaze, an untrimmed ring of short stubble, messy hair, a silly, cute, carefree expression; wearing a white tank-top undershirt stained with burger sauce hanging loosely over his round belly, old jeans, shuffling along in loose slippers, always clutching a half-eaten burger in his hand. There is only this one character in the whole film, a 100% match to the reference image. Overall look: a nighttime cyberpunk mega-city, a dense forest of glass-and-steel skyscrapers, neon signs (cyan / magenta / electric blue), holographic billboards, wet reflective ground, volumetric fog, distant flying-car light trails and drones. Real live-action texture, physical cinema lenses, no 3D rendering / game engine / anime feel. The camera mixes handheld with jib / drone; after the fall the camera plunges down with him as the building's exterior wall and the neon streak upward to convey speed, 24-35mm widescreen cinematic lens texture, 180-degree shutter motion blur. Sound design is the key to the black comedy: hard-cutting repeatedly between "a huge roar" and "total silence". Real gravity throughout. Storyboard (about 30 seconds): S1 (0-4s) opening chewing big close-up (with sound) the man's face fills the screen, chewing the burger in big bites, a satisfied drunken state; S2 (4-9s) pull to a wide shot, stretching -> losing footing and falling (with sound) he wobbles to his feet and stretches big, leans back, can't keep his balance, his foot slips and he tumbles backward over the edge of the rooftop, never letting go of the burger, with a panicked "Eh——!"; S3 (9-12s) cut to a startled facial close-up (a loud scream, huge roar) drunken eyes bulging round, double chin bunched up, mouth wide in a screaming "Ahh——!!", wind howling; S4 (12-16s) cut to a long shot at eye level (total silence) seen from the building across the way, a tiny white figure plummeting straight down from the high-rise, the neon city vast and indifferent, the total silence forming a black-comedy contrast with the huge roar a second earlier; S5 (16-21s) cut to a facial close-up (screaming) -> grabbing the rope, still screaming, hands flailing in the air, he suddenly grabs a lifesaving cable, the cable snapping taut and bending under his weight with a twang, the scream cutting off abruptly as he is jerked and swings out (a brief slow motion at the moment he grabs the rope); S6 (21-26s) cut to an interior angle (quiet) -> the glass shatters -> he crashes in, the interior first quiet with only the hum of the air conditioner, the next second the glass explosively bursts inward (a brief bullet time) as the drunk man, burger and all, smashes through the window, shards flying out radially, neon light streaming in, and he crashes heavily into the room onto the floor / sofa, broken glass clinking; S7 (26-30s) ending, a startled second -> falls asleep, the man sprawled spread-eagle on the floor, covered in broken glass, still clutching the burger, slowly opens his eyes, dazed, blank and startled for a full second, looking around as if thinking "where am I?", then the drunkenness takes over and, not caring at all, he smacks his lips, tucks the burger into his arms, rolls over, lies down right there and falls fast asleep, even snoring lightly, the camera pulls out and freezes, hard cut to black. Only on-set live sound, no music, no subtitles; the core is hard cuts repeatedly between "huge roar" and "silence".
```


## 贡献

欢迎提交新的 Seedance 2.5 案例。请阅读 [贡献指南](CONTRIBUTING.md)，并使用 [Prompt 投稿表单](https://github.com/eastling/awesome-seedance-2.5-prompts/issues/new?template=submit-prompt.yml)。

## 许可与归属

仓库代码采用 [MIT License](LICENSE)。收录的提示词、参考素材和视频不因进入本仓库而被重新授权；它们仍受原始发布者的条款约束。详情见 [NOTICE.md](NOTICE.md)。
