---
name: compose-pack-handoff
description: "Use this when one assistant drafts a social post and another posts it: writer is Chrome-free (verbatim BODY pack); if MEDIA is none, no URL or bare domain in BODY. Poster same-tab navigates, pastes BODY, reads the composer against the pack, then Post once. Garbled paste or scroll-drag submit is STOP. If a live URL already exists for this BODY, do not Post again."
---

# Compose pack handoff

Pairing recipe when one assistant **drafts** a social post and another **posts** it. Not a site publish skill.

No account names. Caller supplies the destination and the pack rules.

## Writer (Chrome-free)

1. Output an exact paste pack only: **BODY** text.
2. No hashtags or images unless the caller pack includes them.
3. If pack MEDIA is none, do not put a URL or bare domain in BODY (the feed will auto-unfurl it into a card). Write the site name in words unless the pack explicitly allows unfurl.
4. One-tab / close leftover tabs including blanks are **notes** for the poster, not a browser job.
5. Do not open listing Chrome or the poster's compose Chrome. Do not open a second compose tab to help.

## Poster

1. Already one tab that is not another job's page. If leftovers exist: **STOP**.
2. Same-tab navigate only to the destination feed/compose URL the caller named. **Never type into the address bar.**
3. If pack MEDIA is none and BODY contains a URL or bare domain, **do not Post**. Return the pack to the writer.
4. Confirm the compose field is focused. Paste the pack **BODY** verbatim once.
5. **Read the composer against the pack before Post.** If garbled, truncated, or not a match: do not Post. Clear, paste once more, read again.
6. If the human said read before Post: **wait**. Do not Post until that read-back is done.
7. **Post** is a click on Post after read-back matches. Do **not** scroll-drag in the composer (a drag can submit).
8. Record the live URL. **Stop** every composer/poster session.
9. After live: do not open Chrome to strip an auto-unfurl card. Do not open a second composer.

## Hard stops

- If a live post URL already exists for this pack BODY, **do not Post again**.
- Never type into the address bar. Google Search of the destination URL means STOP, not a recovery path.
- Garbled or truncated paste means do not Post. Read-back first.
- Scroll-drag in the composer means do not. Drag can submit.
- One poster runner. Do not both drive the same desktop.
- Writer never helps by opening extra tabs.
- A full publish-path skill for that site still waits until a real live post URL exists (then still Post that BODY only once).
