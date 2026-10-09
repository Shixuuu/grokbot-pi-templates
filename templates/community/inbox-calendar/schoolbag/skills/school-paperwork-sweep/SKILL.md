---
name: school-paperwork-sweep
description: "Use this when scanning mail and calendar for school forms, permission slips, deadlines, teacher emails, field trips, or needs-signature items — then list Needs you / Coming up / Done. Includes first-run, ready checklist, multi-mailbox, per-kid labels, mark-done, urgency, payments, PDFs, pause, and guided connect."
---

# School paperwork sweep

Reusable recipe for a school-only paperwork dig. Keep personal child names, school names, district domains, teacher names, and a specific app stack out of this skill; the bot’s memory or the owner’s first-run answers supply who/which schools, domains, teachers, mailboxes, and apps to watch.

## Marketplace blurb (Share / install)
Schoolbag watches your school mail and calendar, then shows a short list of what’s due — forms, permission slips, signatures, field trips. You’ll connect Gmail and Calendar (and any school-app connector that exists). It never emails a teacher or school unless you approve the exact text.

## Hard rules
- Never email a teacher or school (or send any outside message) without the owner’s exact-text approve of that send.
- Never invent grades, policies, due dates, payment methods, or amounts.
- Never widen into sports, household, or full family ops — school paperwork only.
- Quiet when nothing is due — including at their notify time, and while vacation/pause is active.
- Templates and shared skills must not ship personal child data, teacher names, or one family’s district/app stack.
- Do **not** resurface items the owner marked done as Needs you.
- Never pretend API or connector access you do not have.
- Never invent connectors. Never ask the owner to paste passwords, tokens, or OAuth links into chat.
- Never hardcode a notify clock time, district domain, or teacher list into this skill or a shared template.

## First-run onboarding (BEFORE first sweep)
Ask one beat at a time if needed. Collect and store in **agent memory for this install only** (never in this skill):

1. **Kids ↔ school mapping** — for each kid (names optional): grade/class + school + domain(s) that apply + optional teachers for that kid. Needs you lines should be labelable by kid/school, not one anonymous blob.
2. **Email domains to watch** (required-ish — aim for at least one). Owner supplies their own district/school domains.
3. **Optional teacher watchlist** — display names and/or exact from-addresses (can be global or per-kid).
4. **Mailbox(es)** — which address to watch. Ask if a **second parent / shared / co-parent mailbox** should also be watched. Support **≥1 mailbox**; store all watched mailboxes in install memory.
5. **Which other school apps** — examples only: ClassDojo, PowerSchool, Seesaw, Linq (school lunch — not the messaging product), ParentSquare, Remind, Schoology, Canvas, Google Classroom, district portal.
6. **Weekday school brief?** If yes: ask **what local time** (suggest **7:00 local** only if they shrug). Arm **only** on explicit yes **with a time**. If no / not yet: leave unarmed.

Then **prefer automation** (guided connect), then show the **Ready checklist**, then first sweep.

### Updating watchlists / kids later
- “watch domain X”, “also watch Ms. Y”, “stop watching Z”
- “add a school/teacher” / update a kid’s grade/class/school
- “also watch mailbox …” for a co-parent or shared inbox
Confirm in one short sentence.

## Ready checklist (before first sweep)
After guided connect (and tiny live verifies), show a short plain checklist — green ✓ / ✗, no jargon:

- Mail — connected and checked ✓/✗
- Calendar — connected and checked ✓/✗
- Domains set — at least one watched domain ✓/✗
- Brief time — set, or explicitly skipped ✓/✗

Only then run the first sweep (or say what’s still missing). If Mail/Calendar show ✗, offer guided reconnect with auth-failure empathy (below).

## Auth-failure empathy
If Gmail or Calendar sign-in fails or needsAuth returns unhappy: say plainly **“That sign-in didn’t finish — want to try again?”** Offer guided reconnect (AuthenticateMcpServer / connect card, or computer handoff). No “MCP”, “OAuth”, “needsAuth”, or connector jargon in the owner-facing line.

## Watchlists (install memory)
1. **Domains** — school/district/app sender domains.
2. **Teachers (optional)** — names and/or exact from-addresses (global or per-kid).
3. **Mailboxes (≥1)** — primary + any co-parent/shared.
4. **Kid ↔ school map** — per kid: grade/class, school, domains, optional teachers.
5. **Done marks** — items the owner checked off in chat.
6. **Pause window** — optional “quiet until DATE”.
7. **Preferred brief time** + routine id if armed.

Never copy these into the public skill or template export.

## Mark done in chat
Honor phrases like “done: field trip slip”, “check off class guidelines”, “that one’s done”. Match by substance (not only exact wording). Store a done mark in install memory. Never list that item under Needs you again unless the owner un-dones it or a clearly new ask appears.

## Vacation / pause
Honor “pause school briefs until DATE”, “pause for spring break”, “resume school briefs”:

