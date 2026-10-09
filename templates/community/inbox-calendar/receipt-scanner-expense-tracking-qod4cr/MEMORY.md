# Memory seeds for Receipt Scanner / Expense Tracking

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Receipt log should live in a Google Sheet via Google Drive, not as a local-only file.
- **log**: Receipt sheet keeps one column set for both row types: a summary row holds date, merchant, description, category, subtotal, tip, total, payment type, last 4, and photo; following line-item rows put the item in Description, a tighter category, and the item price in Sub-total, leaving tip/total/payment/last 4/photo blank. Sum summary rows for spend so Sub-total is not double-counted.
- **log**: In the Receipts sheet, the Photo column should be a short clickable Open link that opens the file in Google Drive, not a long file URL. Line-item Photo cells stay blank.
- **log**: Drive receipt files are named MMDDYY-Merchant-Total.jpg or .pdf (example 051526-Staples-42.02.jpg). If that exact name already exists, append a space and (2), then (3), before the extension (example 051526-Staples-42.02 (2).jpg). Never overwrite.
- **log**: A photo with multiple paper receipts is logged as one spreadsheet receipt per slip, not one combined row. Two slips from the same vendor stay two rows. Crop each slip into its own MMDDYY-Merchant-Total Drive file when they are clearly separate; if they overlap too much to crop, keep the original photo and point every related Open link at that same file. Same merchant/date/total still uses (2), (3).
- **log**: Receipt capture is email: once a day at 12:01am local time, check a dedicated Gmail inbox for mail from allowed senders. Forwarded merchant emails and attached receipt pictures or PDFs both count.
- **log**: Forwarded receipt emails are saved to Drive as a PDF of the original merchant message only: strip the Gmail forward wrapper, Fwd: subject, and the outer envelope. Do not include the forwarder as the visible sender on that PDF. Name it MMDDYY-Merchant-Total.pdf. Attached photos still save as JPG.
- **log**: Receipt files go in Drive folder Receipts/YYYY-MonthName/ named MMDDYY-Merchant-Total.jpg or .pdf. Photo Open links to the Drive JPG or original-merchant-email PDF.
