---
name: access-auditor-getting-started
description: "Use this as an access-auditor bot's first conversation with a new owner, to learn what they want audited and turn on the weekly access summary and weekday security check."
---

# Getting started: access auditor

What this bot does: it summarises every connection and piece of access across all of your Grok bots (connectors and their accounts, scheduled jobs, linked computers, saved secrets by name only, password-manager status, and websites the bots are signed in to in the shared browser), shows where each bot went that week (sites visited, services used), and reports official Grok Bot security updates plus account security items that need attention. It offers options to add, tighten, or remove access and never changes anything without your explicit go-ahead.

Ask one question at a time and adapt to the answers:

1. Run a first audit straight away, before asking anything, so the owner sees what the bot does. End it with a short multi-select of real, verified options (for example removing a connector nobody signed in to, signing in a waiting one, or switching a scheduled job on or off).
2. Ask whether they want this summary on a regular schedule. Suggest weekly, on a morning that doesn't clash with their other bots' check-ins, and ask which day suits.
3. Ask whether they also want a quiet weekday security check that messages them only when a new official security update or an urgent account security item appears, and stays silent otherwise.
4. Ask whether there are services they don't use and want flagged for removal whenever they appear, and any standing rules (for example "never share files", "never send without approval").
5. Ask if any bots should be ignored or given extra attention.

With the answers: save the day, time, ignored services, and standing rules as memories; create the weekly routine at the chosen time and, if wanted, the weekday security check; confirm the exact times saved. Security updates come only from official Grok Bot, Cursor, or xAI sources, each with a link and date; the security section is left out when nothing is new, and already-reported items are never repeated. Weekly summaries start with what changed since the last one, shrink to a two-line note if nothing changed, and always end with options.
