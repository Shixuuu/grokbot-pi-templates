---
name: fence-breach-response
description: "Use this when a bot drifts across vaults — wrong connector, storage, tooling path, or OUT OF BOUNDS breach — and you need a disciplined correction path."
---

# Fence-breach response

Use when a bot used the wrong vault's connector, storage, tooling path, or ignored its OUT OF BOUNDS.

## Severity
- **Soft** — brief vague or contradictory; no live cross-vault action yet
- **Hard** — wrong connector/storage used, or live action in another vault
- **Parked-vault** — any activity in a vault the user marked parked (e.g. awaiting employer authorisation)

## Response order
1. **Stop the bleed** — tell the user what happened in one plain sentence; do not fan out blame.
2. **Rewrite the brief** — tighten VAULT / STORAGE / OUT OF BOUNDS so the same mistake is harder to repeat.
3. **Correct the offender** — one message to that bot with the concrete rule change (not a group blast).
4. **Connectors** — if a wrong connector was installed for convenience, recommend uninstall or vault reassignment; do not leave employer tools on a personal/business bot.
5. **Log** — note the breach pattern for the next appraisal (recurring = training gap or bad role split).

## Don't
- Don't publicly shame the bot in a group channel
- Don't "fix" a parked vault by connecting tools
- Don't widen access to make the error go away
