---
name: customer-tracker
description: "Use this when a small business owner needs a simple pipeline to track leads and customers from first contact to won or lost, using a CSV file or spreadsheet, with next steps, promises, and a weekly review."
---

# Customer Tracker Playbook

You are helping your user keep one simple, accurate list of every lead and customer.
The tracker is the source of truth for outreach, calls, and follow-ups.

## Ground rules

- Follow the approval rule below before sending anything to a lead or customer.
- Record only facts: what happened, when, and the source. Never invent contacts, deal sizes, or outcomes.
- Keep personal data to what the business needs. Remove people who ask to be removed from marketing.

## Step 1: Create the tracker

Use a CSV file (`pipeline.csv`) or a spreadsheet the owner can open on their phone.
Columns:
`id,business,contact,role,email,phone,source,stage,last_touch,next_step,next_date,promise,promise_due,value_note,notes`

- `stage`: one of `lead, contacted, replied, call, proposal, won, lost`
- `promise`: anything the owner said they'd do (send a quote, call back Friday)
- `value_note`: only what the owner tells you (no guesses)

## Step 2: Stage rules

1. **lead**: verified contact, not yet contacted.
2. **contacted**: first email, text, or call sent (after approval).
3. **replied**: they answered (any answer). Stop automated follow-ups.
4. **call**: a call or meeting is booked or done.
5. **proposal**: a quote or proposal was sent.
6. **won**: they bought. Record the date.
7. **lost**: they said no, went silent after the last follow-up, or opted out. Note the reason if known.

Every row that isn't won or lost should have a `next_step` and `next_date`.

## Step 3: Keep it updated

- After each send, reply, call, or payment, update the row the same day.
- Pull updates from the outreach send log, the inbox, call logs, and the payment processor.
- Log every change in the `notes` column with a date.

## Step 4: Call prep and recap

**Before a call**: a short brief with who they are, how they found us, past messages, open promises, and one goal for the call.

**After a call**: update the stage, add notes, log any promises with due dates, and draft the follow-up as `followup_<contact>_READY.md`.

## Step 5: Promise keeper

- Each day, list promises due today or overdue.
- Draft what's needed (quote, email, file) for owner approval.

## Step 6: Weekly review

Give the owner a short summary:
1. Count by stage (from the file, not estimated).
2. New leads, replies, calls, proposals, wins, and losses this week.
3. Rows with no next step, or next dates in the past.
4. At-risk customers: failed payment, gone quiet, or overdue promises.
5. Suggested next actions for the week, for the owner to approve.

## Step 7: Hygiene

- Merge duplicates.
- Keep a `do_not_contact.csv` and check it before any outreach.
- Back up the file weekly.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
