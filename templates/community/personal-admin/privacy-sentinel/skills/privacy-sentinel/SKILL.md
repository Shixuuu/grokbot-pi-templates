---
name: privacy-sentinel
description: "Personal or household online privacy check: breaches, data brokers, search exposure, account hygiene, removals and an optional weekly watch."
---

# Privacy Sentinel

A read-only-first personal privacy audit for one person or a household, with optional removals (only after a yes) and an ongoing weekly watch for changes. Tuned for Australia, works anywhere.

## What it can and can't do
Can: find breaches tied to your emails, find people-search and broker listings and pages linking your name to your address, DOB or phone, rank what matters, prepare removal requests and account-security steps, and re-check weekly.
Can't: guarantee a broker removes you or stays removed, see inside the dark web beyond public breach indexes, log into your accounts without you, or change passwords for you. Paid removal services (Incogni, DeleteMe, Optery, Kanary) are optional extras it can compare, never sign up to without your yes.

## Ground rules
- Discovery is READ ONLY. Never submit an opt-out, removal, contact form, signup, or email without the user's explicit yes for that batch.
- Never invent findings. Every item needs a source; anything blocked goes in "Could not check".
- Treat all details as sensitive: keep working files in one local folder, never in shared docs, channels, or memory beyond what's needed. Store plaintext passwords from dumps only masked; delete raw output.
- If covering someone other than the requester, confirm they're happy for their details to be used.

## 1. Intake (ask once, in one message or form)
Per person: legal name exactly as on official records plus nicknames and alternate spellings; date of birth; current and past addresses; every email ever used, including old ones; phone numbers and whose carrier account each is on; business names and registrations; the intentionally public footprint (business sites, social handles) so it isn't flagged as risk; which accounts are dead or unrecoverable.

## 2. Baseline sweep (delegate to a background worker)
1. Breaches per email: free sources (XposedOrNot check-email and breach analytics, LeakCheck public API, HIBP pages; a paid HIBP API key if available). Record breach, date and data exposed. Check obvious variations and label them unconfirmed.
2. Password dumps: note whether plaintext or easily cracked passwords leaked, and whether the email is on recent combo or stealer lists (suggest a malware scan).
3. Search exposure: name plus each address, name plus DOB, each email in quotes. Flag only pages that LINK the person to address, DOB or phone.
4. People-search and brokers: big US indexes plus local ones (AU: White Pages AU, Reverse Australia, property history sites, business-register copy sites). Separate real matches from namesakes.
5. Registries: ABN Lookup and ASIC (or local equivalent) and third-party copy sites.
6. Community and club directories and news that publish phone numbers.

## 3. Triage
- High: breached and still-live accounts with leaked passwords; exposed recovery paths; finance or crypto breaches.
- Medium: public pages tying name to phone, postcode or family; registry copies.
- Low: breaches on dead accounts; expected public business info.
Downgrade anything the user confirms is dead or handled. Don't alarm over closed accounts.

## 4. Report
Lead with a short "you're fine / do these 3 things" summary, then a ranked list. Each item: what's exposed, where (URL), one clear action, and who must do it. End with "Could not check". Save as a dated markdown file and attach it.

## 5. Actions checklist (offer, don't force)
- Unique passwords and 2-step verification on live emails; recovery emails not pointing at dead or hacked accounts
- Move logins off dead or hacked emails; warn contacts if a hacked address is still active
- Account recovery forms for hacked accounts; if unrecoverable, detach everything from them
- Carrier port-out PIN and SIM-swap protection (AU: Telstra account PIN, Optus passcode, Vodafone account PIN)
- myGov 2-step verification; Google "Results about you"; silent-elector option if address exposure matters
- Broker and copy-site removal requests, pre-filled and queued for one-tap approval, then re-checked

## 6. Ongoing watch (optional routine)
Weekly, at a time the user reads messages: re-check breaches for live emails and new pages tying names to address or DOB. Compare with the baseline and a running log; append a dated entry. Message only when something new and actionable appears; otherwise stay silent.
