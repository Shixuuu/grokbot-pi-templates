---
name: voice-assistant
description: "Use this when a small business owner wants an optional AI phone assistant that answers inbound calls on their Twilio number, built by a Cursor cloud agent with a voice service such as ElevenLabs or OpenAI realtime, with a script, knowledge base, handoff to the owner, call logs, and AI disclosure."
---

# Voice Assistant Playbook (optional, inbound first)

You are helping your user add an AI assistant that answers calls to their business number.
Start with inbound calls only. Laws on call recording, AI voices, and automated calls vary and change. This is general info, not legal advice.

## Ground rules

- Follow the approval rule below. Nothing goes live on the real number until the owner says "go".
- Inbound only to start. Do not build outbound automated or AI-voice calling unless the owner has checked current laws with a qualified professional and asks for it.
- Never paste API keys or tokens into chat or code. Store them as secrets.
- Never invent prices, answers, or promises. The assistant says only what is in the approved knowledge base.
- Check current Twilio and voice-service docs and pricing. Features and requirements change.

## Step 1: Prerequisites

1. A Twilio number already set up (see the twilio-setup skill), with call forwarding to the owner working.
2. An account with a voice service (for example ElevenLabs or OpenAI realtime). The owner creates it and stores keys as secrets.
3. A usage alert or spending limit on both services.

## Step 2: Write the script and knowledge base

1. **Greeting**: names the business and says it's an AI assistant, e.g. "Thanks for calling <business name>. I'm an AI assistant and can help with questions or take a message."
2. **What it can do**: answer common questions, take a message, book or request a callback.
3. **What it must not do**: take payments, give legal/medical/financial advice, make promises about price or delivery not in the knowledge base.
4. **Knowledge base**: hours, services, service area, how to buy, policies (from the approved website copy). Save as `voice_kb_READY.md`.
5. **Handoff**: when a caller asks for a person, is upset, or the assistant isn't sure, transfer to the owner's phone or take a message.

## Step 3: Build with a Cursor cloud agent

Give the cloud agent a short brief with an In / Out list:
- In: inbound call webhook on the Twilio number, connection to the voice service, the approved script and knowledge base, handoff to the owner, call log, text or email summary to the owner after each call.
- Out: outbound calls, payments, changes to other systems.
Ask it to use a test number or a test route first, store keys as secrets, and report back with a short demo recording or screenshots plus how to roll back.

## Step 4: Test

1. The owner calls the test number and tries normal questions, a hard question, "let me talk to a person", and silence.
2. Check the AI disclosure plays at the start.
3. Check handoff and message-taking work.
4. Check the call log and summary arrive.
Save results as `voice_test_READY.md`.

## Step 5: Go live (only after "go")

1. Point the real number's incoming call webhook to the assistant, keeping a fallback to the owner's phone if it fails.
2. Watch the first calls closely and review each log the same day.

## Step 6: Recording and consent

- If calls are recorded or transcribed, check the current rules where the business and callers are. Some places require consent from everyone on the call.
- Add a line like "This call may be recorded" if recording is on and allowed.
- Keep logs only as long as needed and protect them.

## Step 7: Weekly review

- Read call summaries: common questions, missed answers, handoffs.
- Draft knowledge base updates for owner approval.
- Check usage and spending against the limit.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
