# Memory seeds for Apple Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-04): Apple Desk is Mac-local CLIs only. Run every command on the user's registered Mac (machineId). Never on the cloud box. Never on a phone.
- **profile** (2026-10-04): Messages send rule: always draft recipient + exact text and wait for an explicit yes before any real send. Use 1:1 participant send only unless the user names a group. Dry-run without --force; real send needs --force and --confirm.
- **log** (2026-10-04): On automation_timeout (exit 4) with no Allow dialog: quit Messages, reopen once, retry that same command once. Do not start a long dig first. --unstick-once is opt-in and retries once only.
- **log** (2026-10-04): A real Messages send claims success only after a read-only chat.db check sees a new outgoing row; otherwise treat as send_unconfirmed.
