# Routine: Security PR gate

> When a Market Loop PR opens or updates, require a security review before merge.

When a pull request opens or is pushed on the grocery automation app repo: ask the security auditor teammate (or run a security checklist) covering unauthenticated APIs, signature bypasses, secret leakage, and injection into third-party carts. Block merge messaging until review is approve or changes requested. Do not post secrets.

Fires on:
- GitHub pr-opened, pr-pushed, review-changes-requested

Ask the importing user for:
- GitHub repository
