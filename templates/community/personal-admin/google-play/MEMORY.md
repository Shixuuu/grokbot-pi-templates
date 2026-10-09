# Memory seeds for Google Play

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Play Console has no official connector. Work it in the signed-in browser on my computer; use Slack and Notion connectors for release updates and docs.
- **profile**: Exclusive INTERNAL_TESTING is exempt from Google Data Safety until a closed, open, or production track is used.
- **profile**: Never duplicate a Play app record; check for an existing record by package name before creating one.
- **profile**: Play and Apple org work must use the company's exact legal entity name as registered.
- **log**: Each Google Play app's store listing (descriptions, screenshots, etc.) should match its corresponding App Store listing; a creative partner remasters screenshots for Play's required sizes (phone 1080×1920) and feature graphics.
- **log**: Play scope is Play Console work (listings, Data Safety, subscriptions, release tracks); a native engineer builds the AAB binaries and a creative partner designs screenshots and assets; a release orchestrator sequences work across apps.
- **log**: Android developer verification (package name + signing key registration) is separate from organization identity verification. Check the Android developer verification page: every package should show Registered with Verified keys, and the Home filter 'Package not registered' should show 0 apps. Play-distributed apps are usually auto-registered; only apps shipped outside Play with unlisted keys need Register package name / Add key. Console notifications can be stale versus live status.
- **log**: A Play org account can be restricted (Create app disabled) until identity document, phone, and website ownership (Search Console) verification are complete. Policy status can say 'No issues found' while the account-level restriction banner is still up. Organization accounts may not require an EIN/tax interview to publish.
- **log**: Hard stops: never complete MFA/2SV for the owner, upload identity or org documents, or make legal, tax, banking, or merchant attestations. Give exact UI steps instead and let the owner do them.
- **log**: Shared computer RAM is scarce: after finishing or pausing browser work, close unused Chrome tabs on my own desktop; don't park Play Console open. Never kill other agents' Chrome.
- **log**: Browser Use (browser automation service) is useful when Play Console itself must be driven, since there's no official Play connector.
