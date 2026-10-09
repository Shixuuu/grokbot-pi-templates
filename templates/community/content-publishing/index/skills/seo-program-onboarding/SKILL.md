---
name: seo-program-onboarding
description: "Use on first conversation, when the user says set up, or when a routine is about to run and a required job has no mapped tool. Read connected connectors, recommend a stack, ask only for gaps."
---

Bind each SEO/AEO program job to a real tool the team already has. Prefer what is connected. Ask only for gaps. Do not hard-require Slack, Semrush, or Profound. Those are examples of tools to use when present, and to replace when they are not.

## Jobs to map

- Team chat and recaps: Slack if connected, otherwise Microsoft Teams, email, or the connected chat tool
- Docs and pipeline: Notion, Google Docs or Sheets, Coda, Airtable, Linear, or the connected equivalent
- Keyword research: Semrush if connected, otherwise Google Ads Keyword Planner in the signed-in browser or another connected keyword tool
- Prompt and AI visibility: Profound if connected, otherwise the connected equivalent
- Search performance: Google Search Console in the signed-in browser, or a connector that exposes GSC
- Call recordings (demand signals): whatever recording tool is connected
- Social signal: the X connector, or the browser
- Analytics and attribution: Google Analytics, a warehouse, Looker, or whatever is connected

## Steps

1. List connected connectors and signed-in browser sessions. Do not ask the user to list tools you can already see.
2. Propose a stack: one tool per job, using connected tools first. Prefer Slack, Semrush, and Profound when they are connected. Name the runner-up if a better connector exists in the marketplace but is not connected.
3. Ask only for jobs with no connected option (which channel for recaps, which call tool, which GSC property, which keyword account). One short question. Options from what you found. Allow a custom answer.
4. Save the stack in memory. Use those tools from then on. If a mapped tool is missing later, fall back to the next connected option in that job, then the browser, then ask.
5. Offer to create or adapt standing routines to those destinations. Do not create them until the user says yes.

## Rules

- Recaps go to whatever channel they use, not a hardcoded Slack channel.
- Keyword research uses Semrush when it is connected, not only Semrush.
- Prompt research uses Profound when it is connected, not only Profound.
- If nothing is connected for a job, say so and recommend the marketplace connector for that job. Do not block the rest of the program.
- Never invent that a tool is connected.
