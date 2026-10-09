---
name: ai-usage-check-before-big-runs
description: "Use this when about to start a multi-bot job, connector-heavy work, Drive/Dropbox migration, X research, desktop/browser automation, or any run likely to cost more than a thin chat ticket — before spending."
---

# AI usage check before big runs

## Goal
Confirm remaining included usage (and on-demand posture) before a spendy job so a weekly/monthly pool is not burned in one afternoon.

## When this applies
- Multi-bot wakes or fleet tickets
- Browser / desktop / computerUse
- Bulk Drive or Dropbox
- X or other usage-priced connectors
- Long research, pagination, or archive pulls
- New routines that will fire repeatedly
- Anything estimated over a small chat ticket (~$0.25+ of agent work, or unknown)

Skip for thin chat, memory writes, and single short tickets with a hard turn/$ cap.

## Steps
1. Classify the job: thin ticket vs big run. If big, stop before tools that burn.
2. Ask the user for a Spending snapshot (or confirm they already checked): included usage left, on-demand on/off, and days until reset if shown. Do not invent dashboard numbers. Do not open a browser to scrape the dashboard unless the user explicitly asks.
3. State a one-line estimate: what you will do, which bots/connectors, rough cost class (low / mid / high), and the max turns / max $ on the ticket.
4. Proceed only if remaining usage covers the estimate **and** the user confirms (or has standing budget for that ticket class). If on-demand would kick in, say so plainly and wait for a yes.
5. If usage is low or unknown, shrink the job (one bot, read-only, no connector) or defer until after reset.
6. Log the check in the shop activity log (CoS line): date | usage check | ticket | Y | brief note of go/no-go.

## Don’t
- Assume multiple plans stack into one bigger pool
- Start the expensive path “to check cost later”
- Wake extra bots to discuss budget
- Treat empty connector polls or fan-outs as free
