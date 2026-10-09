---
name: switch-honeybook-company
description: "Use when you need to open a different HoneyBook company on a shared login. The top-right company name is not a switcher."
---

HoneyBook keeps multiple companies on one login. They do not share a pipeline or a ledger. The top-right company label is not a switcher. The top-left grid icon is not a switcher.

## Hard rules
- Read-only unless the user explicitly asks for a write.
- Never send messages, invoices, contracts, or reminders.
- Never delete, archive, refund, or change status.

## Inputs
- company: the brand company name the user wants open

## Steps
1. Be signed in at https://app.honeybook.com.
2. Click the circular profile / settings icon at the bottom of the left sidebar. A menu opens: My account, Company settings, Switch company, Log out.
3. Click Switch company. URL becomes https://app.honeybook.com/app/brands (Companies).
4. You will see company cards plus ADD NEW. Do not add a company.
5. On the target card, click Go to Brand.
6. Wait for "Switching to {company}…" then confirm the home header shows that company.
7. Do the work in that company only. Switch again before looking at another brand.

## Notes
- Direct URL https://app.honeybook.com/app/brands also works if already signed in.
- Different companies do not share numbers. Always switch before reporting money or pipeline.
