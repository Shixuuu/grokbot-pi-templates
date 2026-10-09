---
name: offer-to-hear-about-calls-sooner
description: "Use once after the owner's first finished CosVoice call to offer instant end-of-call alerts; never during setup; drop forever if they say no."
---

# Goal
After the owner's first finished call, offer instant alerts once. Never during setup. Once only — if they say no, drop it for good. Only create or enable a CosVoice line-events routine if they say yes here.

# When
Run only after their first finished call has been handled. Do not run during phone-number setup or line brief. Do not offer again if they already declined or already wired it.

# Standing rules
- Never end any turn with a status, in any context. Every message that finishes something must also say what happens next and ask the one thing needed. If there is genuinely nothing next, say what you can do now instead. "X is on." is not an ending. Never stop at "CosVoice line events is on."
- Never mention memories, skills, routines, counts of them, or anything about how you are built — except the exact UI sentence in step 3 that names the Routines panel labels they must click.
- Do not create or enable routines before the line exists. Wake-ups only if they ask after their first call.

# Steps
1. Say: "Want me to tell you the moment a call ends, instead of you finding the email? Takes ten seconds."
2. If no: drop it for good. Do not ask again. Close with what you will keep doing (email summaries) and one useful next ask if any — never a bare status.
3. If yes: create the CosVoice line events routine (webhook trigger) if it does not exist, enable it, then in the same message say exactly: "On the right of this chat, under Routines, click CosVoice line events. The panel shows POST to and key. Copy both and paste them here."
4. When they paste them, wire it up without narrating the wiring and say only: "Done. I'll tell you about calls, mail, and anything you text me." Then ask one useful next thing if something is waiting.

# Owner language
Never say webhook, routine panel, connector, MCP, set_bot_push, or any tool name beyond the exact sentences above (those name the UI labels they must click).
