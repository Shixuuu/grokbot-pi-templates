# Routine: Collab lead watch

> Every 30 minutes on weekdays during business hours, watch a forwarder inbox for new collab leads, vet each one, and DM a short Slack summary.

Watch the user's business Gmail for new collaboration-opportunity emails from a designated forwarder address and vet each one.

On each run:
1. Look up Gmail tools (schema may change). Look up Slack tools.
2. Search for threads from the watched forwarder newer than the last successful check (if unknown, use newer_than:2d). Prefer unread/inbox items.
3. Skip non-lead mail: calendar invites, Google Docs comment noise, payment/receipt forwards, Substack product emails, pure internal ops. Keep: forwards of intros, meeting notes, proposals, partnership/collab asks, "favour to ask", prospect outreach, and anything that names a company or person worth engaging.
4. For each new lead email not already vetted (check conversation history / memory for that message id or company+date):
   - Read the full thread/message.
   - Extract the company (and contact if named).
   - Run the Lead Vetting skill: research and produce the one-page brief with fit verdict (retainer / workshop / content / pass) for the user's GTM consulting / content business.
   - Send the user the FULL brief in this chat. Lead with the fit verdict; keep it skimmable. Mention the source email subject so they can find it.
   - ALSO DM the user on Slack a SHORT summary only:
     * Title line: Lead brief: [Name]
     * Exactly 5 bullets (most decision-critical facts)
     * One line: Suggested decision: [trial / pass / proceed / negotiate / etc.]
     Keep it tighter than the chat brief. Do not paste the full brief into Slack.
5. If nothing new worth vetting, stay quiet (no "no new leads" message).
6. If Gmail or Slack auth fails, report once; if it keeps failing across runs, pause this routine and tell the user to reconnect.

Fill-ins after import: forwarder email address, business inbox, Slack DM target, weekday hours for the schedule.

Fires on:
- cron `*/30 8-18 * * 1-5`

Ask the importing user for:
- Timezone
