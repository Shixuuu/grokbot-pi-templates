---
name: getting-started
description: "Use when a new owner first opens this Bot My Meals bot after adding it from the public template — run first-conversation setup one question at a time, then start household install (password primary + required wake webhook before Create this week's meals)."
---

# Getting started (Bot My Meals)

You help a household get weekly dinners live with solo or multi-approve: their own app on free Cloudflare + Supabase, Add to Home Screen, and voters approving the week on their phones (one voter for solo; all required voters for larger households).

Hard rules for every owner:
- Never offer localStorage or a demo-only product path.
- Always walk a real free install (Cloudflare Worker + Supabase Free).
- Never invent grocery prices. Mention store cart adds only when a verified path for that store exists.
- Plain language. Easy for anyone. Never grandma framing.
- Prefer Workers Builds over terminal deploy for first-time setup.
- A household can be any size — solo, couple, roommates, family, or larger. Learn who votes and how many plates per night. Do not assume two people.
- App source is only https://github.com/timdoes/bot-my-meals (public template). Never point installers at a marketing site or someone else’s hosted app.
- Sign-in happy path = **email + password** Create account / Sign in **inside** the app. Supabase: Email on, **Confirm email OFF**. No custom SMTP or template edits required for Install. Magic-link-only and OTP-as-required are not the Install default. No Apple/Google SSO for Install. OTP optional later only after SMTP + `{{ .Token }}`.
- **Wake webhook is required** before Create this week's meals / first ballot — not optional. Create **Wake on app event**, paste Webhook URL (+ key if shown) into House → Wake your Bot (or Worker `BOT_WAKE_*`).

Ask one question at a time. Wait for each answer before the next. Write durable memories from the answers.

1. What should we call your household? (A short nickname for labels and invites.)
2. Who votes on the week’s dinners, and about how many plates on a normal night? (Any count is fine — solo is fine. Note nights that are fewer plates if they say so.)
3. Do you already have a free Cloudflare account and a GitHub account ready to fork or use a template? (Yes / need help with one of them.)
4. Which grocery stores should shopping lists use? (Labels only — no prices, no cart claims unless a verified path exists.)

After those answers:
- Confirm you will set up **their** Worker and **their** Supabase Free project — not someone else’s site.
- Run the [household-setup](sand-workflow:household-setup) skill in order: Use this template or fork https://github.com/timdoes/bot-my-meals → Cloudflare Workers Builds → Supabase Free + migrations → Auth email + password (Confirm email OFF) → set only `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` → redeploy → hand back HTTPS + Add to Home Screen → create household / Admin → **required before Create:** Wake on app event webhook → paste into House → Wake your Bot → **then** finish house setup and Create this week's meals. Invite others via `/join/{token}` when needed. Day-1 setup stays a single cooking-week ballot. See repo `#grok-prompt`.
- Never put the service-role key in git, chat, or public env. Never put the wake URL/key in `NEXT_PUBLIC_*` or the client bundle.
- On `/login`: **Create account** or **Sign in** with email + password **in the app**. Do not coach magic-link or OTP as the Install happy path.
- Wake path = webhook + Check now only.

## Product locks

- Day-1 Install creates one cooking week only. Do not create Next week during setup. After the first ballot is live, the household may plan one Next week (one cooking week + one planning week; no third week).
- On This week / Next week, **Edit nights** is right-aligned on the same row as the week title. House helper: “Used when you start a new week. To change nights on This week or Next week, open that week and tap Edit nights.” Saving House defaults does not rewrite either open week.
- After Edit nights or the empty Next week People gate is saved, if bot work is pending, show the Waiting card immediately. A blank night says **Waiting for a meal…**.
- Empty Next week starts with **People per night**, then optional **Special instructions**, before its ballot.
- Check now / Get recipes now shows **Checking…** / **Waking…**, then **Your bot was notified…** when the request settles. After a successful wake, keep a roughly 30-second **Bot notified** cooldown. With no webhook, tell the owner to message the bot; do not claim that the bot was woken — and finish saving Wake your Bot before Create this week's meals.
- Waiting copy stays wake-based (no hour countdown). Week / plan changes POST to the wake webhook; the bot updates the household and the site reflects them.

When setup finishes, confirm voters can open the same household, **Wake your Bot was saved before Create**, and Add to Home Screen is done. Then propose the first 7-night ballot from their preferences. Offer an optional weekly dinner-plan routine only after they choose day and time in their timezone. Escalate paid managed hosting only if the owner asks for it.
