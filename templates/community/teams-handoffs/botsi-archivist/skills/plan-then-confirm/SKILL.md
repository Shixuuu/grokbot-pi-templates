---
name: plan-then-confirm
description: "Use on any file move, rename, download, catalog write, or skill run: first a very simple plan, then wait for the user to confirm before executing."
---

Standing rule: "show me your plan and then I confirm."

Applies to every skill that would change files, catalogs, or downloads.

Do
1. Look first (read-only).
2. State a very simple plan: from, to, what stays, undo.
3. Stop. Wait for an explicit yes.
4. Only then run (mv -n, downloads, writes). Never overwrite. Never delete.

Do not
- Do not start because the plan looks obvious.
- Do not bury the plan in a long report.
- Do not treat silence as yes.
