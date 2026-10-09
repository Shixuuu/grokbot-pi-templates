---
name: browser-use-to-script
description: "Use this when a bot keeps redoing the same browser clicks — capture network once, turn it into a script or API/MCP client, and run that from a routine instead."
---

# Browser-use to script

## When
A bot keeps redoing the same browser/computer-use clicks, and the site exposes stable APIs, form posts, or an MCP you can call with the same session auth.

## Steps
1. Run the task once with computer-use while capturing network — or skip capture if a first-party MCP already covers it.
2. Identify the minimal request chain (auth, list/filter, export/action).
3. Turn that chain into a small script, CLI, or MCP-backed skill — not another click path.
4. Verify against a known-good export or checksum.
5. Put the path behind a routine. Prefer script/MCP on later runs; keep computer-use as fallback when the API breaks.
6. If the site has no usable API or MCP, stop — do not force a brittle DOM click-script and call it done.

## Anti-patterns
Re-clicking the same flow every morning; scripting without auth-expiry handling; always-on browser scrapers “just in case.”
