---
name: networking-follow-up
description: "Use this when the user shares someone they met (a business card or badge photo, a LinkedIn screenshot, an X profile, or a note like \"met Sam from Acme, talked about X\"), asks for follow-up messages after an event, or when the evening follow-up check runs."
---

# Networking follow-up

Turns "I met someone" into a personal follow-up the user approves, then keeps the thread from going cold. Nothing is ever sent without the user's explicit approval.

## Where contacts live
One JSON file on your own computer: `/workspace/follow-ups/contacts.json` (create it with `[]` if missing). One record per person:
`id, name, company, role, email, linkedin, x_handle, phone, met_at, met_on (YYYY-MM-DD), talked_about, promised_next_step, research (1-2 lines, public info only), channel (email | linkedin | x_dm), status, draft, sent_on, nudges (count), last_update`.
Status moves: `new` then `drafted` then `sent` then `replied` or `nudged` or `closed`. `skipped` if the user passes.

## 1. Intake (whenever the user shares a contact)
- Photo: read the card, badge, or screenshot and pull out name, company, role, email, LinkedIn, X handle, phone. Several people in one message or photo is fine; handle each.
- Text: parse the same fields plus where you met and what you talked about.
- If "what we talked about" is missing, ask one short question for all new contacts at once (one line each is plenty). If the user says "just draft it," use where you met as the hook.
- Check the file for a duplicate (same name + company) and update instead of adding.

## 2. Light research (public, professional only)
One or two web searches per person: what their company does in one line, and one recent, relevant public item (launch, post, talk) if there is one. Never dig into personal life, home address, family, or anything private. If nothing useful turns up, skip it; do not invent details.

## 3. Draft in the user's voice
- 3 to 5 sentences, warm and specific, no hype or buzzwords.
- Open with where you met and the actual thing you talked about.
- Add one line of real value when possible (a link, an intro offer, a thought on their project) using only true facts.
- End with one concrete, low-effort next step (15-minute call, coffee, "send me the deck", an intro).
- Channel: use the one the user promised ("I'll DM you on X") first. Otherwise email if you have their address; then an X DM if you have their handle (keep it short and conversational, no links in the first message); otherwise a LinkedIn connection note (under 300 characters) plus a slightly longer DM version to paste after they accept.
- Save the draft and set status `drafted`.

## 4. Approval gate (required)
Show each draft with the person's name and the hook, then ask with a question widget: Approve / Edit / Skip.
- Approve, email: if an email draft card tool is available and you have their email, open the draft there so the user presses Send themselves.
- Approve, X DM: X has no connector, so it runs through your own browser, where the user signs in to X once (they enter any X chat passcode themselves). Open the DM with the person's profile, type the approved text into the composer, and stop there. Hand the screen to the user to press Send, or press Send yourself only if the user explicitly tells you to send that one message. If the user says stop or don't send, stop at once and leave it unsent.
- Otherwise give the copy-ready text and ask them to confirm once it is sent.
- Only after it is confirmed sent, set `sent` and `sent_on`.
- Edit: apply their changes and show it again.
- Skip: set `skipped`.
Never send, post, follow, or connect on the user's behalf without that explicit go-ahead.

## 5. Evening check (run by the routine)
- Contacts at `new` with enough info: draft them (steps 2-3) and present them for approval (step 4).
- Contacts at `sent` or `nudged` for 5+ days with no reply recorded: ask whether they replied (widget: Replied / Draft a nudge / Close it). For email, check the thread first; for X, ask the user. A nudge is 2 sentences, friendly, adds something new, never guilt-trippy, and goes on the same channel. Max 2 nudges per person, then suggest closing.
- Send one combined message. If nothing needs attention, stay silent.

## 6. Quick summary on request
"Who do I owe a follow-up?" lists people by status and channel with days since you met or since you sent.

## Privacy
Contact details stay in the local file. Never put someone's email, phone, or private notes in a public post or demo; use first names or blur them.
