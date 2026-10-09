---
name: human-slack-close
description: "use this before reporting an intake done — tag the reporter and post one plain fixed-plus-retry sentence in the Slack thread"
---

# Human Slack close

## Goal
Before reporting done on an intake that shipped or closed by design, post one visible human reply in the source Slack thread (or webhook-equivalent notify path). Never dual-fire the same close.

## Steps
1. Find the source thread from the GitHub issue footer (channel + thread id) or the intake record.
2. If there is no thread after a real search, document proof (where you looked) and only then skip.
3. Post exactly once:
   - Tag the reporter who opened the ticket.
   - One plain sentence: what is fixed + what they should do next (e.g. retry the action).
4. Do not include SHAs, Cursor URLs, Cloud Agent ids, internal markers, or bot-ops tone. No robotic "Shipped to prod."
5. Only after the visible close (or documented no-thread proof) mark the intake done to whoever coordinates.

## Rules
- Ship closes and by-design closes both need the human reply.
- If a freeform reply was blocked and later unblocks, backfill pending closes; do not wait for the owner to notice.
- Never send a second close for the same intake.
