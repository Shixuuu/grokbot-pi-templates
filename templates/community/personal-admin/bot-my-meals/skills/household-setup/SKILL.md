---
name: household-setup
description: "Use when setting up Bot My Meals for a household: template/fork https://github.com/timdoes/bot-my-meals, Cloudflare Workers Builds, Supabase Free with migrations and email + password (Confirm email OFF, no SMTP required), public env vars only, required Wake on app event before Create this week's meals, then HTTPS plus Add to Home Screen."
---

# Household setup (Bot My Meals)

Outcome: HTTPS app URL + Safari Add to Home Screen for this household.

Hard rules:
- Never offer localStorage or demo-only as the product path.
- Free tier by default: Cloudflare Workers + Supabase Free.
- Set only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` on the Worker or Builds.
- Never put the service-role key in git, chat, or public env.
- Never invent grocery prices. Do not claim store cart adds unless a verified path for that store exists.
- Plain language — easy for anyone. Never grandma framing.
- Walk one click at a time when the owner needs it. Prefer Workers Builds over terminal deploy for first-time setup.
- Fork or Use this template only from the public app repo: https://github.com/timdoes/bot-my-meals — never a marketing site repo.
- Sign-in happy path = **email + password** in the app (**Create account** / **Sign in**). Magic-link and OTP are not Install requirements. No Apple/Google SSO for Install.
- **Confirm email OFF** is required. Do **not** require custom SMTP or Auth email template edits for Install.
- **Wake webhook is required** for every household — save **House → Wake your Bot** **before** Create this week's meals / first ballot.

## 1. Get the code
- Open https://github.com/timdoes/bot-my-meals (public GitHub template).
- Use **Use this template** or **Fork** once into the household’s own GitHub account.
- Workers Builds must connect to THEIR fork or template copy, not someone else’s upstream they cannot write to.
- Keep default branch `main`.

## 2. Cloudflare Workers Free (OpenNext)
- Sign in at dash.cloudflare.com (Free).
- Create or open Worker named `bot-my-meals` (or a unique free name if that collides; keep wrangler name and services[].service in sync).
- Settings → Builds → connect GitHub → select THEIR fork or template copy.
- Build settings (typical):
  - Production branch: `main`
  - Build command: `npm run build:worker`
  - Deploy command: `node scripts/cf-deploy.mjs`
- Trigger production deploy. Copy the HTTPS URL (`*.workers.dev` or their own domain).
- Blank `NEXT_PUBLIC_*` is an incomplete install — finish Supabase and env before calling it done.
- Terminal `npm run deploy` is only for people who already develop locally — not the default path.

## 3. Supabase Free project
- Create a new Free project for this household.
- Run every file in `supabase/migrations/` in filename order (SQL editor or `supabase db push`).

### Auth — Email + password (Install default)
1. Authentication → Providers → **Email** **on**.
2. **Confirm email: OFF** (critical for iOS PWA + no-SMTP Install). Do not market that as “email verified.”
3. If a password minimum is shown, set it to **at least 8**.
4. Do **not** turn on Apple / Google / SSO for Install.
5. **Site URL** = THEIR final phone HTTPS origin (`*.workers.dev` or own domain).
6. **Redirect URLs** include `https://{that-host}/auth/callback` and `https://{that-host}/login/new-password` (join / password reset).
7. Do **not** require custom SMTP or editing Magic Link / OTP templates for Install.
8. **Optional later (not Install):** custom SMTP + email template that includes `{{ .Token }}` for sign-in codes. Keep password path. Never turn Confirm email ON with a link-only template.

## 4. Wire env and redeploy
- On the Worker / Builds, set only:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Redeploy. Never use the service-role key.

## 5. Hand off on the phone
- Give them the HTTPS link.
- Safari → Add to Home Screen (ideal: create account / sign in from the installed PWA so the session stays standalone).
- On `/login`: **Create account** or **Sign in** with email + password (≥ 8 characters). Stay in the app — do not finish first sign-in by tapping a mail link.
- Create household (Admin), then invite other members by sharing `https://{that-host}/join/{token}` from the share sheet (invite links only — no invite codes). Solo households can skip invites. Partner creates **their own** email + password after join (no shared household password).

## 6. Wake on app event (required — before Create this week's meals)
Every household must finish this **before** Create this week's meals / first ballot. Week / plan changes POST to the wake webhook; the bot updates the household and the site reflects them.
1. Create a routine named **Wake on app event** with a **webhook** trigger. Prompt intent: on wake, sync ballot / recipes / shopping list / setup for the week that needs work; stay quiet if nothing changed.
2. Open the routine panel. Copy **Webhook URL** (and **sender key** if the panel shows one).
3. Paste into the app **House → Wake your Bot**, or set Worker secrets `BOT_WAKE_WEBHOOK_URL` and optional `BOT_WAKE_WEBHOOK_KEY` (never `NEXT_PUBLIC_*`, never put the URL in the browser bundle).
Without Wake saved, do not proceed to Create this week's meals. Check now without a URL still means message the Bot in chat.

## 7. After Create household (in-app setup)
Walk through house setup with no seed or sample week — **only after Wake your Bot is saved**:
1. Invite people — share `/join/{token}` via share sheet (skip if solo).
2. How many people? — household size.
3. Which nights? — Sun–Sat toggles, all on by default; easy off per day.
4. Optional: adjust plates on On nights.
5. Stores — zip/postal, multi-select regional grocers, or type a store. No default stores. Labels only — no prices, no cart claims.
6. Optional weekly meal budget (or skip).
7. Tap Create this week’s meals — app writes a ballot request and shows Waiting for your Bot… until the ballot appears.

Empty This week: Finish house setup if incomplete; Create this week’s meals / Waiting for your Bot… if setup is done; or the solo/multi-approve ballot when it lands.

Day-1 Install is still one cooking week — do not create a planning week during setup. After the first ballot is live, the house may also plan **next week** while cooking this week. Cap: one cooking week + one planning week (no third). Home opens on cooking. Change week with a **horizontal swipe** on the date strip (or optional edge ‹ ›). Title labels **This week** / **Next week** / past date range are status, not a chip switcher — there is no chip row. Waiting, Lock, recipes, shopping, Check now, and Wake are week-scoped. Shopping titles: **Shopping · This week** / **Shopping · Next week** — never merge lists. Saved → **Request for next week** targets the planning week (create if missing). Bot checks: `needs_work` on any open week; fulfill by week.

## Product locks

- Day-1 Install creates one cooking week only. Do not create Next week during setup. After the first ballot is live, the household may plan one Next week (one cooking week + one planning week; no third week).
- On This week / Next week, **Edit nights** is right-aligned on the same row as the week title. House helper: “Used when you start a new week. To change nights on This week or Next week, open that week and tap Edit nights.” Saving House defaults does not rewrite either open week.
- After Edit nights or the empty Next week People gate is saved, if bot work is pending, show the Waiting card immediately. A blank night says **Waiting for a meal…**.
- Empty Next week starts with **People per night**, then optional **Special instructions**, before its ballot.
- Check now / Get recipes now shows **Checking…** / **Waking…**, then **Your bot was notified…** when the request settles. After a successful wake, keep a roughly 30-second **Bot notified** cooldown. With no webhook, tell the owner to message the bot; do not claim that the bot was woken.
- Waiting copy stays wake-based (no hour countdown).

## Done
Confirm voters can open the same household, invite links work when needed, **Wake your Bot was saved before Create**, and Add to Home Screen is done. Escalate paid hosting or billing only if the owner asks for managed hosting.
