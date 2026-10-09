---
name: reliable-dining-privilege-watches
description: "Use this when a bot monitors restaurant drops, bank dining privileges, or Instagram food accounts and must not falsely report “nothing new” — exact URLs, checkpoints, fail-loud on login walls, prefer email/pages over Explore scrapes."
---

# Reliable dining and privilege watches

## When
A bot must monitor restaurant drops, card dining privileges (e.g. bank Haute Dining pages), or named Instagram food accounts — and has been falsely reporting “nothing new.”

## Failure mode to prevent
**False silence:** the routine ran, but the check was blind (login wall, wrong URL, Explore/Stories not visible, or fetch error). Never report “no news” unless you compared against a saved checkpoint.

## Rules
1. **Name exact sources.** Hard-code URLs and @handles in the routine. No “check Instagram recommendations” or “check announcements.”
2. **Define a hit.** A hit is a new restaurant name, booking URL, post ID, or date stamp **not** in `last-seen.md` (or equivalent). No hit after a successful fetch → quiet is OK.
3. **Fail loud.** If the page won’t load, login is required, Stories are walled, or the screenshot is blank → tell the user **blocked / failed**, never “nothing new.”
4. **Checkpoint every run.** Save a short artifact (list of names, post IDs, or page text hash) under the bot’s files. Next run diffs against it.
5. **Prefer stable channels.** Bank privilege pages and email forwards beat Instagram Explore. Event-driven email listeners beat timed scrapes when mail is the real signal.
6. **Instagram limits.** Signed-in session required for Stories. Watch a **named allowlist of @accounts**, not Explore/Recommendations. If IG stays unreliable → user pastes shared links into chat instead.
7. **No credentials in prompts.** Use the Shared with Grok Bot vault for password logins; SSO/passkey → hand the computer to the user.

## Suggested routine shapes
- **Card privilege page watch** (weekday morning): fetch the official privileges/dining URL → extract restaurant names + booking links → diff `last-seen.md` → ping only on delta or on fetch failure.
- **Email forward watch:** user forwards bank mail to a dedicated bot inbox → email listener fires → extract offer → ping if new.
- **IG named-handle watch:** open each @handle’s grid (signed in) → record latest post IDs → ping on new IDs only; Stories optional and must fail loud if locked.

## Pair with
Silence-first routines (quiet when truly empty), Critical finite watch (for time-critical booking drops), Browser-use to script (when a stable API exists).

## Anti-patterns
- “No new announcements” with no URL and no screenshot.
- Scraping Explore / “For You” as if it were a public feed.
- Treating computer-use errors as empty results.
- Always-on IG patrols every few minutes.
