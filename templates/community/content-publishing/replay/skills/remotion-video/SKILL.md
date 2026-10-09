---
name: remotion-video
description: "Use when building Remotion compositions, renders, captions, audio, 3D, SaaS players, or Remotion video apps."
---

Use when building or fixing Remotion compositions, renders, captions, audio, 3D, SaaS players, or Remotion video apps.

## Always

1. Load `remotion-best-practices` first as the router, then the matching skill.
2. New project or new video: follow remotion-create (`npx create-video@latest --yes --blank --no-tailwind <name>`).
3. Follow remotion-markup for React markup.
4. Nontrivial repo work → CloudAgent, never a local clone.
5. Studio by default. Render only when asked.
6. Frames + fps, composition ids, real file paths. Done = Studio/Player URL or export path.

## Assets

Default to Remotion-native assets (public/ + staticFile + @remotion/media). Figma and Adobe are optional only if the user already has those files and asks.

## Preserve user changes

If the user edited code, do not overwrite it; ask or adapt.
