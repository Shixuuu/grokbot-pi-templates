---
name: gen-saver-wizard-setup
description: "Use when a user runs first-time setup for a generic credit-saver bot, or says wizard, setup, change generation paths, or run the wizard again. One where-menu: A local (default, most saved), B cloud (backup, also a good saver), C Grok Bot's computer (optional, some saved). One tool menu only. Keep current on every rerun menu. End with a To confirm… run the wizard again line."
---

# Gen Saver Wizard setup

## When
First chat, or the user says setup, wizard, change where generates go, or "Can you run the wizard again?" Also use this for this credit-saver bot. There is one wizard, not two menus.

## Start
Ask: A Setup Wizard, or B Type it in.

On every run after the first, EVERY question also offers Keep current. Show the saved answer next to it. They can change one part and leave the rest. That includes start, where, tools, extras, every-time, and all-bots.

## Where (one menu)
Default order.

A Local machine (default — most credits saved)
B Cloud (backup — also a good credit saver)
C Grok Bot's computer (install Grok Build, etc. — some credits saved)

Ask if they want this order. They can skip C. They cannot add a fourth slot. Grok Bot may appear only as a last-resort backup they name.

Do not also ask Desktop / Web / CLI / API as a first menu. A is local desktop or CLI. B is web or API. C is CLI on this bot's computer.

## Tools (one menu)
Show Grok Build, Hermes, Claude, and Codex only once. Keep current on reruns.

A (local): Grok Build, Hermes, Claude, Codex, Other (they type the name). Then copy or install those onto THEIR computer.

B (cloud): Imagine, Claude, ChatGPT, named API, Other. Never ask for a key in chat. Do not list Grok Build or Hermes here unless they skipped A.

C (optional): do not re-ask tools. Copy the A tools onto THIS bot's computer (follow Copy CLI to bot computer without a second pick-many list). If they skipped A, show the tool list once for C.

## Extras once
Pick many or skip. Keep current on reruns. Do not repeat Grok Build or Hermes.

- ffmpeg (clips and video)
- GitHub CLI (`gh`)
- Other (they type the name)

If they picked A and C, put extras on both. ffmpeg needs no login. They sign in once on the matching computer. Never ask for keys or passwords in chat.

## Every time
Ask: Do you want to choose the generation location every time? A Yes, B No. Keep current on reruns.

## All bots
Ask: Should I setup all your bots this way? Keep current on reruns.
- A Yes — stamp this path order onto their other bots
- B No Just You — only this bot
- C I'll Decide Later — save the paths here, do not touch other bots

Do not stamp anyone until they pick Yes. Stamp path order only, not CLI copies, unless they ask.

## Confirm
After the menus, send this (fill in their actual picks):

To confirm, [where], [tools], [extras], [every-time], [all-bots] are your choices. You can always run the wizard again and change any option without affecting anything else. Just ask, "Can you run the wizard again?"

Do not wipe saved slots they keep. If they run the wizard again, start at Start with Keep current on every menu.

## What leaves chat
Pictures, video, video edits, long drafts, and long code use the saved path. Short chat stays in Grok Bot. Do not send a three-line answer off-chat.

## Later generates
If they said Yes to every time, show their saved slots as a short picker first.
Then the first line must be exactly:
- `Generating via Grok Build Headless in the background to save you credits`
- `Generating via Hermes to save you credits`
- or `Generating via [tool] to save you credits` for any other saved tool
- `Generating using Grok Imagine on the web now...` for cloud Imagine
- `Generating here in Grok Bot` only if that slot is Grok Bot (warning)

Never generate images, video, long drafts, or long code in Grok Bot unless they saved it and earlier slots failed, or they picked it on an every-time ask.

## Never
Do not name Mini, Kale, or one person’s computer. Say their computer, the cloud, or this bot's computer. Do not fight a fullscreen TUI. CLI jobs go headless. Do not add a fourth slot. Do not show a second Grok Build / Hermes menu. Do not run a separate VM copy-CLI list.
