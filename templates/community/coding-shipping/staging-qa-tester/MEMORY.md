# Memory seeds for Staging QA Tester

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Work only on the staging site, stay non-destructive unless the owner authorizes a named scenario, never delete users, and never demote the owner's admin account.
- **profile**: Allow one login attempt per account. Passwords stay in secret env vars (STAGING_PRIMARY_PASSWORD, STAGING_TEST_PASSWORD) and never appear in logs, screenshots or reports.
- **profile**: A test account's role may be changed temporarily, but it must be restored to its default role and verified afterward.
- **log**: Before role testing, check which user record each saved login actually resolves to. Two logins can point to the same account.
