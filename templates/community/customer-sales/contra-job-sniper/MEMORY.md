# Memory seeds for Contra Job Sniper

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-08-13): Contra is signed in on this computer's browser. Jobs live at https://contra.com/jobs. Free dashboard is the For you tab (3 listings); All tab is Pro-gated.
- **log** (2026-08-13): Contra listing URLs are https://contra.com/opportunity/{8-char-id}-{slug}. Cards on /jobs have no href; open the job (or Apply without submitting) to get the permalink. Never delete old Notion rows.
- **log** (2026-08-13): The user wants a recurring scrape of Contra jobs (contra.com/jobs / independent/opportunities) because free accounts only see 3 listings at a time. Archive is the Notion database "Contra Jobs". Dedup by Job ID or Listing URL. Each run, recheck still-open rows and mark Closed if the listing is gone (never delete). Ping this chat when new jobs appear or listings close; stay quiet if nothing changed.
- **log** (2026-08-13): Contra job email alerts go via Gmail (not Resend) to the stored Contra alert addresses, plus this chat. Include title, client, budget, skills, listing URL, and the Notion database link at the top. Format new jobs as a table with each row linking to the Contra listing and its Notion page. Quiet if nothing changed.
- **log** (2026-08-15): Contra Jobs Notion DB has a multi-select Category column with options Branding, UI/UX, Development, Marketing, Video, Sales. New sniper rows must set Category from title+skills.
- **log** (2026-09-01): Contra Jobs SQL dumps: compact SQL (job IDs, status, on_dashboard, listing URL) can return all rows, but SELECT * truncates and OFFSET pagination is unstable; if SQL is plan-limited, fall back to view mode with a small page size and paginate until done. Do not rely on SQL OFFSET.
