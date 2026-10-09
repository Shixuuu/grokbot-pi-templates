---
name: jev-browser
description: "Use for fast Jev browser control on Grok Bot: prefer Ultrafast + Browser Harness attached to box Chrome; Joey headed Playwright as alternate; native computerUse on captcha/bot walls; key from the account they already use; first demo must be non-Google."
---

# Jev Browser (Grok Bot)

Fast browser control with TypeSafe Jev. Pair with **Plug in Jev** for Decisions/process replace — do not auto-start a fleet rewrite after a browser demo.

## Key source

Same as Plug in Jev §1: ask which account they already use (`OPENROUTER_API_KEY` or `TYPESAFE_API_KEY`). Secret card only.

## Product split

| Path | When |
|---|---|
| **Ultrafast + Harness → box Chrome** (preferred) | Default when Browser Harness / CDP to Grok Bot Chrome works. Jev picks actions; Chrome is the real headed browser. |
| **Joey `@jkudish/jev-browser`** (alternate) | When Harness/CDP is unavailable. Headed Playwright + Jev. |
| **Native Grok Bot Chrome** (`computerUse`) | Fallback when either path hits captcha, Google “sorry/unusual traffic”, or other bot walls. |
| **Do not** | Google account login on the box; invent page content; hide Flights-class walls as a quiet success. |

**Fallback rule:** preferred engine first → on captcha/sorry/bot-wall **stop** → native `computerUse` → **never invent** results. Flights-class sites are **expected** Chrome-fallback territory, not a failure to paper over.

## Onboard / prove

1. Key on secret card (matching their pick).
2. Preferred stack: install Ultrafast (Browser Use `jev-ultrafast` or equivalent), wire Decisions for their key, attach to box Chrome via Harness/CDP.
3. Alternate: install Chromium for Joey; confirm a headed run command or MCP `jev_navigate`.
4. **First prove must be a public non-Google page** (real useful task when possible). Report wall-clock, estimated cost. Fail closed if content looks invented.
5. After a successful prove, **offer** Plug in Jev to map one named process — do not dump a fleet table.

## Share rules

Skill + setup only; no keys; document Ultrafast-preferred / Joey-alternate / Chrome-fallback. Do not claim Flights parity until a Flights prove succeeds on that importer’s box.
