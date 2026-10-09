---
name: jev-ultrafast-cursor
description: "Use when a local Cursor agent should drive the browser with TypeSafe Jev / jev-ultrafast instead of screenshot computer-use."
---

Goal: drive the browser with jev-ultrafast. TypeSafe Jev picks an operation and element index from a live action table. A small text model fills TYPE_TEXT only. Prefer this over screenshot clicking when the page exposes real controls and you are on the browser the operator can see.

Use this when: structured sites (search, flights, forms, Wikipedia, HN, docs); speed checks against screenshot computer-use; the user asks for Jev, TypeSafe, or indexed browser actions.

Skip this when: bot walls, empty titles, or empty action tables; work outside the browser.

How it fits together: the page builds an indexed element table; Jev picks operation plus index; TYPE_TEXT calls a small model; Browser Harness or CDP runs the action. One plain-language goal. Targets are indexes, not CSS selectors or generated code. DONE is not success — check the live page.

Visibility: point CDP at the Chrome the user is watching; activate that tab and prefer reuse over background tabs; screenshot that window after real steps and when you report; on empty actions, blocks, or loops, stop, screenshot, then fall back to screenshot computer-use; for watchable tours, pause or use separate tabs; clear leftover UI between tasks; do not invent ports or keys; do not send or pay without a yes.

Setup: clone jev-ultrafast, uv sync, copy .env.example to .env. Set TYPESAFE_API_KEY, TYPESAFE_MODEL, TEXT_MODEL_* for typing, and BU_CDP_URL to the visible Chrome. Use Browser Harness doctor if Chrome will not connect.

Run: demo UI or the Agent library with one clear goal and a visible stop condition. Cap steps and time. Report wall time, steps, final URL or title, whether you verified the goal, and a screenshot when the user should see the result. Never commit .env or print keys.
