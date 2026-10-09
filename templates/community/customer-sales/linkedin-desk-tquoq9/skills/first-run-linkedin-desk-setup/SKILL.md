---
name: first-run-linkedin-desk-setup
description: "Use this when LinkedIn Desk setup.json is missing or incomplete, or when the user says set up LinkedIn Desk, Personalize, or asks to enable Accept/Ignore clicks. The skill has no trigger."
---

# First-Run LinkedIn Desk Setup

This skill has no trigger. The bot runs it because standing instructions say to, or because the user said "set up LinkedIn Desk" or "Personalize." Never claim it auto-fires.

## Goal

Opinionated, transparent setup for a new LinkedIn Desk. Peer-first is a named recommended preset, not inherited truth. Nothing on LinkedIn is opened or clicked during preset preview. Execution stays off until a later explicit opt-in.

## Hard rules

- Never store passwords, tokens, or 2FA.
- Never copy another user's names, profile URLs, approvals, receipts, history, login state, or files.
- Do not create even a progress file until import/new-vs-merge confirmation is complete (import skill: confirm before changing anything). If that confirmation has not happened, only introduce the bot and ask merge vs new / confirm the plan.
- After that confirmation, persist each answer in `/workspace/linkedin-desk/onboarding-progress.json`.
- One native question widget per turn, always preceded by a short normal text message. 1–6 options. No preselected value. Label recommended choices in the option text. Use custom answer when helpful. A widget ends the turn.
- Dismissal means decline: write status `deferred`, do not re-ask automatically, keep all LinkedIn access and routines inert. Resume only when the user says "set up LinkedIn Desk" or "Personalize," from the last answered card.
- If `/workspace/linkedin-desk/setup.json` has `setup_complete: true`, do not overwrite policy, queue, index, ledger, or setup.json on import, merge, or clone. Skip this interviewer unless the user explicitly asked to Personalize (then confirm before replacing files) or to enable execution.
- On merge, if a skill named First-Run LinkedIn Desk Setup, Review Received LinkedIn Invitations, or Process Approved LinkedIn Invitations already exists, keep it; do not duplicate or silently overwrite.
- Using recommended setup never opens LinkedIn and never sets `execution_enabled` true.
- This template includes Daily LinkedIn Invitation Desk as a first-class shared routine. After clone/import it may already exist and the host may even leave it enabled. That is not review enablement and not a schedule the recipient chose. Do not apply any imported cadence (including 11:00). The packed job text is hard fail-closed and silent until `setup.json` has `setup_complete` true and `review_enabled` true.
- Never reuse another user's schedule as a recipient default. Ask this user for Grok Bot Settings timezone, desired cadence/time, and explicit review-routine enablement before applying a schedule.
- After final Use it plus the second schedule confirmation, update/configure the included Daily LinkedIn Invitation Desk routine. Create it only if the importer did not already create it. Do not create a second copy.

## Where branches return

- **Explain the defaults** shows the Peer-first summary in chat, then returns to the first card.
- **Revise** from a policy preview returns to Personalize card 1 (network goal).
- **Cancel** or dismiss writes deferred/incomplete and stops.
- After **Use it**, files are created, then a second confirmation for timezone, schedule, and review enablement (routine). Execution is a separate later opt-in.

## Progress file

Path: `/workspace/linkedin-desk/onboarding-progress.json`

Fields: `status` (`in_progress` | `deferred` | `complete`), `import_confirmed` (boolean), `path` (`recommended` | `personalize`), `card` (id of last answered card), `answers` (object).

Resume: if status is `in_progress` or `deferred` and the user said set up / Personalize, continue from `card` (the next unasked card). Do not restart.

## Import gate (no files yet)

If this is an import/apply and the user has not confirmed merge vs new and the setup plan, send short text, then a widget:

Prompt: Should I apply LinkedIn Desk as a new bot or merge it into this one?
- New bot (recommended for a clean clone)
- Merge into this bot
- Cancel setup

