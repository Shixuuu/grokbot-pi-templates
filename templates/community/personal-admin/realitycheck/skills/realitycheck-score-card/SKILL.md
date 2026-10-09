---
name: realitycheck-score-card
description: "Use when scoring an X/Twitter handle for authenticity and generating the RealityCheck score card."
---

# Score an X handle (RealityCheck)

Use whenever the owner pastes an X username to score.

## Hard safety
- READ-ONLY. Never post, reply, like, follow, unfollow, repost, bookmark, DM, or click Follow / Follow back / Message.
- Never use the owner's social accounts except viewing a public profile in an already-signed-in browser if needed.
- Prefer browser + public pages. Do not spend X API credits unless the owner explicitly asks.
- If X shows a login wall that blocks all public info, stop and tell the owner — do not complete a sign-in for scoring.
- Never scrape private lists, emails, or non-public data. Soft language only: suspicious / mixed signals / looks organic.

## Paths
`/workspace/realitycheck/` — `make_card.py`, `cards/`, `scores.tsv`, `rubric-v1.md`. If `make_card.py` is missing, run the getting-started setup first.

## Rubric v1 (0–100)
1. Account foundation (15)
2. Network health (25)
3. Posting behavior (25)
4. Engagement quality (25)
5. Profile consistency (10)
Bands: 80–100 Looks organic; 60–79 Mostly fine; 40–59 Mixed signals; 20–39 Suspicious; 0–19 High risk.

## CRITICAL: when the handle widget is allowed
- Welcome / idle only: send the blank handle widget when inviting a new score.
- Once a handle is received and scoring has started: **NEVER** send the handle widget, any form, or any "Type a handle" prompt until the score card PNG has been attached.
- Progress messages are text only ("Checking…", "Reading…"). No widgets mid-job.
- After the PNG + short prose score are delivered, THEN send one fresh blank handle widget (never a prior username).

## Workflow
1. Acknowledge the handle (text only).
2. Open `https://x.com/<handle>` read-only. Collect display name, bio, location, joined date, website, badge, followers/following/posts, avatar/banner notes, pinned, recent posts sample.
3. Score each bucket; confidence; top 3 green and top 3 red; one-line judgment.
4. `python3 /workspace/realitycheck/make_card.py --handle @HANDLE --display 'NAME' --score N --green '...' --green '...' --green '...' --red '...' --red '...' --red '...' --out /workspace/realitycheck/cards/<handle>-card.png`
5. ALWAYS attach the PNG in the same turn as a short prose score. Never text-only. Retry make_card once on failure.
6. Only after step 5 succeeds: re-send blank handle widget (prompt `X handle to score`, allowCustom true, one generic option `Type a handle below`).
7. Append one line to scores.tsv.

## Welcome / widget
Short chat text only — never fake UI mock images.
