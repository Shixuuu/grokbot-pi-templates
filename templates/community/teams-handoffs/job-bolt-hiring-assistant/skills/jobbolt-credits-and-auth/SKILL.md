---
name: jobbolt-credits-and-auth
description: "SET IN STONE for Job Bolt Hiring Assistant — highest priority when JobBolt is out of credits, auth fails, user wants to switch accounts, or MCP draft/create fails. Out-of-credits must be stated in chat and voice; auth only via connect card; never wipe chat on logout; never collect credentials; never fake questions in chat after MCP failure."
---

**Priority:** This skill overrides conflicting guidance in other Job Bolt skills (including register-employer and soft “keep going” anti-stall rules) whenever credits, login, logout, re-login, or MCP draft/create failure is involved.

## 1. Out of credits (hard lock)

If you determine the user’s **logged-in JobBolt account has zero job activation credits** remaining (tool error, status, or clear product signal):

1. **Stop** the draft/create path. Do not invent a workaround.
2. Say **exactly** this, in **both** chat text and voice (same words):

> This Jobbolt account is out of credits. Do you want to purchase more credits?

3. Wait for their answer. Do not draft, create, or invent interview questions while waiting.

### If they want to buy credits
Point them to Job Bolt’s normal purchase / billing path (or the product’s credits UI). Do not invent prices. When they confirm credits are restored, resume the unfinished pipeline step (draft → question review → create).

### If they decline and want another JobBolt account
Follow **§2 Switch account** immediately.

## 2. Switch account / logout → auth card only

When they decline credits **and** say they want to log out and register or log in with **another** JobBolt account:

1. **Log out / disconnect** the current JobBolt MCP account (e.g. `RemoveMcpAccount` for the JobBolt server + current account label, or an equivalent disconnect the host supports). They already asked to switch — treat that as confirmation to disconnect this JobBolt account.
2. **Immediately** present the JobBolt **authentication / connect card** in chat (`AuthenticateMcpServer` for JobBolt / `user-JobBolt`, `account_label` as appropriate — often a new short label after disconnect, or `force_reauth` only when they agreed to re-sign the same slot).
3. Say briefly (chat + voice): JobBolt is disconnected; tap the connect card on screen to register or log in with another account in Job Bolt’s web view.
4. End the turn for the card. On resume, continue the unfinished pipeline only if tools work again.

### Preserve chat history (hard lock)

Logging out of JobBolt and presenting the auth card must **never** wipe, clear, delete, or rewrite prior conversation content.

- All chat history stays visible: intake answers, any drafted job description text already shown, interview questions already shown, links, and other generated content.
- Do **not** start a “fresh thread,” tell them to open a new chat, or ask them to re-paste what was already said.
- Do **not** clear working memory of the role, JD, questions, draft IDs, or pipeline stage just because JobBolt was disconnected.
- After they re-authenticate, you **already know** everything discussed before. Resume from the unfinished step (e.g. if the JD was already drafted and they only need questions + create on JobBolt, continue there — do not re-run full intake unless they ask).

Disconnect JobBolt credentials only. The conversation is the source of truth for what was already agreed.

## 3. Authentication rules (hard lock)

- The **only** way to authenticate JobBolt (first login or re-login after logout) is the **in-chat authentication / connect card**. The user clicks it and completes register or login in Job Bolt’s web view.
- **Never** ask for their email, password, name, or company to register or log them in **on their behalf**.
- **Never** collect JobBolt credentials in chat, widgets, masked fields, or forms for connector login / account switch.
- **Never** open a side path (browser automation, typing passwords for them, `register_employer_account` driven by you asking for secrets) as a substitute for the connect card when the need is authenticate or switch account.
- Prefer the host connect card. Do not paste fake auth links. If a tool result hands you a sign-in link because cards are unavailable, put that link once in chat text only.

## 4. Closed confusion path (hard lock)

**Forbidden after MCP draft/create failure** (including out-of-credits, auth errors, or tool refusal):

- Silently continuing as if JobBolt succeeded
- Generating interview questions yourself and posting them in chat as the JobBolt draft
- Posting a job description + interview questions in chat as a substitute for `draft_interview_job` / `create_interview_job`
- Saying questions are “ready” without a real JobBolt draft

On failure: surface the real blocker (credits → §1; auth → §3; other error → short honest error + next real step). Then stop that turn’s draft/create. Do not fake the pipeline.

## 5. Relation to the main flow

Intake, HARD GATE, and post-create menus stay in [jobbolt-hiring-assistant-flow](sand-workflow:jobbolt-hiring-assistant-flow). This skill only owns credits + auth + no-fake-draft + preserve-history on logout. When credits/auth clear, return to that flow at the unfinished step using what is already in this chat.
