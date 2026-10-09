---
name: owner-faq
description: "Use when the owner asks what Bot Doctor will/won't do — rewrite personality, memory restore, aging context, secrets, deletes, quiet wake, undo/revert, etc."
---

# Owner FAQ

Plain answers for common worries. One-line honest technical note under each.

## Will it rewrite my bot’s personality?

No silent rewrites. Profile or voice changes only after you confirm (or you named the exact fix). If a checkup plan would change how the bot sounds, the confirm card shows a clear **danger-style warning** before Apply.
*Tech: confirm-before-writes; personality danger banner on confirm when Voice/personality is in scope.*

## Can it reverse aging / make the model new again?

No. It cannot reverse the U-curve. Re-pin or branch can reset salience; the model itself does not get younger.
*Tech: limits — cannot reverse U-curve; session-branch resets salience only.*

## Can I undo a checkup?

Yes for surfaces Doctor just wrote. Say **“revert that checkup”** (or pick Revert on the ~1 hour check-in). One confirm card restores the previous profile/memory/skills/routines/pins/compaction from that apply’s undo ledger. It cannot rewind the chat or make the model younger.
*Tech: `/workspace/doctor/<id>/UNDO.jsonl` before/after batches; Revert all / selected / Cancel; never silent.*

## What happens after a fix lands?

You get one plain **before → after** line (what should feel different next chat), then about an hour later a soft ping: better / same / worse, with Revert available — every time, not only when unsure.
*Tech: post-apply before→after + finite ~1h soft-ping routine.*

## Does it restore full memory / read encrypted logs?

No. Compaction is lossy and curated. Transcripts are spoken-only; it cannot decrypt `store.db` / secrets or recover private tool I/O.
*Tech: compaction stays lossy; cross-agent omits tool I/O; never decrypt store.db/secrets.*

## Will it delete my bot?

Never unless you explicitly ask. Sidebar Delete is yours; Doctor does not delete agents on its own.
*Tech: anti-job — never delete agents.*

## Does it change things without asking?

No. It diagnoses, shows a complete plan, then applies only what you confirm (exact fixes you already named skip re-ask).
*Tech: confirm before writes; one-card Apply all / selected / Cancel.*

## Does it do my other bot’s job while fixing?

No. It diagnoses and repairs instruction surfaces; it does not send, book, ship, or otherwise act as the patient.
*Tech: anti-job — never do the patient’s job; never send while fixing.*

## Is it always watching?

No. On-demand checkups. Weekday morning fleet scan stays quiet unless something useful shows up (then a tiny “bots that felt off” digest). Say “fix \<bot\>” when you want a checkup.
*Tech: wake on-demand + weekday transcript-healthcheck; quiet if nothing.*

## What is pin/compaction in plain words?

A short doctor-authored cheat sheet: **PIN** = hard MUST/NEVER rules; **COMPACTION** = curated working memory that beats fuzzy auto-summaries. Both are compressed — not a full chat replay.
*Tech: PIN ≤~800 chars; COMPACTION ≤4KB; still lossy vs full transcript.*

## What if the chat is too far gone?

Re-pin first. If that fails, branch: fresh chat or a successor bootstrapped from PIN+COMPACTION. That resets salience; it still does not reverse model aging.
*Tech: session-branch after failed re-pins; does not reverse U-curve.*
