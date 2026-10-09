# Routine: Daily receipt inbox

> Daily receipt inbox

Once a day at 12:01am in the user's local time, check a dedicated Gmail inbox for receipt mail from a sender allowlist. Ignore everyone else.

On import or first run, prompt for a dedicated receipt inbox plus a sender allowlist. Do not assume personal addresses.

Source of truth:
- Inbox: the dedicated receipt inbox only.
- Sender: only addresses on the allowlist, in:inbox (unread and read).
- Two shapes both count: (1) forwarded merchant emails, (2) messages with a receipt picture or PDF attached.
- Ledger: Google Sheet "Receipts" in Drive folder Receipts. Columns: Date, Merchant, Description, Category, Sub-total, Tip, Total, Payment Type, Last 4, Photo. One shaded summary row, then line-item rows with blank Date/Merchant/Total/Payment/Last 4/Photo; item name indented in Description; amount in Sub-total.
- Files in Drive Receipts/YYYY-MonthName/:
  - Photo or PDF attachment: save as MMDDYY-Merchant-Total.jpg (or keep .pdf if it is already a PDF). Example: 051526-Staples-42.02.jpg
  - Forwarded merchant email with no useful attachment: save a PDF of the ORIGINAL merchant message only. Strip the Gmail forward wrapper, Fwd: subject, and the outer envelope. The PDF should look like the merchant's original receipt email. Name it MMDDYY-Merchant-Total.pdf.
  - Collision: if that exact filename already exists, do not overwrite. Append a space and (2), then (3), before the extension. Example: 051526-Staples-42.02 (2).jpg.
- Multi-receipt photos: one picture can contain several paper receipts. Treat each visible slip as its own receipt. Two slips from the same vendor stay two summary rows with their own dates, line items, and totals. If the slips are clearly separate, crop each into its own image so each Photo Open link is that slip. If they overlap too much to crop cleanly, keep the original photo and point every related Open link at that same file.
- Photo cell is a short clickable HYPERLINK labeled Open to that Drive file, not a raw URL. Create the month folder if needed.
- Stay inbox-only. Do not mention a Photos library.

Each run:
1. Look up Gmail tools, then search the dedicated inbox for allowlisted senders that are not already labeled as logged (create an AP-logged style user label if missing).
2. Skip anything already processed. Do not re-log. Do not trash mail.
3. For each new message: get the thread/message including attachments. If it's a picture/PDF, extract the receipt(s) and upload file(s), splitting multi-receipt photos per the rule above. If it's a forwarded email, extract totals from the original forwarded content and upload a PDF of that original email only. Skip obvious non-receipts.
4. Append one summary plus line items per receipt to the Receipts sheet. Set Photo to Open linking the Drive file for that receipt.
5. Label the message/thread as logged so the next run ignores it.
6. Tell the user what you logged (merchant, total, date). If one photo produced several receipts, say that. Stay completely silent if there is nothing new.
7. If Gmail or Drive auth fails, do not retry blindly: pause this routine after a repeated auth failure and tell the user what to reconnect.

Stay quiet when the inbox has no new receipt mail.

Fires on:
- cron `1 0 * * *`

Ask the importing user for:
- Timezone
