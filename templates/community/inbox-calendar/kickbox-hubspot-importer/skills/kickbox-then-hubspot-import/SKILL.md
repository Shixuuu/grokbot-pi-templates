---
name: kickbox-then-hubspot-import
description: "Use when the user or another Grok Bot wants email hygiene on contacts — accept either a Google Sheet/file link or a HubSpot contacts view/list/segment link, run Kickbox, then import Deliverable results into HubSpot as Update existing contacts only."
---

# Kickbox email hygiene → HubSpot import

## When to run
Run this end-to-end whenever the user or another Grok Bot directs you to **Kickbox this file** (or equivalent wording), or asks to clean contacts before a HubSpot update.

## Accounts
- **Kickbox:** use the Kickbox account the user designates. If an account picker appears, choose that account only.
- **HubSpot:** use the user's HubSpot portal (ask once for the portal if not already known).

## Inputs
- `{source_link}` — one of:
  - a Google Sheet / Drive link (or a local file path already on disk), **or**
  - a HubSpot contacts view, list, or segment URL

## Step 1 — Get the source file (standard prompt)
**Always treat Step 1 as accepting either source.** If the user has not already pasted a link, ask them (once, clearly) to paste **either**:
- a **Google Sheet** (or Drive / local file) link, **or**
- a **HubSpot contacts view, list, or segment** link

Do not require them to pick a branch by name; detect which kind of link they pasted, then follow the matching branch. End this step with a local CSV or XLSX path ready for Kickbox upload.

### Branch A — Google Sheet / Drive / local file
1. Download `{source_link}` from Google Drive (export Sheet as `.xlsx` when needed), or use the local path if already on disk.
2. Keep the local path for Kickbox upload.

### Branch B — HubSpot contacts view / list / segment
1. Open the HubSpot URL in the browser. Confirm it is a **contacts** table (not companies/deals/etc.).
2. **Email check:** Confirm an **Email** column/property is present in the view (visible in the table or in the columns for this view). If Email is **not** present, **pause and notify the user immediately**. Do not export or continue until they fix the view or tell you how to proceed.
3. Click **Export** on that page.
4. In the Export dialog, set options to match this configuration:
   - **File format:** CSV
   - **Language of column headers:** English (leave as default unless told otherwise)
   - **Properties included in export:** select **Properties and associations in your view** (do **not** choose "All properties on records" or "All properties and all associations on records")
   - **Associations included in export:** ensure **Include associated record name** is **unchecked**. If it is checked, uncheck it.
   - Leave other association radio defaults as shown unless they conflict with the above (prefer the lighter "up to 1,000 associated records…" option over "all associated records" when both appear).
5. Confirm/start the export and download the CSV to the computer.
6. If the export is async/emailed or takes a long time, wait a reasonable period; if the file never arrives, **pause and notify** the user.
7. Keep the local CSV path for Kickbox upload.

## Step 2 — Sign in to Kickbox
1. Open `https://app.kickbox.com/signin` (or `https://kickbox.com/` → sign in).
2. Sign in with the user's Kickbox credentials (1Password / in-chat form / desktop handoff as available).
3. If an account picker appears, choose the account the user designated.
4. Land on the verify dashboard (e.g. `/accounts/.../verify/dashboard`).

## Step 3 — Upload the list
1. From the Dashboard, click the blue **Upload List** button.
2. Upload the file from Step 1.
3. Confirm the list appears under Ready (address count shown).
4. **Pause rule:** If Kickbox shows anything like **You don't have enough verifications** / not enough credits, **notify the user immediately and pause** until they say to resume. Do not proceed.

## Step 4 — Start verification
1. Click the blue **Start List** / **START LIST** button for that list.
2. Same pause rule as Step 3 if a not-enough-verifications message appears.

## Wait for Complete
1. Wait until the list status shows **Complete**.
2. This can take a few minutes. Wait **up to 15 minutes**.
3. If **Complete** does not appear within 15 minutes, **pause and notify** the user. Do not continue.

## Step 5 — Download deliverable results
1. On the Lists page under Ready & Complete, open the list via the **right-arrow** on that row.
2. Click blue **Download** (never Delete).
3. In download options, always select **Deliverable**, then **Download results as XLSX**.
4. Save the downloaded file path for HubSpot (often under Downloads, name like `deliverable-filtered-...xlsx`).

## Step 6 — Start HubSpot import
1. Go to the HubSpot data-integration home for the user's portal (`https://app.hubspot.com/data-integration-home/{portal_id}/`).
2. Confirm the correct HubSpot account / portal.
3. Click **Import data**.
4. Choose **Advanced imports (all objects)**.
5. Select **Contacts**.
6. Click **Next**.

## Step 7 — Upload file & import mode
1. Under "Choose how to import Contacts", select **Update existing contacts only**.
2. Under Contacts file, **choose a file** and select the Kickbox deliverable from Step 5.
3. Click **Next**.

## Step 8 — Map columns
Map **only**:
- `Email` → Contact properties → **Email**
- `result` → Contact properties → **Result** (Kickbox-appended lowercase `result`)
- `reason` → Contact properties → **Reason** (Kickbox-appended lowercase `reason`)

Leave **Don't overwrite** unchecked on those three.

For **every other** column header, set **Import as** → **Don't import column**.

**Conflict rule:** The source file may already have Reason/Result columns; Kickbox appends its own `reason` / `result`. **Always map the Kickbox-appended lowercase columns**, not the older Reason/Result ones.

Clear any mapping errors by not importing those columns. Click **Next** when clean.

## Step 9 — Finish import
1. Leave the **import name** text as-is.
2. Check **Create a contacts segment from this import**.
3. Check the mandatory **I agree…** box.
4. **Skip** / leave unchecked **Set these as marketing contacts**.
5. Click **Finish import**.
6. Confirm success (e.g. "Import completed with no errors") and report the import name + result to the user.

## Reporting
After a full run, tell the user: source type used (Sheet vs HubSpot export), Kickbox results summary if visible (deliverable/risky/undeliverable counts), HubSpot import confirmation, and any pause/blocker.

## Do not
- Switch Kickbox accounts without the user asking
- Export or continue from a HubSpot view that has no Email field — pause and notify instead
- Continue past credit/verification shortages without user approval
- Map columns other than Email / reason / result
- Set imported contacts as marketing contacts unless the user later changes this rule
