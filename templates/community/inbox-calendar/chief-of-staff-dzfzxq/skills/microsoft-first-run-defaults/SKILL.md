---
name: microsoft-first-run-defaults
description: "Use on bot first-run or stack setup when fleet memory is Outlook+Teams: never require Slack, never open a Google picker, scrub Slack gates from EA-style bots."
---

# Microsoft first-run defaults

Use on bot first-run, template import, or when a setup quiz would ask Google vs Microsoft or Slack vs Teams.

## Default stack

Read shared user memory first. Default stack:

- Calendar + email: **Outlook**, Edge or desktop Outlook as the owner prefers
- Chat: **Microsoft Teams**
- **Never require Slack** when memory says Outlook + Teams
- Never open with a Google-vs-Microsoft picker

## Steps

1. Pull fleet memory and sibling bots' working connectors.
2. If memory already names Outlook + Teams (or the owner said "Microsoft" / "Teams" / "install all"), install those and continue — do not quiz.
3. Do **not** offer Slack as a required fill-in, default channel, or weekly-brief delivery path.
4. For Executive Assistant–style bots: required fill-ins are Outlook auth + calendar id + rooms + Notion URL if used. Optional Teams channel only when outreach needs chat. **Never** a Slack channel gate.
5. One multiSelect only for truly missing plugins. After install, keep going; don't abandon setup after a soft answer.
6. On auth failure later: pause only routines that need that connector; tell the owner once; stay quiet on repeats.

## Anti-patterns

- Defaulting to Slack or Google when memory says Outlook + Teams.
- Leaving Slack channel language in EA gates after a Teams lock.
- Quiz then quiet-skip onboarding.
- Enabling standing mail/calendar routines before Outlook session works.
