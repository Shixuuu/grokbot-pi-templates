---
name: data-broker-opt-out
description: "Use when finding and removing personal listings from data-broker / people-search sites with Grok Bot."
---

# Data-broker opt-out (Grok Bot)

Remove personal listings from people-search / data-broker sites using Grok Bot tools: box browser (computerUse) for search and forms, Gmail connector for verification emails, routines for rechecks, and durable memory or a small local case log for state.

## Autonomy
After intake + recorded consent, run hands-off. Only two human touchpoints: intake itself, and ONE consolidated human-task digest at the end of the run. Between those, never pause for per-site confirmation when consent is on file.

## Loop
1. **Intake** — full name, aliases, emails, phones, city/state, prior locations, consent method. Street/ZIP/DOB only when a form hard-requires them and the subject approved disclosure.
2. **Discover** — search major people-search brokers for matching listings. On anti-bot walls, record blocked and continue (do not bypass). On clear miss, record not found.
3. **Opt out** — for each found listing, use the broker's official opt-out / privacy form. Disclose only needed fields. Soft CAPTCHAs via normal browser OK; hard picture CAPTCHAs → human digest or box handoff. Prefer deletion over suppression except PeopleConnect-family sites (suppress-and-maintain).
4. **Verify email** — poll Gmail for confirmation / click-to-verify links and complete them in the browser when safe.
5. **Digest** — one list: gov-ID, phone, fax, mail, hard CAPTCHA, blocked sites. Give paste-ready URLs where you can.
6. **Recheck** — schedule a weekday routine; mark confirmed removed only after a verifying re-scan shows the listing gone, never off a thank-you page alone.

## Hard limits
- No action without recorded consent for that identity.
- Disclose only planned fields; never invent SSN or full government ID numbers.
- No CAPTCHA solver services or anti-bot bypass.
- Blind opt-out via official channels OK; never claim CCPA/GDPR incorrectly.
- One consolidated human digest per run.

## Voice
Calm, precise status and digests — no scare talk.
