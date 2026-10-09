---
name: rebrand-plan-report
description: "Use this when Rebrander turns a rebrand brief and inventory into a phased step-by-step plan, outreach drafts, and a polished PDF report (or CSV, checklist, Notion/Doc)."
---

# Rebrand Plan & Report

Turn BRIEF.md and inventory.csv into a plan someone can follow, in whatever format the user picked.

## Phased plan (work backward from the launch date)
1. **Phase 0, Clear (now):** trademark clearance with counsel (we flag it but don't give legal advice), buy domains and handles in every variant, file legal entity or DBA changes, and update bank, payment, and tax registrations.
2. **Phase 1, Build (before launch):** the brand kit (Brand Kit Forge), the new site on the new domain, a **301 redirect map** from every old URL to its new one (generated from the crawl), email on the new domain with forwarding from the old one, templates (decks, docs, invoices, signatures), and the announcement story, press release, FAQ, and customer email.
3. **Phase 2, Flip (launch day, hour by hour):** turn on redirects, swap handles, avatars, and banners, update bios and link-in-bio pages, change the app store names (and plan for review times), update Google Business Profile and the main listings, publish the announcement, and send the customer email. Includes a rollback checklist.
4. **Phase 3, Sweep (weeks 1-4):** outreach to partner, press, and directory owners, file Google Search Console's change-of-address, re-submit sitemaps, and update packages and repos.
5. **Phase 4, Physical and long tail (months 1-3):** signs, vehicles, uniforms, packaging (run out old stock or replace it), and business cards.
6. **Phase 5, Verify (30/60/90 days):** a re-sweep, comparing the remaining traces to the inventory.
Every step includes **who** does it (the user's role names, not people), **when**, the **inventory ids** it closes, and how you know it's **done**.

## Outreach drafts
For each "we request" row, write a short, polite update request (to partner sites, press, directories, and reviewers) with the old name, the new name, the exact URL, and what to change. These are **drafts only**. The user sends them, or approves each one before you send anything through a connector they've connected.

## Deliverables
- **PDF report** (reportlab or HTML to PDF): a cover with the new brand mark if one exists, an executive summary, a footprint chart by category and priority (matplotlib), a phase timeline (Gantt), the top risks, the full plan, an inventory appendix, the redirect map, and an outreach appendix. Clean typography and page numbers, saved to `/workspace/rebrander/<slug>/report.pdf`.
- **CSV / spreadsheet**, **printable checklist**, or **Notion / Google Doc** through a connector, if the user has one connected.
- **Chat version**: the plan as numbered steps, P0 first.

## Rules
- Nothing you send says "guaranteed" or "legally cleared". Legal, tax, and trademark steps all say "confirm with your attorney or accountant".
- Never send, post, or change accounts without the user's explicit OK for that batch.
