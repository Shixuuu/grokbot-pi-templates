---
name: maskoff-filter
description: "Use when someone pasted one or more X/Twitter handles, x.com URLs, or profile screenshots and wants to know if an account is stolen-photo, AI-girlfriend, or romance-scam — run on each handle. Also use when they say scan followers, sweep followers, or scan following of a public account. Not DMs only."
---

Own defensive briefings on X accounts that DM the user, and on public follower or following lists. Not a conviction. Not a nationality label. For list sweeps, a ranked table, not a mass-message script.

When to use:
- One or more X/Twitter handles, x.com URLs, or profile screenshots were pasted (DMs or otherwise). Run this skill on each handle.
- They asked to scan followers, sweep followers, or scan following of an account.

Required inputs: one public X profile (handle, x.com / twitter.com URL, or a profile screenshot), or a public follower/following page. Optional: what the photos look like (candid, studio glamour, stock model, AI render) and whether the face fits the claimed city.

Hard rules:
- Nationality, race, or a city is never evidence of fraud. A location field alone is ZERO points.
- Use only what a logged-out visitor can see. Skip protected accounts.
- Do not log in as the target. Do not DM, follow, unfollow, like, or reply. Never message anyone on the list.
- Never harvest private or protected lists. Do not write an unofficial scraper.
- Do not describe nudity.
- Do not report or spend without approval.
- Cap a list at 40 cards. Ask before walking another page or raising the cap.
- Default is on-demand in this chat only. No timer. No unattended scrapes.
- Reverse-image the avatar and ask for a live video call before anyone sends money.

Sequence:
1. Open the public profile in the browser. If they asked to scan followers, sweep followers, or scan following, also open the public x.com/{user}/followers or x.com/{user}/following page. Read display name, bio, location, join date, counts, recent posts, and the avatar. Use only what a logged-out visitor can see. Skip protected accounts. Cap a list at 40 cards. Do not log in as the target. Do not DM, follow, unfollow, like, or reply.
2. If an avatar is visible, reverse-image it (Google Images or TinEye). Note other names, older portfolios, or dating-site copies. On a list sweep, reverse-image the top flagged cards, not every card. Do not describe nudity.
3. Score stacked signals on every public account in scope. That means both: (a) the pasted DM handle, and (b) each visible follower or following card. Same weights either way. A city or nationality is ZERO points by itself.
4. Clamp each score 0-100. Verdict: under 28 likely authentic, 28-57 mixed signals, 58 or above likely fabricated.
5. Return the output shape below. If several handles were pasted, run this sequence on each and return each briefing.

Scoring (stack signals only, counters subtract, clamp 0-100). Same weights for a pasted handle and for each list card.
- Photo / story vs city (28): claimed Western identity or studio-glamour shots plus a location that does not fit, or a face that does not fit the claimed life. A location field alone is ZERO points.
- AI face (22): plastic skin, warped jewelry, extra fingers, identical luxury bedrooms, AI girlfriend copy.
- Stolen glamour (20): only model-portfolio lighting, no friends or family, thin new account or bait language.
- Romance bait: 6 each for looking for a real man, God-fearing, WhatsApp/Telegram pivot, widow, oil-rig / deployed soldier, hey handsome. 10 for money rails: gift card / Western Union / crypto profit.
- Hygiene (6-12): days-old handle, follow-ratio spray, heart-emoji name plus digits in the handle. Score hygiene only when other flags already exist.
- Counters (negative): years of local posts, verification, candid photos that fit the city. Ordinary local news, transit, and sports posts are a counter-signal, not a hit.

One handle output: score and verdict; evidence bullets (only signals that fired); briefing (the city is not guilt); tweet-length reply; next step reverse-image plus live video call. Report confirmed fraud to the platform, FTC reportfraud.ftc.gov, and FBI IC3 ic3.gov.

Follower or following sweep output: ranked table, highest fabrication score first (@handle | score | verdict | top signals); one-paragraph briefing (how many scanned, how many likely fabricated / mixed / authentic, who ranked highest); offer full briefings on the top 3; stop at the cap; ask before walking another page or a higher cap.

What requires approval: messaging anyone on X, reporting an account, spending money, installing extra plugins, walking more than 40 accounts, or scheduling unattended scrapes.

Validate: a US-nurse plus WhatsApp plus studio-glamour stolen look dossier must score likely fabricated without treating the city as guilt. A local reporter with years of local posts and a candid press photo must score likely authentic; if it scores fabricated, nationality leaked in, stop and fix. An AI-girlfriend farm plus Telegram plus hollow new account must score likely fabricated. A public follower sweep using those dossiers must rank the first and third above the reporter. Do not DM anyone on the list.
