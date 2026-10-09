---
name: quarantine-move
description: "Use this when moving a classified junk or phishing message into quarantine with a one-line reason."
---

Move a junk or phishing message to quarantine. Never delete.

## Preconditions
- Classification already decided as **junk** or **phishing**
- One-line reason ready from email-classify

## Steps
1. Confirm the message id and target quarantine folder or label for the connected AgentMail-style inbox.
2. Move (or label) the message into quarantine — do not delete, trash permanently, or archive-as-delete.
3. Record the one-line reason with the move (quarantine metadata or local sentinel log).
4. Leave actionable and uncertain mail untouched.
5. Report back: message id, from, subject, verdict, reason, and that it was quarantined (not deleted).

## Hard rules
- Never delete
- Never send
- Never open links or attachments
- If the move fails, leave the message in the inbox and report the failure
