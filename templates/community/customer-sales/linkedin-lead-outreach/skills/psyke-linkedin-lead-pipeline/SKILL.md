---
name: psyke-linkedin-lead-pipeline
description: "Use when running LinkedIn comment-tracking → reply → DM → accept-connections into a Notion lead tracker."
---

# LinkedIn lead pipeline (4 stages)

Use when running an outreach LinkedIn profile’s comment → Notion lead tracker → reply → DM → accept connections flow.

## Shared facts
- Outreach profile: {{OUTREACH_LINKEDIN_PROFILE_URL}}
- Active board: the operator’s Notion lead tracker {{NOTION_LEAD_TRACKER_COLLECTION}} ({{NOTION_LEAD_TRACKER_URL}})
- Reply/DM/accept as the outreach profile only — never the operator’s personal LinkedIn
- Create-only for new leads; never update Notes/Email/Next Action except as a stage script allows (Stage B may write Email when found in the comment)
- Normalise LinkedIn URLs: lowercase `/in/<slug>` only
- **Auto-send cap:** at most **10 new comment replies** and **10 DMs** per run. After the cap, stop sending and list remaining people (name + LinkedIn URL + post) for the operator to message manually. Already-replied Notion Stage syncs do not count toward the reply cap.

## Stage A — Track comments
1. Compute lookback from newest Comment Date on the board (overlap prior runs; floor 72h; max 30d; posts window ≥14d).
2. Pull outreach-profile posts in window + comments (prefer Apify actors `harvestapi/linkedin-profile-posts` then `harvestapi/linkedin-post-comments` if available; skip if offline, no browser fallback). Never use cookie-based scrapers.
3. Filter to window; dedupe vs board; one row per person (most recent comment).
4. Include genuine interest; skip bots, pitches, pure congrats, the outreach profile itself.
5. Create ≤30 rows: Name, LinkedIn URL, Job Position, Company (parse or blank), Comment Date, Comment Text, Stage=`New`, Source URL=post URL, Post Title.
6. Final report posts table MUST include per post: Date | Total comments | Comments scanned | Added to Notion | Short title | Link (including 0-comment skips). Quiet one-liner if nothing new.

## Stage B — Comment replies
1. Eligible = any board lead with Source URL + Comment Text, **any Notion Stage** (including DM Sent). Skip only the outreach profile.
2. Verify LinkedIn session is the outreach profile before any reply.
3. LinkedIn is source of truth: if the outreach profile already replied under that comment, do not post again.
4. **Email-in-comment path:** if Comment Text contains a clear email address:
   - Write that email into the Notion **Email** property.
   - Reply with **Set C** (thanks / send ASAP) — pick **1 of 3 at random**. Do **not** use Set A/B.
   - Counts toward the 10-reply send cap.
5. Else: reply once with Set A (1st) or Set B (2nd/3rd); pick **1 of 3 at random**.
6. Stage updates: if Stage is New/blank after reply or already-replied sync → set Comment Replied (1st)/(2nd/3rd). If Stage is already Comment Replied / DM Sent / further → **do not downgrade**.
7. Caps: **10 new replies/run**; stop after 3 consecutive reply failures. After 10 sends, list remaining people still missing an outreach reply for the operator.
8. Never DM, connect, or open inbox in this stage.

### Step 2 reply templates (pick 1 of 3 at random; [Name]=first name)
**Set A — 1st degree (ask for a DM)**
1. Hey [Name], shoot me a DM with your email and which one you're after and I'll send it over ASAP
2. Hi [Name], DM me your email + which one you want and I'll get it across :)
3. Happy to send it over! DM me your email and the one you're after and will send it through ASAP!

**Set B — 2nd/3rd (ask to connect)**
1. Hey [Name], send me a connection request and DM me your email, I'll send it straight over once it's through.
2. Happy to share! Shoot a connection request my way and I'll get it to you ASAP.
3. Would love to send it. Could you connect first so I can DM you :)

**Set C — email already in their comment**
1. Thanks [Name], I'll send it over to you ASAP!
2. Got it [Name] — thanks, I'll send it through ASAP!
3. Thanks! I'll get it across to you ASAP :)

## Stage C — DM send
1. Eligible = Stage `Comment Replied (1st)` with LinkedIn URL. **Skip if Notion Email is already filled**.
2. As the outreach profile, pick **1 of 3** DM templates at random asking for email — no magnet in DM. Cap **10 DMs/run**.
3. After send: Stage=`DM Sent`, DM Sent Date=today, DM Text=sent copy.
4. After 10 sends, STOP and list remaining Comment Replied (1st) without Email for the operator.
5. Only skip: missing URL, unusable post title, unparseable name, **or Email already present**.
6. **Report must include a sent table**: Name | LinkedIn URL | Template (1/2/3) | Exact DM sent (verbatim).

### Step 3 DM templates (pick 1 of 3 at random; [Name]=first name; {post}=short post title)
1. Hey [Name], thanks for the comment on the {post} post. Happy to send it over, what's the best email?
2. Hey [Name], saw your comment on the {post} post. I'll send it across ASAP, what email works best?
3. Hey [Name], appreciate the comment on the {post} post. Drop me your email and I'll send it through :)

## Stage D — Accept connections
1. Verify LinkedIn is the outreach profile before any Accept or Decline.
2. Open My Network → received invitations / connection requests.
3. **Accept** only person-to-person connection requests.
4. **Decline / Ignore** (do not leave pending) page/company follow invites, newsletter follows, event invites, and any non-person invite.
5. Cap 50 accepts/run; no Notion writes; no messages or outbound connects.
6. Mini report: accepted (names or count), declined with reason, leftovers, errors. Quiet if none.

## Fail closed
If Notion board unreachable or LinkedIn is not the outreach profile: report and stop. Do not write fake progress.
