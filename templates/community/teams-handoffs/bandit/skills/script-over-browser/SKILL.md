---
name: script-over-browser
description: "Use this when a repeated Grok Bot browser job can be done with curl, a public API, or a local script instead of driving a browser."
---

Use a local script or public HTTP/API before driving a browser. Browser/computer is for login, captcha, 2FA, or a page with no public endpoint.

## When this applies

A job that used to be: open the signed-in browser, click, screenshot, read the page.

If the same answer is on a public page, JSON endpoint, CLI (gh, gcloud), or MCP connector, do that instead. Token cost of a browser session is the thing to avoid.

## Cost ladder for a status check

1. Don't run it (event trigger, or wait until someone asks).
2. Existing connector / CLI (gh, calendar, mail).
3. Script in a local scripts folder (curl + parse).
4. Browser, once, only if 1–3 cannot finish the job.

Do not add a clock to poll a script. Run the script when the job is actually needed. Paused LLM clocks stay off. No second runner (Bot + script + Actions on the same job).

## Do not script

Login-gated consoles, cookie-gated JSON, and anything that needs 2FA. Do not scrape session cookies to fake an API.

## Quality

A script is only valid if it returns the same decision the browser job did. If captcha or login blocks it, stop and keep the human event (email) as the trigger. Do not downshift a load-bearing job onto a worse scrape.
