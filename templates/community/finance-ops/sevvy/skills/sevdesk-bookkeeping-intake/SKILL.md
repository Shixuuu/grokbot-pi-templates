---
name: sevdesk-bookkeeping-intake
description: "Use this for sevdesk bookkeeping intake and first-run setup: ask which receipt sources to connect, then weekly match bank txs, book clear business items, delete clear private spend, accumulate unsure rows, table digests."
---

# sevdesk bookkeeping intake

Incremental bookkeeping for freelancers and solo founders who keep their books in **sevdesk**.

One mode only: intake since the last run. No year-long backfill in this skill.

After every classification answer from the user, update portable category rules only when they generalize; put person-specific merchants in agent memory.

## First-run setup (required before intake)
If agent memory does **not** yet list configured receipt sources, bank accounts, and tax regime, stop and ask — do not assume Gmail, Drive, Proton, or any other provider.

Ask in plain language, for example:
1. **Which receipt data sources should we use?** (common options: Gmail, Google Drive folders, Outlook, other mail, local uploads — accept niche sources like Proton only if the user names them)
2. **Which sevdesk bank accounts are business?**
3. **Tax regime?** (e.g. Kleinunternehmer §19 vs regular VAT)

Then connect or authenticate each chosen source (marketplace connectors when available; browser or uploads for the rest). Save the answers in agent memory. Only after that run intake.

On later runs: use the sources already stored in memory. If a source fails auth, ask to reconnect that one — do not silently switch to a different provider.

## When to use
- First message after import / “set up bookkeeping”
- User asks to run bookkeeping / Belege / sevdesk intake
- The weekly intake routine fires
- User answers an open question from a prior intake

## Preconditions
- sevdesk connector connected (see the sevdesk MCP skill)
- Receipt sources and bank accounts recorded in memory (or setup completed above)
- Open questions live in a workspace JSON queue (e.g. `sevdesk-intake-open.json`) with `last_intake` cursor beside or inside it

## Lookback
- Window = since `last_intake` (about **7 days** for a Monday routine)
- Do not use a fixed 14-day fallback
- If `last_intake` is missing: since previous Monday 00:00 local time
- Unsure backlog may be older than the window

## Default classification (customize per user)
### Usually private → delete the bank tx (no ask once confirmed)
Category examples, not a fixed vendor list:
- **Groceries and everyday food** (supermarkets, bakeries, cafés, meal delivery)
- **Consumer / entertainment software** (social apps, streaming, personal media)
- **Personal shopping** (fashion, household retail, gifts)
- **Peer transfers** to/from friends and family
- **Wallet top-ups** from a business account onto a personal prepaid/wallet account (internal transfer)
- **Personal payment apps** when the purpose is clearly private

### Usually business → book when identifiable
- **Business SaaS and tools** (IDE, design, hosting, domains, AI APIs, productivity)
- **Coworking, business travel, professional services**
- **Client income** matched to known contacts

### Ask when unsure
- Ambiguous personal vs business
- Unknown inflow
- Material business-looking tx with no merchant match and no receipt
- Candidate for a new standing rule

Learn from feedback: once the user says “always private” or “always business” for a merchant, store it in memory and apply next time without asking.

## Booking
Follow the sevdesk MCP skill. Confirm tax regime once. PDF optional when bank + merchant are clear.

## Pipeline
1. Ensure setup memory exists (else run First-run setup)
2. Load `last_intake` + Unsure queue
3. Unmatched bank txs in the window
4. Pull receipts from **whatever sources the user configured**
5. Match, apply rules, book or delete
6. Merge new Unsure rows; keep unanswered backlog
7. Digest in markdown tables (Expenses | Income | Private deleted | Unsure with “open since”)
8. Stay quiet only if nothing changed and the Unsure queue is empty

## Digest columns
- Expenses: merchant | amount | PDF | status
- Income: customer | customer no. | vouchers
- Private deleted: merchant | amount
- Unsure: tx | amount | question | open since

## Out of scope
Tax returns (EÜR/ELSTER), inventing invoices, assuming niche mail providers the user never named, period backfill, treating dashboard demo data as real revenue

## Style
Match the user’s language (default English for a new import). Act when clear. Never invent amounts, PDFs, or identities.
