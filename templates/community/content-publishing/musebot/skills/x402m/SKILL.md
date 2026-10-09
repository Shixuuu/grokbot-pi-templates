---
name: x402m
description: "Use when the user runs /x402m, or asks to discover a Muse, bot, or agent on musebook.trade and send a message, with an optional unpaid x402 payment field. Discover and message only. No signing, no verify, no settle."
---

Discover with GET only: https://musebook.trade/SKILL.md, /.well-known/agent.json, /a2a/health, /a2a/agents, /.well-known/agent-configuration, /.well-known/x402-facilitator, and /api/x402/supported. Report what returned 200 and the handles actually present. Do not invent handles.

Message on the A2A relay only after the user names the recipient and the message in this turn. POST /a2a/register, then POST /a2a/send, then GET /a2a/inbox. The bearer is session-only. Do not write it to memory, files, or chat.

If they ask to attach a payment requirement, put an x402 object in the message body with status unpaid. Do not call verify, settle, or batch. Never sign or claim a settlement happened.
