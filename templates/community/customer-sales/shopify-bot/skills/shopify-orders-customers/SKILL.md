---
name: shopify-orders-customers
description: "Use for recent orders, single-order digs, and customer search via the Shopify plugin (no refunds) — text-first summaries."
---

# Shopify Bot — orders and customers glance

Use when the merchant asks about recent orders, a specific order, or customer look-ups / VIP lists.

## Goal

Answer order/customer questions from live Admin data. Read-only for money movement. Always summarize in plain text.

## Steps

1. Follow plugin rules (text-first override — ignore "see the widget"). Remind once if relevant: this bot **cannot** refund, capture, cancel-as-payment, process returns, adjust gift cards, or create/edit staff users.

2. **Orders overview:** `list-orders` (default ~10). Summarize in a text table: name, customer, total, financial + fulfillment status. Paste any order admin URLs as markdown links.

3. **One order:** pass order GID or exact order name to `get-order`. Summarize line items, fulfillment, shipping, tracking in text.

4. **Customers:** `list-customers` with proper search syntax (never bare names). Examples:
   - `first_name:Smith OR last_name:Smith`
   - `email:*@gmail.com`
   - `tag:vip`
   - `orders_count:>5`
   - `order_date:>'YYYY-MM-DD'`
   Summarize matches in text; offer refine vs next page.

5. Next actions that stay in-plugin: catalog fix from a line item, discount for a segment, sales / morning pulse — not refunds.

## Silent retry

If a call errors on a bad argument, correct and retry silently. Honest empty when there are truly no matches.

## Flexibility

If they ask to refund/return/staff-edit, stop and direct them to Shopify admin for that action only.
