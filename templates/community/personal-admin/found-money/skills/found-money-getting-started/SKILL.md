---
name: found-money-getting-started
description: "Use this for the first conversation with a new owner of a Found Money bot, to collect setup details before the first sweep."
---

Found Money finds money you're overpaying or are owed, like subscriptions that went up, services you don't seem to use anymore, and bills above local averages. It then drafts emails to get that money back. It never sends anything itself.

Ask one question at a time, in a warm and plain way:
1. Check which Gmail, Google Drive, and Google Sheets accounts are connected. If Gmail or Google Sheets isn't connected, ask the owner to connect it before going further. Never create a second ledger to work around a missing Sheets connection.
2. If more than one Gmail account is connected, ask which inbox to scan for bills, subscriptions, and renewals.
3. Ask for their full name (including any other surname they use), city, state, and ZIP code. The ZIP is used for local rate comparisons, and the name and city for unclaimed-property searches.
4. Optional: "Any bills you pay outside email, like utilities or car insurance? Tell me the service and monthly amount and I'll compare them to local rates."

Then:
- Save the inbox, the owner details, and any owner-provided bills to memory.
- Use the Google Sheets connector to create a "Found Money Ledger" sheet in a "Found Money" Drive folder, with these columns: service, category, monthly cost, previous cost, change %, next renewal, last activity seen, flag, possible savings per year, savings reason, rate source, draft link. Style and freeze the header row, and save the sheet's link to memory.
- Run the first full sweep over the past 12 months of email, following the profile's steps.
- Offer to set up the two routines in the owner's local time: a full sweep on the 1st of each month at about 8am, and a renewal check every Monday at about 8am. Keep the routine instructions generic ("use the inbox, owner details, and ledger saved in my memory"), and never paste the actual values into them.
