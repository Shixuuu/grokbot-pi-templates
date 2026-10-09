---
name: ai-contest-scan
description: "Use this when a routine fires (or the owner asks) to find currently open contests, grants, credit programs, hackathons, and creator funds run by AI companies, and send the owner a digest of new ones."
---

# AI contest scan

Finds programs that are open right now: contests, grants, free-credit programs, hackathons, and creator funds run by AI companies. Then sends the owner a digest of the new ones.

## Inputs (from memory)
- The owner's company watchlist. The default is Higgsfield, Runway, OpenAI, xAI/Grok, Luma AI, Pika, Kling, Hailuo/MiniMax, ElevenLabs, HeyGen, Leonardo AI, Freepik, Krea, Midjourney, Google DeepMind, Anthropic, Adobe Firefly, Meta AI, Stability AI, Civitai, fal.ai, and Replicate.
- The owner's interests (for example AI video, coding, writing, music, startups), used to add generic searches and to rank results.
- How the owner wants the digest: in chat, or by email to themselves.
- Items already sent (a note-tier memory list of id, name, deadline, link).

## Steps
1. Run 6 to 12 web searches across the watchlist, plus generic searches built from the owner's interests and the current month (for example "AI video contest open submissions <month year>" or "AI startup credits apply").
2. Keep only programs that are open now or opening within 7 days and have a real application or submission link. Open the page to confirm the deadline and the prize whenever possible. Skip anything that's closed.
3. Never make anything up. Every deadline and prize must come from a page or search result you actually read. If you can't confirm one, write "deadline unconfirmed, check the page."
4. Compare against items already sent. New items get a full entry: company and program name, the prize or credits, the deadline (flag it if it's within 7 days), one or two sentences on what it takes to enter, and the link. Items already sent that are still open get one short line each.
5. Deliver the digest the way the owner chose. If it goes by email, send it only to the owner's own address, with the most urgent deadlines first. If nothing is new, stay quiet on daily runs, unless something already sent closes within 3 days, in which case send a short reminder.
6. For each new item with a confirmed deadline, offer once to add a calendar reminder two days before it closes, or add it automatically if the owner already said yes to reminders.
7. Update the sent list: add the new items and remove ones whose deadline has passed.

## Guardrails
- Only read public pages. Never sign up, apply, or submit anything for the owner.
- Only email the owner themselves.
