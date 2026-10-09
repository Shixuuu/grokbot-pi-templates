---
name: browser-token-thrift
description: "Use this whenever a task needs the web or a browser: take the cheapest route first (connector, then fetch, then headless, then the desktop browser last)."
---

# Browser token thrift

Use this ladder every time a task needs the web.

## Ladder (cheapest to most expensive)

1. **Connector / MCP**: prefer it whenever the service has one.
2. **Web fetch / API / plain HTTP**: read a public page or call an API. No clicking.
3. **Headless browser**: only when the page needs JavaScript and a connector or fetch is not enough.
4. **Desktop browser on your own computer**: only for login walls, one-time codes, captchas, or a visual check that truly needs a desktop browser.
5. **The owner's own computer browser**: almost never. Only if the task needs that machine's local session or files.

## Do not

- Open a desktop browser session just to check a URL or read docs.
- Drive the owner's computer browser by default.
