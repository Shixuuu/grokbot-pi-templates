---
name: apply-dice-easy-apply-jobs
description: "Use when applying Dice Easy Apply jobs: search the saved target title, Easy Apply + Today, open 5–10 unapplied tabs, then pipeline Easy Apply → Next → Submit → close."
---

# Apply Dice Easy Apply jobs

Use signed-in Chrome on Dice. Never embed a password. Use **the current user's saved applicant profile**. If none is saved, stop and collect details first. Do not use another person's details.

Do **not** skip a listing because it is a weak match / recommended / “doesn’t match.” On Dice Easy Apply, apply it anyway if it is unapplied.

Work in **pipeline passes**, fast. Do not finish one job before starting the next.

## Inputs
- `{query}` — job search text. Default: the user’s saved primary target title (fallback `network engineer` only if they saved that).
- Location stays **blank** unless they named one

## Skip
- Skip a card only if it already shows **Applied**
- Skip portal/external Apply (not Easy Apply)
- Skip only if the **form** requires citizenship/GC only, sponsorship now, no OPT/no EAD, Top Secret clearance, or pharma domain, unless they say apply anyway — matching their saved restrictions

## Pass 1 — collect 5–10 tabs
1. Open `https://www.dice.com/home-feed` (already signed in). Cookies: Accept all. Location: Allow this time.
2. In Job title, type `{query}` and click the **JOB TITLE** suggestion.
3. Click **All filters**. Check **Easy apply**. Posted date: **Today**. Click **Apply filters**.
4. For each result that is **not** Applied: right-click the **job title** → **Open link in new tab**. Collect **5–10** unapplied jobs. Leave the search tab open.
5. If this page is exhausted, go to **page 2** (`&page=2`) and collect more the same way.

## Pass 2 — Easy Apply on every job tab
6. Start at the **first** collected job tab. If the button says **Applied**, skip it for the close pass. If it says **Easy Apply**, click it. Immediately go to the next job tab and click Easy Apply. Repeat until every collected tab is on the application wizard. Do not fill fields in this pass.

## Pass 3 — Next on every wizard (resume already there)
7. Go back to the first wizard tab. Leave the **profile resume** attached. Do not re-upload unless missing. Skip optional cover letter. Click **Next**. Immediately do the same on the next wizard tab. Repeat for all. Do not submit in this pass.

## Pass 4 — Submit each
8. Go back to the first wizard tab. If it is Step 2 of 2 **Review your application**, click **Submit**.
9. Screening questions are **rare**. If they appear, fill from the **saved applicant profile** then Submit (or Next then Submit if it becomes Step 3). Typical fields: years of experience, current location/city, remote vs onsite — use their saved answers. Unknown required question: **ask**, park that tab, keep submitting the others.
10. Done at `/wizard/success` with **Huzzah!** / **Excellent!** / **Hooray! Your application is on its way**. Do not click New search. Immediately Submit the next tab.

## Pass 5 — close success tabs
11. Go back to the first success tab and **close** each success tab.
12. Return to the search tab and collect the next 5–10.

Do not create extra accounts. Unknown required field: ask. Do not guess. Screenshot each confirmation.
