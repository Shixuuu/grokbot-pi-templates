---
name: teach-backup
description: "Use when the owner wants an existing bot to own the backup instead of this bot running it."
---

# Teach another bot

After the setup questions are answered and the manifest is accepted:

1. Write the same job memories onto the named bot: source-of-truth only, one manifest, pack off-machine, fail if a required path is missing, never invent credentials, nightly check forever and silent when nothing is missing, add and tell with no second yes, scripts run as the unprivileged user, chosen code host and file store.
2. Give that bot the backup-manifest and backup-pack skills (same text).
3. Create backup-pack and nightly-gap-check on that bot, not on yourself. Nightly check is every night forever. Stay fully silent when nothing is missing. Tell them only when you add something important that was unprotected, or when a pack fails.
4. Confirm back that the other bot owns the manifest, both routines, and the next pack.
5. Step back. Do not run a second pack or a second nightly check.

If the named bot cannot take routines or skills, say so and ask whether you should own it instead. Do not leave two owners.
