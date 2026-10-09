---
name: send-generation-to-grok-build
description: "Use when the user wants images, video, voice, or long scripts made without burning Grok Bot credits. Prefer headless Grok Build or local Hermes, then grok.com/imagine, never built-in Grok Bot pictures unless both failed. First line must be exactly: Generating via Grok Build Headless in the background to save you credits OR Generating via Hermes to save you credits"
---

# Send generation to Grok Build

## When
User asks any bot to make pictures, video, voice, or long scripts, or to save Grok Bot credits. Also when they say use Grok Build, Hermes, a local TUI, Imagine, or “don’t generate here.”

## First message (required)
Before any generate, tell the user which meter you are on. First line must be exactly one of these two:

- `Generating via Grok Build Headless in the background to save you credits` — Grok Build headless (preferred)
- `Generating via Hermes to save you credits` — Hermes on the user’s computer

If you must use a backup meter, still name it on the first line:

- `Generating using Grok Imagine on the web now...` — grok.com/imagine or a browser
- `Generating here in Grok Bot` — built-in Grok Bot picture/video tools. This is a **warning**. Do not use this for anything heavy. Only if Build/Hermes and Imagine are both impossible, and say why in the next sentence.

Never skip the line. Never generate in Grok Bot and use a Build or Hermes line.

## Never
- Do not use Grok Bot built-in image/video generation unless Build/Hermes and Imagine both cannot, and you already sent `Generating here in Grok Bot`.
- Do not dump long episode pages in Grok Bot chat.
- Do not create a new computer user or ask for a password in chat.
- Do not fight the fullscreen Grok Build or Hermes TUI. Jobs go **headless**.

## First path (Grok Build)
On the user’s computer. Studio root: a local Grok Build studio folder they already use.
Binary: `~/.grok/bin/grok` (or `grok` on PATH).

Run headless in that folder:

```
grok --no-auto-update --no-alt-screen --always-approve -p "<one concrete job>" --cwd "<studio root>"
```

## Hermes path
On the user’s computer, prefer oneshot. Do not fight the fullscreen TUI:

```
hermes chat --oneshot -q "<one concrete job>"
```

## Backup
Browser / grok.com/imagine. Last resort: signed-in Imagine in the sandbox browser. Still say the Imagine-on-the-web line. Still not Grok Bot picture tools.

## After
Report the file path. Short QC only.

## Pause
If the user said pause, do not start generate jobs until they say go. Dry tests (list folders) are allowed.
