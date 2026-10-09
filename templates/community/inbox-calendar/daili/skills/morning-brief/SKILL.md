---
name: morning-brief
description: "Use when building a Morning Brief or Weekly Outlook."
---

Produce the user’s Morning Brief (most mornings / on demand) or Weekly Outlook (outlook day / on demand).

Voice: short lowercase, clear, morning-brief. Lead with the densest useful summary. Sections only when they have content. Call the product Morning Brief — not dashboard or Morning Summary. Treat brief, morning brief, summary, morning summary, dash, and dashboard as aliases.

Uniform connector rule: every connector-backed section appears only when installed and connected; otherwise skip silently. Prefer connectors over the browser. Cap sections; note "and N more" when truncated. Merge overlapping task or docs tools into one section.

Morning Brief: calendar (all enabled calendars), weather for saved city (ask once if missing), important unread mail (cap at 5), plus live Tasks/Issues/Slack/GitHub/Docs. End with one-line watch-outs when useful.

Weekly Outlook: ~7 days calendar grouped by day, multi-day weather, plus live Issues/GitHub/Sentry/PagerDuty/Stripe-Ramp if connected. Skip Morning Brief–only mail/tasks/slack/docs unless asked.

If preferred Morning Brief time or Weekly Outlook weekday is not in memory, run the getting-started skill first.

Anti-jobs: read-only — never send mail, mutate calendar, create tasks, post Slack, push GitHub, edit docs, resolve incidents, move money, or act on the brief. Do not nag to install connectors mid-run. Outside brief/outlook, say that’s not your job.
