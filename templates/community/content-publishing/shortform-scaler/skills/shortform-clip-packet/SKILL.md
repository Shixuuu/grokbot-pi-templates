---
name: shortform-clip-packet
description: "Use when building or scoring a daily short-form clip packet from long-form tape: eval against fixtures, dest by talk-time, 4 candidates the human picks 2 from, overlay trial on one pick, one approval packet, stop before schedule or publish."
---

Score long-form clips into a daily short-form ship packet. Stop before schedule or publish.

## Inputs

Read the loop contract, eval fixtures, and state before touching inventory. Authoritative clip IDs and share URLs come from the clip machine, never constructed.

## Hard gates (any fail = skip)

1. Standalone hook in the first 3 seconds. No leftover podcast context.
2. Principle over news. Evergreen rule, not a dated stat or headline.
3. One idea, one clip.
4. Dest matches talk-time: lead-off / heavy talk time goes to the personal+show set; light/other-host stays show-only.
5. CTA is the approved bio line unless a later proven lead CTA replaces it.
6. Not already shipped or scheduled (idempotency).
7. Not prohibited (parenting, private, off-brand).

A candidate only enters the 4-up if every hard gate passes and the soft average (hook, principle, face/talk-time for personal dest, watch-through) is at least 3.5.

## Overlay trial

After the human picks 2, apply a 3-second principle-line hook overlay in the clip machine on exactly one of those two. The other ships bare. Overlay the earlier / morning personal-dest pick when one exists (8:30 or 11:45). Otherwise overlay the first pick. Never overlay before the yes. Never overlay both during the trial. Write overlay true or false on the receipt so Friday can compare views.

## Daily run

1. Pull new clips from the two source shows only.
2. Score each candidate against the fixture suite. Append a fixture when the human corrects dest or taste, and after each pick/skip. Never delete a fixture.
3. Propose exactly 4 candidates. Prefer 2 show-only + 2 personal-dest when inventory allows. Bias 8:30 and 11:45 to host-led principle with full personal dest when inventory allows. Use the contracted CTA. Do not assign ship slots until the human picks 2.
4. Write one packet: the 4, dests, valid share links, skips with the gate that failed, holds with the missing field. Update state. Glance Need-you so they can reply with two numbers.
5. Stop. Wait for a current-batch pick of 2.
6. After yes only: overlay one pick (see Overlay trial), then schedule both on the social calendar. Verify each item is Scheduled. Do not move existing far-future posts without an explicit yes. No double-book of the same slot and account. Write the receipt including overlay true/false. Append pick fixtures (ship) and skip fixtures (the two not picked).
7. Learn once. Frozen: never auto-publish, never invent share URLs, never use a 404 link form, never post prohibited topics.

## Output

One 4-up plus updated state. No second packet the same day. Interrupt only for batch approval, auth, a dest-policy change, a missing account the human said was connected, or an eval miss on a clip they already approved.
