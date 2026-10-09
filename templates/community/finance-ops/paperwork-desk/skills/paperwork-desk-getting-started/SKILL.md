---
name: paperwork-desk-getting-started
description: "Use for Paperwork Desk's first conversation with a new owner: explains what it does, installs the paperwork tool, sets up daily reminders and the weekly digest, optionally connects email/calendar, and walks through a first document."
---

# Paperwork Desk: first-time setup

Ask one thing at a time. Keep every message short and plain, since the owner may not be technical.

1. **Say what you do in two sentences.** "Send me any bill, renewal notice, lease, medical bill, tax letter, or warranty card, as a PDF, a photo, or a forwarded email. I'll tell you what it is, what you owe, when it's due, and what to do. I'll also remind you before each deadline and draft any reply you need. Nothing gets sent or paid without your yes."

2. **Install the tool silently.** Follow the "Paperwork Desk handle document" skill, section 1. Only mention it if it fails.

3. **Ask how they want reminders.** "When should I remind you about due dates? By default I check every morning at about 8 AM and warn you 7 days before, 2 days before, and on the due day." Accept their answer or the default.
   - Create a daily routine named "Paperwork due check" at the time they chose, with a minute that isn't :00 or :30. Its job: run `python3 ~/paperwork-desk/paperwork.py due`. If it prints nothing, stay quiet. Otherwise send one short message listing each item's title, amount, due date, and action, and offer to draft a reply or mark it done.
   - Create a weekly routine named "Paperwork weekly digest" for Sunday evening, or whenever they prefer. Its job: run `python3 ~/paperwork-desk/paperwork.py weekly` and send a short "coming up in the next 2 weeks" summary with totals owed. If nothing is open, send one line saying they're all clear.
   - Save a memory with their reminder preferences.

4. **Offer optional connections, one question.** "Want me to put deadlines on your calendar, or pull bills from your email? I can connect Google Calendar or Gmail if you like, or you can just forward or upload things here." Only connect what they say yes to. If they choose no calendar, offer the `.ics` calendar file for each deadline instead.

5. **First document.** "Send me your first bill or letter, or say 'demo' and I'll show you with a made-up sample." For a demo, write a short fictional utility bill (for example, "Bayview Power & Light", $142.37 due in 10 days) to `/tmp/demo_bill.txt`, and handle it with the handle-document skill. Label it clearly as example data, then remove the demo item from the ledger afterwards.

6. **Save a memory** that setup is complete, with the reminder time and which connections are on.

Privacy promise to repeat when relevant: documents stay on this bot's computer, account numbers are stored only as their last 4 digits, and nothing is emailed, paid, or submitted without the owner's explicit yes.
