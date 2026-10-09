---
name: credit-report-pull
description: "Use when pulling free three-bureau credit reports: collect save destination plus verification email/phone at session start, hand over for SSN/DOB/address/passwords, accept OTP codes pasted in chat, save to a CreditGrok folder, and offer to verify all three before ending."
---

# Credit report pull

## Goal
Obtain the user’s free credit reports from the three major bureaus through the official combined site, without the agent typing or storing sensitive identity secrets, and save each report to a destination chosen at session start.

## Official site
Use **AnnualCreditReport.com** (the FTC-backed site that covers Equifax, Experian, and TransUnion). Do not use third-party “free credit score” upsell sites unless the user explicitly names one.

## Session start (once per chat)
1. Ask where reports should go for this session — one of:
   - Online drive the user already has connected (e.g. Google Drive): create or use a folder named `CreditGrok`.
   - A registered user computer: create or use a folder named `CreditGrok` at a path they confirm.
2. Ask for the **verification email** and **phone number** the bureaus should use for ID verification (many Equifax / Experian / TransUnion steps request one or both). Collect both when possible; if they only want one channel, note which.
3. Confirm destination + contact channels in one short line and keep them for the rest of the session. Do not re-ask unless they change them.
4. Session-only: keep email/phone in working context for this chat. Do not write them into durable memory, skills, or routines.

## Control split
- **Agent drives:** opening the site, clicking through non-PII pages, selecting bureaus, filling verification **email** and **phone** fields using the contacts collected at session start, starting downloads, organizing saved files, naming files, confirming uploads/copies.
- **Human drives (hand the computer immediately):** any form that asks for name, SSN, date of birth, address, username/password, security questions/answers, or captcha that needs a human. Use the box handoff flow; wait until they hand back, then continue from a screenshot.
- Never ask the user to paste SSN, full DOB, or passwords into chat. Prefer handoff for those.

## One-time codes (email / SMS)
Bureaus often send a verification code to the email or phone collected above.
1. Tell the user which channel to watch (email vs SMS) when a code is requested.
2. Ask them to **paste the code into chat** (hand the code off to CreditGrok).
3. Enter the code on the page and continue driving.
4. Do not store one-time codes in memory, skills, or routines. Use each code once, then discard it from working context.

## Saving reports
When a report file is available (download, print-to-PDF, or exported page):
1. Save into the session’s `CreditGrok` folder.
2. Name files clearly, e.g. `Equifax-YYYY-MM-DD.pdf`, `Experian-YYYY-MM-DD.pdf`, `TransUnion-YYYY-MM-DD.pdf`.
3. Confirm path or drive location in chat. Do not paste full report contents into chat unless asked.

## Before ending the session
Offer to verify that all three bureau reports are saved in the session’s `CreditGrok` folder before wrapping up.
1. Ask once whether they want that check (default: offer it; skip only if they decline).
2. If they want it: list what is present for Equifax, Experian, and TransUnion (filename + location). Call out any bureau that is missing.
3. If something is missing, offer to continue the pull for the missing bureau(s) rather than ending.
4. Only treat the session as complete after they confirm they are done (or explicitly decline the check).

## Privacy
- Do not write SSN, full DOB, passwords, security answers, or one-time codes into memory, skills, or routines.
- Do not persist verification email/phone beyond the session.
- Summarize only what the user asks for (e.g. “Equifax PDF saved”). Do not invent scores, accounts, or derogatory items.

## Shareability
Keep steps generic (no one user’s path, email, phone, or account names hardcoded). Destination and verification contacts are always chosen at session start.
