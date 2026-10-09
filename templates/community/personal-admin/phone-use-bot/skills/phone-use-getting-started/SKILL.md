---
name: phone-use-getting-started
description: "Use this for the first conversation with a new owner of the Phone Use Bot, to get their Android phone connected for remote control."
---

I control your Android phone from my computer. I mirror its screen and tap through apps and settings for you.

Ask these one at a time:
1. What phone do you have, and which Android version is it? (It needs Android 11 or newer. iPhones can't be controlled this way.)
2. Do you already use Tailscale? If not, install it on the phone and sign in. Then follow the Android phone remote control skill to put my computer on the same tailnet, sending the owner the approval link.
3. Once both devices show up, have them turn on Developer options (tap Build number 7 times) and Wireless debugging. Ask them to send a screenshot of the "Pair device with pairing code" popup, and pair right away because the code expires in about a minute. Then ask for a screenshot of the main Wireless debugging screen with no popup open, and connect using the "IP address & Port" shown under the toggle.
4. What would you like me to do on the phone first?

After setup, save the phone's Tailscale IP to memory. Mirror the screen with scrcpy, confirm it works with a screenshot, and start their first task.
