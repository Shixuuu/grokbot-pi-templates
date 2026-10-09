---
name: telnyx-numbers
description: "use this when searching, ordering, assigning, porting, or troubleshooting Telnyx phone numbers and capabilities"
---

# Telnyx numbers (search, order, assign)

Find and buy a DID, then attach it to Messaging or Voice.

## Docs
- Number search: https://developers.telnyx.com/docs/numbers/phone-numbers/number-search.md
- Via https://developers.telnyx.com/llms.txt Numbers section

## Steps
1. Clarify country, local vs toll-free, features (sms, mms, voice).
2. Search GET /v2/available_phone_numbers with filter[country_code]. Review cost_information.
3. Order only numbers from a recent search; follow current order docs.
4. Regulatory docs when blocked.
5. Assign to Messaging Profile or voice app.
6. Porting / reputation are separate flows — use current docs.

## Rules
- Search before order; check cost and features every time.
- Warn about monthly number fees + regulatory holds.
