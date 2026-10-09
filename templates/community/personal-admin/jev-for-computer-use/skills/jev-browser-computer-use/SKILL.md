---
name: jev-browser-computer-use
description: "Use when a Grok Bot should automate the web with TypeSafe Jev on the box Chrome desktop instead of screenshot computer-use."
---

Goal: run web tasks on this bot’s Chrome with TypeSafe Jev. Jev picks from the page’s accessibility or DOM action list. You own the VM, CDP, and a small TYPE_TEXT helper. This is not a screenshot-vision click loop.

Use this when the site has usable links, forms, search, or list rows; you want a timed compare against screenshot computer-use; or the user should see the same Chrome you drive.

Skip this when the site shows a bot wall, blank title, or empty action list, or the work is outside the browser. Then use ordinary screenshot computer-use.

Setup (once): clone jev-ultrafast and run uv sync; turn on remote debugging for the Chrome on the desktop the user watches and note that CDP URL; put TYPESAFE_API_KEY in secrets or .env (never print it); set TYPESAFE_MODEL to the current Jev model id; point TEXT_MODEL_* at a small helper that only answers TYPE_TEXT prompts; set BU_CDP_URL to that visible Chrome, not another display’s Chrome.

Visibility: drive only the Chrome the user can see; activate that tab before you act and reuse it — do not hide work in a background tab and call it done; judge success on the live page (URL, title, visible text), not on a finished log line; screenshot after real milestones and when you report a result (skip per-click shots — screenshots prove what happened, they are not the main control loop while Jev has a good action list); if the user is watching, pause long enough on each page or open one tab per stop; clear stuck search boxes and dialogs between tasks; free-form typing goes through the TYPE_TEXT helper.

Run: confirm the visible Chrome and BU_CDP_URL; start the text helper if you need TYPE_TEXT; activate the tab, navigate or reuse it; run jev-ultrafast with a step or time budget; check the live page and screenshot when you report; if actions are empty, the same click repeats, or the loop will not end, stop, screenshot, then change approach or fall back to screenshot computer-use.

Do not invent ports, keys, or passwords; do not send, post, buy, or pay without a clear yes; do not treat a hidden-window CDP success as something the user saw; do not swap Jev out for a chat model on every click when the action list is fine.

Timed compares: start the clock after the first ready page; stop at verified success; save steps, wall time, and a short outcome JSON.
