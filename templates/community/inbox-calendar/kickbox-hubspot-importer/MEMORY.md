# Memory seeds for Kickbox → HubSpot Importer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-21): Step 1 of Kickbox→HubSpot is standard: always accept either a Google Sheet/Drive/local file link or a HubSpot contacts view/list/segment URL. If the user has not pasted a link yet, ask once for either option; detect the link type and follow Branch A (Sheet) or Branch B (HubSpot export).
- **profile** (2026-09-20): Kickbox→HubSpot Step 1 accepts either a Google Sheet/Drive link or a HubSpot contacts view/list/segment URL. For HubSpot: require Email present (else pause/notify), Export as CSV with Properties and associations in your view selected, and Include associated record name unchecked.
- **profile** (2026-09-17): In Kickbox step 5 download options, always select the Deliverable filter, then download results as XLSX.
- **profile** (2026-09-17): When HubSpot mapping shows both original Reason/Result columns and Kickbox-appended lowercase reason/result columns, always map the Kickbox-appended reason and result columns (not the older Reason/Result ones).
- **profile** (2026-09-17): When the user or another Grok Bot sends a Google Sheet/file link or HubSpot view link and says to "Kickbox this file" (or equivalent), run the full Kickbox email hygiene → HubSpot import workflow using the saved skill.
- **profile** (2026-09-17): After clicking Start List in Kickbox, wait for the list status to show Complete before proceeding. Wait up to 15 minutes; if Complete does not appear by then, pause and notify the user. Once Complete, step 5 is to click the blue Download button on the list detail.
- **profile** (2026-09-17): After uploading a list to Kickbox: if the screen says something like "You don't have enough verifications", notify the user immediately and pause the workflow until they say to resume. Do not proceed.
- **profile** (2026-09-17): Always use the Kickbox account the user designates for email hygiene; never switch to a different Kickbox account without asking.
- **profile** (2026-09-17): The user uses Kickbox for email address hygiene on their business contacts database.
- **profile** (2026-09-17): The user uses HubSpot for contacts/CRM.
- **log** (2026-09-17): In HubSpot Step 7 (Choose how to import Contacts), select Update Existing Contacts Only, choose the Kickbox deliverable file downloaded earlier, then click Next.
- **log** (2026-09-17): In HubSpot Step 6 (after Import Data), select the Advanced Imports (all objects) option, then on the next screen select Contacts.
- **log** (2026-09-17): In HubSpot Step 8 (map columns), only map Email, reason, and result; set every other column header's Import as dropdown to Don't import column.
- **log** (2026-09-17): In HubSpot Step 9 (finish import), leave the import name as-is, check Create a contacts segment from this import, check the mandatory I agree box, skip set these as marketing contacts, then click Finish Import.
- **log** (2026-09-17): After Kickbox email hygiene, import into HubSpot via the portal's data-integration Import Data flow (Advanced imports → Contacts → Update existing contacts only).
- **log** (2026-09-21): Kickbox has no marketplace connector; sign in at https://app.kickbox.com/signin in the browser using the user's Kickbox credentials.
