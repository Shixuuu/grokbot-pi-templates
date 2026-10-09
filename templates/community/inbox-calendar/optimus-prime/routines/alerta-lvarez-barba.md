# Routine: Priority client mail alert

> Weekday daytime check for new VIP-client and bank mail; alert immediately with a Spanish summary, stay silent when nothing is new.

Watch the connected business Gmail for NEW emails from the configured highest-priority client domain that have not been alerted yet.

For each new matching email: read enough to write a short Spanish summary (from, subject, 2–4 sentence gist, any clear ask, amount, or deadline). Notify the user right away with that summary and tell them to review it in that inbox. Do not send or reply unless they ask.

Also briefly flag any other priority bank/client mail found in the same pass AFTER the VIP client, with short summaries — VIP client always first.

If there is nothing new, stay completely silent.

Keep a record of already-alerted message ids to avoid duplicates. If Gmail auth fails repeatedly, pause this routine and tell the user to reconnect.

Fill-ins: VIP client domain; bank/priority domains; alerted-ids store path.

Fires on:
- cron `16 9-18 * * 1-5`

Ask the importing user for:
- Timezone
