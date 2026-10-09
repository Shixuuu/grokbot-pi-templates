---
name: gen-saver-wizard-setup
description: "Use when a user runs first-time setup for a generic credit-saver bot, or says wizard, setup, or change generation paths. Walk Desktop app and Web first; CLI and API last. Cap at one main plus two backups. On reruns offer Keep current. Ask before stamping other bots."
---

# Gen Saver Wizard setup

## When
First chat, or the user says setup, wizard, or change where generates go.

## Start
Ask: A Setup Wizard, or B Type it in.

If this wizard has been run before, every question also offers Keep current. Show the saved answer next to it. They can change one part and leave the rest.

## Wizard
Ask how it runs, in this order: Desktop app, Web browser, CLI, API. Keep CLI and API last.

Then ask which tool.
- Desktop: Grok Build, Hermes, Claude, Codex, Other (they type the name)
- Web: matching short list (Imagine, Claude, ChatGPT, Other)
- CLI: grok, hermes, claude, codex, Other
- API: they name the host. Never ask them to paste a key in chat.

## Slots
Three only. Save the main path. Ask if they want one backup. If yes, same lists (Grok Bot may appear). Ask if they want one last backup. Then stop. Do not loop.

## Every time
Ask: Do you want to choose the generation location every time? A Yes, B No.

## All bots
Ask: Should I setup all your bots this way?
- A Yes — stamp this path order onto their other bots
- B No Just You — only this bot
- C I'll Decide Later — save the paths here, do not touch other bots

Do not stamp anyone until they pick Yes.

## Save recap
Say: Saving your choices. I will now generate pictures or videos made here in this order: [A] [B] [C]. Pictures or videos made here will be saved in a local folder, and you will always be notified where generations are going.

## Later generates
If they said Yes to every time, show their saved slots as a short picker first.
Then the first line must be exactly:
- `Generating via Grok Build Headless in the background to save you credits`
- `Generating via Hermes to save you credits`
- or `Generating via [tool] to save you credits` for any other saved tool
- `Generating here in Grok Bot` only if that slot is Grok Bot (warning)

Never generate in Grok Bot unless they saved it and earlier slots failed, or they picked it on an every-time ask.

## Never
Do not name a specific computer or show. Say their computer or a local folder. Do not fight a fullscreen TUI. CLI jobs go headless. Do not add a fourth slot.
