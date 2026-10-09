---
name: winred-sms-messages-monitor
description: "Use this when monitoring Google Messages for WinRed/political SMS spam, documenting evidence, sending STOP, and archiving threads."
---

# WinRed SMS Messages monitor

## Goal
Monitor Google Messages for Web for campaign/spam SMS. **Primary evidence scope = WinRed-related** (short links resolving to `secure.winred.com` / WinRed flows). Non-WinRed spam may get STOP + archive for inbox hygiene only — do not deep-file as main WinRed cases (e.g. Turning Point / Anedot is out of main log).

## Access
1. Pair **Google Messages for Web** on **your** computer’s browser (`https://messages.google.com/web`) — QR scan by the user. Sessions can drop; re-pair when needed.
2. Evidence root (shared box filesystem): `/workspace/spam-evidence/`
3. Public webapp (owned by the site teammate): private GitHub repo + password-gated Netlify host — do not wipe private JSON; public export censors **recipient** phone only.

## Per spam thread pipeline
1. Open thread → full transcript + screenshots → save under `cases/<from-number>/messages/` and `cases/<from-number>/screenshots/`
2. Extract short links; resolve redirects; **research the LIVE landing page** (footer consent blurb, conduit/allocation, candidate/JFC names) — not just the URL slug
3. If WinRed in scope: append `library/spam_cases.csv` / refresh xlsx; save page HTML under `cases/<number>/pages/`
4. If user has **not** already sent STOP: send exactly `stop`
5. Note confirmation if it appears
6. **Archive** the conversation (never delete)
7. Next thread

## FEC / officers (when documenting new WinRed campaigns)
- Download Form 1 PDF for named committees; extract treasurer + custodian name/address/phone/email into `library/committee_officers.csv` and `cases/_committees/<FECID>/`
- Do not invent phones blank on the Form 1

## Privacy
- Private evidence pack keeps all original data
- Public site/export: show spam **sender** numbers and campaigns; **never** the user’s personal phone

## Coordination
- The site teammate may run the website in parallel — append evidence carefully; don’t clobber their app checkout unless asked
- Prefer appending to the evidence library; tell the user when a new WinRed case batch is ready for the site

## Blockers
- If Messages action safety classifier blocks STOP/archive, tell the user (approval card or hand screen)
- If unpaired, show QR and hand the desktop for scan
