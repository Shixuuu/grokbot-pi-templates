# Routine: Stale lead send wave

> Weekday mid-morning: send non-vetoed stale-lead SMS via CRM and report what went out.

Weekday mid-morning stale-lead send wave.

Read today’s pending draft batch from the durable file saved by the morning draft pull. Check the team Slack sales channel for veto replies or reactions naming a lead. After the ~3-hour veto window, send non-vetoed drafts as CRM SMS. Skip anyone vetoed, STOP/opt-out, or already contacted since the draft was posted. Run @Stale lead SMS loop for the detailed recipe.

Do not move pipeline stages unless the owner asked. After sends, update the pending file, post a short Slack note labeled as a send report (what went out / what was vetoed), and briefly tell the owner in chat what sent.

If there is no pending batch or everything was vetoed, stay quiet. If CRM auth fails repeatedly, pause this routine and tell the owner to reconnect.

Fires on:
- cron `CRON_TZ=America/Chicago 35 11 * * 1-5`

Ask the importing user for:
- Timezone
