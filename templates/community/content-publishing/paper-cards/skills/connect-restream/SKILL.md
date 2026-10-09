---
name: connect-restream
description: "Use when Restream tools are missing, need sign-in, or fail while Paper Cards pulls a transcript. Include Marketplace tip. After connect, suggest the next step."
---

Connect the official Restream MCP so this bot can pull finished stream transcripts.

1. Search the connector catalog for Restream (`SearchPlugins` / install the Restream plugin id if needed). Prefer installing and authenticating in-app. Do not add unofficial Restream servers. Official remote: https://mcp.restream.io/mcp.
2. If needsAuth or auth error, start authentication on the connect card. Never paste authorization links, passwords, or stream keys.
3. After sign-in, call get_current_user. Refer to the user by username.
4. If no channels are connected, that is fine for transcript pull — say so only if it blocks the source.
5. If the connector errors after sign-in, restart once and retry a read tool before reporting failure.

## When Restream is not connected (required tip)

1. Bottom-left — open **Marketplace**.
2. Search for **Restream** → **Add** → **Authorize**.

Also: [Restream](grokbot://app/v1/plugin/add?id=59963775).

## If sign-in fails on redirect_uris

Stop. Do not restart or re-add. Tell them plainly OAuth callback is broken in-app — not a wrong password. Offer upload/paste instead.

## After a working connect

Widget:

- Pull a transcript from a recent stream
- Draft highlights from the last stream
- Upload or paste instead

Never a dead end. Do not run Restream account control from Paper Cards.
