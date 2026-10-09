# Routine: Contra job sniper

> Every 6 hours, scrape Contra For you jobs, archive new ones in Notion, closed-check open leads, and email a digest only when something changes.

Scrape Contra freelance job listings and archive any new ones. NEVER delete existing rows in the archive.

Open https://contra.com/jobs (For you tab) in the signed-in browser. Extract every visible listing.

THE LISTING URL IS REQUIRED. Cards on /jobs often have no href. Prefer reading the page's embedded Relay/store payload for each job's slug, then verify by opening https://contra.com/opportunity/{slug}. If that fails, click the job title/card (or Apply without filling or submitting) until the address bar is https://contra.com/opportunity/{id}-{slug}. Copy that URL and the 8-char job id. Then go back to /jobs before the next job. Do not Dismiss jobs. Do not Upgrade to Pro. A row without a Listing URL is incomplete.

If you hit a login wall: this is an auth failure. A first failure: tell the user Contra needs a re-login. If the same auth block is recurring, pause this routine and tell the user. Do not keep pinging every run.

Query the Notion database "Contra Jobs". Fetch schema first. Dedup by Job ID or Listing URL (or title+client if those are missing). NEVER delete or archive old leads.

For existing matches: update Last seen, On dashboard, and fill Listing URL / Job ID / Category if those were empty. For new listings: create a row with Name, Client, Budget, Skills, Listing URL, Job ID, Category, First seen (today), Last seen (today), On dashboard checked, Status = New. Put a short description in the page body. If a listing page says the job is completed / no longer accessible, set Status = Closed even on first capture.

{slack_channel_id} (required on every new row): set the multi-select Category from title + skills. Use only these options, and pick every that applies: Branding, UI/UX, Development, Marketing, Video, Sales.
- Branding: brand identity, brand designer, brand strategist, visual identity
- UI/UX: product/UI/UX design, Framer design, web design (visual), Figma-led design
- Development: engineering, iOS/web/app build, Kajabi/Webflow/Framer implementation, no-code build
- Marketing: SEO, email/automation, ads creatives, funnels, Kajabi marketing systems
- Video: video editing, motion, animation
- Sales: SDR, outbound, business development
A job can have more than one (e.g. Framer redesign = UI/UX + Development).

CLOSED-CHECK (required every run): After capturing the current For you listings, query Notion for rows whose Status is not Closed (New, Applied, Passed, or blank). For each of those that has a Listing URL, open that URL. If the page says the job is completed, no longer accessible, taken down, or 404, set Status = Closed and note why. Do not delete the row. Do not change Status if the listing is still live. Skip rows that already have Status = Closed.

Look up Notion tools before writing. Look up Gmail tools before sending email. Do not use Resend.

NOTIFY (when new jobs were added OR any existing open leads were newly marked Closed):
1. Send a chat message with those changes (title, client, budget, skills, category, listing URL, Notion row URL, and whether it is new or now closed), plus the Notion database link.
2. ALSO email the stored Contra alert addresses via Gmail.
   Email MUST include:
   - A clear link to the Notion database at the top
   - NEW jobs in an HTML table with columns: Title, Client, Budget, Skills, Category, Listing, Notion. Title can link to the listing URL. Notion column is the specific Notion page URL for that row, so they can open that lead in Notion.
   - Newly closed jobs in a second simple table or short list, each with listing URL and Notion page URL.
   - htmlBody for the table plus a plain-text body fallback that still includes every Notion and listing URL.
   If Gmail auth fails: a first failure, tell the user in this chat that Gmail needs reconnecting; if the same auth block is recurring, pause this routine and tell the user.

If nothing new and nothing newly closed, stay completely quiet. Do not send an empty email.

This is a standing watch. Do not delete this routine.

Fires on:
- cron `0 */6 * * *`

Ask the importing user for:
- Timezone
- Slack channel id
