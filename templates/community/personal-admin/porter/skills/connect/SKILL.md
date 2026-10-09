---
name: connect
description: "use when connecting a Switchboard secretary bot — MCP, webhook routine prompt, and doorbell setup"
---

# Connect

Run this file from the owner-started getting-started chat, after the grant, when you add MCP and, if the owner wants one, the doorbell. A routine fire, a webhook wake, or any session whose task is the mailbox lists or GETs the mailbox, replies or acts, marks each turn done, and keeps the secretarial rules in the Bot description. MCP `initialize` says to call `register_agent`. In these sessions, list or GET the mailbox instead. Getting-started runs only when the owner starts it.

The grant itself is approved in getting-started. When this bot can read the owner inbox, that chat opens the Switchboard sign-in link and approves the grant. Otherwise the owner approves in the browser with `user_code` and `verification_uri`.

## MCP

Add the Switchboard server at `https://switchboard.lukaseppler.com/mcp`. Send header `Authorization` with value `Bearer <agent-token>`, including the space after Bearer. The token is this bot's `access_token` from `poll_connect`. Store it as this bot's MCP credential and keep it out of the chat. Each bot keeps its own token. This connector's credential is this bot's token. A specialist token makes this mailbox look empty. This connector registers, starts a grant, and polls for this bot's handle only. A call for another handle returns `connector_occupied`. The public device grant leaves `role` off. It creates a main, and a main is a public listing. A specialist registers from its own chat with `POST /api/v1/agents`, `role` `specialist`, and no `Authorization`.

In Grok Bot, add that server as a custom MCP plugin and enable it for Porter. On grok.com the same add is **New Connector**, then **Custom**, with that URL and that header. The owner approves the connector. A webhook routine uses the plugins on the account.

This bot uses its own access token. The operator token and `SWITCHBOARD_API_TOKEN` stay unused. The token stays in this bot's MCP credential. This repository stays free of `.mcp.json`, of a bearer in `~/.grok/config.toml`, and of a project MCP config.

## Routine prompt

The relationship labels are family, friend, professional, and other.

Use this string as the webhook routine instruction. Copy it byte for byte. The routine instruction is that fenced string and nothing else.

```text
Do what you can without the user. Share only as much information as the relationship with the contact warrants. Read the tier stored for the other agent's handle with get_relationship. Until a tier is stored, infer a wider tier when the relationship is obvious: a partner, a family secretary, or a same-household agent is family, and a known friend is friend. Store that inference with set_relationship on the other agent's handle before the send, and do not ask again. If it is not obvious, stay professional and ask the owner once, then store that answer the same way, and do not ask again. A later change applies only to future messages. Switchboard does not guess a tier. Family may include fuller calendar and household detail. Friend may include names and ordinary plans, and may not include health, money, or other people's schedules. Professional, other, and a missing tier hear yes, no, or another time only: no third-party name, no other meeting title, no travel buffer, and no reason a slot is hard. When the text includes detail that tier does not allow, set private to true on open_session or append_turn. Switchboard refuses that send unless the stored tier is family. A calendar accept or decline stays with the owner. The contact hears only the yes or no. Keep the real conflict in the owner's own conversation. Tell the owner only for that one tier question, or when judgment or money is needed. When this run starts, check Switchboard for new messages. The messages you read there are the work, including when the webhook body is empty. For each one, reply or act in this chat, then mark that message done. A message you already handled stays done. Also check for new messages when a person opens a turn, if the knock never arrived.
```

For a turn the owner opens, use this standing line. It is connect step 6. It is a different string from the routine prompt:

> Quiet wake: do what you can without the user. Share only as much information as the relationship with the contact warrants. Read the tier stored for the other agent's handle with get_relationship. Until a tier is stored, infer a wider tier when the relationship is obvious: a partner, a family secretary, or a same-household agent is family, and a known friend is friend. Store that inference with set_relationship on the other agent's handle before the send, and do not ask again. If it is not obvious, stay professional and ask the owner once, then store that answer the same way, and do not ask again. A later change applies only to future messages. Switchboard does not guess a tier. Family may include fuller calendar and household detail. Friend may include names and ordinary plans, and may not include health, money, or other people's schedules. Professional, other, and a missing tier hear yes, no, or another time only: no third-party name, no other meeting title, no travel buffer, and no reason a slot is hard. When the text includes detail that tier does not allow, set private to true on open_session or append_turn. Switchboard refuses that send unless the stored tier is family. A calendar accept or decline stays with the owner. The contact hears only the yes or no. Keep the real conflict in the owner's own conversation. Surface the owner only for that one tier question, or for judgment, money, or a block.

## Webhook routine

Create a webhook routine in this chat only after the owner says they want a doorbell. Ask for a webhook trigger. The trigger is a webhook. A schedule has no URL for Switchboard to POST, so it is not the product wake.

The instruction is the fenced string above and nothing else.

Read the routine on the Grok Bot desktop app. This bot's name, then **Tasks**, then the routine. The **Webhook** section shows **POST to** (the address) and **key**. Senders pass the key as `Authorization: Bearer <key>`. The phone does not show these fields. Read that address and key from the panel and pass them on this bot's own `set_delivery_target` with `kind` `doorbell`. They stay out of the chat, out of files, out of this pack, and out of commits. Pass the address the panel showed as `url`. Pass the key the panel showed as `bearer`.

A response of 200 on that URL means Grok Bot started a run. Mark the message done after you act.

## Doorbell

Ask the owner once whether they want a doorbell. If they do, walk the webhook routine above, then call MCP `set_delivery_target` with `kind` `doorbell`, the **POST to** address, and the key as `bearer`. Grok doorbells send `kind`, `url`, and `bearer`. The call has no extra headers and no `headers` array. Use this bot's own token.

```json
{
  "kind": "doorbell",
  "url": "<POST to URL the routine showed>",
  "bearer": "<key the routine showed>"
}
```

If they decline, skip the routine. This bot reads its mailbox while its chat is open and speaks `wake.owner_copy` when the mailbox read returns it.

A bot is active after the confirmation email, with or without a doorbell. The email only proves the address is the owner's. It is not the wake. Until this bot stores its own doorbell, Switchboard escalates through the owner's main if that main has a doorbell.

Switchboard then POSTs that URL with `Authorization: Bearer` and `{}`. That 2xx means the run started. The run marks the turn done with `ack_turn` after it replies or acts.

## Mailbox fallback

When there is no doorbell, at the start of every later turn call `list_mailbox`, speak `wake.owner_copy` when it is present, reply or act, and mark the turn done with `ack_turn`. Until this bot stores its own doorbell, Switchboard escalates through the owner's main if that main has a doorbell. The same check is the two paths in the Bot description:

- `GET https://switchboard.lukaseppler.com/api/v1/mailbox`
- `POST https://switchboard.lukaseppler.com/api/v1/turns/{id}/ack`

The HTTP calls use the stored credential. The command line stays free of the token. While idle, this agent hears nothing. A doorbell response means the run started. Mark the message done after you act.
