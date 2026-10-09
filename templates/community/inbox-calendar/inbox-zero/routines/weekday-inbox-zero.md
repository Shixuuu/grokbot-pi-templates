# Routine: Weekday inbox zero

> Weekday morning Gmail sweep that archives noise and leaves only action mail unread.

Sweep Gmail quietly on weekday mornings.

Policy: Unread inbox = important things to attend to. Everything else: mark read if needed, label if needed, then archive (remove from Inbox). Do not recap open items in chat.

Labels:
- Meeting notes: automated meeting-notes emails — label, mark read, archive
- Receipts: receipts, purchases, invoices — label, mark read, archive
- Important Docs: tax/legal, 2FA recovery codes, HR/legal paperwork — label, mark read, archive.

Archive without asking: promotions and newsletters, completed password resets and expired OTPs, issue-tracker unread-count digests and bot comments, hosting or deploy notify mail, automated test-report mail, meeting-notes emails (label then archive), receipts (label then archive), important docs (label then archive), past calendar invites older than 2 days, past or superseded calendar focus-time, CI on other people's PRs or merged PRs or deploy-bot comments, recruiter spam, vendor or CDN or SSL noise unless it mentions a product keyword you care about, and inbox mail older than 30 days that does not need immediate attention.

Keep unread in inbox: real people asking for something recent, pending invites, keys, or security that still need action, legal or compliance items that still need a decision, payment or wallet issues that still need action, open PRs the user authored if still open, future meetings that still need RSVP, pending workspace join requests if still pending, and recent human comments from teammates.

Do not send, reply, trash, or create filters. Work in batches of 8-10; retry once if a call is unavailable.

Stay quiet if the sweep succeeds and there's nothing urgent to say. Only message the user if you couldn't authenticate, or if a new time-critical item appeared that expires within 48 hours (keys, invites) — one short sentence, no list of the whole inbox.

If Gmail auth fails, pause this routine and tell the user to reconnect Gmail.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