On Cancel/dismiss: stop, no files.
On New or Merge: set `import_confirmed` true, then start the first card. Merge must not overwrite a completed `setup.json`.

## First card

Short text, then widget.

Prompt: How do you want to set up LinkedIn Desk? You can change this later.
- Use recommended setup (Peer-first)
- Personalize it
- Explain the defaults

### Explain the defaults

Send the Peer-first description in normal chat (see Preset text). Then show the first card again.

### Use recommended setup

Send the full Peer-first policy in normal chat (Preset text). Never open LinkedIn. Then widget:

Prompt: Use this Peer-first policy? Nothing has been clicked and execution stays off.
- Use it
- Revise (go to Personalize)
- Cancel setup

Use it → **Finalize files** with answers from the preset defaults listed below.
Revise → Personalize card 1.
Cancel/dismiss → deferred.

Preset defaults to store in answers: `goal=peers_plus_relationships`, `accept_signals=known_contacts,credible_peers,shared_context,thoughtful_note`, `unwanted=generic_sales,obvious_automation` (coaching/recruiting left as personal; see policy), `ambiguity=ask_me_first_month`, `retention=30_days`, `mode=review_plus_exact_batch_approvals`, `preset=peer-first`.

## Personalize cards (one per turn)

Every card: short examples in the text, recommended choice labeled in the option, and "You can change this later."

### Card 1 — network goal (`p_goal`)

Prompt: What is this LinkedIn network mainly for? You can change this later.
- Peers and genuine relationships (recommended)
- Learning
- Customers / business
- Recruiting / career
- Broad reach
- I'll type my own

### Card 2 — fields/topics (`p_fields`)

Prompt: Which fields should count as relevant? You can change this later.
- I'll type my fields
- Keep it general (any credible professional overlap)
- Skip for now (recommended if unsure)

If they type fields, store them. Recommended starting answer is skip/general, not a copied creator industry list.

### Card 3 — strong Accept signals (`p_accept`, multi-select)

Prompt: Which signals should support Accept? Pick all that apply. Recommended: the first four. You can change this later.
- Known contacts (recommended)
- Credible relevant peers (recommended)
- Shared community or mutual context (recommended)
- Thoughtful invitation note (recommended)
- Relevant learners
- I'll type my own

### Card 4 — unwanted outreach A (`p_unwanted_a`, multi-select)

Prompt: Which of these should usually be Ignore? Coaching and recruiting are personal; we will ask next. You can change this later.
- Generic sales pitches (recommended)
- Obvious automated outreach (recommended)
- Unsolicited coaching or consulting
- I'll type my own

### Card 5 — unwanted outreach B (`p_unwanted_b`, multi-select)

Prompt: Anything else that should usually be Ignore? You can change this later.
- Irrelevant recruiting
- Promotions, newsletters, or event blasts
- Low-context or dubious profiles
- I'll type my own
- None of these

### Card 6 — ambiguity (`p_ambiguity`)

Examples in the preceding text: a credible founder with no note; a coach with mutuals; an unclear recruiter.

Prompt: When it is ambiguous, what should I do for the first month? You can change this later.
- Ask me (recommended)
- Ignore unless the case is strong
- Accept if they look credible
- I'll type my own

### Card 7 — retention (`p_retention`)

Prompt: How long should detailed review files be kept? After deletion, keep only generalized preference lessons. You can change this later.
- Minimal (keep only current index and ledger)
- 30 days (recommended)
- 90 days
- Indefinite
- I'll type my own

### Card 8 — timezone and schedule (`p_schedule`)

I cannot set Grok Bot timezone. Point them to Settings → Timezone. Cron uses that timezone.

Prompt: When should invitation reviews run? This will not copy another user's schedule. You can change this later.
- Weekday mornings at 8:00 (recommended)
- Weekdays at 11:00
- Monday mornings at 9:00
- Do not schedule yet
- I'll type my own

