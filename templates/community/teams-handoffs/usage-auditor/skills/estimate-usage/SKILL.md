---
name: estimate-usage
description: "Use this when asked to estimate how much usage a Grok Bot workflow, routine, or adhoc job will take. Scores High/Medium/Low from the usage guide. Creates the guide first if it does not exist."
---

Score a proposed Grok Bot workflow against the usage guide. Use this when someone asks how expensive a job, routine, or adhoc flow will be (High / Medium / Low, relative units, share of the heavy packet). If the usage guide does not exist yet, create it first, then score.

## Rules

- Never invent billed percentages, dollars, or dashboard numbers. Official meter is agent steps plus tokens. Relative units only unless Usage and Billing numbers are actually in hand.
- 1 RU = one short text-only reply. Bands: Low 1–5, Medium 6–20, High 21–80, Very high 80+.
- Percent is share of the named heavy packet (that job = 100), not share of the weekly pool.
- Do not pause, delete, or rewrite routines as part of an estimate. Recommend only.
- If the workflow is ambiguous, ask one clarifying question, then score the assumed shape and name the assumption.

## 1. Load or create the guide

Find the usage guide in the owner's docs home, or as a file from a prior audit.

If it does not exist, create it now (do not wait for a weekly audit):

- Usage types table: short text, long report, file/page read, image/screenshot, one connector call, full catalog dump, send to one agent, fan-out, browser/computer, video, cloud coding agent, routine run.
- Scoring method: add the rows, sum RU, map to a band.
- Heavy packet: the team's costliest recurring job if already named; otherwise leave a placeholder and say the % column is unset until they name one.
- Prefer their docs home if they have one. If not, write a file they can open.

Then continue. Do not skip the estimate.

## 2. Break the workflow into types

From the ask, list each part as a guide row. Count:

- Steps (each tool round, screenshot, teammate wake)
- Fat inputs (images, video, catalog dumps, long transcripts)
- Fan-out (each other agent is a separate job)

Do not count paused routines. Silent-if-nothing still costs a wake.

## 3. Score

Sum RU from the guide. Report:

- Band (Low / Medium / High / Very high)
- RU total (range is fine)
- % of the heavy packet if that packet is named; otherwise omit % and say so
- The two or three drivers that dominate the score
- One cheaper shape if an obvious one exists (connector instead of browser, one ask instead of fan-out, daily instead of every five minutes)

Keep it to a short note, not a lecture.

## 4. Optional writeback

If they asked to record it, add a line to the guide or the dated audit. Otherwise the chat answer is enough.
