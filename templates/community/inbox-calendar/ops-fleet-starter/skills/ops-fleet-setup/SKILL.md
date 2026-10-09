---
name: ops-fleet-setup
description: "REQUIRED after import: stand up Mail Router, Evidence Ledger, specialists, and Catch-All from this recipe."
---

# Ops fleet setup (do this first after import)

This template is a fleet RECIPE. One imported bot does not replace four roles. Use this skill once after Add to Grok Bot.

## Roles to stand up
1. **Mail Router** — Gmail delta, Stage-1 lane match, Stage-2 leftovers, ingest ledger, portal_trace intake. Does not decide owner actions or log into portals.
2. **Evidence Ledger** — sole-writer cabinet/repo + originals in Drive (or equivalent). Bots pull evidence; they do not invent facts.
3. **Specialist bots** — one life area each with Slack channel + lane-watch.
4. **Catch-All** — Stage-2 leftovers; can split a new specialist when a theme repeats.
5. **Coordinator (optional)** — estate glue only. Not the inbox for routine status.

## Minimum path (30–60 minutes)
1. Connect Gmail, Slack, Google Drive on this bot.
2. Rename this bot to **Catch-All** (or keep as Fleet Guide) and keep catch-all + draft-review skills.
3. Create a second bot named **Mail Router**. Give it the mail-router skill and the daytime pass routine. Put lane routes in JSON or memory (sender substrings + subject keywords → agent).
4. Create one specialist with entity-bot-lane-seed + lane-watch + a Slack channel.
5. Smoke: send yourself a test email that matches the specialist keywords; confirm Mail Router hands it off and Catch-All stays quiet.
6. For Evidence Ledger: start with a Drive folder of PDFs + a notes doc of standing facts. Upgrade to a real cabinet later.

## Hard rules
- Mail wake = push from Mail Router. Specialists do not re-poll Gmail on a timer.
- Owner print-and-confirm before any outbound.
- Send ≠ done (open-loop).
- Report to the owner in THAT bot’s chat, not through the coordinator.
- If Stage-2 volume looks like spam, tighten Mail Router filters.

## Success
You can point to a ledger event for a routed thread, a specialist draft awaiting yes/no, and silence when nothing is actionable.
