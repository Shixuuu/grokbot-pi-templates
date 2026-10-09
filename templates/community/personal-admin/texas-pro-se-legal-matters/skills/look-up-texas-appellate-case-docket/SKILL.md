---
name: look-up-texas-appellate-case-docket
description: "Use when looking up a Texas Court of Appeals case by number, reviewing the public docket and filings, saving the docket PDF, or gathering case facts for legal drafting."
---

# Look up Texas appellate case docket

Assumes signed-in Chrome on this computer when a site requires login. Public Texas appellate search does not require an account.

## Inputs
- `{case_number}` — e.g. `01-25-00000-CV`
- `{coa}` — court code if known (First Court of Appeals = `coa01`). If unknown, start from the court homepage or Google `{court name} texas`.
- Optional `{media_or_event}` — a specific filing, returned-mail notice, or docket event to open

## Steps
1. Open the court homepage if needed: for the First Court of Appeals use `https://www.txcourts.gov/1stcoa/`. Otherwise search Google for `{court name} texas` and open the official `txcourts.gov` result.
2. Use FIND MY CASE (or go directly to case search) and open the case:
   - Direct pattern: `https://search.txcourts.gov/Case.aspx?cn={case_number}&coa={coa}`
   - Broader search: `https://search.txcourts.gov/CaseSearch.aspx?coa=cossall&ext=1`
3. On the Case Detail page, capture: case style (parties), court, status, and the docket/events list.
4. Open any needed filing or media link (e.g. a Document returned or PDF event). Review pages in the viewer; note returned-mail or service issues without storing full street addresses in lasting notes unless asked.
5. Save the docket for offline use: open the browser Print dialog on Case Detail → Save as PDF (do not send to a printer). Keep the file under a clear name that includes `{case_number}`.
6. Report back a short brief: case number, style, court, key recent events, links opened, and path to the saved PDF. Do not file, e-file, or send anything externally.

## For legal drafting follow-up
If the user is feeding this into another AI or this agent for a writ/motion/strategy draft:
- Prefer the saved docket PDF and Case Detail facts over memory.
- Treat party names, minors, and home addresses as sensitive; summarize rather than paste full PII into shared channels.
- Confirm with the user before sending any message on an outside AI site or filing anything with a court.

## Do not
- Replay Google / ChatGPT / Claude sign-in or 2FA flows; assume the needed account is already signed in, or ask the user to complete verification.
- Embed passwords, OTPs, or passkeys.
- Treat a single demo case number as the only case — always use the `{case_number}` provided for this run.
