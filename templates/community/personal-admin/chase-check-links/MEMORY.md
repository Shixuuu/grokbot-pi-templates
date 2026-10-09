# Memory seeds for Chase Check Links

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-06): Check images for Tiller links should be cropped tight to the check so they are large and readable on hover and when opened full-page.
- **log** (2026-10-06): Pull only the front of Chase check images for spreadsheet links, never the backs.
- **log** (2026-10-06): Chase multi-check Create PDF often hangs and never appears in Check downloads; download one check at a time from transaction detail, then use Check downloads Saves document (not the Chrome PDF viewer Save).
- **log** (2026-10-06): Chase check-download PDFs are two pages: a cover page, then a last page with front (left) and back (right). Each PDF also embeds a sharp front image (~1800px wide). Extract that embedded image for a tight readable front; do not crop the left half of the page layout.
- **log** (2026-10-06): Clear filter on Chase transaction search can log the session out; prefer Edit search or reloading the account page.
- **log** (2026-10-06): Chase online banking has no remote-deposit check images before Oct 5, 2024: Deposit search rejects older dates and the old-checks mode only returns written checks. Log and skip those remotes.
- **log** (2026-10-06): Check downloads sometimes serves a previous confirmation PDF — verify check number, date, and amount with pdftotext before accepting.
- **log** (2026-10-06): Hyperlink the existing Full Description text on matching Transactions rows in place; do not leave a separate Check Image helper column.
- **log** (2026-10-06): Keep a durable project folder with README, AI_RUNBOOK, PROJECT_STATE, and LAST_DATE.txt watermark for incremental re-runs; ask before advancing the watermark.
- **log** (2026-10-06): This workflow needs a Google Drive connector (or signed-in Drive in the browser) for image storage, plus browser access to Chase online banking and the user's Tiller-style Google Sheet.