### Card 9 — LinkedIn sign-in (`p_signin`)

Do not open LinkedIn unless they choose to sign in now.

Prompt: LinkedIn sign-in happens on this computer in Chrome. You enter credentials yourself. I never store passwords. You can change this later.
- I'll sign in later (recommended until policy is confirmed)
- Help me sign in now
- Skip

If they choose help now: after policy Use it, use secure takeover (`request_box_help`) for the LinkedIn login page. Never during recommended-setup preview.

### Card 10 — review mode (`p_mode`)

Prompt: How should I operate? You can change this later.
- Review plus exact batch approvals (recommended; I recommend, you approve, then I click only that list)
- Recommendations only (no clicks)
- I'll type my own

Then send the generated policy in normal chat and the Use it / Revise / Cancel widget (same as recommended preview).

## Finalize files (only after Use it)

Create `/workspace/linkedin-desk/` if needed. Write **fresh** files from the generic templates below, filling only this user's answers. Never copy creator names, URLs, approvals, receipts, history, or login.

Write:

- `operating-rules.md`
- `network-policy.md`
- `retention-policy.md`
- `daily-routine-order.md`
- `approved-actions.md` (empty queue)
- `decisions/invitation-review-index.md` (empty people list)
- `decisions/decision-ledger.md` (header only)
- `setup.json` with `setup_complete: true`, `review_enabled: false` until the second confirmation, `execution_enabled: false`, `execution_requires_exact_batch_approval: true`

Do not enable reviews, do not apply a schedule, and do not create a second routine. If Daily LinkedIn Invitation Desk already exists from import, leave it as-is: fail-closed job text keeps it inert until the second confirmation.

## Second confirmation (routine)

The packed Daily LinkedIn Invitation Desk routine may already exist and may even be enabled with a host default. Do not treat that as this user's choice. Do not apply 11:00 or any other imported time unless they selected it here.

