---
name: prior-deed-lead-email
description: "use this when drafting a free “here’s your public deed” credibility email to a named unpaid checkout lead (deed PDF + plain-English note + finish link; not a title opinion)"
---

# Prior-deed lead email

## What this is (for non–title people)
Someone completed your online order form, typed a property address, then abandoned before checkout. This email gives them something useful for free: a copy of the latest **deed** (the official recorded ownership document) from the public land records, plus a short plain-English explanation of what that page shows. Goal: prove you’re a real local service and nudge them to finish checkout. This is **not** a lawyer letter and **not** a full title search.

## When
Named unpaid lead who completed an order form (abandoned before checkout / no payment) and provided a property address.

## Locked rules
1. Frame: public record for the address **they** entered on the form. Do **not** say “not a private investigation.”
2. Always include a short **read** with the file — never send a PDF with no explanation. Cover: who the deed says owns the property; any mortgage/security interest visible on that same image; which deed type their form intent usually needs (without guaranteeing it’s perfect).
3. Say once, up front, that this lookup is free. Disclaimer: this is only the recorded deed on file — not a lien search or full ownership exam (that’s the paid order).
4. Put the business phone **before** asking them to finish checkout.
5. Near the price: say you prepare the deed documents and record them in their county.
6. Footer: physical business address. Omit unsubscribe unless a real preferences page exists.
7. Gmail Drafts: **plain text only** (no HTML body). Always **attach the PDF**. Gmail may wrap links as google.com/url — the owner can re-paste clean checkout URLs before send.

## Do not
- Stack on other abandon automations without the owner’s okay for that lead.
- Send external mail without the owner’s yes.
- Claim you “already searched title” or guarantee outcomes.
- Use “private investigation.”
- Repeat “free / no charge” next to the paid ask — once up front is enough.

## Placeholders
| Token | Meaning |
|---|---|
| `{{first}}` | first name |
| `{{property}}` | full street, city, state zip |
| `{{short_address}}` | street only (for the subject) |
| `{{read_vesting}}` | 1–2 sentences: who the deed shows as owner, and how they hold it |
| `{{read_extra}}` | Optional: mortgage/security interest on the same image, or omit |
| `{{read_recommend}}` | 1 sentence tying their form intent to a common deed type, without guaranteeing fit |
| `{{finish_url}}` | checkout / resume URL |
| `{{phone}}` | business phone |
| `{{price}}` | paid order price |
| `{{office_address}}` | physical office for the footer |

## Subject
`Your current deed for {{short_address}}`

## From
Team orders inbox preferred. Sign as the product owner / examiner. Cc the owner on drafts.

## Attachments
Recorded deed image (PDF) — **required**. Filename: `prior-deed-{{short-address-slug}}.pdf`

## Sample reads (tone)
- Owner: “The latest deed shows title in **Jane Doe**, as sole owner.”
- Mortgage note: “That same image shows an open security deed to **Bank Name** — common when there’s still a mortgage; a transfer can often still proceed, but the lender’s interest stays on record until released.”
- Recommend: “Based on what you started on the form, a **quitclaim deed** is usually used for an owner-to-owner or add-a-person transfer like this — we’ll confirm on the paid order.”
