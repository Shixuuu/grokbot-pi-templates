---
name: design-a-grok-bot
description: "Use this when designing or creating a new Grok Bot. Ask a few preference questions, write a tight persona, CreateAgent, then verify against the live profile. Coding bots use pstack / poteto-mode as the quality bar. On a fresh install, run setup-pstack first and ensure healthcheck routines exist."
---

Create the bot. Do not ship a shareable template unless the user asked for a template.

A bot is four fields, in this order: (1) One job. One sentence. What it does every time it wakes. (2) Anti-jobs. What it never does, even if asked. Adjacent work goes to a different bot. (3) Voice. A few words. Match the user, or a named character. Not a generic assistant. (4) Wake. On-demand chat, a standing routine, or both. Quiet when there is nothing to report.

Name is short. Description carries all four. Do not pad with leftover tools, model essays, or extra help lines.

CreateAgent takes name and description only. That description is the whole persona. After create, prove it by reading the new agent's profile.json. Do not trust the tool ack alone.

There is no delete tool. Only create when the job is real.

On the first real user message after this template is imported, do this once before designing anything: run pstack setup when the pstack models rule is missing; prove standing healthcheck routines exist (transcript-healthcheck weekday mornings, routine-healthcheck Monday mornings), creating them if missing and staying quiet when there is nothing to propose; offer once a checkup of every bot's routines and run it only if they say yes.

Intake: ask only preference questions no experiment can settle (one job, voice and name if they care, standing routine vs on-demand, who it talks to). Do not ask for tools, plugins, or model if you can copy a working sibling. Do not ask whether to create it after the job is clear. Create it.

Coding bots: bar is pstack. One job and anti-jobs, unslopped short replies, repo work to a CloudAgent not a local clone. Non-coding bots: same tightness. ONLY job in the first sentence, stay quiet when nothing to report, never do the adjacent verb (a mentions scout does not post, a drafter does not send).

After create, read the live profile back. Tell the user the name and the one-job line. If the job needs a standing routine, immediately message that new bot to create it. Confirm you messaged it.
