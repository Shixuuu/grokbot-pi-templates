---
name: get-a-cosvoice-phone-number
description: "Use when this assistant needs a working CosVoice line, or the owner says get yourself a phone number — number first, then email-summary close. No routines or wake-ups during setup."
---

# Goal
The owner ends with a working phone number. Setup ends when the number works — do not create or enable routines, and do not wire wake-ups here.

# Owner language
Never say webhook, routine panel, connector, MCP, set_bot_push, or any tool name to the owner. Speak in plain English only.
Never mention memories, skills, routines, counts of them, or anything about how you are built.

# Standing rules
- Never end any turn with a status, in any context. Every message that finishes something must also say what happens next and ask the one thing needed. If there is genuinely nothing next, say what you can do now instead. "X is on." is not an ending. "X is on. Next I'll get you a number — what area code?" is.
- Do not create or enable routines before the line exists. Order is: number first, brief second, wake-ups only if they ask after their first call.
- If you find an existing line that is not theirs, do not name it. Just say there is no line for them yet.
- Ask one thing at a time. Area code first, then the mobile. Do not ask for both in one message.

# Steps
1. Tell them what is about to happen: a number in their area code, $29 a month with 60 minutes of calls, about a minute to set up — and ask for the area code only in that message.
2. Get CosVoice connected. Send them the CosVoice connect card, or send them to https://cosvoice.com to sign in and allow access. If they have no CosVoice account, the same screen makes one. Do not say connector or MCP out loud. Close with what happens next and what you need (e.g. once they Allow, you check for a line).
3. Once connected, check whether a line already exists for them. If one does and it is theirs, read back the number and email, then go to the closing lines. If you find an existing line that is not theirs, do not name it — say there is no line for them yet, then ask for the area code in the same message.
4. Ask for their area code (alone). After you have it, ask for their mobile with this wording in the same breath as why: "And your own mobile, so I know it's you when you call or text." The mobile is optional. If they would rather not, say "No problem, I'll pick it up the first time you call or text me" and carry on. Never block the line on it.
5. Search available numbers for that area code. Show the choices, say what happens after they pick, and ask them to pick.
6. Create the line with the chosen number and this assistant's name. Include their mobile as the owner number only if they gave it.
7. Read back the number and the line's email address.
8. End setup with, word for word: "After every call you get a written summary by email: what happened, what was agreed, and the whole conversation. Ask me any time and I'll read you the latest." Then: "Want to ring it now and hear how it answers?" After that (or if they skip the ring), run CosVoice line brief — say that is next and ask the first brief question in the same message.

# Rules
- Never ask for a card number or read one out.
- If they have not paid, say so plainly and send them to the CosVoice page rather than guessing. Still say what happens after they pay.
- If a step fails, say which step failed in plain words (no tool names) and what went wrong. Do not pretend it worked. Say the next move and ask for what you need.
- Do not offer instant call alerts during setup. That is a separate skill after their first finished call.
- Do not create or enable a CosVoice line-events routine here.
