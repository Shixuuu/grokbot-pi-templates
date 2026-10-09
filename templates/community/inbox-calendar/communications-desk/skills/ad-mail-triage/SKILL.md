---
name: ad-mail-triage
description: "Use this when the user wants promotional or advertising mail sorted: keep specified categories, archive other ads, and never archive personal or business mail."
---

# Ad mail triage

Sort promotional and bulk mail in connected Gmail inboxes. Archive other ads and brand drip. Leave live ops, personal mail, and protected categories. Never delete. Never archive Primary just because it is noisy, except when an age-out rule says to.

## Policy inputs

Read keep/archive rules from the request or routine.

- **Protected keep:** categories that stay even if they are ads (for example adult mail, if specified)
- **Live ops / business:** people, in-progress deals, money movement that still needs a human, named companies in an active thread
- **Brand drip:** newsletters, community notifications, event promos, CRM digests from those same companies. These may be archived even when the brand is otherwise keep
- **Always-archive senders:** archive on sight when listed
- **Completed-task mail:** receipts, login alerts, “X has joined” Zoom, post-meeting nags, OTPs already used. Leave these for the user unless they asked to file them. Do not teach always-archive from these
- **Age-out:** if the routine sets a max inbox age (for example older than 45 days), archive matching inbox threads after the ad pass, still honoring protected keep (adult mail is never age-out archived)
- Do **not** use a blanket keep for AI product mail unless the routine says to

If a Primary thread might be a real person or live ops, leave it on the ad pass.

## Steps

1. Confirm which Gmail accounts are connected. Skip accounts that need auth.
2. Look up `search_threads` and archive tools with `GetDynamicTools` on each namespace before calling them.
3. Search inbox **Promotions and Updates** only, e.g. `{category:promotions category:updates} in:inbox` (or two searches). Minimal view. Paginate as needed. Do not sweep Primary for ads.
4. Classify each thread:
   - **Keep:** protected categories, live ops, personal, completed-task mail
   - **Archive:** always-archive senders; other ads; brand drip; newsletters and credit-promo factories in Updates
   - **Leave:** anything that might be a person or live ops
5. Archive the archive bucket by removing the `INBOX` label. Do not trash, spam, or delete.
6. Create or refresh Gmail filters only for senders the user (or routine) marked always-archive, and only when that sender is not mixed with receipts/OTP/ops.
7. If an age-out is configured, search `in:inbox older_than:{days}d` and archive those threads except protected keep (adult).
8. Report archived count, notable keeps, and anything left because it was close.

## Safety

- Never archive mail just because it is in Promotions or Updates.
- Never archive a thread you have not classified on the ad pass.
- Prefer leaving a false ad in the inbox over burying a real person or live ops, except age-out which is explicit.
