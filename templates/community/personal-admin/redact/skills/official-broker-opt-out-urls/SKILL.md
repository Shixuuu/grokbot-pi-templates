---
name: official-broker-opt-out-urls
description: "Use this when you need official people-search opt-out URLs or to map a listing to its parent family. File once per family. Do not spray CCPA privacy-policy URLs."
---

# Official broker opt-out URLs

CA registry CSV (for lookups, not a spray list): https://cppa.ca.gov/data_broker_registry/registry2025.csv
DROP (California residents only, not a substitute for other states): https://privacy.ca.gov/drop/

Most registry rows are broker-filed CCPA privacy/DSAR URLs, not dedicated `/optout` forms. Start with the priority overlay below. File **once per family**. Do not spray a 500-row catalog.

Optional local files if present: `/workspace/broker-optout-catalog.md`, `/workspace/broker-families.md`. This skill is the source of truth when those files are missing.

## Family map (file the parent, skip the children)

Child domains inherit a parent only when the CA filing listed them together, first-party terms named them, or a live `/opt-out` redirected. Do not assume coverage unless first-party text says so.

**PeopleConnect** — https://suppression.peopleconnect.us/ (email verify)
Covers: Intelius, TruthFinder, Instant Checkmate, USSearch, ZabaSearch.
Does **not** cover Classmates.
Domains: instantcheckmate.com, intelius.com, peopleconnect.us, truthfinder.com, ussearch.com, zabasearch.com

**BeenVerified** — https://www.beenverified.com/app/optout/search
Covers affiliates: peoplelooker, numberguru, ownerly, neighborwho, peoplesmart, bumper, freephonetracer, emailfinder, moneybot5000, reversephone, wingmate.
Use this parent form. Do not fight NeighborWho/Ownerly Cloudflare on their own `/svc/optout` pages from a datacenter.
Domains: beenverified.com, bumper.com, emailfinder.com, freephonetracer.com, moneybot5000.com, neighborwho.com, numberguru.com, ownerly.com, peoplelooker.com, peoplesmart.com, reversephone.com, wingmate.com

**Spokeo** — https://www.spokeo.com/optout
Covers: spokeo.com, freepeopledirectory.com, peoplewin.com (peoplewin `/optout` redirects here).
Does **not** cover That's Them. That's Them is https://thatsthem.com/optout.
Domains: freepeopledirectory.com, peoplewin.com, spokeo.com, thatsthem.com (That's Them separate)

**Mississippi Tornado Alley / FastPeopleSearch cluster** — sibling sites, **separate forms**. One submit does not cover the cluster.
- FastPeopleSearch: https://www.fastpeoplesearch.com/optout (daily removal cap; park until next day)
- USPhoneBook: https://www.usphonebook.com/removal (rejects uncommon email TLDs; recaptcha token dies fast)
- CyberBackgroundChecks: https://www.cyberbackgroundchecks.com/removal (same TLD issue)
- SmartBackgroundChecks: https://www.smartbackgroundchecks.com/optout
- FastBackgroundCheck: https://www.fastbackgroundcheck.com/optout (same daily cap as FastPeopleSearch)
- USAPeopleSearch / AdvancedBackgroundChecks / SearchPeopleFree `/optout` were dead or 404 when last checked
- peoplesearchnow.com/optout is a name search for the surname "Optout", not a removal form. Do not use it.

**TruePeopleSearch** (Free Data Services) — https://www.truepeoplesearch.com/removal
Separate from FamilyTreeNow.

**FamilyTreeNow** — https://www.familytreenow.com/optout

**MyLife** (InsightBridge) — https://www.mylife.com/privacyrequest
Older `/ccpa-optout` is 410. Avoid the `/privacy` marketing funnel.

**Whitepages** — https://www.whitepages.com/suppression-requests (phone voice-code)

**Nuwber** — https://nuwber.com/removal/link

**Radaris** — https://radaris.com/control-privacy
Do not use `/control/privacy` (Privacy Monitor marketing scan). Keep the tracking id.

**ClustrMaps** — https://clustrmaps.com/bl/opt-out (may block datacenter IPs)

**PeopleFinders** — https://www.peoplefinders.com/opt-out

**CheckPeople** — https://checkpeople.com/opt-out (email verify; site has said 5-7 days after complete)

**Infomatics / optOutLight Cloudflare cluster** — park when Turnstile never clears; retry next day. Do not loop.
- Infomatics: privatereports.com, mugshotlook.com, publicsearcher.com (landing https://www.privatereports.com/optOut/name/landing)
- We Inform: weinform.org, truthrecord.org (`/api/helper/optOutLight/search`)
- The People Searchers: peoplesearcher.com, secretinfo.org
- Truth Now: checksecrets.com, peoplesearchusa.org, inmatesearcher.com, sealedrecords.net (dedicated `/opt_out` has redirected to a paid search landing)

## Priority overlay (file these)

Spokeo, That's Them, Whitepages, BeenVerified parent, TruePeopleSearch, FastPeopleSearch, USPhoneBook, CyberBackgroundChecks, SmartBackgroundChecks, FastBackgroundCheck, Radaris, MyLife, PeopleConnect, Nuwber, FamilyTreeNow, PeopleFinders, ClustrMaps, CheckPeople.

Stay on this overlay unless the subject names a site.

## Out of default overlay

Equifax, TransUnion, Experian, LexisNexis, Acxiom, and other credit/risk brokers: only if the subject names them. Use that company's first-party privacy/rights page. Not people-search listing removal.

## Rules

- One authorized subject. Match listings. Never pay. Never email except through the official form.
- Confirmation links: inbox teammate if one exists, otherwise the subject clicks their own mail.
- If a URL 404s, search `[site] official opt-out` or the CA registry rights URL for that domain.
- California DROP is extra for CA residents, not a replacement for these forms.
