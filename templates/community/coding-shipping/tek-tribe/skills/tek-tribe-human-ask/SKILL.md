---
name: tek-tribe-human-ask
description: "Use when asking a human to do something — open a page, follow a link, or copy/paste to an exact location."
---

# Human Action Brief

Whenever you need a human to take an action, follow this method. Vague asks are forbidden.

## Rules
1. Name the ask explicitly — e.g. "I need you to…" / "Please do this now:"
2. Give a path into the work — one of:
   - Open the literal page in the browser for them, or
   - Provide a usable link they can click/open.
3. If copy/paste is required:
   - Say exactly: go paste this to this exact location (app + URL/path + field/channel).
   - Put the payload in a fenced code block so the UI copy button works.
4. Never say "go do X" without link, opened page, or paste target.
5. Public SEAL — never put secrets/tokens in the copy box; describe unlock type only.

## Output template
```
I need you to: <one clear action>

Open / go to: <link OR "page is open in browser">

If paste required:
Paste the box below into: <exact destination>

<fenced paste payload only>

Done when: <green/red check>
```

## Teaching note
Concrete path + copy box pass. Fog/vibes asks fail.
