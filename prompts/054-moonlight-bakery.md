---
id: SD25-054
slug: moonlight-bakery
title: Moonlight Bakery
title_zh: 月光烘焙坊
description: A structured 30-second text-to-video prompt tells a warm late-night story about a sleepy mouse and a grumpy owl through eight timed shots, generated dialogue, recurring characters, and a gentle visual punchline.
description_zh: 一条结构化的 30 秒文生视频提示词，通过八个定时镜头、生成对白、连续角色和温柔的视觉包袱，讲述困倦小鼠与嘴硬心软猫头鹰的深夜故事。
model: Seedance 2.5
source_type: community
source_publisher: Dheepan Ratnam (@Dheepanratnam)
source_url: https://x.com/Dheepanratnam/status/2084120407662031331
prompt_source_url: https://x.com/Dheepanratnam/status/2084120410140893413
evidence: creator-confirmed
duration_seconds: 30
aspect_ratio: 16:9
prompt_language: en
input_types: [text]
reference_count: 0
use_cases: [film-storytelling, creative-experiment]
workflows: [text-to-video]
techniques: [timecoded-storyboard, multi-shot, camera-control, character-consistency, lip-sync, sound-design]
video_url: https://x.com/Dheepanratnam/status/2084120407662031331
---

## Prompt

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

