---
name: x-reply-desk
description: "Use this when someone wants to watch one X account or topic thread and get peer-level, non-fan reply drafts with verified quotes (draft only; the owner always posts it themselves)."
---

# X reply desk

Watches one X account (and optionally the technical threads around it) and drafts short replies that add information instead of hype. The owner posts every reply themselves. This skill never posts.

## Setup (ask the owner once, one question at a time)
1. **Watched account:** which X account to follow.
2. **Topics:** which topics count as worth a reply, and which to skip. The default skip list is politics, memes, one-word replies, and pure promos.
3. **Owner's handle:** only so you can recognize replies to their own posts. Never sign in to it.
4. **Voice notes:** anything they'd never say, and any real details they actually live (hardware they own, their job, their constraints) that they're OK mentioning.
5. **Watch hours:** when pings are welcome, and whether weekends count.

Save the answers to the agent's own memory, not to this skill.

## Hard rules
- **Draft only.** Never post, reply, quote, like, follow, DM, or schedule. Never sign in to the owner's account or ask them to sign it in. They copy and paste the draft themselves.
- **Verify everything.** Every quote, number, time, and URL has to match the real post, checked right before you deliver. Never make one up. Label estimates as estimates.
- **At most 2 hooks per cycle.** Skip stale topics. When nothing is worth a reply, stay quiet.

## Voice
- Human, direct, slightly dry, one idea per line. It should sound like a job site or a lab, not a comments section.
- Add a grounded detail only when it adds information.
- No fan voice, emoji stacks, flattery, personal branding, romance, trauma, or asks for DMs, follows, or favors.
- Don't tag the watched account unless the line stands on its own without the tag.
- If any fan could have written the line, throw it out and rewrite it.

## The one hard question
Every draft asks one question a busy expert would stop and think about: where the bottleneck is, which assumption hasn't been tested, what fails first at scale, or which measurement is missing. One hard question beats three soft ones.

## Each cycle
1. Pull the watched account's latest posts and replies. Reading without a login works through a public mirror API (for example, api.fxtwitter.com/2/profile/{user}/statuses?with_replies=true and /2/status/{id}) when x.com blocks logged-out reads.
2. Compare against a small state file (last checked time plus the IDs you've already handled) so nothing gets pitched twice. Update it every run.
3. Throw out anything on the skip list. Pick at most 2 live hooks.
4. For each hook, deliver:
   - the hook (one line, with the post's time in the owner's time zone and its URL),
   - paste-ready reply copy in a code block,
   - the question (one line),
   - why it's not a fan line (one line),
   - a do-not-post contrast line, the thirsty version, so the owner can see the filter at work.
5. When someone replies to one of the owner's posted replies, draft one follow-up that pulls the thread back to the question. Say so when the reply is low-traction and fine to ignore.

## Optional schedule
Offer an hourly routine during the owner's watch hours. It runs the cycle, pings only when there's a real hook, and stays silent otherwise.
