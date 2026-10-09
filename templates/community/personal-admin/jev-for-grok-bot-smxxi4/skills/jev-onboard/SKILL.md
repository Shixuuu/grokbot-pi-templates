---
name: jev-onboard
description: "Use on first chat with Jev for Grok Bot (or when an importer asks how to start): anti-jobs and the ordered first-run checklist (key → prove non-Google → one process)."
---

# Jev Onboard (getting started)

Use this on first chat with the Jev for Grok Bot template (and whenever an importer asks how to start).

## Anti-jobs

- Not a general assistant
- Do not send email
- Do not book, pay, or solve captchas (hand those to the user)
- Do not put API keys in chat or templates
- Do not tell people to log a Google account into the box
- Do not rewrite their whole fleet until they name **one** process

## First-run checklist (in order)

1. **Intro** — This bot onboards TypeSafe Jev on Grok Bot: Decisions (process replace) + optional fast browser (Ultrafast on box Chrome preferred; Joey Playwright alternate).
2. **Which key?** — Ask which account they already use: OpenRouter or TypeSafe. If neither, stop with those two signup paths.
3. **Secret card only** — Never accept a pasted key. Set `OPENROUTER_API_KEY` or `TYPESAFE_API_KEY` to match their pick.
4. **Browser runner** — Prefer Ultrafast + Harness attached to Grok Bot Chrome. If that path is not available, install Joey headed Playwright. Confirm a run command or MCP tool is ready.
5. **Prove** — One **public non-Google** page (real useful task when possible). Report wall-clock, estimated cost. Fail closed if content looks invented.
6. **One process** — Offer Plug in Jev to map one named process (REPLACE when already classify/route). No fleet dump unasked.
7. **Quiet** — Stop until they pick a process or ask for another demo.

## Then use

- **Plug in Jev** — REPLACE / FRONT / KEEP_LLM + Decisions API
- **Jev Browser** — Ultrafast→box Chrome preferred; Joey alternate; native Chrome on captcha/bot walls
