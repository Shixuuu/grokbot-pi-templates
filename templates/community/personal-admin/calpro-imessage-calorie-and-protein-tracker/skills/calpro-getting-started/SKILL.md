---
name: calpro-getting-started
description: "Use this when CalPro has just been imported and needs to be set up with its new owner in the first conversation."
---

# CalPro: getting started

Walk the owner through setup in short messages, asking one thing at a time. Wait for each answer before moving on. Never ask for or repeat a key, token, or password in chat.

1. **Say what it is (one line).**
   "CalPro turns me into an iMessage calorie and protein tracker: you text your CalPro number meals like '650 cal 45 g', and I keep your private daily total."

2. **Connect Inkbox.** Ask the owner to create a free Inkbox account of their own and connect the Inkbox plugin in Grok Bot's connectors. Confirm it works by reading the identity with the Inkbox connector.

3. **Handle, name, and iMessage.** Ask for a handle (e.g. `my-calpro`) and a display name (e.g. "CalPro").
   - In their Inkbox console, they create an identity with that handle, or reuse one they already have, and enable iMessage on it.
   - Set the display name with the Inkbox identity update tool.
   - Check that iMessage is ready with the channel status tool.

4. **Timezone.** Don't ask by default. Use the owner's timezone that Grok Bot already provides (the timezone in your time instructions or user info), and save it as an IANA name (e.g. America/Denver) plus a short label (e.g. MT). Only if no timezone is available, ask: "What timezone are you in?" The tracker day resets at 4 AM there.

5. **Build the tracker.** Using the calpro-tracker skill:
   - Write `~/calpro/macro.py` with the owner's `TZ` and `TZ_LABEL`, then run the skill's self-test.
   - Fix anything that doesn't match the reply templates exactly, then delete the test rows.
   - Tell the owner in one line that it passed.

6. **Wire the webhook routine.** Make sure the CalPro routine (webhook trigger) is on. Then:
   - Ask the owner to open the **Grok Bot desktop app**, go to the routine panel, and copy the CalPro routine's webhook URL and key. Say plainly: "The phone app doesn't show these. Use the desktop app."
   - Have them paste the URL in chat.
   - For the key, send a secure secret request. Never ask them to paste it in chat.
   - Create the Inkbox webhook subscription with the Inkbox connector's set-webhooks tool: `webhook_url` = the routine URL, `secret` = the key, which Inkbox sends as a bearer token. This covers `imessage.received` and `imessage.reaction_received`. The preset may also send email and call events, and the routine ignores those.
   - If subscriptions already exist, `replace_existing` replaces **all** of them for that identity, so ask before setting it.

7. **Connect link and live test.**
   - Get the iMessage onboarding info from the Inkbox connector: the connect number and the `connect @handle` message.
   - Give the owner: "Text `connect @YOUR_HANDLE` to YOUR_CONNECT_NUMBER from your iPhone."
   - Then have them text "hi". They should get: "Let’s get after a healthy day. Ex: goal 2200 cal 200 g protein"
   - If nothing arrives within a minute, check the routine's recent runs and the webhook subscription.

8. **Their goals.** Ask the owner to text their own goals from their phone. Ex: goal 2200 cal 200 g protein. Then have them try one meal. Ex: 650 cal 45 g.

9. **Limits.** Mention: "Inkbox's free plan has message and identity limits. Check the current ones in your Inkbox console."

Finish with one line: CalPro is live, and texts reset at 4 AM their time.
