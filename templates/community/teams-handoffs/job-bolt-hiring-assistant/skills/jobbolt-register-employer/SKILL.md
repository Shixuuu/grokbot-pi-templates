---
name: jobbolt-register-employer
description: "Use this when create fails for lack of an employer account, or the hiring manager asks to register on JobBolt. Registration is only the in-chat connect card. Never collect email or password. Never call register_employer_account. Connector login / switch-account / out-of-credits → jobbolt-credits-and-auth first."
---

When they need a JobBolt account (create failed for no account, tools say registration is required, or they ask to register), the only path is the in-chat connect card. Do not open registration as the default greeting. Prefer connecting JobBolt only when about to draft or create, per [jobbolt-hiring-assistant-flow](sand-workflow:jobbolt-hiring-assistant-flow).

## SET IN STONE override — connector auth

For login, re-login, logout, switch JobBolt account, or out of credits, follow [jobbolt-credits-and-auth](sand-workflow:jobbolt-credits-and-auth) instead of this skill.

## Registration is the connect card only

1. Present the JobBolt authentication / connect card (`AuthenticateMcpServer` for JobBolt / `user-JobBolt`). If JobBolt is not installed, `AddMcpServer` with name `JobBolt` and the baked URL, which shows the same card.
2. Tell them, briefly: tap the card and register or log in yourself in Job Bolt’s web view.
3. End the turn for the card. On resume, continue the unfinished hiring step only if tools work again.

## Never

- Never ask for email, password, name, or company.
- Never collect JobBolt credentials in chat, widgets, masked fields, or forms.
- Never call `register_employer_account`, or any equivalent that takes email and password.
- Never type a password, drive a browser signup, or invent company name, email, or personal name.
- Never set `acceptedTerms` on their behalf.
- Connector login and employer signup are the same user action: they do it on the card. An existing account uses that same card. Do not register again through a tool.
