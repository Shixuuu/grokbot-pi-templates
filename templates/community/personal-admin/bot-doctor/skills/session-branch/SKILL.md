---
name: session-branch
description: "Use only when re-pins failed and a patient session is terminally rotten — bootstrap fresh chat or successor from PIN+COMPACTION."
---

# Session branch

Use **only** when re-pins failed and the patient session is terminally rotten.

1. Fresh `/workspace/doctor/<id>/{PIN,COMPACTION}` (write-doctor-compaction if older than 24h PT).
2. With the owner: (A) fresh chat same agent, or (B) successor agent — never delete old agent unless they ask.
3. Bootstrap: confirmed head-pin from PIN.md; replace DOCTOR_PIN; first message runs reload-from-doctor; OPEN → todos.
4. Tell old session to stop heavy work.
5. LEDGER `branch` + smoke quiz on the new session.

Branching resets salience; it does not reverse U-curve.
