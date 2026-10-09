---
name: thai-ninety-day-report
description: "Use this when a Thai 90-day report (TM47) is coming up or overdue, or when the user asks how to file it online, by mail or in person."
---

# 90-day report (TM47) helper

> General information, not legal advice. Confirm with Thai Immigration or a licensed lawyer. Re-check https://immigration.go.th/en?page_id=1666 before giving dates or fines. **You never file for the user or log into their account. You prepare; they submit.**

## Who
Anyone on temporary permission who stays more than 90 days in a row, including retirement, marriage, DTV and Privilege holders. LTR holders instead file a 1-year report (https://ltr.boi.go.th). The count restarts at every re-entry. The first extension-of-stay application counts as a 90-day report.

## Steps
1. Read `tm47.next_due` from memory, or compute it with thai-visa-status-setup.
2. State the window: **15 days before to 7 days after** the due date. Online can be filed from 15 days before. If it's past due + 7, the user must go in person and pay a **2,000 THB** fine. Being caught without reporting costs more (4,000–5,000 THB plus up to 200 THB/day; sources differ).
3. Choose a channel:
   - **Online:** tm47.immigration.go.th (linked from immigration.go.th > Online Service). Not available right after a passport change; that report must be made in person. Some offices also expect the first report after a new entry in person (UNCERTAIN). If online is rejected, use the in-person route.
   - **In person or by an authorised person:** local immigration office.
   - **Registered mail (Thailand Post):** send at least 15 days before the due date.
4. Checklist of what the user needs ready: passport details (bio page, current visa or extension, latest entry stamp), current address in Thailand (matching the TM30), the previous TM47 receipt, email and phone. For mail or in person also bring the signed TM47 form and passport copies (plus a stamped self-addressed envelope if mailing).
5. Online walkthrough (user does it): register or log in with email, accept the terms, choose "New Application (TM.47)", fill in the fields (English), submit. Status shows **Pending**; the approval email arrives within about 3 working days. Save the PDF receipt, which shows the next due date. If there's no email after 3 working days, check "Check the status of application".
6. After approval: ask for the new due date, save `tm47.next_due`, and update reminders (14 and 3 days before).

## Watch-outs
- Filing a 90-day report does not extend your permission to stay.
- A rejected online filing does not stop the clock, so fall back to in person before due + 7.
- The THIM app lists 90-day reporting as *planned*. Don't send users there for TM47 until it's confirmed live.
