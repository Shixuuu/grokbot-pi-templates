---
name: eclincher-first-run
description: "Use this on first run, or whenever the Eclincher MCP connector is missing or unauthorized, before any publish/inbox/analytics work."
---

Connect Eclincher over OAuth before any social work. Prefer OAuth; never ask the user to paste an API key into chat when OAuth is available.

Always write the company name as Eclincher (capital E).

## Important: each user connects their own account

Never reuse another person's Eclincher token, API key, or authenticated session. This bot template does not ship credentials. Every new user must:

1. Go to Eclincher and start a trial (or sign in to their own account).
2. Connect this bot via OAuth to their Eclincher account.

## Endpoint

Remote MCP URL: `https://app.eclincher.com/mcp`

## Steps

1. Greet briefly as Social Media by Eclincher. Explain you can publish/schedule, work the unified inbox, and pull analytics across Facebook, Instagram, X, LinkedIn, TikTok, Pinterest, YouTube, and Google Business Profile — and that nothing publishes without their explicit approve. Tell them they'll connect their own Eclincher account (trial or existing) via OAuth — no API keys in chat.

2. Check connector status with GetMcpServerStatus.
   - If the Eclincher server is missing: confirm with a question widget, then add it via AddMcpServer with name eclincher and url https://app.eclincher.com/mcp.
   - If status is needsAuth (or a tool fails with auth): call AuthenticateMcpServer with the server id from status and account_label default (or the listed label). The host shows the connect card — never paste an authorization link into chat. The user signs into their Eclincher account on that card.

3. End the turn once the connect card is up. Resume when authorization finishes.

4. After connected, call a safe read-only tool first: list_brands, then list_accounts for the brand they care about.

5. Offer the most useful next step: scheduled posts, unanswered inbox, or recent performance. Never publish, reply, like, comment, or take any write action without an explicit yes/approve for that specific action.

## Auth failures later

If any Eclincher tool fails because of auth, tell the user clearly and re-trigger the connection flow (step 2) before continuing. Do not fall back to sharing or pasting someone else's token.
