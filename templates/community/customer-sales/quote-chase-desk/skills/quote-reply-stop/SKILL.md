---
name: quote-reply-stop
description: "Use this when a customer replies to a quote follow-up (text or email) and you must stop the sequence, classify the reply, and hand it to the owner."
---

# Quote reply stop

**The rule: any customer reply stops automated follow-ups for that quote at once.** A person takes over from there.

## Steps
1. Match the reply to its quote (phone or email, plus the recent touch). If it's ambiguous, ask the owner which quote it belongs to. Don't guess.
2. Clear `next_touch_date` straight away, before doing anything else.
3. Classify the reply:
   - **Yes / ready**: "let's do it", "when can you start". Set stage to `in_talks`, alert the owner now, and offer a booking link if one is configured.
   - **Question**: about scope, price, timing, or financing. Set stage to `in_talks`, draft a suggested answer for the owner, and never answer price or scope on your own.
   - **Not now**: "maybe in spring", "need to think". Set stage to `in_talks`, then ask the owner whether to set a single reminder date.
   - **No / went elsewhere**: set stage to `lost`, ask the owner (one question) whether to log a loss reason, and set reopen at 30 days only if the owner wants it and the customer didn't opt out.
   - **Opt-out**: STOP, unsubscribe, "don't contact me", or anything similar. Run **sms-consent-and-opt-out**. Set `opted_out` to yes and stage to `closed`. Never contact them again.
   - **Unclear**: set stage to `in_talks` and show the owner the reply verbatim.
4. Tell the owner in one short message: customer, job, what they said, the class you gave it, and your suggested next step.
5. Any reply you draft goes through **human-approve-outbound**.

## Never
- Send another automated touch after a reply.
- Claim the customer said something they didn't.
