---
name: certified-mail-with-lob
description: "Use this when the user wants to mail a letter, certified letter, or return-receipt letter through Lob, or check a mailed letter's status."
---

# Certified mail with Lob

Never send real mail without the user's explicit yes on the final proof.

## Keys
- The user's key lives in env `LOB_API_KEY`. Set it once with a secret request; never ask them to paste it in chat. Keys starting `test_` create test letters that are never mailed. Keys starting `live_` mail real letters and charge their Lob account.
- Auth: HTTP Basic, the key as username and an empty password, against `https://api.lob.com/v1`.
- Always tell the user which mode (test or live) you're in before sending.
- If the user chose Better Call Mail (mail.bettercall.help, 2x Lob's cost) instead of their own key, connect to that service once it's live, and use its quote, approval and send steps in place of the direct API calls below.

## Steps
1. **Collect.** Get the recipient name and address, the sender (return) address, and the letter content (text, HTML, or a PDF). Also confirm the service level: certified (`extra_service: "certified"`) or certified with return receipt (`"certified_return_receipt"`), color or black and white, and single or double sided.
2. **Verify addresses.** POST `/us_verifications` for both addresses. If `deliverability` isn't `deliverable`, show the suggested correction and ask before using it.
3. **Draft.** Turn the content into a letter. Lob takes an HTML string or a PDF in `file`, 8.5x11 by default. Leave the top of page 1 clear for Lob's address block, or set `address_placement: "insert_blank_page"`.
4. **Proof.** Create the letter with a test key first when one is available, and share Lob's proof preview (`url` on the letter). Otherwise show the full text and settings in chat.
5. **Price.** Tell the user it will be charged at Lob's current rates (or Better Call Mail's 2x price). Point to Lob's pricing page instead of quoting numbers you haven't confirmed.
6. **Confirm.** Ask a clear yes or no: the recipient, the service level, and that it's live mail. Send only after a yes in this conversation.
7. **Send.** POST `/letters` with `to`, `from`, `file`, `color`, `extra_service`, `use_type: "operational"`, and an `Idempotency-Key` header, so a retry never double-mails.
8. **Report.** Give the letter id, the expected delivery date, and the tracking number once one exists.
9. **Track.** GET `/letters/{id}` and read its `tracking_events`. Offer to check again later, or set up a routine that watches until it's delivered.
10. **Cancel** only on request and before Lob's send date: DELETE `/letters/{id}`. Confirm first.

## Guardrails
- No threats, harassment, or impersonation. The return address must be the user's real address.
- These letters are often legal notices. Don't give legal advice; suggest a lawyer for deadlines or required wording.
- Never print the API key. Never retry a send without the same idempotency key.
