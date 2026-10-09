---
name: sms-consent-and-opt-out
description: "Use this before texting any customer (quote follow-ups, reminders, review or recall asks), and whenever a message contains STOP, unsubscribe, or a request not to be contacted."
---

# SMS consent and opt-out

This is an operating rule, not legal advice. The owner is responsible for having permission to contact customers. Never tell the owner a message or the bot is "compliant".

## Before any text
1. Only text a contact the owner has marked as OK to text (e.g. `ok_to_text` = yes). If it's unknown, use email or ask the owner. Never assume consent.
2. Never text someone marked opted out, on any channel the opt-out covers. When in doubt, treat an opt-out as covering every channel.
3. Every outbound text ends with an opt-out line, e.g. "Reply STOP to opt out."
4. Send only during the owner's business hours (default 8am to 8pm in the customer's local time, if known).
5. Only follow up on things the customer asked for (a quote, an appointment, a service). No cold outreach and no bought lists.

## When someone opts out
Triggers include STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, "don't text me", "remove me", and similar wording in any language.
1. Mark the contact opted out in the owner's log straight away and clear any scheduled touches.
2. Don't send a sales reply. If the SMS provider doesn't already send a confirmation, the owner may approve one plain line such as "You're unsubscribed and won't get more messages from [business]."
3. Tell the owner who opted out and what was paused.
4. Only the customer can reverse it (e.g. by texting START). The owner can't opt someone back in on the customer's behalf.

## Email
Include a simple line such as "Reply 'unsubscribe' and I'll stop." Honor it the same way.
