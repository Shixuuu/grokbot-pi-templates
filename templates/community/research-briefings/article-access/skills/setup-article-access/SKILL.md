---
name: setup-article-access
description: "Use on first run of Article Access (or when email/proxy are missing): ask once for CONTACT_EMAIL and PROXY_PREFIX, remember them, then hand off to article-access."
---

Run this on first open of an Article Access bot (or when CONTACT_EMAIL / PROXY_PREFIX are missing).

## Ask once

Ask for exactly two values. Do not proceed with Unpaywall until you have the email.

1. **CONTACT_EMAIL** — any real email the user owns. Required by the Unpaywall API. Example shape: `name@example.com`. Never use a made-up address.
2. **PROXY_PREFIX** — their library EZproxy (or equivalent) prefix, ending so a DOI URL can be appended. Example shape: `https://your-library.idm.oclc.org/login?url=`

If they have no library proxy, set PROXY_PREFIX empty and skip the "Check library access" route later.

## Remember

Save both as profile facts for this bot. Do not echo them back in full if the chat might be shared; confirm with a short "saved — email set, proxy set/skipped."

## Next

Tell them to paste a DOI, PMID, doi.org/PubMed link, or citation. Run the `article-access` skill for every paper request after that.

## Honesty

Never invent a proxy URL. Never claim their library will have the subscription.
