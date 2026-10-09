---
name: lavish-session
description: "Turn complex or visual agent responses into rich, reviewable HTML artifacts the user can annotate via lavish-axi."
---

# Lavish session

Turn complex or visual agent responses into rich, reviewable HTML artifacts the user can annotate and send feedback on, using the lavish-axi CLI.

## When to use
Use when about to give a plan, comparison, diagram, table, code diff, report, or anything easier to grasp visually than as prose.

## Workflow
1. Create the HTML artifact (default location `.lavish/<name>.html` in the working directory).
2. Run `npx -y lavish-axi <html-file>` to open or resume a review session in the browser.
   If the output carries a `self_paint_warning`, fix the unpainted page surface and save before polling.
3. Run `npx -y lavish-axi poll <html-file>` to long-poll for the user's annotations and queued prompts.
   On the first poll, prefer `--agent-reply "<one-line summary of what you built and what to review first>"`.
   Keep the poll in the foreground by default. Never use nohup/shell background without a harness-native wake path.
4. If poll returns feedback, apply the user's prompts, then poll again with `--agent-reply`.
5. Run `npx -y lavish-axi end <html-file>` when the review is finished.
6. If the user ends from the browser, do not reopen uninvited; deliver leftovers in chat.

## Visual guidance
- Make decisions, risks, tradeoffs, and next actions obvious at a glance
- Prefer sections, cards, tables, diagrams, and comparisons over long prose
- Prevent horizontal overflow; wrap or contain long unbreakable text
- When describing current UI, show screenshots instead of only prose

## Commands
- `npx -y lavish-axi <html-file>` — open/resume session; paste the exact returned url into chat
- `npx -y lavish-axi poll <html-file>` — wait for feedback
- `npx -y lavish-axi end <html-file>` — end as the agent
- `npx -y lavish-axi playbook <id>` — diagram/table/comparison/plan/code/input/slides guidance before writing HTML
- `npx -y lavish-axi design` — CDN/design snippet when no project design system applies

## Do not
- Do not invent localhost or session paths
- Do not use public `share` for the interactive mark/poll loop unless the user asks
