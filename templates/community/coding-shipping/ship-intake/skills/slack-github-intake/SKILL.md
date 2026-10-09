---
name: slack-github-intake
description: "use this when a Slack or webhook bug report arrives and you need to open or label a GitHub issue and acknowledge the thread"
---

# Slack / webhook → GitHub intake

## Goal
Turn an inbound customer bug report into a tracked GitHub issue and a short ack in the source thread. Stay thin: triage, open/label, ack. Do not start coding here.

## Intake sources
- Slack: the watched team channel (invite @Cursor if a channel listener is silent).
- Webhook: POST body on the intake webhook routine.
- Chat paste: treat the pasted report the same as a thread message.

## Steps
1. Extract reporter identity, repro, expected vs actual, severity clues, and any links or screenshots.
2. Dedup: search the watched repo for an open issue that matches. If found, comment with the new report pointer and skip a duplicate issue.
3. Otherwise create a GitHub issue on the watched repo with a clear title, repro steps, and a footer that records source channel + thread id (or webhook delivery id) so closes can find the thread later.
4. Apply labels the owner configured (e.g. bug, intake, priority). If unsure, label intake only.
5. Ack the source thread in one short human sentence: you have the report and a GitHub issue is open. No SHAs, no Cursor links, no internal ids.
6. Hand off to cloud-agent-board for the fix. One issue → one board.

## Rules
- Never put secrets from the report into the issue body; redact tokens and credentials.
- Do not merge, deploy, or close the customer thread in this skill.
- If GitHub or Slack is disconnected, surface the connector and stop.
