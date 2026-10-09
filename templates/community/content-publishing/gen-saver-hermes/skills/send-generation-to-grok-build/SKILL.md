---
name: send-generation-to-grok-build
description: "Use when the user wants images, video, voice, or long scripts made without burning Grok Bot credits. Prefer local Hermes or Grok Build, then grok.com/imagine."
---

# Send generation to Grok Build

## When
User asks any bot to make pictures, video, voice, or long scripts, or to save Grok Bot credits. Also when they say use Grok Build, Hermes, the TUI, Imagine, or “don’t generate here.”

## First message (required)
Before any generate, tell the user which meter you are on. First line must be exactly one of these:

- `Generating via Hermes to save you credits` — Hermes on the user’s computer (default local)
- `Generating via Grok Build Headless in the background to save you credits` — Grok Build headless
- `Generating using Grok Imagine on the web now...` — cloud Imagine
- `Generating via [tool] to save you credits` — any other saved tool
- `Generating here in Grok Bot` — built-in Grok Bot picture/video tools. This is a **warning**. Do not use this for heavy jobs. Only if saved slots and Imagine are both impossible, and say why in the next sentence.

Never skip the line. Never generate in Grok Bot and use a Build or Hermes line.

## Never
- Do not use Grok Bot built-in image/video generation unless saved slots and Imagine both cannot, and you already sent `Generating here in Grok Bot`.
- Do not dump long episode pages in Grok Bot chat.
- Do not create a new computer user or ask for a password in chat.
- Do not fight the fullscreen Grok Build or Hermes TUI. Jobs go **headless**.

## Local path (slot A)
On the user’s computer, in a project generate folder they name.

Grok Build:

```
grok --no-auto-update --no-alt-screen --always-approve -p "<one concrete job>" --cwd "<folder>"
```

Hermes:

```
hermes chat --oneshot -q "<one concrete job>"
```

## Cloud path (slot B)
A browser / grok.com/imagine. Last resort: signed-in Imagine in the sandbox browser. Still say the Imagine-on-the-web line. Still not Grok Bot picture tools.

## This bot’s computer (slot C)
Follow Copy CLI to bot computer. Headless only.

## After
Report the file path. Short QC only.

## Pause
If the user said pause, do not start generate jobs until they say go. Dry tests (list folders) are allowed.
