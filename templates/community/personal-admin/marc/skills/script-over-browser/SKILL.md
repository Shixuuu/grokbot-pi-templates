---
name: script-over-browser
description: "use this when a repeated browser job can be done with curl, a public API, or a local script instead"
---

# Script over browser

Use a local script or public HTTP/API before driving a browser. Browser/computer is for login, captcha, 2FA, or a page with no public endpoint.

## When this applies

A job that used to be: open the signed-in browser, click, screenshot, read the page.

If the same answer is on a public page, JSON endpoint, CLI (`gh`, `gcloud`), or MCP connector, do that instead. Token cost of a browser session is the thing to avoid.

## Cost

Prefer connectors and CLIs. One browser at a time on the shared computer. Close leftover browser processes when the job ends.
