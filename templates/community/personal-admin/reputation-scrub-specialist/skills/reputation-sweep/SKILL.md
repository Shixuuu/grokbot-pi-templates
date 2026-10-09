---
name: reputation-sweep
description: "use this for every people-search or data-broker removal case after consent — intake, search, official opt-outs, and the end report"
---

Use this for every people-search / data-broker removal case. Not legal advice. Work until the end-of-case report after intake.

## Hard gates
- Do not search or send until the consent sentence is in the chat. That sentence is standing permission to send official removal mail without showing each email body.
- Never collect SSN, passport, driver’s license, tax ID, or ID images. If a site demands government ID, stop that site, tell the user once, and continue elsewhere.
- Never act on a third person without a signed authorization from that person.
- Official broker channels only. Rate-limit at least 20 seconds between outbound removal emails.
- Confirmed-removed only after a re-scan shows the listing gone. Until then status is request pending / awaiting clear.
- Never invent legal outcomes, timelines, or “already deleted” claims.

## New chat with no dossier
Greet in two sentences and show the intake card. “Hi” is enough. No long kickoff prompt.

### Intake card (collect in chat; never assume country, timezone, or mailbox)
1. Full legal name plus aliases that may appear
2. Country and state/region
3. Current city plus other cities that often appear
4. Birth year or approximate age (disambiguation only)
5. Phone numbers and emails that may appear on listings
6. Which mailbox to use for official mail (Gmail as the person, or AgentMail inbox “reputation”)
7. Exact consent sentence (user must paste something equivalent to authorizing search of people-search/data-broker sites and sending official removal requests on their behalf)

Do not proceed without consent.

## Law routing (do not announce)
Infer from country + region:
- EEA/UK → GDPR deletion / objection language
- United States + California → CCPA delete / do-not-sell; queue DROP-style portal work when available
- Other US → generic delete / do-not-sell
- Canada → Canadian deletion letter style

## Mail
- Prefer official plugins. Gmail sends as the person. AgentMail: create or reuse inbox named or labeled “reputation”, send and poll there.
- If neither plugin is connected, ask them to connect Gmail or AgentMail. There is no third generic inbox.
- Plugins send mail. The Agent Computer browser searches sites and fills forms. The computer does not need to be logged into Gmail for plugin sends to work.
- Send as you go. Do not preview email bodies to the user. Report site + recipient at the end.

## After intake
Say a short sweep line, then work with short progress ticks.

## Browser / CAPTCHA
- Soft checkbox CAPTCHA: click once.
- Hard CAPTCHA / slider / DataDome / Cloudflare challenge: email the official privacy address for that site and keep going.
- PeopleConnect cluster (BeenVerified, Intelius, Instant Checkmate, and related): suppress / opt-out, do not claim delete of underlying user data.

## Typical US people-search roster (expand as needed)
TruePeopleSearch, FastPeopleSearch, Spokeo, Whitepages, BeenVerified, Intelius, PeopleFinders, MyLife, USPhonebook, AnyWho, FamilyTreeNow, ThatsThem, CyberBackgroundChecks, Nuwber, SearchPeopleFree, ClustrMaps, PeekYou, Radaris, Addresses.com — plus official privacy/opt-out pages for each.

For each site record: found / not found / blocked, listing URL if any, action taken (form / email / skip), recipient address.

## Email template skeleton (adapt to law route; plain text)
Subject: Deletion and Do Not Sell Request — [Full Name]
Body: identify self; list name/aliases, city/region/country, birth year, phones, emails, known listing URLs; request deletion/suppression and do-not-sell/share; ask confirmation; state you are the consumer and authorize the request. Never attach ID images.

## End report
List: listings found (site + URL), actions filed (site → recipient or form), no-match / unavailable, browser-blocked. State that nothing is confirmed-removed until re-scan. Offer a weekly Monday 09:00 re-scan in their timezone only if they ask after the first report.

## Weekly watch (only if requested)
Re-scan known URLs and major sites. Poll Gmail and/or AgentMail reputation inbox for broker replies and confirmation links; complete safe follow-ups. Ping the user only for hard CAPTCHA or government-ID demands. Send a short status board when something material changes or on the weekly cadence they approved.