- While paused: stay quiet on scheduled briefs (and say so once when pausing).
- On-demand “what’s due?” may still run unless they asked to pause everything.
- Resume when they ask, or when the until-DATE passes (clear pause in memory on that run).

## Weekday school brief routine (notify time)
When arming (only after explicit yes + time):

1. Weekday cron in the **user’s local timezone** (7:00 → `0 7 * * 1-5`; 6:30 → `30 6 * * 1-5`).
2. Prompt intent: run this sweep; surface Needs you / Coming up; **stay quiet when nothing is due**; respect pause window.
3. Store time + routine id in memory.

Later: “move my school brief to 6:30” updates memory + cron.

## Guided connect (automate; human only at the screen)
After first-run answers, immediately attempt setup — not a homework checklist.

### A. Connectors (preferred)
Follow **add-connector** (SearchPlugins → GetPlugin → confirm widget → InstallPlugin → AuthenticateMcpServer when needsAuth):

1. Attempt **Gmail + Google Calendar** (unless already healthy) for each watched mailbox account the harness can connect.
2. For each school app named, search the catalog live. Real match → install/auth. No match → section C. Never invent a connector.
3. Connect cards are host-authored. **Never paste OAuth links into chat.**
4. Confirm status after auth; on failure use **Auth-failure empathy**.

### B. Guided computer login
SSO / 2FA / passkey / captcha / site login:

1. Prefer 1Password “Shared with Grok Bot” fill.
2. Else **request_box_help** — “I’m opening my computer — sign in on that screen.” No multi-step click-path homework.
3. Browser-only portals: box-desktop + guided sign-in; read only what the owner authorized.

### C. No-connector apps (ClassDojo honesty generalized)
No connector → digests / forward to watched mailbox / paste / screenshot. Never claim API access. Accept those as first-class inputs.

### D. Verify before Ready checklist
Tiny live check per connect (Gmail: labels or one search; Calendar: calendars or next event). Fail → empathy + retry, don’t pretend ready.

## Mail search pattern (domains OR teachers; multi-mailbox)
For each watched mailbox:

1. **Domains:** `from:(domain1 OR …)` for watchlist domains (+ app-implied domains). Prefer `newer_than:30d` / unread.
2. **Teachers:** from-name / exact from-address; also display name or name in subject/body when needed. Fetch full body.
3. Thread counts if watched domain **OR** watched teacher. Dedupe after.
4. Secondary: kid/grade/class keywords within those hits.
5. Avoid bare `form OR signature OR permission` as the lead query.
6. New school sender → offer to add domain/teacher.

## Thin subjects
SchoolMessenger-style bare subjects: always fetch full message body before classifying.

## Attachments / PDFs
When the actionable ask is in an attachment (permission slip PDF, forms packet):

- Say so on the Needs you line (“PDF attached” / “see attachment”).
- Offer to **open or save the PDF on the bot computer** for the owner.
- Don’t ignore attachments or classify from subject alone when the body points to a file.

## Payment method line
When mail **states** how to pay (check payable to X, portal/Linq link, cash to office, etc.), include that method on the Needs you line. Never invent a method or amount. If amount is stated, include it; if not, don’t guess.

## Due-soon urgency
Within **Needs you**, when a due date is known:

- Flag items due within ~48 hours, or wording like **due today** / **due tomorrow**, in plain language at the start of the line.
- If no date: do not invent urgency.

## Mail vs calendar
Mail is source of truth for dues/signatures. Calendar is secondary (half days, open houses).

## Link-only Google Docs / PDFs
“Please review/sign” with a Doc/PDF link and no due date → Needs you “open & sign”, due: date not stated.

## Surface format
Lead with Needs you. Prefer labels like **Kid / school — item** when mapping exists.

Example shape (illustrative only — no real district/kid names in the skill):

- **Due tomorrow — [Kid] — permission slip** — due Tue … — pay: check to School — PDF attached
- **[Kid] — open & sign guidelines** — due: date not stated — Google Doc

Then Coming up, then Done this week (evidence only).

## Steps
1. Confirm onboarding (kids map, ≥1 domain, ≥1 mailbox); else ask.
2. Guided connect → tiny verifies → **Ready checklist**.
3. Respect pause window on scheduled briefs.
4. Scan each watched mailbox (domains OR teachers); fetch bodies; note attachments.
5. Scan calendar (secondary).
6. Merge app forwards/pastes/screenshots.
7. Extract real asks; attach payment method when stated; flag due-soon when date known; label by kid/school when known.
8. Drop no-action newsletters; drop done-marked items.
9. Dedupe; classify Needs you / Coming up / Done this week.
10. Surface short list (or stay quiet if nothing due on a scheduled brief).
11. Draft only when asked — owner approves exact send text.

## Reporting (crew installs)
When tasked with a crew task id, report against that id: counts + top Needs you, skill/routine ids, skill gaps, harness limits, and anything blocking publish.
