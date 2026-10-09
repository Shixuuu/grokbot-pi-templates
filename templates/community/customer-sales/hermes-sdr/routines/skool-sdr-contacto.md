# Routine: Lead batch — Contact

> Fires on a lead-batch webhook so the SDR can contact that run without rewriting the pack.

When a lead-batch webhook fires:
- Get the run name from the webhook context.
- Fetch the exact Markdown output for that run from the configured local lead-output endpoint (fill-in: LEAD_OUTPUT_URL).
- Do not summarize, rewrite, or transform the output. Use it as-is as the lead pack.
- Run the usual SDR flow: verify owner/ICP and duplicates; send Instagram and email when the contact is the decision maker and the channel is clean; leave WhatsApp for the user; set aside any doubtful contact (namesake, not the owner, support@, possible duplicate, weak ICP). Do not force an Instagram that is not the owner: find the decision maker or skip.
- Use the Instagram/Gmail session like a human: never click logout, account-picker, Continue as, or anything that drops the session. Never ask for or type the password.
- Do not process the same run twice. Save the last processed run id.
- Do not process old output; wait for the next new cron output. If the webhook brings a run that was already contacted, do not resend.
- Ignore payloads that are ops, tunnel, or infrastructure — this channel is lead batches only.
- When done, report to the user: sent, WhatsApp pending, doubts, and errors.

Fires on:
- webhook
