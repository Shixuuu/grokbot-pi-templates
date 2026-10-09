---
name: twilio-setup
description: "Use this when a user wants help setting up Twilio for a small sales business, including buying a phone number, registering for business texting (A2P 10DLC or toll-free verification), SMS opt-in and opt-out compliance, call forwarding, spending limits, and connecting to other tools."
---

# Twilio Setup Playbook

You are helping your user set up a business phone number for calls and texts with Twilio.
Twilio's requirements and carrier rules change often. Always check the current Twilio docs before each step.
This is general info, not legal advice.

## Ground rules

- Follow the approval rule below before buying a number, submitting a registration, sending any text, or changing spending settings.
- Never ask the user to paste an Auth Token, API key, or password into chat. Store them only as secrets (for example in a secrets manager or environment variables).
- Never invent fees, approval times, or limits. Check the current Twilio pricing and docs.

## Step 1: Create and verify the account

1. The user signs up on the official Twilio site and verifies their email and phone.
2. Trial accounts have limits (for example, texting only verified numbers). Upgrading needs a payment method the user enters.
3. Turn on two-factor sign-in.

## Step 2: Buy a number

1. **Local number:** feels familiar to local customers. Business texting to US numbers needs A2P 10DLC registration.
2. **Toll-free number:** a national feel. Business texting needs toll-free verification.
3. Pick the number type with the user, then search by area code and buy only after they confirm.

## Step 3: Register before business texting

US carriers require registration for business texting. Unregistered traffic may be blocked or filtered.

**For a local (10DLC) number: A2P 10DLC**
1. Register a **brand**: legal business name, EIN, address, website, and contact. (Twilio also has an option for sole proprietors without an EIN; check current docs.)
2. Register a **campaign**: the use case (for example customer care or marketing), sample messages, and how people opt in.
3. Link the number to the campaign (through a Messaging Service).
4. Wait for approval before sending business texts.

**For a toll-free number: toll-free verification**
1. Submit business info, use case, sample messages, and opt-in details.
2. Wait for approval before sending at scale.

Tips: make sample messages match what you will really send, and make sure the website shows the business name, a privacy policy, and SMS terms.

## Step 4: Opt-in and opt-out compliance

1. Only text people who clearly agreed to get texts from the business (for example a checkbox on a form, or texting a keyword).
2. Keep a record of each opt-in: who, when, and how.
3. The first message should name the business, say what texts to expect, and include "Reply STOP to opt out, HELP for help." Mention message and data rates may apply.
4. Honor STOP (and similar words like UNSUBSCRIBE or CANCEL) right away. Twilio handles standard opt-out keywords by default; check current settings.
5. HELP should return the business name and a way to get support.
6. Respect quiet hours and don't text too often.
7. Cold texting people who didn't opt in is not allowed. Don't do it.

## Step 5: Voicemail and call forwarding

1. Set the number to forward calls to the owner's cell phone.
2. Add a short greeting that names the business.
3. If unanswered, send to voicemail and email or text the recording or transcript to the owner.
4. Tools like Twilio Studio or TwiML Bins can do this without much code. Check current docs.

## Step 6: Keys and security

1. Prefer API keys over the main Auth Token for apps and integrations.
2. Store keys as secrets only. Never in chat, code repositories, or shared docs.
3. If a key may have been exposed, the user should revoke it and create a new one right away.

## Step 7: Spending limits

1. Set usage alerts (usage triggers) so the owner is notified at set amounts.
2. Keep auto-recharge off or set a low limit until usage is steady.
3. Review usage weekly at first.

## Step 8: Connect to other tools (basics)

1. **Email:** forward incoming texts and voicemails to the owner's email with a webhook or a built-in integration.
2. **CRM:** log calls and texts to each contact's record using a native integration or an automation tool.
3. **Voice agent:** point the number's incoming call webhook to a voice agent service, with a fallback to the owner's phone.
4. Test every connection with the owner's own phone before going live.

## Weekly routine

1. Check registration status, message delivery errors, and opt-outs.
2. Review usage and spending.
3. Flag any Twilio account notices to the user.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
