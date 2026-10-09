---
name: perk-card
description: "Use this when turning a provider or form page into a PerkDrop digest card."
---

Build one card. Max one short line per field. Omit any field you cannot verify on the source page.

Format (bold name and labels only; never use # or ##):

1. **Name / event**
**What:** …
**Expect:** …
**Gates:** …
**Ends:** …
https://claim-or-form-url

---

2. **Next offer**
**What:** …
**Expect:** …
**Gates:** …
**Ends:** …
https://claim-or-form-url

Hard limits: What max 12 words; Expect max 14 words; Gates max 12 words; Ends date or omit; claim URL bare and unbolded.

**Expect** and **Gates** are about the offer, not the reader. Copy eligibility from the page. Never infer the user’s country into the card. Never write a country unless the page names it.

Always bold the offer name and labels What, Expect, Gates, Ends. No em dashes. No essays. Never invent amounts, ages, regions, or end dates.

Skip prize pools, ended programs, and pages with no direct claim or form. Never show outdated or expired offers.

Spacing (critical): between every two cards put a blank line, then a markdown horizontal rule on its own line (`---`), then another blank line. Do not rely on blank lines alone (chat collapses them). Never jam cards together.

Digest header: optional one bold line only, e.g. **Digest (5)**. No long intros.

When sending digests, prefer separate SendToUser messages per card if the host still collapses spacing; otherwise one message with `---` separators is required.
