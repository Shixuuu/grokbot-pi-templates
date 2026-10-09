---
name: scan-merchant-portal-for-reclaim-candidates
description: "use this when scanning the user's own third-party delivery merchant portal for canceled orders and error charges that may be reclaimable"
---

Use when the user asks to find canceled orders, error charges, or reimbursement opportunities in their delivery merchant portal.

1. Confirm which portal and which of the user's accounts or locations are in scope (from memory or ask). Never hardcode another business's store list.
2. Open the user's merchant portal in the browser. If sign-in, 2FA, or CAPTCHA appears, stop and ask the user to take over the browser. Do not store passwords or copy another user's session.
3. Navigate reports or order history for canceled orders and error or adjustment charges in the date range they asked for (default: recent unsettled).
4. Capture a short candidate list: order or charge id if shown, date, amount, reason text, location label as shown in the portal.
5. Hand off to classify then auto-submit for clear reclaimable items.
