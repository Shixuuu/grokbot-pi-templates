---
name: people-search-opt-out-playbook
description: "Use this when filing official people-search or data-broker opt-out/removal forms in the browser for one authorized subject."
---

# People-search opt-out playbook

## Scope
- One authorized person per agent. Never mix identities. Never guess extra identifiers. Never collect SSN, account passwords, or 2FA in chat. DOB / street / phone only when that site's official form requires them — enter on the computer, do not hoard a dossier.
- Official published opt-out / privacy / removal forms only. Prefer the opt-out URL over a listing. Use Official broker opt-out URLs (family map is in that skill).
- Never hack, scrape behind logins, pay, buy data, DDoS, bypass captcha, or email the site except through its official form.

## Identity: listing-first, least data
Brokers need to match a public listing. They do **not** need a full identity dump.

**First wake (enough to start):**
1. Legal name (as it appears on listings)
2. Cities / metro that should match
3. One monitored confirmation email
4. Optional: live listing URLs (best input — skip search)

**Form-time only (ask then, not at onboarding):**
- Phone (Whitepages voice-code, That's Them, some DSAR forms)
- Street address (That's Them and similar)
- DOB only if the form blocks without it

**Never in chat / never store unless the subject typed it on the computer themselves:** SSN, government IDs, passwords, payment cards.

If the subject pastes a listing URL, treat that URL as the primary key. Do not fan out a name search for other people with the same name.

## Ledger (required)
One line per site/family, updated every submit:

`site | family | listing_url | email_used | submitted_at | confirm | gone | next | parked_until | note`

- `confirm`: needed | sent | done
- `gone`: unknown | waiting | yes | reappeared
- `next`: wait-email | stage-2 | relist | retry | done
- Collapse to the **parent family** when one form covers many brands (PeopleConnect, BeenVerified, Spokeo-except-That's-Them, Mississippi Tornado Alley siblings still need their own forms).

## Human in the loop: captcha (and phone) only
- Hand the computer for captcha / Turnstile / FunCaptcha, and for phone voice-codes.
- If an authorized inbox teammate exists, they fetch confirmation emails and return the link or one-time code. Do not ask the subject to click email links.
- If no inbox teammate: remind the subject once to click the broker mail, then wait. Do not watch their inbox yourself.
- Login / 2FA / payment still stop.
- Handoff text: solve the captcha AND click submit AND wait for the success page, then hand back.

## What the bot does without a human
- Look up official URLs, match the authorized listing, fill, submit when no captcha.
- After captcha hand-back, screenshot; if green, submit immediately.
- Email fallback: if the first address is rejected (common for uncommon TLDs), use the next authorized email. Ledger which address each site accepted.
- After submit, request the verify link/code (teammate or subject); complete stage-2 unless that page is also captcha.
- One site at a time in the browser. Park after two failed captcha handoffs per site per day, or on explicit rate-limit / TLS-block copy. Ledger everything.

## How to file
1. Check family map — skip child brands already covered by a parent submit still in-flight.
2. Official opt-out URL from the directory.
3. Listing URL if you have one; else name + authorized city search, match only the authorized person.
4. Authorized identifiers only. Switch email on validator rejection.
5. No captcha → submit. Captcha → hand computer.
6. Screenshot on return; green → submit now.
7. Request confirmation mail; complete the link.
8. Update ledger.

## Known site patterns
- Spokeo: listing URL + recaptcha + email confirm. Rate-limits automated privacy requests — park until next day.
- Whitepages: listing URL then phone voice-code.
- TruePeopleSearch / FastPeopleSearch / USPhoneBook / CyberBackgroundChecks: email-link stage-2. Some reject uncommon email TLDs.
- BeenVerified family: search then email verify. FunCaptcha. One parent form covers the family.
- Radaris: human captcha AND submit in one pass. Keep the tracking id.
- That's Them: street often required. Separate from Spokeo despite the registry cluster.
- MyLife: privacyrequest; email code then recaptcha.
- PeopleConnect: email verify then pick record (Intelius / TruthFinder / InstantCheckmate / USSearch / ZabaSearch). Classmates is not covered.
- Nuwber: listing URL + email confirm.
- FamilyTreeNow: optout then emailed stage-2.
- ClustrMaps: may block datacenter IPs — retry from residential or park.
- FastPeopleSearch / USPhoneBook: daily removal caps and recaptcha token expiry — park, do not hammer.
- Infomatics / WeInform / PeopleSearcher / Checksecrets: optOutLight Turnstile. Park after it never clears.

## Mugshots
- Court/jail usually stay. Aggregators: official form only. Stop if they demand payment.

## Quiet rules
- Small batches. Monday: relist check + pending. Site + status, not a privacy essay.
