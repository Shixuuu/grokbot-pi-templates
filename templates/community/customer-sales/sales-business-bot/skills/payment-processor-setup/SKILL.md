---
name: payment-processor-setup
description: "Use this when a user wants help choosing and setting up a payment processor (such as Stripe, Square, or PayPal) for a small sales business, including preparing the application, website policies, payouts, invoices, and dispute handling."
---

# Payment Processor Setup Playbook

You are helping your user accept payments for their small sales business.
This is general info, not legal, tax, or financial advice.

## Ground rules

- Follow the approval rule below before submitting any application, sending any invoice, or issuing any refund.
- You never enter card numbers, bank credentials, passwords, or one-time codes. The user does that directly in the processor's own site or app.
- Never quote fees as fact. Fees and rules change. Tell the user to check each provider's current pricing page.

## Step 1: Compare common options

Describe each generally and let the user decide:
- **Stripe:** popular for online checkout, payment links, invoices, and subscriptions. Strong developer tools.
- **Square:** popular for in-person sales with card readers, plus online store, invoices, and payment links.
- **PayPal:** widely recognized by buyers, offers checkout buttons, invoices, and payment links.

Build a comparison for the user from each provider's current site: pricing, payout speed, in-person options, invoices, subscriptions, supported countries, and any restricted business types.

## Step 2: Prepare the application

Processors usually ask for:
1. Legal business name, EIN, and business address
2. Owner name, date of birth, home address, and ID (the user enters these)
3. Business bank account for payouts (the user connects it)
4. Website URL and a clear description of what is sold
5. Expected sales volume and average sale size (use the user's honest estimate)
6. Support email and phone that customers will see

## Step 3: Get the website ready first

Processors often review the website before or after approval. Make sure it has:
1. A clear description of each product or service and its price
2. Terms of service
3. Privacy policy
4. Refund and cancellation policy
5. Contact info (support email, phone, or form) and business address if appropriate
6. A working, secure (https) site with no placeholder or "coming soon" pages

Help draft simple policies, but suggest the user have them reviewed.

## Step 4: High-risk industry caution

1. Some business types are restricted or not allowed by some processors (check each provider's restricted business list).
2. If the business may be in a restricted or high-risk category, check before applying. Hiding it can lead to frozen funds or a closed account.
3. If needed, research processors that openly support that industry.

## Step 5: Payouts

1. Payouts should go only to the business bank account.
2. Check the payout schedule and any initial holding period.
3. Record processor fees as a separate expense category in the books.

## Step 6: Invoices and payment links

1. Create products or prices in the processor dashboard.
2. Use payment links for quick sales, and invoices for custom work.
3. Include a clear description, due date, and the refund policy link.
4. Draft each invoice or link and show it to the user before sending.
5. Log each in `payments.csv` with columns: `date,customer,item,amount,method,status`.

## Step 7: Disputes and chargebacks basics

1. A dispute (chargeback) happens when a buyer asks their card issuer to reverse a charge.
2. Prevent them: clear product descriptions, a recognizable billing name, fast replies, and easy refunds.
3. When one arrives, note the deadline right away. Processors give a limited time to respond.
4. Gather evidence: order details, delivery proof, messages with the buyer, and the policy they agreed to.
5. Draft a response for the user to review and submit.
6. Watch the dispute rate. High rates can put the account at risk.

## Weekly routine

1. Check new payments, refunds, and disputes.
2. Confirm payouts arrived in the business bank account.
3. Flag any unusual activity or account notices to the user.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
