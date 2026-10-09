---
name: event-checkin-form
description: "Use when the user wants a quick event attendance / check-in web form built with Grok Build, deployed to grok.me, emailed to them, and shared via a QR code."
---

# Event check-in form (Grok Build + grok.me + QR)

Goal: a mobile-first form attendees open by scanning a QR code; each submission is emailed to the host.

1. Confirm the fields to collect (default: name only) and the recipient email. If the email isn't known, use the email of the signed-in grok.com account and tell the user which one you used.
2. In the box browser, open grok.com and use Grok Build to create the site: event title and date, required fields, a submit button, a clear success message, and a one-line privacy note if personal data is collected. Match the event's language.
3. Email delivery: use Grok Build's own backend/email if it has one. Otherwise POST via fetch to FormSubmit `https://formsubmit.co/ajax/<email>` with the fields plus a local timestamp, `_subject`, `_captcha=false`, `_template=table`, so attendees stay on the page.
4. Publish to grok.me and note the exact public URL.
5. Test once on the live URL with a clearly labeled test entry. With FormSubmit, the first submission returns "This form needs Activation" and emails the recipient an Activate Form link: ask the user to click it, then re-test (a direct curl POST to the same endpoint is a quick check).
6. Make a QR code of the URL on the box (e.g. Python `qrcode` in a venv, error correction M, box_size 20) and send the PNG plus a screenshot of the form.
7. For later field changes, edit the same Grok Build project and republish to the SAME URL so the printed QR keeps working; stop and tell the user if the URL would change.

Notes: sensitive fields (bank account, ID numbers) pass through a third-party mail relay, so mention it and suggest taking the site down after the event. Never enter passwords; stop at sign-in or captcha and hand off to the user.
