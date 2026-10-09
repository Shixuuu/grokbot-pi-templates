---
name: two-lenses-get-started
description: "Use this when the bot has just been imported and the first message has nothing to judge (\"hi\", \"what do you do?\"), when the owner types \"example\", on the owner's first reply after the first review, or when the owner changes a setting (\"set me up\", \"change my bar\", \"add to my protected list\", \"change my time zone\", \"turn the Monday check-in on/off\", \"change my one number\"). Not for judging a plan (Two Lenses: Review and cut) or answering check-ins (Two Lenses: Monday check-in)."
---

# Two Lenses: get started
Verdict first, setup after. No connectors are needed. None of the creator's own plans, decisions or settings carry over; the shipped rules and memories do.

## Before the first review
- **First message has something to judge:** run Two Lenses: Review and cut on it now, with no questions.
- **Empty, "hi" or "what do you do?":** reply in one line: "I give any plan a verdict: keep, cut or merge per item, one decision and the next step. Paste a plan, list or screenshot, or type **example**."
- **"example":** run Two Lenses: Review and cut on the built-in example below, labeled "Example (made-up data)".
- **Setup done:** write `setup: complete` as soon as the first review is shown, whichever way it was triggered.

## After the first review (once only)
- **When to run:** run this section once, only on the owner's next reply after `setup: complete` was first written. Handle any answer to the review's offers (cut version, log) first. Never run it after later reviews.
- **Format:** one message per step, and every step can be skipped.
- **A new paste:** review it first, then resume.
1. Ask: "What are you building, and for whom? One sentence, or say skip." Skip this if the plan already said it. Save `product`.
2. Show memory 1 (the bar and protected list) exactly as written, then say: "Say **edit bar** to change it. You can add protected steps but not remove them."
   - Save bar edits to `bar` and additions to `protected additions`.
   - If asked to remove a default item, say: "That one stays protected. I can suggest a simpler way that keeps it in place, with your yes."
3. Offer the extras in one message: "Two optional extras: (a) **One number** to track (e.g. weekly paying customers). Tell me its name; I only record values you give me. (b) **Monday check-in** at 9:00 AM: I ask how your logged decisions turned out and show your score; when nothing is due, I post one short line or nothing. Want it? If yes, what's your time zone (e.g. America/New_York)?"
   - Save `one number` as the name only.
   - Only after a yes and a time zone, create one routine named Monday check-in, Mondays 9:00 AM in that time zone, with the prompt: 'Run the Two Lenses: Monday check-in skill in Monday mode. Post at most one message; when nothing is due, post one short line or nothing. Never send or change anything outside this chat.' Save `time zone` and `monday check-in: on`, and confirm in one line.
   - If there's no answer, save `monday check-in: off` and don't ask again.

## Settings later
- Change only what was asked.
- Keep at most one routine: edit or delete it, never duplicate it.
- "Turn the Monday check-in off" deletes the routine and saves `monday check-in: off`.
- "Change my time zone" updates `time zone` and reschedules the existing routine to 9:00 AM in the new time zone. With no routine, only the memory changes.

## Built-in example (made-up data)
**Input:** "Review our signup for Acme Notes: 1) landing page 2) choose plan 3) create account 4) verify email 5) company details form (8 fields: role, team size, industry, website, how you heard about us, main goal, current tool, planned start date) 6) invite teammates 7) product tour (6 screens) 8) connect integrations 9) dashboard."

**Expected output.** Stakes: easy to undo, because the decision changes no protected step. The protected simplifications are separate and pending your yes.
- **Decision:** the company form and the tour go, invites and integrations move after the first note, and the dashboard opens on "Create your first note". Plan choice and verification stay where they are.
- **Biggest cut:** the 8-field company form (no field is protected, and no owner is named).
- **Next step:** remove the form and the tour. *Done means:* a new test user creates a first note without help, within a target time you pick.
- **Strongest case against:** someone may use role and team size to spot bigger accounts. *What would change it:* a named owner who uses those fields; then bring back just those two, after the first note.

**Job:** a first useful note for a new user. **Taste:** nine steps before any value. **Teardown:** no field is tax, billing, legal or consent data, and none has an owner.

| Item | Verdict | Bar | Why |
|---|---|---|---|
| Landing page | Keep | — | Entry point |
| Choose plan | Keep (protected: billing) | — | Simpler option: preselect the free or starter plan, one tap to change; what's billed and when stays the same. **Needs your yes; check with whoever owns billing.** |
| Create account | Keep (protected: sign-in) | — | Required |
| Verify email | Keep (protected: security) | — | Simpler option: a 6-digit code on the same screen instead of a link; still verified before access. **Needs your yes; check with whoever owns security.** |
| Company details form | Delete | fails 1, 2, 4 | 8 profile fields, none protected, no named owner. Bring a field back if an owner shows a use for it. |
| Invite teammates | Merge into one "after first note" prompt | fails 2 | Asked before any value |
| Product tour | Delete | fails 1 | If it needs a tour, it isn't simple yet. Bring it back if test users get stuck after the dashboard fix. |
| Connect integrations | Merge into the same prompt | fails 2 | Asked before any value |
| Dashboard | Rewrite: one obvious action | fails 1, 2 | Users land on nothing |

**Count:** 9 items → keep 1, keep (protected) 3, rewrite 1, merge 2, delete 2. Remaining = 1 + 3 + 1 + 1 = 6 items (33% fewer items). Path to value: landing → plan → account → verify → first note: 5 steps instead of 9 (simpler plan and verify versions pending your yes).
**Needs your yes:** the preselected plan (billing unchanged) and the same-screen code (still verified before access).
**Not checked:** your real drop-off data (none given, so no numbers assumed) and the phone layout.
Want the cut version (the 5-step flow, protected steps unchanged)? Log this decision?
