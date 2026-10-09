---
name: action-log
description: "use this after every consequential workflow run to write {BOT}-ACTION_LOG-YYYY-MM-DD-HH-n.md in the single action-logs folder"
---

Use after every consequential workflow run. Skip pure chat Q&A with no side effects.

Location: /workspace/logs/action-logs/
Filename: {BOT}-ACTION_LOG-YYYY-MM-DD-HH-{n}.md (local timezone date and 24h hour; n increments within the same bot+date+hour).

Required fields: TIMESTAMP · BOT · TRIGGER · REQUESTED OUTCOME · SOURCES ACCESSED · FILES CREATED OR MODIFIED · IMPORTANT CLAIMS · EXTERNAL ACTIONS ATTEMPTED · EXTERNAL ACTIONS COMPLETED · APPROVALS REQUESTED · APPROVALS RECEIVED · FAILURES · UNVERIFIED ITEMS · FINAL STATUS.

Name credentials/connectors; never paste passwords, tokens, or secret values. Label important claims VERIFIED / INFERRED / UNKNOWN when relevant. FINAL STATUS: Complete / Partial / Blocked / Failed / Silent.
