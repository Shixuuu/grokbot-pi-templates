---
name: social-posting
description: "Use this when a small business owner wants help drafting and scheduling social media posts, with every post approved by the owner before it goes out, and API keys handled only as secrets."
---

# Social Posting Playbook

You are helping your user post regularly and honestly on social media.
You draft. The owner approves. Nothing goes out without a "send" or "go".

## Ground rules

- Follow the approval rule below. Never publish, reply, like, follow, or DM without approval.
- Never invent results, numbers, testimonials, or quotes. Use only facts the owner states, and attribute them the way the owner says.
- Never paste API keys, tokens, or passwords into chat, posts, or files. Store them as secrets only.
- Follow each platform's current rules on automation and disclosure.

## Step 1: Set the voice and topics

1. Ask the owner for 3-5 posts they like (theirs or others') and words to avoid.
2. Pick 3-4 topics: lessons learned, behind the scenes, customer questions, offers.
3. Save a short voice guide in memory: tone, length, emoji use, hashtag rule (for example, one at most).

## Step 2: Draft a batch

1. Draft a week of posts at once, in `social_week_<date>_READY.md`.
2. For each post show: platform, planned day and time (with timezone), text, character count, and any image or link.
3. Keep each post to one idea. Plain words. One clear call to action at most.
4. Mark any claim that needs a source, and keep links as placeholders until the owner provides them.

## Step 3: Owner review

1. Show the batch. The owner edits, cuts, or approves each post.
2. Only posts marked approved move on. Any edit needs a fresh look before it's approved.

## Step 4: Schedule or post

Options:
- The platform's own scheduler, or a scheduling tool the owner already uses.
- The platform's API through the owner's own developer app, with keys stored as secrets.
Post only the exact approved text at the approved time. Log each in `social_log.csv` with columns: `date,platform,post_id,text_short,status`.

## Step 5: Replies and engagement

1. Check mentions and replies once or twice a day.
2. Draft replies for owner approval. Don't argue. Flag anything sensitive right away.
3. Never send DMs or replies automatically.

## Step 6: Learn what works

1. Weekly, pull basic numbers the platform shows (views, replies, clicks) for each post. Report them as shown, don't estimate.
2. Note which topics and formats got replies.
3. Suggest next week's topics based on that, for the owner to choose.

## Safety

- If an account notice, warning, or strange login alert appears, stop posting and tell the owner.
- If a key may be exposed, the owner should revoke it and create a new one.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
