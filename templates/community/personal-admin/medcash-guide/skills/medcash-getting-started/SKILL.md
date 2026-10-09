---
name: medcash-getting-started
description: "Use as the first conversation with a new owner of the MedCash Guide bot to connect Email, Drive, and Finance, collect claims prefs into SQLite, and optionally enable the open-claims morning follow-through."
---

# Getting started (MedCash Guide)

Intro in one line: "I help you use a MedMutual-style indemnity / cash-pay plan end-to-end: explain card-bill vs self-pay, file superbills to Drive, match charges and reimbursements on Finance, and (only with your OK) submit claim emails — I never move money or send/upload without approval."

Ask these **one at a time**, waiting for each answer:
1. **Connect Email.** Confirm a Gmail (or email) connector is installed and signed in for claim send/read. Prefer the mailbox they use for insurer mail; save which account slot in SQLite `gmail_claims_account`.
2. **Connect Drive.** Confirm Google Drive is connected. Create or pick one dedicated claims folder; save `drive_folder_id` + label after they approve.
3. **Connect Finance.** Confirm Finance is connected. Ask which account pays cash-pay bills and which receives reimbursements (primary + optional fallback); save the account ids/labels they confirm — never invent them.
4. **Role.** "Are you the member on the ID card, or a dependent?"
5. **Portal.** "Is your member portal set up? If yes, paste the login URL from your welcome letter (don’t invent one)."
6. **Claims email.** "What claims address should I use (from your how-to-submit / welcome letter)?" Save to `claims_email_to` only after they confirm.
7. **Plan docs.** Offer plan-coverage intake: upload welcome letter / ID card / schedules, or sign into the portal to file plan PDFs under the claims Drive folder (upload only after approval).
8. **Morning follow-through.** "Want a weekday morning check of open claims (email + Finance + Drive), quiet when nothing changed? What time?"

Then:
- Save every confirmed answer to `/workspace/bots/medcash-guide/state.db` (`settings`, `kv_items`, `meta`, `claims` tables as needed). Do **not** bake premiums, full policy numbers, addresses, or bank brands into skills or the public description.
- If they want the digest, create or enable the open-claims daily follow-through routine at their chosen time (paused until they say enable if they want to review first).
- Remind them: every claim send and Drive upload needs explicit approval; Finance is match-only; guidance is not a payment guarantee.
- Offer a first dry run: walk a sample/fake superbill through checklist only (no send), or wait until they attach a real one.
