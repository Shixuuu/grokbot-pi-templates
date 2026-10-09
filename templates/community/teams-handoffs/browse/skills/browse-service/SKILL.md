---
name: browse-service
description: "Use when this bot must write, repair, or run the shared local browser, or when another bot asks it to open a page."
---

# Browse service

You are the shared browser for the other bots on this computer. One visible local browser, not each bot's own desktop browser.

Write the program after the owner agrees, or when it is missing, or when a smoke check fails. If it is already running and the check passes, reuse it. Do not copy a private checkout or a personal browser profile. If they asked for a Cursor coding agent, hand it this contract and then check the result yourself.

The window stays visible. Files live only under browse/ on the shared workspace: browse/app for the program, browse/data for profiles and logs, browse/downloads for downloads. Do not write into another bot's folder or into projects/ unless the owner asks for that one file.

## Contract

- Node, Playwright's bundled Chromium, one persistent profile per pool. Never a personal Chrome profile.
- One headed browser. A later start attaches to it instead of opening a second window.
- MCP on standard input and output. Not a private web address.
- The command the owner registers once is `node /workspace/browse/app/server.js`. Tell them that after a successful start.
- Tools: list, create, and close pools; open, close, and list tabs; navigate; click; type; scroll; hover; wait; a text snapshot; a screenshot; move the pointer to an element; run a page script; get and set the fingerprint. Block file://. Cap open tabs at 16. Every result names the mode that did it.
- The process must not die on an ordinary failure. A download timeout, a closed page, or a rejected navigation is a caught error returned to the caller, not an unhandled exception.

## Fingerprint

Ordinary desktop Chrome. Do not set a user-agent at launch, so bundled Chromium reports its own. Locale en-US. The computer's timezone. Light color scheme. Reduced motion no-preference. Viewport null, so the window is the real one. No deviceScaleFactor with a null viewport. No fixed 1920 by 1080.

Launch args: drop --enable-automation. Add only --disable-blink-features=AutomationControlled, --no-first-run, --no-default-browser-check, and --disable-infobars.

Before page scripts run, set navigator.webdriver to undefined, ensure window.chrome.runtime exists, and if the plugin list is empty, expose a short desktop PDF-viewer list. No canvas noise, WebGL spoofing, or TLS impersonation.

Get and set fingerprint are MCP tools. Set may change user-agent, locale, timezone, and color scheme, then restarts that pool's context and returns the values now in effect. A caller-supplied user-agent is used as given. Do not invent one.

## Modes

Default is classic. A call can override it. A domain policy can force mouse and keyboard for a registrable domain, and that wins.

1. Classic (direct). Playwright may navigate, click, and type directly.
2. Mouse and keyboard (human_emulated). Real pointer and keys only. No locator click, no fill. Wheel or keys to bring the target into view, then move and click. Pointer path is a cubic Bezier, control points offset up to a quarter of the distance and capped at 80px, jitter about plus or minus 0.8px, optional 4 to 12px overshoot past 40px, 8 to 40 steps, about 1.2ms per pixel, at least 80ms and at most 2000ms, then a 40 to 180ms pause, mouse down 30 to 90ms, mouse up. Typing is one character at a time: base delay 40 to 90ms, each key waits that base times 0.6 to 1.5.
3. Page script (evaluate). A page-side JavaScript string, JSON back, cap 256 KiB, error if larger. For reading data or calling a function the page already has. Not for exploits. Say the cap and that purpose next to the tool.

## Smoke check

Open a public page in the visible window, read a snapshot, move the pointer onto an element with the mouse and keyboard path, run a page script that returns the document title, confirm the user-agent is Chromium's own Chrome string, and confirm an MCP handshake on standard input and output. Files stay under browse/. If it fails, fix once, then tell the owner what broke.

## Watch the process

Keep an eye on the browser process. If it crashes or exits, look at the error before you do anything else.

A simple fault is one with an obvious local cause, such as an unhandled exception from a timeout or a closed page. Fix that cause, restart the browser, and tell the owner in one line what broke and that it is back. Do not ask first.

If the fault looks like it would take a long investigation or a large rewrite, stop and ask the owner before you spend that work. Say what you saw, in a sentence.

## Other bots

One job at a time. Return a short snapshot, plus a screenshot when they asked or the page is visual, and name the mode. Do not sign in, pay, or send a message unless the owner asked. If classic is blocked, retry that domain once with mouse and keyboard. Page script is for extraction or a page function.

If the browser is stuck on a captcha, the owner can open this bot's screen and go through it.

After the smoke check, ask which other bots to brief. Only those. The brief is short and stands alone:

- Shared browser, one visible window, on this bot's screen.
- Call it with the local command `node /workspace/browse/app/server.js`, registered once by the owner.
- Three modes: classic (direct clicks), mouse and keyboard (curved pointer, typed characters), page script (read data or call a function the page already has, 256 KiB cap).
- If the browser is stuck on a captcha, the user can open this bot's screen and go through it.
