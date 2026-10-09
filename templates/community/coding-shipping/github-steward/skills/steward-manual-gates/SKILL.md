---
name: steward-manual-gates
description: "Use this when a GitHub step needs a human click (signup, connect, org form, SSO, org app, no-API actions), when a GitHub error appears, when the owner sends a screenshot or feels lost, or when they cannot sign in."
---

## When to use
- Once-only gates: create a GitHub user, verify email, CAPTCHA, 2FA, connect the connector, create an org, SSO Authorize, org third-party app grant, a fine-grained key when Projects return 403.
- No-API actions: repo archive, transfer, rename, visibility, delete; invites; Actions secrets; email notification settings. Try the connector first.
- A connector call fails, or they paste an error.
- A screenshot, "what am I looking at", "I am lost".
- Lost 2FA or cannot sign in.

## Inputs
- The gate or error text. The exact target URL. The read that proves success.
- Never a password, 2FA code, recovery code, or token. If one is pasted: do not repeat it; tell them to treat it as used.

## Steps
Coach one step per turn:
1. Shape: why (one line) · exact URL or **bold button** · what they will see · what to choose and skip · how they know it worked · exact reply phrase ("done") · two stuck fixes. Wait for done. Never stack steps, except one-page forms (the key): one short checklist, one "done".
2. Gates:
   - Signup: https://github.com/signup → email → password saved in their password manager → a lasting username (not a joke) → skip marketing → CAPTCHA → verify email → optional 2FA with recovery codes in their manager, not here.
   - Connect: start the GitHub connector's sign-in. Reason: "so I can set up your board, folders, and bots." Then "who am I".
   - Org: https://github.com/account/organizations/new → **GitHub Free** → skip invites. No API creates orgs on github.com.
   - Org invisible: grant the connector in the org's third-party access, or click **Authorize** for SSO.
   - Key (Projects 403 "Resource not accessible by integration" on the connector; reconnecting does not fix it): one offer, "GitHub won't let the sign-in manage boards. A key on one GitHub page (about two minutes) lets me manage your board. Reply yes, or skip to keep going without a board for now." No stand-in board issue.
     https://github.com/settings/personal-access-tokens/new → Resource owner = the org (not personal) → Repository access = **All repositories** → Read and write on Issues, Pull requests, Contents (repository) and Projects (organization), nothing else → expiry is their call (do not push one) → **Generate token** → save it through the secure secret input as GITHUB_PERSONAL_ACCESS_TOKEN, never in chat.
     Stuck: the org is missing from Resource owner (an org owner allows fine-grained keys in the org's Settings → Personal access tokens), or the key says "pending approval" (an org owner approves it in the same org settings).
     Then board work goes through GitHub GraphQL with the key; issues, PRs, and repos stay on the connector. A key-based GitHub plugin exists but is not needed for this. Using the key: steward-secrets.
   - No-API repo actions: `https://github.com/OWNER/REPO/settings` → Danger Zone → the one button.
   - Visibility change: first read stars, forks, and Pages so they know what they would lose (going private erases stars and watchers, detaches forks, and on Free takes Pages down). After the click, read the repo back to verify.
3. Skip paid banners, Copilot offers, card forms. No terms or "owned by a business" without their yes.

Translate an error (classify first, no blind retry):
- Name taken: check the repo. Theirs and fits → reuse. Else add a suffix. Never overwrite.
- Unverified email or two emails: https://github.com/settings/emails → verify → retry once.
- Org invisible: org gate above.
- No main (empty repo): create a README on the default branch, then continue. New repos always auto-init.
- Rate limit (403/429, "rate limit"): stop. About 5,000 signed-in calls per hour. Say when you will retry.
- Wrong account: "who am I" shows another login. Reconnect with the connect gate.
- Projects 403 "Resource not accessible by integration": not a sign-in problem. No reconnect; key gate above.
- SSO ("SAML"/"SSO"): click **Authorize** for the org.
- Org app restriction: an org owner approves the connector in third-party access.
- Plan limit (for example rulesets on a private Free repo): explain in one line; Recommended stay Free.
- Not found: the account may lack access. Say so. Never guess.
- Unknown: say so; quote only the safe part, never tokens.

Read the page (screenshot or lost):
- Name the page in one line and what it is for. Point to ONE control, or say "You can close this. I will do it here."
- Paid banner: "Skip that." Key or code visible: do not repeat it; steward-secrets. Error visible: translate it.

Recover an account (official GitHub recovery only):
- Say: "Do not paste codes or passwords here."
- Ask: "Do you have your recovery codes saved? Often in a password manager or github-recovery-codes.txt."
- At https://github.com/login use the 2FA recovery option: recovery code, passkey, security key, or GitHub Mobile.
- If none work: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials. Be honest: Support cannot restore a 2FA account with no recovery method left.
- Once back: new recovery codes into their manager. Reconnect if needed.

## Validate
- Signup, connect, recovery: "who am I" returns the login.
- Org: an org search finds it and listing its Projects works.
- Org invisible: a repo search in that org returns repos.
- Key: a GraphQL Projects list for the org, made with the key, returns its boards.
- No-API action: the read named in the calling skill.
- Error: the original call succeeds on one retry.

## Return
- One sentence in plain words: what happened or what worked.
- A link as receipt if one exists.
- One next step.

## Needs approval
- Nothing for Steward; the human clicks.
- Terms, "owned by a business", or paid choices need their own explicit yes. Default never.
