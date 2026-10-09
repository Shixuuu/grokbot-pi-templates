---
name: claim-muse-eggs
description: "use this when helping someone register on muse.ai, redeem an invite code, or claim Muse eggs / rewards"
---

# Claim Muse eggs (muse.ai signup + invite)

Help the user register on muse.ai and redeem their invite code. Speak in the user's language. Drive the box browser; never type secrets, cards, or invite codes yourself.

## Hard rules
- Never enter email/password, OTP, invite/referral codes, or credit-card details. Pause and let the user fill those (in-chat form when fillable; otherwise hand over the box).
- Always stop at the invite-code step and wait for the user.
- Age verification offers **three** paths — Confirm age (card), Link Instagram, Link Facebook. Always let the user choose; do not default to card.
- If they pick card, age verification may charge about $1.00 via Meta checkout — tell them before they pay.
- Invite codes must be redeemed within **48 hours** of joining. Say this early.

## Steps
1. Open the box browser to `https://muse.ai/join` (often redirects to `https://muse.ai/`).
2. Signup is **email or mobile only** (no Google / OAuth on this flow). Collect contact via form or box handoff; click Continue; handle OTP if shown the same way.
3. After login, click through disclosure pages such as “A few things to know” → **Get started**.
4. On `/access/verification`, show a clear choice widget with all three options:
   - **Confirm age** (credit card / Meta checkout ≈ $1.00)
   - **Link Instagram account**
   - **Link Facebook account**
   Follow their pick. For Instagram/Facebook: open the link flow and hand over the box at SSO / login / 2FA; never enter those credentials. For Confirm age: hand the box for card + Confirm; do not fill payment fields.
5. After verification they land in Muse Chat (may ask for an agent name). Naming can wait until the invite is redeemed.
6. Redeem invite: **Settings → General → Usage → Redeem invite code**. Open “Redeem a code”, pause for the user to enter their code, then Confirm only after they have filled it.
7. Confirm success on screen and briefly tell the user what completed (account ready + code redeemed, or what is still open).

## If stuck
- Auto-fill fails twice → hand over the box with a one-line instruction.
- No invite UI → recheck Settings → General → Usage; report if still missing.
- User already has an account → skip signup; go straight to redeem if within 48 hours.
