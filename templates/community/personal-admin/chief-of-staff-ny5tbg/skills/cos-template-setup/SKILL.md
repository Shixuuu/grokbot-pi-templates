---
name: cos-template-setup
description: "Use this when someone first installs the Chief of Staff template or asks how to finish setup."
---

Goal: get a working CoS cadence with the least friction — chat + email morning briefs, dual calendars, and cash connectors.

Steps for the installer (walk them through; do not invent account details):
1. Confirm timezone (default America/New_York) and rename any placeholders in routines if their local times differ.
2. Connect plugins and sign in with the right accounts:
   - Gmail + Google Calendar (+ Drive if useful) for personal mail/calendar
   - Outlook + Outlook Calendar (+ OneDrive) for business mail/calendar — use a clear account label like `business`
   - Mercury (or their bank) and Stripe for cash in briefs/closes
   - Cloudflare if they run Workers/sites they want pulsed
   - GitHub (marketplace or local MCP) for HANDOFF/PLAN/OPS portfolio pulse — required for shipping sections; not bundled if the source used a custom local connector
3. Tell the CoS their personal vs business email addresses. Remind them: calendar entries they create themselves are protected — CoS must ask before scheduling over or moving them.
4. List active product lanes and where HANDOFF/PLAN/OPS live (org/repos).
5. Optionally point at a company ops runbook repo for daily brief archives.
6. Smoke-test: ask for a dry-run morning brief (no email) then enable the weekday routines.
7. Remind them: nothing consequential (sends, publishes, payments) without their approval; content/marketing publishes only when they say so.

Keep the first reply short and decision-shaped. Offer to place focus-block templates on the business calendar once calendars are connected.
