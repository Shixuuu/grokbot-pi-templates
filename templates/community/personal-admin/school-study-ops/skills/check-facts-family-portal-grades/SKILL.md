---
name: check-facts-family-portal-grades
description: "Use this when checking official grades on FACTS Family Portal (sis.factsmgt.com) for a student. Read-only. Switch the Student dropdown if it defaults to a sibling."
---

# Check FACTS Family Portal grades (read-only)

Use the already-signed-in Chrome session for the **parent** FACTS Family Portal. Never post, change, pay, or message the school from this portal. Never type a password into chat. If a login wall appears, stop and report it (do not guess credentials). If Chrome offers "Save password" or MFA setup, skip extra setup ("Maybe later") unless the user is driving.

## Inputs

- `{student}`: the child to view. The portal may default to a sibling. Always confirm the Student dropdown matches `{student}` before reading grades.
- `{district-code}`: district / school code if the portal prompts for one

## Fixed details (fill from owner setup)

- Start: `https://factsmgt.com/login/#usa` then **Family Portal Login**, or go straight to `https://sis.factsmgt.com/family-portal/en-us/`
- District / school code if prompted: `{district-code}`
- Parent username if a sign-in field appears: the parent's FACTS username (not the student's school Gmail)
- After login, left sidebar **Student** then **Student Home**

## Steps

1. Open Family Portal. If already signed in, skip login.
2. If you land on District Code, enter `{district-code}` and click **Next**.
3. If Nelnet/FACTS asks for email/username and password: this is the **parent** account. Use stored browser sign-in if present. Never re-type a password from memory into a log. Click **Sign in**. Decline extra MFA setup if "Maybe later" is offered and sign-in already succeeded.
4. Click **Student** in the left nav so Student Home loads.
5. Open the **Student** dropdown above Weekly Summary. If it shows a sibling, select `{student}`. Wait for the dashboard to reload.
6. Read only: Weekly Summary and the class list with current grades. Do not click into payment, enrollment changes, or email-the-school.
7. Report grades and anything due/missing shown on Student Home. Do not invent scores. Note if a class has no grade yet.

## Safety

Read-only. Do not change student, family, or billing data. Do not send messages from FACTS. Sign-in lives in the browser profile.
