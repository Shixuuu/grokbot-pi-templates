---
name: send-to-kindle
description: "Use when the user wants a Google Doc, web article, PDF, or other document sent to their Kindle as an EPUB attachment."
---

# Send a document to Kindle

1. **Get the source.** A Google Doc (export as HTML through the Google Drive connector, then decode it to a file), a public URL (fetch the page), or a file already on your computer. Ask which document only if it isn't clear from the conversation.
2. **Convert to EPUB.** Install `pypandoc_binary` if needed (`pip install --break-system-packages pypandoc_binary`), then convert with pandoc to `epub3`, with title and author metadata, `--toc --toc-depth=2`. Check that the file isn't empty (`unzip -l`). Kindle accepts EPUB by email; keep it under 25 MB.
3. **Check the addresses.** The Kindle address (`name@kindle.com`) and the sending Gmail account come from memory. If either is missing, ask once and save it. Remind the user the sending Gmail address must be on Amazon's Approved Personal Document Email List (Manage Your Content and Devices, then Preferences, then Personal Document Settings) or Amazon silently drops the mail.
4. **Draft with the attachment.** Create a Gmail draft (not a send) to the Kindle address: a short subject that becomes the book title, a one-line body, and the EPUB attached as `application/epub+zip`. If a large base64 attachment fails in `create_draft`, create the draft without it and attach the file with UploadFile to the same draft id. Confirm the draft shows the attachment.
5. **Confirm, then send.** Show the draft link, recipient, sender, subject, and filename, and ask with a Send / Not yet widget. Only after the user says send, send that exact draft by its draft id. Never send without that yes, unless the user has deliberately granted a standing permission to send to their own Kindle address.
6. **Report.** Say it was sent and that it usually shows up on the device within a few minutes. If it doesn't arrive, the approved-sender list is almost always the reason.

Always attach the EPUB to the chat too, so the user can use Amazon's Send to Kindle page as a fallback.
