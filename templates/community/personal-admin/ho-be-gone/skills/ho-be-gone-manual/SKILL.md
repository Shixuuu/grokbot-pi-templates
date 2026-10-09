---
name: ho-be-gone-manual
description: "Use when a Ho Be Gone owner says \"manual\" or \"help\", or asks how Ho Be Gone works, what it blocks, how it learns, how accurate it is, or how to undo, pause, or change it, or about known.botslist, blocking every known bot and reporting known bots to X."
---

Send this guide when the owner says "manual" or "help" (condense only if too long). Answer specific questions from it in plain words.

# Ho Be Gone — User Manual

## Quick start
1. Be signed in to X in the bot's browser, and answer one yes/no question. That's all the setup there is.
2. Ho Be Gone starts cleaning right away and blocks scam, impersonator and spam-bot accounts on its own.
3. Once a day you get a short list of anything it blocked (nothing on quiet days).
4. To undo a block, reply "unblock @handle".
5. Say "manual" anytime to see this guide again.

## Like a virus list
known.botslist is a shared list of known bot accounts, like an antivirus list. If any account on it follows you, replies, likes, reposts or mentions you, Ho Be Gone blocks it right away and reports it to X. Every Ho Be Gone user gets new additions automatically.

## What it blocks
- Accounts pretending to be a real famous person or company.
- Accounts pushing you to Telegram, WhatsApp, Zangi or a private chat to "claim a prize", "invest" or "join a giveaway".
- Accounts sending the same scam message to many people, or linking to known scam sites.
- Names or @handles pretending to be Elon Musk or the boss of Tesla or SpaceX. The real @elonmusk and the parody @ElonMuskAOC are never touched; "parody account" doesn't help an impersonator.
- "Kindly send me a follow request" plus a Telegram/WhatsApp/DM/link push.
- Accounts on known.botslist, and accounts using a known scam link.
- Accounts like the ones you've blocked before, and anyone you tell it to block.

## Blocking every known bot (the one question)
When you start, Ho Be Gone asks if you want it to block every account on the known bots list. Say yes and it shows you the list and works through it a little at a time; say no and you can ask anytime with 'block all known bots'. The list: https://github.com/GoPastEverything/HoBeGone-Template/blob/main/known.botslist. It does about 20 at a time with pauses and a daily limit, skips anyone you've kept, and stops and waits if X slows down. Say "stop blocking the bots list" to stop.

## The shared list of known bots (known.botslist)
Only the Ho Be Gone maintainers add to it; say "keep @handle" to keep one for yourself. Known bots are reported to X after a confirmed block (as spam or impersonation); say "stop reporting" to turn that off. You always win: "keep" or "unblock" keeps an account for you whatever the lists say.

## What it never blocks on
Politics, religion, nationality, race, gender, language, spelling or grammar, numbers in a name, account age, follower count, country, opinions, or anonymity. There has to be real scam, spam or impersonation evidence.

## How it learns from you
Nothing from other people's choices is copied to you. Reply "unblock @handle" when one was wrong, "this one was right" when it was right, or "block @handle" / "keep @handle" anytime. After about 20 blocks and 3 keeps it builds a model of your own choices, used only for you.

## How accurate is it? (honest answer)
Example from one test account, not a promise: of 78 accounts that owner blocked by hand, the basic rules caught about 1 in 4; with the owner's learned choices, about 3 in 4 (60 of 78). None of the 5 keeps would have been blocked, but 5 is small, so mistakes are possible. Every block is in your daily summary, and undoing one takes one reply.

## Changing how it works
"Let me review them first", "Just audit, don't block anything", "Stop reporting" / "start reporting", "Go back to automatic".

## Security stops
If X shows a login screen, CAPTCHA, code check, security warning or rate limit, it stops and asks you to take over the browser. It will never ask for your password, codes or login details.

## Privacy
It only looks at what you can see signed in to your own X account and never tries to find out who anyone really is.

## FAQ
- "why was @someone blocked?", "show my blocked list", "show held for later", "show the known bots list".
- Suggest a known bot: open an issue at github.com/GoPastEverything/HoBeGone-Template/issues.
- Pause: "pause Ho Be Gone"; "resume". Scouting: "turn off scouting" / "turn on scouting".
- It updates itself from its public source before each run. Your blocks, keeps and settings stay yours.
