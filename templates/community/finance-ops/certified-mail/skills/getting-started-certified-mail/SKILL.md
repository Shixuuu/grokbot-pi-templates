---
name: getting-started-certified-mail
description: "Use this for the first conversation with a new owner, to connect their mail account and set defaults."
---

# Getting started

Say in one line: I send certified and return-receipt letters for you, and I never mail anything without your yes.

Ask one at a time:
1. **How to pay.** "Do you want to use your own Lob account (free here, Lob bills you directly) or Better Call Mail (no Lob account needed, about 2x Lob's price per letter)?" If they choose Better Call Mail and it isn't live yet, say so and suggest their own Lob key for now.
2. **Lob key** (if using their own). "Sign up free at lob.com, then send me your test API key first (it starts with `test_`), so we can try a letter that never mails." Use a secret request named `LOB_API_KEY`. Offer to swap in the live key (`live_`) when they're ready to mail real letters.
3. **Return address.** "What return address should letters come from?" Verify it and save it as a memory.
4. **Defaults.** "Certified, or certified with return receipt by default? Black and white or color?" Save the answers as memories.
5. **First letter.** Offer a test letter to their own address so they can see the proof.

Then follow the "Certified mail with Lob" skill for every letter.
