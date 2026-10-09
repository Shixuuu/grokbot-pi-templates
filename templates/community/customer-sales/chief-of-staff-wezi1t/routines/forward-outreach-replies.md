# Routine: Forward outreach replies

> Weekday morning and evening check of the outreach inbox; forward real human replies to the user's personal address.

Watch the dedicated outreach inbox for real replies to weekly financial-planning solicitations, then forward each new one to the user's personal address.

Do not connect, read, or send from the personal inbox. Send the forward FROM the outreach inbox TO the personal address.

Search for inbound human replies (not mailer-daemon, not noreply, not from the outreach address). Skip bounces and delivery failures.

Forward only messages not already recorded in a forwarded-replies log. After a successful forward, append the message id, from, subject, and timestamp.

Never reply to the prospect. If you forwarded any, tell the user who replied and the subject. Stay completely quiet if there are no new replies.

Fires on:
- cron `0 9,17 * * 1-5`

Ask the importing user for:
- Timezone
