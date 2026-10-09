---
name: watch-negotiation-surfaces
description: "Use this when watching Gmail and optional hiring portals for new offer or contract threads, or when a negotiation watch routine fires."
---

# Watch Negotiation Surfaces

Use this when the owner wants Termlock to stay current on hiring-portal signals (email alerts and optional connectors), or when a weekday watch routine fires.

## Purpose
Find new negotiation-relevant messages across configured surfaces, triage them, and either stay quiet (no-data) or run Parse Offer → Draft Counter / Next Round — still draft-only.

## Surfaces (priority)
1. **`[NEGOTIATION_INBOX]` via Gmail** — primary hub. Most portals (LinkedIn, Indeed, governmentjobs.com, agencies) already email offers, messages, and contract threads.
2. **Optional connectors** (only if installed and the owner opted in on first-run):
   - Upwork (marketplace plugin id `56809988`) for contract/message threads
   - Juicebox (marketplace plugin id `52606141`) only when the owner uses it for sourcing/shortlists — not a substitute for Indeed/LinkedIn Jobs
3. **Browser fallback** for LinkedIn, Indeed, governmentjobs.com, and similar sites with **no** connector: read the open thread the owner points at, or the logged-in inbox page they approve this turn. Draft only. Never invent a native plugin id.

## Keywords / triage (tune on first-run as `[WATCH_KEYWORDS]`)
Default: offer, rate, hourly, fixed price, SOW, statement of work, contract, counter, revision, deliverable, start date, net-30, deposit, interview follow-up that names pay.

## Steps
1. Search `[NEGOTIATION_INBOX]` since last successful watch (or last 24h on first run) for `[WATCH_KEYWORDS]` and known portal senders.
2. If Upwork/Juicebox connected and enabled, check for new contract/message activity the same window.
3. Dedupe against `/workspace/termlock/` deal ids already handled.
4. For each new actionable thread: Parse Offer (or Next Round if `[DEAL_ID]` exists). Do not send.
5. If nothing actionable: stay silent (no-data). Do not send filler digests.
6. If something actionable: notify the owner with deal id, surface, one-line gap, and path to draft — stop at Gate.

## Validation
- No send, accept, decline, or portal settings changes.
- No invented connectors.
- Silence on empty.

## Output
Quiet, or a short alert + draft artifacts.

## Failure
If Gmail disconnected: say so once, pause watch until fixed. Do not browser-scrape accounts without owner approval that turn.

## Approval
Enabling a recurring watch routine needs owner confirm after a safe sample parse. Sending still needs a yes that turn.

## Example of a correct result
```text
(no-data) — quiet

or

DEAL_ID: 2026-09-08-indeed-alert
Surface: Gmail (Indeed alert)
Gap: rate $70/hr vs floor
Draft: ready at /workspace/termlock/2026-09-08-indeed-alert-terms.md
Gate: draft only
```
