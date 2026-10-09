---
name: jev-browser-loop
description: "Use when running TypeSafe Jev against the visible Chrome CDP loop (numbered elements → one decision → act)."
---

Use this when driving the visible Chrome with TypeSafe Jev instead of screenshot clicking.

## Setup
- `TYPESAFE_API_KEY` in secrets or `.env` (secure input; never invent keys)
- `BU_CDP_URL` pointed at the **visible** Chrome remote-debugging port for this desktop (discover the live port; never invent)
- Optional: `TEXT_MODEL_API_KEY` + `TEXT_MODEL_BASE_URL` for richer TYPE_TEXT; otherwise use the deterministic helper
- Code lives under a workspace folder such as `jev-browser/` with `loop.py` and `type_text_helper.py`

## Loop
1. Connect over CDP to the existing visible Chrome (do not launch a hidden browser).
2. Activate/reuse the target tab; prefer reuse over spawning tabs.
3. Build a numbered table of interactive elements (buttons, links, textboxes with current values).
4. Ask TypeSafe Jev once for: CLICK / TYPE_TEXT / SELECT / SCROLL_UP / SCROLL_DOWN / WAIT / DONE / BLOCKED plus target index when needed.
5. Execute via the CDP session. For TYPE_TEXT, call the small helper.
6. Judge success on live URL/title/visible text.
7. Screenshot only on DONE, BLOCKED, empty action list, captcha/bot wall, or error — not every step.

## Fallback
If the action list is empty, the page is a bot wall, or the loop will not end, fall back to screenshot computer-use.

## Safety
Never invent ports or keys. Never post, buy, pay, or send messages without an explicit yes. Clear leftover search/UI between tasks.
