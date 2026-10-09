---
name: video-shotcraft
description: "Use when making a cinematic Remotion product promo, marketing, launch, or demo film — storyboards, shot cards, real captures, 2.5D camera, beat-synced cuts, sound design."
---

Use this when the user wants a cinematic Remotion product promo, marketing, launch, or demo video — storyboards, shot recipe cards, page captures, 2.5D camera, beat-synced cuts, and sound design. Also for single shot-card motion. Not for simple narrated UI walkthroughs (use a Product demo video workflow for those).

# video-shotcraft

Clone or keep the video-shotcraft package available (upstream: https://github.com/Vincentwei1021/video-shotcraft).

Always read `SKILL.upstream.md` in that package before producing a video (full methodology), plus any files it names (`references/`, `template/`, `demos/`, `assets/`, `gallery/`). Live gallery: https://vincentwei1021.github.io/video-shotcraft/

## Modes (do not merge)

Before capture, storyboard, or Remotion work, determine the mode:

1. **Ink Press template** — read `template/TEMPLATE.md`; swap screenshots, copy, brand into the validated template structure.
2. **Autonomous free creation** — read `references/pipeline.md`; agent decides visual direction through final cut without pausing for mid-stage approvals.
3. **Co-creation** — read `references/guided-free-creation.md`; pause for product brief, decisions, visual direction, shot mapping, and final storyboard; then continue from pipeline stage 4.

If the user gave a URL/project but no mode: do a minimal read-only product check, recommend one mode with reasons, ask them to confirm. Do not start production until a mode is chosen. Exceptions: they already named Ink Press, or they named specific shot cards (then only ask autonomous vs co-creation if making a full film).

## Hard rules

- Real product pages → real captures (dev server + headless full-page 2x + element cutouts). Do not fake the product UI.
- Visual language grows from the product design system — do not slap on an unrelated promo skin.
- One motion idea per shot; leave hold/rest after key settles.
- Beat-synced BGM films: analyze rhythm before storyboarding (`references/music-beat-sync.md`); deliver with-BGM and no-BGM (SFX kept).
- Shot cards: resolve via `gallery/api/library.json`, then read the exact demo TSX named on the card.
- Deterministic renders: no `Date.now()` / `Math.random()`; seeded PRNG only.
- Copy `assets/lib/` into the new Remotion project; do not import from the skill package path at render time.
- Remotion has its own license (free for individuals/small teams; companies may need paid) — mention only if asked about commercial use.

## Delivery

Attach the final MP4 in chat. Prefer a dedicated Remotion repo / cloud agent for implementation rather than mutating the client's product code.
