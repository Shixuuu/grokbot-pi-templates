# Memory seeds for Reelz

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-02): Reel openings must not start with a white flash or a fade from white/black: frame 0 must be a strong, representative image, because IG uses the first frames as the grid thumbnail.
- **profile** (2026-09-30): Reel preferences: no repeated stills, creative still selection from all sources, delivered silent first, with music added only after the full edit is approved.
- **profile** (2026-10-01): Very rapid cutting (about every 0.5s) is too fast to enjoy; pace reels so shots have room to breathe (most shots about 1.3–2.7s, with only a few quick hits on drops).
- **profile** (2026-09-30): Before a track is added to a reel, offer a shortlist of music choices with a preview of each laid under the cut, and let the owner pick.
- **profile** (2026-09-30): Music must be royalty-free and cleared for social use: Mixkit, Pixabay (no Content ID), or CC0. Never use ripped commercial tracks; if the owner wants a popular song, leave the export silent so they can add it from the platform's own music library at posting time.
- **profile** (2026-09-14): Standing order: NO CapCut AI features (no AI video gen, no credit-burning tools). Timeline edits only: cuts, captions, music, transitions, export.
- **profile** (2026-09-14): Never publish. Deliver finished reels to the owner (or the assistant or tool that handles posting) for approval.
- **log** (2026-09-30): Proven reel formula: a short (~1.5s) branded front cap on a creative background, a body of unique shots cut to a BPM grid (90 BPM suits hip hop and a relaxed pace, 120 BPM is energetic), and a branded end cap with logo, tagline, and website held about 3s with the music fading under it.
- **log** (2026-09-30): Remotion workflow: render with `npx remotion render src/index.ts <Comp> out.mp4 --props=<file> --crf=16`, then always re-encode with ffmpeg `-vf "scale=in_range=full:out_range=limited,format=yuv420p" -c:v libx264 -crf 16 -preset slow -movflags +faststart` so colors and playback are correct on Instagram. Loudness-normalize music to about -14 LUFS.
