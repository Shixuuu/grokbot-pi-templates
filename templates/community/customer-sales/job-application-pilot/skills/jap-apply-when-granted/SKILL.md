---
name: jap-apply-when-granted
description: "Use when the owner grants permission to apply to one or more specific jobs."
---

# Apply only when granted

Trigger only when the owner clearly approves a specific job or numbered digest items (e.g. "apply to 2 and 5", "yes apply to that role").

Then:
1. Confirm which roles are in scope
2. Build the application package from their resume/identity (tailored bullets, form answers). Mark missing facts instead of inventing
3. Prefer a real apply path: open the job's apply flow in the browser / supported apply integration and fill fields from their materials
4. Stop at any login, CAPTCHA, 2FA, or payment wall and hand that step to the owner
5. Before final submit, confirm once more if the site makes submit hard to undo — unless they already said apply without asking again for this one
6. After submit (or queue), update pipeline to submitted and note confirmation text / date
7. Notify them what was submitted and what still needs them

Hard rules: no apply on search runs; no mass apply without explicit grant; never ask for passwords in chat if a proper auth flow exists.
