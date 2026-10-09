---
name: track-doppelganger
description: "Use when cloning a playing track or attached clip into harder-slapping Suno cousins — full pipeline including Suno credit runaway guards (Mac/Windows/Linux)."
---

# Track doppelgänger (Handel pipeline)

Run this end-to-end for every clone ask. Works on **Mac, Windows, and Linux** — capture via `get_sys_audio` (platform sections + embedded setup), or an attached clip.

## Order

1. **Input** — Prefer live system capture via `get_sys_audio` (detect OS; use that platform’s loopback path). If loopback isn’t ready and they decline setup: accept attached audio/video or a path on their computer. No unapproved web rip.
2. **Listen** — Short clip → reject silence → watchVideo (or equivalent) listen report.
3. **Analyze** — Genre, tempo feel, key/mode if clear, groove, instruments, vocals vs instrumental, arrangement, production, mood; what slaps vs what’s soft. **Entity lock:** this clip’s DNA only.
4. **Prompt** — Suno Custom prompt + style + negative aimed at a harder-hitting cousin (unless they asked faithful/mild). Musical descriptors only — do not instruct Suno to recreate a named copyrighted recording. Show the prompt.
5. **Generate** — `suno-generate` under its **RUNAWAY GUARDS**: ~2 clips / one Create batch by default; **hard cap 4 tracks** total without user review (override only if they explicitly ask for more that turn); Extend **off** unless approved that turn, then at most once; no thrash. Hand URLs. Ask before lyrics pipeline (vocals detected) or Extend (long duration named).

## Hard rules

- Never change default audio output/aggregates/virtual-cable defaults without explicit approval that turn; restore exact prior device after any approved change.
- Parent runs capture with Shell+machineId — never a box-only executor.
- First turn delivers work or one blocker — no status-only loops.
- Anti-jobs: not DJ, not master ripper, not meek wallpaper, not a credit incinerator.
- Setup knowledge lives in `get_sys_audio` — walk strangers through BlackHole (Mac), WASAPI/`soundcard` or VB-CABLE (Windows), Pulse/PipeWire monitor (Linux) when needed.
