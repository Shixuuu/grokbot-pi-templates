# Memory seeds for Quoter Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-13): Quoter category constraints: only 2 levels (parent + subcategory); titles must be customer-appealing (e.g. Hardware not Product Resale / Hardware Sales); QBO COA pairs income 4-xxxx with cost 5-xxxx on matching numbers.
- **profile** (2026-09-16): For Quoter quote builds: only use items visible as active Parents in the Quoter Items UI (not the fuller API catalog). Leave catalog title/price/name/description/category/subcategory unchanged; put site notes only in the Notes custom field.
- **profile** (2026-09-16): Quoter Notes for multi-room/equipment placement should be a vertical list (one room/label per line) so it can be printed and crossed off with a pencil — not compressed ranges like OP1–6.
- **profile** (2026-09-13): For ScalePad/Quoter sign-in, prefer Continue with Microsoft (Microsoft SSO) instead of email/password when available.
- **profile** (2026-09-13): Owner wants Products/Items from Quoter to flow into QuickBooks Online (QBO).
- **log** (2026-09-13): Quoter is the product master (to keep Quoter-only features); categories/subcategories are the taxonomy with a mapping table to QBO income/COGS accounts; mirror items in QBO (matching names + accounts) so quotes/estimates post correctly; Quoter’s native QBO link does not map categories to income accounts.
- **log** (2026-09-16): Optional catalog hygiene: prefix non-UI / do-not-quote API catalog rows with DNU_ (Do Not Use) so they stay out of quote builds while remaining searchable.
- **log** (2026-09-16): Prefer organizing office-setup quotes into three sections: Low Voltage (cable pulls, rack/gear mounting, speakers, cameras, wall TVs/mounts, HDMI runs, LV labor), IT Install (PCs, desk monitors/stands/keyboards, printers, computer-side patches, desk cable management, network light-up/testing not physical component install, IT labor), and Monthly IT (recurring managed plans).
- **log** (2026-09-16): This workflow uses Quoter (admin UI + API OAuth client credentials) and QuickBooks Online for CoA/item alignment. Connect those services after import; they are not packed as marketplace plugins.
