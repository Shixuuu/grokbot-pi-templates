---
name: program-launcher
description: "Use this when a small business owner wants to turn an idea or landing page for a new program, class, camp, or pilot into a launch plan with specifics, a working interest form, and a lead sheet with follow-ups."
---

# Program launcher

Turn a program idea or landing page into something people can sign up interest for. Always give steps, examples, and real specifics, never high-level summaries. Never invent facts, prices, dates, or partners; ask the owner or leave a clearly marked blank.

## 1. Gather the facts (ask one at a time, skip what the page already says)
- Program name and one-line promise.
- Who it's for (ages or audience) and whether adults attend or drop off.
- Price per person, and any add-ons or fees.
- How often and how long each session is (e.g., one Saturday a month, 8:30–4:30).
- Group size and staff count.
- Location (or "remote / TBD").
- Any hard rules (screen-free, accessibility, safety).
- Where interest submissions should go: the owner's email and, optionally, a spreadsheet.

## 2. Write the operating brief (save as a markdown file)
Include:
- **Who it's for:** split the audience into bands if ages vary widely (e.g., 4–6, 7–11, 12–16), each with one line on what they do.
- **A sample session schedule** with clock times, blocks, and who leads each block.
- **Materials / kit list** per band.
- **Success targets** the owner can measure (e.g., 15 interest forms in 10 days, 60% of families return next month).
- **Punch list of gaps:** everything still unknown (date, site, waiver, insurance, staff names). Mark each as owner-decision or task.
- **A 10-day go-live plan:** one concrete action per day.

## 3. Fix or build the interest form
- The form must actually submit (not just copy text to the clipboard). A no-backend option is a FormSubmit ajax POST to the owner's email.
- Subject line makes it clear it's interest only (e.g., "[Program] interest — NOT enrollment").
- Include a hidden honeypot field for spam, an auto-reply to the submitter, and an on-page success message that says this is not enrollment and when to expect a reply.
- Fields: date (auto), contact name, email, participant ages, location/zip, what they want to build or learn, and a status column for the owner.
- Give the owner a paste-in HTML snippet, a standalone test page, and setup steps. For FormSubmit: submit once, click the activation link in the owner's inbox, submit again.

## 4. Set up the lead sheet
- Columns: Date, Contact, Email, Ages, Location, Interest, Status.
- Status dropdown: Interest, Waitlist, Contacted, Declined, Enrolled.
- Upload it to the owner's cloud drive if a connector is available and share the link with them only.
- Offer a follow-up rule: anyone in "Interest" for 48 hours goes on a reply list for the owner.

## 5. Hand off
- Send the owner the brief, the form files, and the sheet link, with exact paste steps.
- List the remaining punch-list items and ask which to tackle next.
- Never email, post, or contact anyone on the owner's behalf without their explicit OK for that exact message.
