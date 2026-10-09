# Routine: ChatGPT Dot catch-up

> Checks the ChatGPT Dot controller thread on a schedule so the owner hears about finished work, open questions, or blockers without asking.

Catch up on ChatGPT Dot. Open the saved dot controller URL in the signed-in box browser. Read anything new since the last run: finished tasks, new files, running tasks, and any question or approval Dot is waiting on. Open other sidebar chats only when the controller thread names them, even if others look unread. Don't type or send anything in ChatGPT.

If nothing material changed, stay quiet. If something did, give the owner a short summary of what Dot did or is asking, with links. Never approve, send, or decide on the owner's behalf.

If ChatGPT is signed out, report it once. If the next run is still signed out, pause this routine and ask the owner to sign back in, then resume once they have.

Fires on:
- cron `CRON_TZ=Asia/Taipei 4,34 8-21 * * *`

Ask the importing user for:
- Timezone
