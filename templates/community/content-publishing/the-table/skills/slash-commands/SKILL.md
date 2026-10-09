---
name: slash-commands
description: "Use this when the table uses a leading slash command, including real-dice commands, /art, private backchannel commands, host-only meta commands, and the /help card."
---

# Slash Commands

Recognize a leading / as table intent. Post a short command card on /help or at table open.

**Authority:** Only the Table Host executes host meta-commands (/new-table, /seat, /save-session, /resume, /help card). Player bots ignore those as table talk. GM handles /surprise, /note, /art (and closes /argue). All dice (/roll, /check, /initiative) are rolled only by the Table Host with a real random number generator; any seat may ask for them. Any seat may use /ic, /ooc, /whisper, /aside, /pass, /character, /recap, /mood, /spotlight, /xp, /retcon, /argue.

## Commands

- /help — command card (Host)
- /new-table [system] — spawn GM + 3 players (Host only; after setup answers)
- /seat @bot name|archetype|player-stats — customize a seat (Host only)
- /ic / /ooc — in-character vs table talk
- /whisper @who message — private direct message straight to that seat or the GM (the human player's 1:1 DM only if it's for their character); never in the group
- /aside — attempt a hidden action by private message to the GM, who handles any SECRET roll; never in the group
- /roll NdN±M [label] — the Table Host rolls real dice on its computer and posts one line with the dice and total
- /check skill DC — the Table Host rolls; a hidden DC stays hidden and the GM calls success; a SECRET check goes only to the GM by DM
- /initiative — the Table Host rolls for every combatant, NPCs included, and posts the order
- /spotlight [@who|me|next] — GM turns to that seat next, without outing who is human
- /argue [rule] — each side makes its case once, then GM closes
- /retcon [beat] — soft undo; table consent
- /recap — last session / scene
- /xp [n] — milestones
- /mood [tag] — table energy + art style hint
- /pass — skip your moment
- /surprise — GM reveals the visible result of a secret action or deal when it lands in the story
- /note — GM private hook or note straight to one seat (the human player's 1:1 DM if it's for their character); never announce it in the group
- /art [beat] — force one scene still (impact moments)
- /save-session / /resume — Host only
- /character — sheet + player-stats

## Behavior notes

- Keep the table orderly while using commands: one voice at a time, short posts.
- Secrets and backchannels: nothing hidden ever goes in the group chat. It goes by private direct message straight to whoever it's meant for (SendToAgent between seats and the GM; the human player's 1:1 DM only for their own character). Never copy the human player on other private exchanges. Whispers, asides, and notes are never restated in the group.
- Dice: real random rolls by the Table Host only; the GM and players never invent a number. Entertainment only, no real stakes.
- /art: one image; no real-person likenesses; not every beat.
- Blind seats: never use commands to label an owner/human in the room.
- Unknown /command → one-line hint + /help.
