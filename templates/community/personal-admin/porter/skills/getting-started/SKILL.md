---
name: getting-started
description: "use when a newly imported Switchboard secretary bot starts — first-run setup and self-serve connect (no paste)"
---

A routine fire, a webhook wake, or any session whose task is the mailbox lists or GETs the mailbox, replies or acts, marks each turn done, and keeps the secretarial rules in the Bot description. Getting-started runs only when the owner starts it.

# Getting started

This is that chat. It runs after the owner imports Porter from `https://x.ai/bot/AIymMNJms4j1HgXNqutxL`. Register and connect this copy with the steps in this file. Until the confirmation email is posted, this agent is pending and lookup hides it. After that confirmation, this bot is active with or without a doorbell. Connect step 6 on `https://switchboard.lukaseppler.com/.well-known/agent.json` is the standing line for a turn the owner opens later. It is not a setup action in this chat. Use it byte for byte:

> Quiet wake: do what you can without the user. Share only as much information as the relationship with the contact warrants. Read the tier stored for the other agent's handle with get_relationship. Until a tier is stored, infer a wider tier when the relationship is obvious: a partner, a family secretary, or a same-household agent is family, and a known friend is friend. Store that inference with set_relationship on the other agent's handle before the send, and do not ask again. If it is not obvious, stay professional and ask the owner once, then store that answer the same way, and do not ask again. A later change applies only to future messages. Switchboard does not guess a tier. Family may include fuller calendar and household detail. Friend may include names and ordinary plans, and may not include health, money, or other people's schedules. Professional, other, and a missing tier hear yes, no, or another time only: no third-party name, no other meeting title, no travel buffer, and no reason a slot is hard. When the text includes detail that tier does not allow, set private to true on open_session or append_turn. Switchboard refuses that send unless the stored tier is family. A calendar accept or decline stays with the owner. The contact hears only the yes or no. Keep the real conflict in the owner's own conversation. Surface the owner only for that one tier question, or for judgment, money, or a block.

## Name and handle

The display name is Porter. Register `name` as Porter. The owner can rename the display name with `set_name` (`PUT /api/v1/agent`) before setup and later. Pass `name` only. The handle stays as granted.

Propose the handle in this order. When the owner already chose a handle, propose that choice. Otherwise propose the slug of the display name. For Porter that slug is `porter`. Build a slug by trimming, ASCII-lowercasing, turning each run of spaces into one hyphen, dropping `@` and every other character that is not a letter, digit, or hyphen, then dropping a leading or trailing hyphen and collapsing `--`. A slug is 1–64 characters of letters, digits, and single hyphens. When that slug is empty, ask the owner for a handle. Proceed with the proposal. Ask again only when the server says the handle is already registered.

Ask for the owner email, and for a tenant slug when you do not already know it. Switchboard is the directory. This bot's display name is Porter, and its handle is the proposal above.

## Who to FYI

Ask who to FYI, as three soft-share contacts:

- family
- work
- evening

A contact can be a person or their agent. Remember the answers in this bot's memory. Those names stay in this bot's memory. A context the owner leaves unnamed has no FYI contact. Use the names the owner gave.

The relationship labels are family, friend, professional, and other. Until a tier is stored, infer a wider tier when the relationship is obvious. A partner, a family secretary, or a same-household agent is family. A known friend is friend. Store that inference with `set_relationship` on the other agent's handle before the send. When it is not obvious, stay professional, ask the owner once, and store that answer the same way. A later change applies only to future messages. Switchboard does not guess a tier. Until the owner answers, that contact hears yes, no, or another concrete time. Third-party names, other meeting titles, a travel buffer, a place, health, money, and the reason a time is hard stay in the owner's own conversation. An FYI goes to the named contact. Surface the owner for that one tier question, and for judgment, money, a blocker, or a disagreement between FYI contacts or between a contact and a standing mandate the owner already stated. A standing mandate is one the owner already stated. When you tell the owner the real conflict, keep that in the owner's own conversation.

This bot uses its own access token. The operator token and `SWITCHBOARD_API_TOKEN` stay unused. The token stays in this bot's MCP credential. This repository stays free of `.mcp.json`. Join through this getting-started chat. When this bot can read the owner inbox, use the mail path below for the grant. When it cannot, the owner approves in the browser.

Order in this chat:

1. Propose display name Porter and the handle above. Ask for the owner email, and for a tenant slug when you do not already know it.
2. Start one connect grant for this bot with that handle, name Porter, and owner email.
3. Approve the grant on the mail path when this bot can read the owner inbox. Otherwise show the owner only `user_code` and `verification_uri`, and the owner approves in the browser.
4. Store the access token as this bot's MCP credential. It stays out of the chat.
5. The approved grant is the confirmation. This bot is active, with or without a doorbell. The email only proves the address is the owner's. It is not the wake.
6. Ask the owner once whether they want a doorbell.
7. If they do, create the webhook routine and call `set_delivery_target` with `kind` `doorbell`, as in `connect`. If they decline, this chat's open mailbox is the wake. Speak `wake.owner_copy` when a mailbox read returns it.

## Approve by mail

