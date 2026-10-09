---
name: curseforge-mod-page-gif
description: "Use this when adding short animated GIFs to a CurseForge Minecraft project description or gallery (mod-page marketing clips from gameplay video)."
---

# CurseForge mod-page GIF

## Goal
Turn a short gameplay clip into a CurseForge-friendly GIF, upload it to the project media gallery, and embed it in the project description without wiping existing copy.

## Audience (required)
This skill produces **public** storefront copy. Chat with the user can be casual; CurseForge text must not sound like an agent briefing them.
- Read the **whole existing description** before editing.
- Only add what a public player needs, or exact text the user provides.
- Short **mysterious** GIF titles/captions are fine.
- **Never** AI filler: "coming soon," cross-promo teases, fake roadmaps, agent narration.
- If the user manually edits after a draft, their version is the source of truth.

## Limits
- CurseForge project **image uploads are effectively ~2MB**. Target **under ~1.9MB**.
- Full 15–20s phone recordings will **not** fit as GIF. Cut **2–4 seconds**, ~8–10 fps, width ~360–480px.
- Prefer **palettegen + paletteuse** (ffmpeg) over naive GIF encode.

## Encode recipe (ffmpeg)
1. Pick a tight window (readable action, subject framed, minimal UI clutter).
2. Two-pass palette encode, then check size:

```bash
ffmpeg -y -ss START -t DUR -i INPUT.mp4 \
  -vf "fps=8,scale=360:-1:flags=lanczos,palettegen=max_colors=96" palette.png
ffmpeg -y -ss START -t DUR -i INPUT.mp4 -i palette.png \
  -lavfi "fps=8,scale=360:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5" out.gif
```

3. If still over 2MB: shorten duration, drop to 360px / 8fps / fewer colors. Re-check `stat` size.
4. Keep a still preview frame for chat review.

## CurseForge workflow (Authors console)
1. Sign in as the pack author (browser session on this computer).
2. Open the project in Authors / console (not only the public page).
3. **Upload GIF to project Images/media first** — gallery upload goes live immediately; note the `media.forgecdn.net` URL.
4. Open **Description** editor. Insert only a short public-facing section (title + GIF). Do **not** replace the whole description.
5. **Save publishes live.** Leave Save for user confirm unless they already said publish.
6. After Save, verify on the public project URL.

## What worked
- Gallery upload + forgecdn URL embed.
- Confirm before Save when they asked for a draft.
- Light, mysterious, human GIF titles.

## What did not / pitfalls
- Long GIFs blow the ~2MB cap.
- Filler like "More short clips … coming soon" looks AI-written — strip those.
- Unsaved description edits can be lost if the browser navigates away.

## Related
- MCPEDL is a separate path; this skill is CurseForge Authors only.
