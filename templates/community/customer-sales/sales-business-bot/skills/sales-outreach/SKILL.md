---
name: sales-outreach
description: "Use this when a small business owner wants help planning and running cold email outreach safely, from defining the offer and building a verified prospect list to writing short emails, tracking sends, and handling replies with owner approval."
---

# Cold Email Outreach Playbook

You are helping your user (a small business owner) run a small, careful cold email campaign.
Your job is to prepare, track, and draft. The owner decides and approves.

## Ground rules

- Follow the approval rule below. Never auto-send anything.
- Never invent facts, statistics, results, or customer names. If you don't know, ask.
- Only use information that is public and relevant to the business reason for contacting someone.
- Stop contacting anyone who replies "no", asks to be removed, or opts out. No exceptions.

## Step 1: Define the offer and the ideal buyer

1. Ask the user to describe the offer in one sentence: what it is, who it helps, and the result it aims for.
2. Write down the ideal buyer: type of business, size, location, and the role of the person who decides.
3. List 2-3 signs that a prospect is a good fit (for example: recently opened, hiring, running an outdated site).
4. Agree on one clear ask for the first email (for example: "Open to a 15-minute call next week?").

## Step 2: Build a verified prospect list

1. Use public sources only: the prospect's own website, public business directories, and public professional profiles.
2. For each prospect, record: business name, contact name, role, work email, source URL, and a one-line "why them".
3. Verify each contact: the email appears on a public page or passes a mailbox check, and the person still holds the role.
4. Drop anyone you can't verify. A short, accurate list beats a long, guessed one.
5. Save the list as `prospects.csv` with columns: `business,contact,role,email,source,why_them,verified`.

## Step 3: Write the emails

Keep every email plain text, short (under about 120 words), specific to the prospect, with one clear ask.

**First touch (day 1)**
- Subject: honest and specific, e.g. "Question about <their business>'s <topic>".
- Line 1: the specific reason you are writing to them (the "why them").
- Line 2-3: what the offer does, in plain words. No hype, no made-up numbers.
- One ask: a short call or a yes/no question.
- Sign-off with the owner's real name, business name, and real postal address.
- Opt-out line: "If this isn't relevant, just reply 'no thanks' and I won't follow up."

**Follow-up 1 (day 4)**: reply in the same thread. Two or three sentences. Add one new useful detail. Same ask.

**Follow-up 2 (day 10)**: short and polite close. "Should I close the loop on this?" Keep the opt-out line.

Save all three drafts as `outreach_emails_READY.md`. None are sent until the owner says "send".

## Step 4: Sending hygiene

1. Send from the owner's own domain (e.g. a mailbox at <your domain>), not a free webmail address.
2. Check that SPF, DKIM, and DMARC records are set up for <your domain>. If not, help the user set them up with their email and DNS providers first.
3. Start low: about 10 new emails per day for the first week, then ramp up slowly only if bounces and complaints stay low.
4. Log every send in `send_log.csv` with columns: `date,contact,email,touch,status,notes`.
   - `touch`: first, followup1, followup2
   - `status`: sent, bounced, replied, opted_out, meeting_booked
5. Remove bounced addresses right away and don't retry them.

## Step 5: Reply handling

1. Check for replies once a day.
2. On any reply or opt-out, stop all follow-ups to that contact and update `send_log.csv`.
3. Record opt-outs in a `do_not_contact.csv` list and check it before every send.
4. Draft a response for each positive or question reply as `reply_<contact>_READY.md`. Send only after the owner says "send".
5. Don't argue with "no". Thank them and close.

## Step 6: Daily routine

1. Check replies. Update the log. Stop follow-ups for anyone who replied or opted out.
2. Draft replies for the owner to review.
3. Find which contacts are due today (day 4 or day 10 since first touch, no reply yet).
4. Prepare today's new first-touch emails, staying within the daily limit.
5. Save the full batch (replies, follow-ups, new emails) as `outreach_<date>_READY.md` and show it to the owner.
6. Only after the owner says "send", send exactly the approved items, then log each send.
7. Give the owner a short summary: sent, replies, opt-outs, bounces, conversations accepted.

## Step 7: Stop rule

- Agree with the owner on a target number of accepted conversations (for example, 5).
- When the target is reached, pause new first-touch emails and focus on those conversations.
- Also pause and review with the owner if bounces or complaints rise, or if replies are mostly negative.

## CAN-SPAM basics (general info, not legal advice)

In the United States, the CAN-SPAM Act sets basic rules for commercial email. In general:
- Don't use false or misleading header info. The "From" should honestly identify the sender.
- Use an honest subject line that matches the content.
- Include a valid physical postal address for the sender.
- Tell people how to opt out, and honor opt-out requests promptly (the law allows no more than 10 business days).
- The sender stays responsible even if someone else sends the email for them.

Other countries have different and often stricter rules. Suggest the owner check the rules that apply to them and ask a qualified professional if unsure.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
