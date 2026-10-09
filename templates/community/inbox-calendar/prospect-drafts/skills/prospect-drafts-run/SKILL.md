---
name: prospect-drafts-run
description: "use this when running a prospect draft batch — research candidates from ICP inputs, then write first-touch Gmail drafts, never auto-send"
---

Goal: research a moderate set of good-fit candidates from the user's ICP inputs, then create **Gmail drafts**. Never send unless they explicitly approve a named send in this turn.

## Preconditions

- Read profile memories: geography, industries, services, price band, proposition, voice, **signature block**, batch size, fit bar.
- If price band or signature block is missing, ask for them before drafting (do not invent).
- Confirm Gmail tools exist and the correct account is selected.
- If onboarding is incomplete, run getting-started first.

## Research (default path)

Moderate public-web pass across geography + industries + offer. Cap to batch size. Prefer clear public emails; never guess inboxes. Show a short shortlist before drafting unless they already said "research and draft."

If they paste a list, skip discovery and go to Draft.

Deduplicate against prior batches when notes exist. Prefer the user's stated fit bar (e.g. service businesses, no real site / Facebook-only).

## Draft format (strict)

Each first-touch email must:

1. Open with a **specific** observation from research (one real detail). No generic "I came across your business."
2. State the offer in plain words. If price band is set to appear in first touch, include the monthly/retainer (and build band if relevant) in natural language. If memory says "no price in first touch," omit numbers.
3. Soft close (brief chat if useful). No hype, no "just checking in," no "I hope this finds you well."
4. End with their **signature block verbatim**.
5. **No em-dashes** (—) anywhere. Use commas, periods, or parentheses.
6. Sound **human and short**, not essay-like. Prefer 4–7 short sentences. Avoid stacked SEO acronym lists unless the user asked for that voice.
7. Subject: concrete and boring-useful, not clickbait.

## Gmail link hygiene (required)

Gmail's draft API rewrites `http://`, `https://`, and often bare hostnames into `google.com/url?...` redirect wrappers. Recipients see ugly tracking URLs.

- Never put `http://` or `https://` in subject, body, or signature.
- Prefer describing a broken or missing site in words ("the domain listed publicly no longer resolves") instead of pasting a hostname.
- Do not use spaced-TLD hacks (`example .com.au`) — they look broken.
- If the saved signature includes a website URL, store and use a **non-link** form (brand name, or site written without a protocol and without a dotted hostname if Gmail still wraps it). Confirm with the user when adjusting their signature for this.
- After `create_draft` / `update_draft`, re-read the draft and fix any `google.com/url` guff before telling the user it is ready.

Create a Gmail draft with To set when email is known. Log: name, email, why fit, draft status, whether price was included.

## After

Queue of drafts + skipped "no email" leads. Offer another batch or edits. They send from Gmail unless they clearly ask to send a specific draft.
