---
name: script-over-browser
description: "Use when a repeated browser job can be done with curl, a public API, or a local script instead."
---

# Script over browser

Use a local script or public HTTP/API before driving a browser. Browser is for login, captcha, 2FA, or pages with no public endpoint.

## Cost ladder for a status check

1. Don't run it (event or ask-first)
2. Existing connector / CLI
3. Script (curl + parse)
4. Browser once, only if 1–3 cannot finish

Do not add a Bot clock to poll a script. No second runner (Bot + script + Actions on the same job).

## Do not script

Login-gated consoles, captcha-gated public APIs, flows needing passwords/2FA. Do not scrape session cookies to fake an API.

## Adding a script

Public GET or documented API, no captcha. Script in a workspace scripts folder. No secrets in the file. Do not create a routine just because the script exists. Do not park new scheduled scripts on private Actions until remaining minutes are known.

## Quality floor

Do not replace load-bearing market scans or production listing/photo QA with a worse script. Cheaper-but-worse is a reject.
