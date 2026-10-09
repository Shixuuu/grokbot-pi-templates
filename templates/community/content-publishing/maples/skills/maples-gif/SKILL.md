---
name: maples-gif
description: "设计 MapleStory/maples.im 造型时使用：固定出 3 套方案，演示用官方 /animated GIF（表情 default），并归档 /download 行走圖 zip。"
---

# maples 造型三选一 GIF 交付

## When
Any MapleStory / maples.im character modeling request (text or reference photo).

## Rules
1. Produce **exactly 3** outfit schemes (A/B/C).
2. Encode items like maples.im `generateAvatarLink` / `getCharacterItemEntries` (`{itemId,version}` array, strip `[]`, URL-encode).
3. **Demo GIF (required, fixed):**
   `GET https://maplestory.io/api/character/{encoded}/{stand1|walk1}/animated?showears=false&showLefEars=false&showHighLefEars=false&resize=4&name=&flipX=false`
   - Face `animationName` is always **`default`** (never random emotions for demo).
   - Action may be `stand1` or `walk1` (pick one per scheme for variety).
   - Use the server GIF as-is (timing ~180ms walk / ~500ms stand). Optional nearest upscale only if durations are preserved.
4. **Archive:** also save full 行走圖
   `.../download?showears=false&showLefEars=false&showHighLefEars=false&resize=1&name=&flipX=false&bgColor=0,0,0,0`
   under `/workspace/maples-im/exports/<name>/zips/`.
5. Deliver 3 official GIFs + short item lists; recipe under `/workspace/maples-im/recipes/`.

## Notes
- Primary sites: maples.im (simulator UI), maplestory.io (render API).
- Do not bypass paywalls or redistribute commercial asset packs; personal/research export only.
- Mark unavailable endpoints as unseen; never invent API paths.
