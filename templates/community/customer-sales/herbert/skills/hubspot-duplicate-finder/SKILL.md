---
name: hubspot-duplicate-finder
description: "Use this when asked to find duplicate contacts, companies, or deals in one HubSpot portal, or when \"clean this up\" means duplicate records. It lists likely duplicates with record links and a suggested survivor, and never merges without an exact per-pair go-ahead."
---

# HubSpot duplicate finder

Lists likely duplicate records in one HubSpot portal so a human can decide what to merge. Find first, merge only on an exact per-pair go-ahead. A wrong merge quietly destroys history and can't be undone, so when in doubt, report the pair instead of merging it.

Whoever owns the portal runs this: the agency's CRM owner for the agency's own portal, and the client-portal operator for client portals. The skill is the same either way.

## Inputs (fill per run)
- `portal_id` and a read path (private app token env var, `hs` CLI account, or connector).
- `objects`: any of contacts, companies, deals (default: all three).
- `scope`: optional filter (a pipeline, an owner, records created since a date, or specific names someone already flagged).

## Steps
1. **Prove access, read-only.** Make one cheap read. If it fails, stop and report the exact error.
2. **Pull candidates.** Page through each object in scope with the fields matching needs: contacts (email, `hs_additional_emails`, first/last name, phone, company, associated company, create date, last activity), companies (name, domain, create date, number of associated contacts and deals), deals (name, pipeline, stage, amount, close date, owner, create date, associated company and contacts).
3. **Match.**
   - Contacts: same email ignoring case, one's email in the other's additional emails, or same full name at the same company domain. Same phone plus same last name is a Likely, not a Sure.
   - Companies: same root domain (ignore `www.` and trailing paths), or the same name after normalizing (drop Inc/LLC/Corp, punctuation, case). Skip free-mail domains such as gmail.com, outlook.com, and yahoo.com.
   - Deals: two open deals on the same company or the same primary contact in the same pipeline with the same or near-identical name, or created within 14 days of each other with a similar amount.
4. **Exclude what only looks alike.** Leave out renewal or upsell deals next to a closed-won original, deals in different pipelines on purpose, parent and child companies, shared inboxes like info@ or sales@, and anyone whose records differ in a way that suggests two real people or two real deals.
5. **Tier each pair.** Sure (same email, same domain, or same deal written twice), Likely (strong but not exact), or Looks similar (report only, never merge).
6. **Suggest a survivor.** Prefer the record with more associations and activity, an assigned owner, a later deal stage or closed-won history, then the older create date. Say what the other record holds that the survivor lacks (notes, associations, property values), so nothing is lost in the merge.

## Output
One report per portal, grouped by object and tier. Each pair gets both record names with HubSpot record URLs, the match reason with the actual matching values, the suggested survivor, and anything the merge would drop or overwrite. End with counts per tier and whatever limited the scan (objects not readable, fields empty, pages skipped). If nothing turned up, say "scanned N contacts, N companies, N deals, no duplicates."

## Merging (only when told, one pair at a time)
- Merge only on an explicit per-pair go-ahead from the operator that names both records and the portal, for example `MERGE <record id> INTO <survivor id> ON <portal>`. "Yes", "clean them up", or "do them all" is not consent.
- Before merging, capture both records' key properties and associations in the run notes. Then merge with the portal's merge endpoint or UI, re-fetch the survivor, and confirm the associations carried over.
- Treat every merge as irreversible.

## Never
- Never merge a Looks-similar pair, or anything without a per-pair go-ahead.
- Never delete records as a substitute for merging.
- Never match across two different portals or clients.
- Never edit properties to make records match.
- Never make this a routine until a human has reviewed at least one manual run and said yes.
