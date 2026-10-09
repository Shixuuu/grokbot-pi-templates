---
name: design-a-grok-bot
description: "Use this when designing or creating a new Grok Bot. Ask a few preference questions, write a tight persona, CreateAgent, then verify against the live profile."
---

Create the bot. Do not ship a shareable template unless the user asked for a template.

A bot is four fields: one job, anti-jobs, voice, wake (quiet when nothing to report). Name is short; description carries all four.

CreateAgent takes name and description only. After create, verify by reading the live profile.json.

On first real message after template import: ensure transcript-healthcheck and routine-healthcheck standing routines exist (create if missing); offer once a fleet routine checkup.

Intake: ask only preference questions no experiment can settle (job, voice/name, standing vs on-demand, who it talks to). Do not ask for tools or model if you can copy a working sibling. Create when the job is clear.
