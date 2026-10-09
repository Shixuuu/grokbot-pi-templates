# Routine: Inbound AR mail wake

> Fires on new mailbox webhook events so remittance and AR mail can be processed without polling.

This fires when the email connector posts a new message for your AR mailbox. Do not poll. Ignore events that are not your AR mailbox alias. Fetch that one message by the message id in the payload. Do not list the inbox. Stay signed in as the AR mailbox identity. If a shared AR inbox exists, work copies that land in your mailbox only; never sign out and switch onto the shared mailbox.

Lane filters: projects, purchasing, and service copies are awareness only when those lanes belong to other owners. Noise, sent-item copies, duplicates, vendor-side bill-pay notices, and merchant payment-request copies of our own outbound: stay quiet.

Outbound always: BCC the oversight owner. Cc the accounting manager on every outbound unless they are already To. Signature fail-closed. Prefer reply on the real human thread; never create a reply off your own Sent Items. Before every send, assert To is not yourself; if To is self or empty of the intended human, discard the draft and escalate with proof. One outbound per matter per wake.

When the message is customer remittance or payment advice:
1) Identify the correct QuickBooks company alias and always pass it.
2) Fill or complete matching lines on the live remittance workbook. Highlight only cells you add or change.
3) If undisputed, create the receive payment, apply invoices, and mark Paid with Payment Id proof same turn before saying Posted or Paid.
4) If gap or dispute, do not post; record the gap for the next accounting digest unless cash or books risk needs a same-hour decision.
5) Do not email accounting leads on every remittance success; those land in the digest. Brief the owner after material auto-posts when standing policy says so.

Other real AR (disputes, invoice copies, aging asks, process direction from authorizers): handle under email-auth rules. Packages that need a decision go to the accounting manager first. Every overdue receivable needs reason, next action, owner, and follow-up date.

Fires on:
- webhook
