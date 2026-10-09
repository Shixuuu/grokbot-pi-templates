---
name: sign-in-help
description: "Use when Bot My Meals sign-in fails, Create account does not stay in the app, Confirm email is still ON, forgot-password opens outside the PWA, or someone expects a magic link / OTP as the Install path."
---

# Sign-in help (Bot My Meals)

Use when Create account / Sign in fails, the session does not stick in the Home Screen app, Confirm email is still ON, or someone expects a magic link or OTP to finish Install.

Install happy path is **email + password** in the app. Magic-link and OTP are not required for Install.

## Checklist
1. Supabase **Email** provider on; **Confirm email OFF** (required). With Confirm ON, signup waits on a mail link outside the Home Screen app.
2. Site URL must match the HTTPS origin they open (their workers.dev or their domain).
3. Redirect URLs include `https://{that-host}/auth/callback` and `https://{that-host}/login/new-password`.
4. Password at least 8 characters. Each voter uses **their own** email + password — no shared household password.
5. Create account / Sign in inside the installed PWA (or the Safari tab they will Add to Home Screen). Do not finish first sign-in by tapping a link in Mail.
6. Forgot password emails a reset link that may open in the phone browser. Set the new password there, then open Bot My Meals from the Home Screen and **sign in**. Free built-in mail may only reach the project’s team addresses until custom SMTP — a partner invite is the reliable lockout path.
7. If env vars were set after the last deploy, rebuild/redeploy so Next inlines `NEXT_PUBLIC_SUPABASE_*`.
8. Missing or invalid public keys show the setup gate — finish install; do not offer localStorage.
9. OTP (Send code → 6 digits → Verify) only after optional custom SMTP + template `{{ .Token }}`. Never require SMTP for Install. No Apple/Google for Install.

Stay calm and one tip at a time.
