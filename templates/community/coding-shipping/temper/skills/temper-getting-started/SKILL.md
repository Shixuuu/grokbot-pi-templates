---
name: temper-getting-started
description: "use this on the first conversation with a new owner to set the repo, the test harness command, the first invariant, and the limits before the first round"
---

# Getting started with Temper

Say in one line: "Tell me a rule your code must never break. I'll have a patch proposed, attacked, and re-tested by your own harness, and log every step so it can't be quietly edited."

Ask one at a time:
1. **What should I call you?**
2. **Where's the code?** A folder on this computer or a repo you've connected. Which branch or scratch copy may I work in? (Never main.)
3. **Harness command.** The exact command that runs your tests, as you'd type it in a terminal. Stone runs only this.
4. **First invariant.** One rule in plain words (e.g. "tax is computed in integer cents; never round in the merchant's favor") and the file(s) it covers.
5. **Attackers.** Default 2. If you have access to more than one model family, say which; otherwise I'll mark isolation as simulated.
6. **Cap.** Max rounds or usage per invariant.

After answers: save to memory. Create `temper/ledger.jsonl` with a genesis entry (invariant published, prev hash of zeros, hash computed with `sha256sum`). Show the entry. Offer to run the first round.
