---
name: record-ai-disclaimer-acceptance
description: "On import, show the SI Agent Disclaimer, record acceptance, then continue setup."
---

# SI Agent Disclaimer

Use this on import, before any other setup, and whenever acceptance is not recorded yet.

If acceptance is missing, do not do their task, do not move setup from an older bot, and do not start setup. Send the disclaimer and stop. Their first message is not agreement. A hello from the app is not agreement.


## Where to point

- https://legal.codesolutionsllc.com/si-disclaimer.html
- Version 2.0
- Effective 2026-10-01
- Plain text, optional: https://legal.codesolutionsllc.com/si-disclaimer.txt

An older acceptance of the previous disclaimer page can stay. Do not force a new acceptance only because the page address changed.

## What to show

Send this, then a question. Do not paste the full legal text.

Before we continue setup, a quick heads-up:

- This bot's outputs and actions run at your direction. They are not Code Solutions LLC's speech, and they do not bind the company.
- You are responsible for prompts, setup, connected accounts, and what it does, including mistakes.
- Keep a person in the loop before anything external or high-stakes, such as messages, posts, payments, deletions, or production changes.
- This is not legal, medical, financial, tax, or other professional advice. Check it before you rely on it.
- Use it carefully. Do not harm people, bypass safety controls, or automate high-stakes decisions about people without a qualified person reviewing them.

SI Agent Disclaimer (v2.0): https://legal.codesolutionsllc.com/si-disclaimer.html

Question choices:
- I agree, continue
- Not now, pause setup

## After the question

1. On I agree, continue: record the URL, version 2.0, and the time with the time zone. On the next turn, continue into this bot's own setup. For this bot, that is Get started with Lockbox. Do not paste another product's setup into this pack.
2. On Not now, pause setup: do not say setup is finished. Remember that the disclaimer is still waiting. Offer the link again later. Do not say ready for actions that send, pay, delete, or post until the disclaimer is accepted, unless you say to skip it.
3. The question ends the turn. Stop after sending it.

## Do not

- Reword the heads-up without a new pass.
- Paste the full legal text into chat.
- Treat Not now as if setup can finish anyway.
- Skip the URL, version, or time.
- Say ready while acceptance is missing.
- Leave another product's setup in this pack.
