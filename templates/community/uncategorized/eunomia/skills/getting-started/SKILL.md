---
name: getting-started
description: "Use the first time you talk with a new owner. Introduce yourself, ask 3 button questions, install and sign in to the Grok helper (Grok Build) if they want it, offer one weekly scheduled check (created only after they agree), then walk through two batches of approval for moving reminders to the calendar and for trimming suggestions."
---

Read the persona skill first.

# First meeting

Do one step at a time. After each step, wait for the owner to respond before going on.

## 1. One-sentence introduction
"Hi, I'm Eunomia. I help you save your bot team's usage: hand off work the Grok helper can do, cut out interruptions you don't need, and stay quiet when there's nothing new."

## 2. Three questions (buttons, one at a time, default first)
1. "How often do you want to hear from me?"
   - [Default] Only when there's something new / One sentence a week / Only write it to a file, don't bother me
2. "Move your personal recurring reminders into the calendar?"
   - [Default] Yes, show me the list first and move them after I agree / Not yet
3. "How strict do you want to be about dropping noisy scheduled checks?"
   - [Default] You suggest changes, and I tap agree before you change them / Just tell me, don't change anything / You can widen the interval right away, but still ask me before deleting

Write the answers to `/workspace/usage-steward/prefs.md`. Use the time zone on the owner's device; the memory limit defaults to 20 entries or 4 KB.

## 3. Grok helper (you can skip this)
Ask first: "Want to connect the Grok helper? It uses your own Grok subscription (shared with Grok chat and Imagine)." Buttons: [Default] Connect / Skip.

Connect:
1. Check whether it is already installed: `test -x ~/.grok/bin/grok && ~/.grok/bin/grok --version`.
2. If it is not installed, run this on my own computer: `curl -fsSL https://x.ai/cli/install.sh | bash`. If the app pops up an approval card, tell the owner: "Please tap Agree."
3. Run `~/.grok/bin/grok login --device-auth` in the background, and read out the sign-in link and the short code.
4. Send a button "Open the Grok sign-in page". Say: "After you open it, check that it is your account. The page may ask you to enter a short code: XXXX."
5. After sign-in finishes, test once: `~/.grok/bin/grok -p "Reply OK" --max-turns 1 --disable-web-search`. If the exit code is 0, say "The Grok helper is ready."

If they skip or it fails: say "Okay, we won't use the Grok helper for now. I'll help you save in other ways. Just say so when you want to connect." Don't ask again.

## 4. Weekly scheduled check (create only one)
Offer: "Every Sunday at 7:47 p.m. (your time zone) I'll do a checkup: look at memory, compare usage, and see whether the Grok helper is still signed in. I won't bother you if there's nothing new. Is that okay?" Buttons: [Default] Okay / Not now.
- Create it only after the owner taps "Okay". Time: `47 19 * * 0`, the owner's local time zone. The content follows step 5 of the "usage-inventory" skill.
- If the app pops up an approval card, ask the owner to tap Agree.

## 5. Two batches of approval
- On the second day: if question 2 was "Yes", follow the "reminders-to-calendar" skill, show the owner the reminder list once, and get one approval.
- On the third day: follow the "usage-inventory" skill to take stock, bundle the trimming suggestions into one batch (widen intervals, merge duplicates, delete expired temporary checks), and get one approval. If question 3 was "Just tell me", only give the list and don't change anything.
