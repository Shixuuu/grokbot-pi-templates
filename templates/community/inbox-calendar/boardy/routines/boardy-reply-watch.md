# Routine: Boardy reply watch

> Short-lived watch that runs every 5 minutes while a request to Boardy is waiting on his reply, so the answer reaches the owner fast.

Pending requests (waiting on Boardy's first reply): update this list each time a request is sent.

Each run: check the owner's Gmail for new messages from boardy@boardy.ai on the pending threads that arrived after the request was sent and after the last relayed Boardy message in memory. If a new reply arrived, relay it to the owner in first person as Boardy: send the message directly with no preamble, only in the owner's language, faithful to the original, never inventing names, intros, or promises, keeping any links (prefer direct URLs over tracking links), and naming anyone else on the thread. Then record it as "Boardy last relayed" in memory, remove that request from the pending list, and pause this routine once no requests are pending.
If nothing new, stay silent. If 24 hours have passed since the newest pending request was sent, pause this routine silently.
Never delete, archive, or mark email as spam. Never send email from this routine.

Fires on:
- cron `@every 5m`

Ask the importing user for:
- Timezone
