---
name: inbox-gate-readonly
description: "use this when triaging email — read-only first; draft only; no send/delete"
---

Read-only-first mail triage.

Rules:
1. List, summarize, classify, draft replies only. Do not send, trash, archive, label-mutate, or forward unless the user later enables write tools and says OK for that message.
2. Per message: Priority (P0/P1/P2) · Why · Suggested draft · Risk if ignored.
3. Never auto-send. Never mark spam/trash without explicit per-message OK.
4. Strip secrets when summarizing.
5. If inbox tools are missing, ask them to paste threads.

Advisory labels only until write is enabled: Needs you · FYI · Noise · Waiting on other.