Ask for timezone, cadence/time, and explicit review-routine enablement before applying a schedule. One widget per turn. Timezone is [Timezone](grokbot://app/v1/settings?id=timezone). I cannot set Grok Bot timezone. Cron uses that setting.

Short text first: policy files are in place; execution is off; the included routine stays inert until they confirm timezone, cadence, and review enablement.

### Schedule card (ask even on the recommended path)

If Personalize card 8 was already answered, show that pick and let them confirm or change it. If they used recommended setup, they have not picked a cadence yet. Never preselect 11:00.

Prompt: When should invitation reviews run? This uses your Grok Bot timezone, not another user's. You can change this later.
- Weekday mornings at 8:00 (recommended)
- Weekdays at 11:00
- Monday mornings at 9:00
- Do not schedule yet
- I'll type my own

### Enablement card

Prompt: Enable scheduled invitation reviews? Execution stays off. You can change this later.
- Enable reviews on the schedule I just confirmed
- Keep reviews off until I ask
- Cancel (leave setup incomplete)

If enable: set `review_enabled: true`. Configure **the included** Daily LinkedIn Invitation Desk routine (slug `daily-linkedin-invitation-desk`). Update its job text to the Review-routine job text below and set the schedule from **this user's** confirmed answer (weekday 8:00 → `0 8 * * 1-5`; weekdays 11:00 → `0 11 * * 1-5`; Monday 9:00 → `0 9 * * 1`; custom as they typed; "do not schedule yet" is not enable). Create that routine only if it does not already exist. Never create a second copy. Never keep an imported 11:00 (or any other imported time) unless they selected it. Creating or changing a routine may show the app's own confirm card.

If keep off: `review_enabled: false`. Do not apply a schedule. If the included routine already exists, leave it in place; fail-closed job text keeps it silent. Do not create a routine.

If cancel/dismiss: `setup_complete: false`, `status: deferred`, `review_enabled: false`. LinkedIn and the included routine stay inert. Do not apply a schedule.

## Later execution opt-in (separate)

Only when setup is complete and the user explicitly asks to allow Accept/Ignore clicks.

Prompt: Allow me to click Accept or Ignore? I will still need an exact approved batch each time.
- Enable clicks with per-batch approval
- Keep recommendations only

Enable → `execution_enabled: true` (Process skill still requires the approval queue).
Keep → leave false.

## Peer-first preset text (show in chat; also the default network-policy)

Peer-first (recommended): generally recommend Ignore for generic sales pitches, automated outreach, unsolicited coaching/consulting offers, irrelevant recruiting, low-context outreach, and obvious lead generation; favor known contacts, credible peers, genuine learners, shared professional context, and people the user would value knowing without a commercial relationship. Nothing is clicked without approval.

Core test: would the user plausibly value knowing this person if neither side ever bought anything, and does the evidence show a peer, learner, or real connection rather than a lead?

Labels: Accept, Ignore, Ask the user.

Ask the user when plausible value exists and the remaining ambiguity needs the user's knowledge (recommended for the first month). Incomplete inspection is not Ask the user.

## Generic starter templates

When writing files after Use it, use these bodies. Replace `{{RETENTION_DAYS}}` with 30, 90, or the custom value. For minimal retention, keep only index and ledger indefinitely. For indefinite, do not auto-delete timestamped files.

### operating-rules.md

Fail closed on missing or incomplete setup.json. Received-queue review only. Recommendations never authorize actions. Never store secrets. Stop on login/2FA/CAPTCHA/account warning or unverified identity.

### network-policy.md

Write the Peer-first policy expanded with this user's answers (goal, fields, accept signals, unwanted outreach, ambiguity). Do not insert any other person's name, company, or profile URL.

### retention-policy.md

Keep indefinitely: operating-rules, network-policy, retention-policy, daily-routine-order, approved-actions, setup.json, skills, invitation-review-index, decision-ledger, newest review, newest receipt, unresolved Attempting/Outcome uncertain evidence. Timestamped reviews/receipts follow the chosen retention. After deletion, keep only generalized preference lessons.

### daily-routine-order.md

Fail closed unless setup.json setup_complete and review_enabled. The scheduled Daily LinkedIn Invitation Desk job is review-only: it never creates approvals and never clicks Accept or Ignore. Process is a separate, later, user-approved batch. Three-beat report. Never convert recommendations into approvals.

### approved-actions.md

Empty queue template. Statuses: Pending | Attempting | Completed | Failed | Skipped | Outcome uncertain. Queue section: (empty).

### decisions/invitation-review-index.md

Durable index. Unique people 0. No person entries.

### decisions/decision-ledger.md

Header row only. No action rows.

## Review-routine job text (configure the included routine after second confirmation; create only if missing)

Use this exact job text for Daily LinkedIn Invitation Desk. It is review-only.

Hard fail-closed, first, before anything else: before any browser use, LinkedIn access, file generation beyond confirmed onboarding state, queue change, or message, read `/workspace/linkedin-desk/setup.json`. If the file is missing, unreadable, `setup_complete` is not true, or `review_enabled` is not true: exit silently and do nothing. Do not open a browser, do not open LinkedIn, do not write files, do not change the approval queue, and do not send a message. A scheduled wake is not a request to set up LinkedIn Desk.

This gate must hold even if the host imported the routine before onboarding, defaulted it enabled, or applied a schedule the recipient did not choose.

After the gate passes: invoke `/Review Received LinkedIn Invitations` for new or changed Received-queue invitations only.

Never invoke `/Process Approved LinkedIn Invitations` from this routine. Never click Accept or Ignore. Never add anyone to `approved-actions.md`. Never convert recommendations into approvals. Never reprocess Attempting or Outcome uncertain rows.

Three-beat ping when there is something to report: what I did, what I think (recommendations only), what's happening now. Ask whether to execute that exact unchanged list. Stay quiet only when nothing new was reviewed and nothing is unresolved. Never execute the list from this routine.
