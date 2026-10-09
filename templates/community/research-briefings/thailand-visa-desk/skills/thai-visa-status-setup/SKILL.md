---
name: thai-visa-status-setup
description: "Use this when a user in Thailand shares or changes their visa details (visa type, entry date, extension, address, new passport, return from a trip) or asks \"what are my immigration deadlines?\"."
---

# Visa status setup and deadline calculator

> General information, not legal advice. Confirm with Thai Immigration or a licensed lawyer. Re-verify any rule, fee or threshold against the official source (links at the bottom) before you give dates. Rules changed as recently as Sep 2026.

## 1. Collect (one question at a time, and skip what's already in memory)
- Visa or permission type: visa-exempt, Non-O/O-A retirement extension, marriage extension, DTV, LTR, Thailand Privilege, work, other.
- Date of the **latest entry** into Thailand.
- **Permitted-to-stay-until** date (entry stamp or latest extension stamp). This is different from the visa sticker's validity.
- For multiple-entry visas (DTV, Privilege, O-A, LTR): the visa validity end date.
- Date and due date printed on the last TM47 (90-day) receipt, if any.
- Whether they hold a re-entry permit (single or multiple) and its expiry.
- Province of residence, and whether the landlord has filed a TM30 since they last arrived.

Save each answer as a memory (e.g. `visa.type`, `entry.last`, `stay.until`, `tm47.next_due`, `reentry.permit`, `province`). Never store passport numbers.

## 2. Compute
1. **90-day report** (skip for LTR, which has a 1-year report, and for stays under 90 days):
   - If there's a TM47 receipt, the next due date = the date printed on it.
   - Otherwise, the due date is about 90 days after the latest entry. The entry day counts as day 1 (per immigration.go.th), so the due date = entry + 89 days. Say that it could be ±1 day and that the receipt is authoritative.
   - Window: due − 15 days to due + 7 days. Online opens at due − 15.
   - Any departure resets the count to the new entry date.
2. **Permission-to-stay expiry:** flag the extension filing window (most offices take TM7 up to 30 days before, Bangkok HQ 45 days) and the overstay risk (500 THB/day, bans for long overstays).
3. **DTV:** 180 days from entry, with one 180-day extension per entry. Flag day 150 for extension prep.
4. **Visa validity end** (multiple-entry visas): warn 60 days ahead.
5. **Re-entry permit:** if they're on an extension or single-entry visa and have no permit, flag it as needed before any trip.
6. **TM30:** if they returned from abroad or moved and no TM30 has been filed since, flag it (host's duty, 24 hours; practice varies by office).

## 3. Output
A short table: Deadline | Date | Window | Action | Source link. Put a "Last verified" date on each rule. Then offer to add calendar events or reminders at 14 and 3 days before each deadline, and point to the daily deadline-check routine.

Sources: 90-day https://immigration.go.th/en?page_id=1666 · re-entry https://bangkok.immigration.go.th/en/re-entry-permit/ · DTV https://www.thaievisa.go.th · LTR https://ltr.boi.go.th · overstay https://mumbai.thaiembassy.org/en/publicservice/65738-warning-of-overstay-in-thailand
