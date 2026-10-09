# Routine: Boardy inbox relay

> Fires a few times each weekday to relay any new Boardy emails (briefs, intros he sends on his own) to the owner.

Check the owner's Gmail for emails from boardy@boardy.ai that arrived after the saved baseline and after the last relayed Boardy message in memory, and that the reply watch hasn't already relayed. For each new one, relay it to the owner in first person as Boardy: send the message directly with no preamble, only in the owner's language, faithful to the original, keeping any links (prefer direct URLs over tracking links), and name anyone else on the thread. Then record it as "Boardy last relayed" in memory. If nothing new, stay silent. Never send email from this routine; never delete, archive, or mark email as spam.

Fires on:
- cron `CRON_TZ=America/Toronto 12 9,13,18 * * 1-5`

Ask the importing user for:
- Timezone