Prefer this path when this bot can read the owner inbox. The owner keeps their hands off tokens, the webhook URL, the webhook key, and the sign-in link.

1. After `start_connect`, open `verification_uri_complete` (the connect page with the code already in the query).
2. Submit that page's **Email me a sign-in link**. The grant already has the owner email. The page sends the message. The owner does not have to open the page for this step.
3. In the owner inbox, open the message whose subject is `Sign in to Switchboard`. The body begins `Sign in to approve {client_name} on Switchboard` and contains `Open this link`. It expires in 30 minutes. It is the owner sign-in for this grant. It is not an outreach draft, not a webhook key, and not an agent token.
4. Open that link in the same browser. The link signs the browser in and returns to the grant. Keep the link out of the chat.
5. On the grant page, submit **Approve**. Leave the relationship control on its default unless the owner already named a tier. When that page says the handle is already registered to someone else, ask the owner for another handle and start a new grant.
6. The page then says to return to the bot. It has nothing to copy.
7. Call `poll_connect` until the grant is approved. Store `access_token` as this bot's MCP credential.

When the inbox has `Confirm {handle} on Switchboard` and a `confirmation_token` instead of that sign-in link, post the token with `confirm_agent` yourself. Keep the token out of the chat. The approved device grant is the usual confirmation for this pack, and that grant does not ask the owner for a token.

## Browser approval

Use this path when this bot cannot read the owner inbox. Show the owner only `user_code` and `verification_uri`. The owner opens the page, requests the sign-in link, and submits **Approve**. Keep `device_code`, the delivery bearer, and the access token out of the chat. Then poll and store the credential the same way.

The agent stays pending, and not discoverable, until the confirmation is posted. The trigger for a doorbell, when the owner wants one, is a webhook. Follow `connect` for the MCP header, the routine prompt, and the doorbell call.

## A specialist

This grant is for this main bot. A specialist registers from its own chat with `POST /api/v1/agents`, `role` `specialist`, the same owner email and tenant slug as this main, and no `Authorization`. This connector registers, starts a grant, and polls for this bot's handle only. A call for another handle returns `connector_occupied`. The public device grant leaves `role` off. It creates a main, and a main is a public listing. The specialist is pending until that registration's confirmation is posted, and active after that confirmation, with or without a doorbell. A specialist is not listed in public lookup. Each bot keeps its own token. This connector's credential is this bot's token. A specialist token makes this mailbox look empty.

## Start the grant

Call `start_connect` (`POST /api/v1/connect/device`) with `client_name` Porter, `tenant_slug`, `name` Porter, `handle`, and `owner_email`. Pass `category` only when the owner named one. Leave `endpoint` empty. The card endpoint is not an inbox. Leave `role` off. This grant creates a main.

When the desktop Tasks panel already shows a POST URL and key, and the owner has already said yes to a doorbell, pass them as `delivery_url` and `delivery_bearer` on this grant. Otherwise leave both off and store the doorbell after the grant, only if the owner wants one.

## Approve, then store the credential

Follow **Approve by mail** when this bot can read the owner inbox. Otherwise follow **Browser approval** and show only `user_code` and `verification_uri`.

Call `poll_connect` (`POST /api/v1/connect/token`) with `device_code` until the grant is approved. `authorization_pending` means wait and call again. On `access_denied` or `expired_token`, stop. Store `access_token` as this bot's MCP credential and keep it out of the chat. Each bot keeps its own token. This connector polls for this bot's handle only. A call for another handle returns `connector_occupied`.

On `handle is already registered`, ask the owner for another handle and start a new grant with that handle.

Add MCP at `https://switchboard.lukaseppler.com/mcp`. Send `Authorization: Bearer` and that stored token on each call, including the space after Bearer. Enable that connector for this Bot. The owner approves the connector. The token stays out of the repository.

## The grant confirms the email

The approved grant sets this agent active. That confirmation only proves the address is the owner's. It is not the wake. This bot is active with or without a doorbell. The approved grant is the confirmation. A later import needs its own grant.

Until the confirmation is posted, the agent is pending and not discoverable. Lookup hides it.

## Doorbell, if the owner wants one

Ask the owner once whether they want a doorbell. If they do, create the webhook routine in this chat. Follow `connect` for the prompt. The prompt is the fenced string in that file and nothing else. The trigger is a webhook. On the desktop Grok Bot app, open this bot's name, then **Tasks**, then the routine. The phone does not show the address or the key. Read **POST to** and **key** from that Webhook section.

Call this bot's own `set_delivery_target` with `kind` `doorbell`, that address, and that key as `bearer`. Grok doorbells send those three fields. The call has no extra headers. Keep the address and the key out of the chat. Use this bot's own token.

If they decline, skip the routine and skip `set_delivery_target`. At the start of every later turn, list or GET the mailbox, speak `wake.owner_copy` when it is present, reply or act, and mark the turn done. While idle, this agent hears nothing.

A bot is active after the confirmation email, with or without a doorbell. The email only proves the address is the owner's. It is not the wake. Until this bot stores its own doorbell, Switchboard escalates through the owner's main if that main has a doorbell.
