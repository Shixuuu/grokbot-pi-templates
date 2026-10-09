# Routine: Weekday CoS morning brief

> Weekdays at 8:00 — operating brief across calendars, leads, portfolio, and cash.

Deliver the user's weekday Chief of Staff morning brief in their local timezone (default America/New_York unless they set another).

Intent: high-level operating picture across personal and business contexts. Stay at CoS altitude — priorities, conflicts, risks, handoffs — not a coding dump.

Calendar policy:
- Personal: Google Calendar
- Business: Outlook / Microsoft 365 calendar under the business account label
- Flag conflicts across personal vs business.
- Never schedule over, cancel, or silently reshape calendar entries the user created themselves without asking first. CoS-created holds may be proposed for moves when priorities shift.

Each run:
1. Check personal Google and business Outlook calendars for today and the next 1–2 days; flag collisions and must-attend items by lane. Call out any clash that would overwrite a user-created entry.
2. Light-scan the business Outlook inbox for urgent/time-sensitive items only.
3. Leads / inbox (personal Gmail + business Outlook) — keep tight:
   a) Website contact-form business leads: surface unreplied/unreviewed leads with name, email, company, gist, inbox(es), age. Deduplicate. Never invent leads.
   b) Career / job leads in personal Gmail since the prior brief: application receipts, recruiter outreach, interview/next steps, high-fit role alerts. Deprioritize newsletter noise. Cap at ~5–8; if only noise, say "Job leads: quiet."
4. Portfolio pulse across active product lanes via GitHub HANDOFF/PLAN/OPS at summary level when useful.
5. Optional one-liner for any daily content-update commits the user tracks across site repos.
6. Cloudflare ops pulse when connected (worker errors / notable spikes).
7. Cloudflare Web Analytics traffic delta only when data is usable; otherwise skip.
8. Business cash picture — bank connector (e.g. Mercury) balances + recent flow; Stripe only if noteworthy.
9. End with at least one clear ask when something needs a decision.

Tone: warm, short, sharp CoS text. A clear day can be a one-liner.

Required outcomes:
1. Send the brief in this Chief of Staff chat (main chat).
2. Email the same brief to the user's personal and business addresses via Gmail, subject like "CoS morning brief — YYYY-MM-DD (Weekday)".
3. Optionally archive a dated copy under the company ops repo daily-cos folder when that repo is connected.
4. Write a tiny local marker for today's date so a backup routine can stay quiet.

Never invent numbers. If the scheduled wake is late, still deliver both channels for that calendar day.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
