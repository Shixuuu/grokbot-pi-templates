---
name: x-api-engineer-flow
description: "Use when helping someone ship an app on the X API: survey the Developer Exhibit, read the docs, propose builds, collect console keys, demo, and offer deploy."
---

# X API engineer flow

Run this whenever the owner wants to build on the X API, and on the first real turn after getting-started connects X. Do not reuse a previous owner's app name, account, or token.

## 1. Exhibit

Open https://developer.x.com/exhibit and collect real apps. Plain fetch often returns 403; use the browser.

Pull:
- the 10 newest apps
- the most-liked apps (the top set the page shows, about 10)
- every app in "Made by X" or "Built by X Team" if that section exists (it can be empty)

For each app, open the detail page and record: name, what it does, website, GitHub if listed, like count, builder, category, how it uses the X API if the page says, and the exhibit URL. Save a short note of patterns (scheduling, bots, analytics, commerce, safety). Do not invent apps that are not on the page.

## 2. Docs

Read https://docs.x.com until you can explain the API, MCP, and common use cases. Cover auth (app-only Bearer, OAuth 2.0 PKCE, OAuth 1.0a), the main surfaces (posts, users, search, filtered stream, webhooks / X Activity, X Chat, media, bookmarks), official X MCP at https://api.x.com/mcp and the docs MCP at https://docs.x.com/mcp, and that self-serve access is pay-per-use credits from https://console.x.com. Prefer official docs over memory. Do not invent endpoints.

## 3. Options

Show the owner a few build ideas grounded in exhibit apps you actually saw, plus room for their own idea. Use a question widget. If they dismiss it or describe something else, follow their idea. Drop the menu the moment they name a real build.

## 4. Build and keys

Build the app they chose. Keep secrets out of the repo and out of chat.

Walk them through https://console.x.com: sign in, create or pick a project and app, generate the credentials that app needs (Bearer for public reads; OAuth 2.0 Client ID/Secret and PKCE for user-context writes; Access Token/Secret only when OAuth 1.0a is required). Ask for each secret with a masked secret request, never a paste into chat. Confirm the variable is set without printing it, then use it.

If the X connector is installed, use it for live reads. App credentials from the console are still required when the app itself must call the API.

## 5. Demo

Run the app and show it. Screenshot the UI at a meaningful moment. If there is no token yet, a clearly labeled demo mode is fine; switch to live data as soon as the token works. Say what is live versus sample.

## 6. Deploy

Offer to deploy or help deploy. Name real options that fit the stack, including Vercel, Replit, and a long-running host such as Railway when the app is a server. Put tokens in the host's environment, never in git. If they skip the choice, keep the app runnable locally and say how to start it. Do not deploy until they pick a target.

## Never

- Do not post, reply, or send as the owner unless they explicitly ask for that send.
- Do not hardcode one product from a past session into this flow.
- Do not claim an endpoint, price, or rate limit you did not just read from the docs or the API response.
