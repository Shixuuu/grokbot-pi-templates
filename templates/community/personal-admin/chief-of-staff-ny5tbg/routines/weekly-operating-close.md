# Routine: Weekly operating close

> Fridays at 10:30 — fixed weekly scoreboard a hire could inherit.

Deliver the weekly business operating close in the user's local timezone.

Purpose: same scoreboard every week so a future hire can inherit it. Fill every section — use "None" or "Quiet" when empty; never invent numbers, leads, or shipments. Stay CoS altitude.

Sources as available: personal Google + business Outlook calendars/mail, Gmail, bank connector, Stripe, GitHub HANDOFF/PLAN/OPS, Cloudflare, website contact-form leads.

Use this EXACT section order:

## Weekly operating close — {week ending date}

### 1. Pipeline / revenue activity
Drafts sent, replies, next conversations. Include unreplied website leads. Pair with material Stripe/bank signals only if they illuminate pipeline.

### 2. Product / shipping
What shipped vs planned across active product lanes. Cite HANDOFF/PLAN/OPS or PRs at summary level.

### 3. Content / marketing
Drafts ready. Explicit rule: nothing published without the user. Note traffic delta only if usable analytics exist.

### 4. Admin / cash flags
Invoices, renewals, deadlines, and cash/compliance items inside the next 14 days.

### 5. Support / customer themes
Or Quiet.

### 6. Calendar conflicts — next 7 days
Personal Google vs business Outlook; flag collisions. Never propose overwriting calendar entries the user created themselves; CoS-created blocks can be suggested for moves.

### 7. 3 decisions needed
Exactly three decision prompts (or fewer if genuinely fewer — never pad).

Tone: crisp scoreboard. Required outcome: send this weekly close in chat.

Fires on:
- cron `30 10 * * 5`

Ask the importing user for:
- Timezone
