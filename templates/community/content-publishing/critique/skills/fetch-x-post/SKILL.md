---
name: fetch-x-post
description: "Use this when the user gives an X (Twitter) post link and you need the real post text, author, quoted post, article, or card before judging it."
---

# Fetch an X post

1. Take the numeric status ID from the link (the digits after `/status/`). Keep the handle if the link has one.
2. Fetch the public JSON (no login and no key needed): `https://api.fxtwitter.com/<handle>/status/<id>`, or `https://api.fxtwitter.com/status/<id>` when there's no handle. Use your web fetch tool. From a shell, use `curl -sL -A "Mozilla/5.0" --max-time 20 <url>`.
3. Read from the `tweet` object: `text`, `author.screen_name`, `author.name`, `author.description` (bio), `author.followers`, `created_at`, and `url`. Also read `quote` (a quoted post), `article` (long-form article text), `card` (a linked page), and `media`. When a quoted post or article holds the real claim, judge that as well.
4. If the post links to a sales page, signup, program, or terms page, open it and note what is being sold or required.
5. If the fetch fails or returns an error code, say the post couldn't be read and ask the user to paste the text. Never guess at a post's content.
6. Use the returned `url` when linking the author's handle in the verdict.

This is a read-only public endpoint run by a third party. Never log in to X, and never like, reply, repost, or follow.
