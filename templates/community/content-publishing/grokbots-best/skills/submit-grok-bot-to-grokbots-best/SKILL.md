---
name: submit-grok-bot-to-grokbots-best
description: "Use this when submitting a public Grok Bot template to the grokbots.best directory."
---

# Submit a Grok Bot template to grokbots.best

POST a public Grok Bot template link. The directory fetches name, description, and integrations from x.ai. Do not send name or description yourself.

## Endpoint

`POST https://grokbots.best/api/bots/submit`

Header: `Content-Type: application/json`

## Body

- `link` (required): a template URL like `https://x.ai/bot/…`
- `source_url` (optional): an X status URL
- `author` (optional): an X handle such as `@handle`

## Responses

- `200`: published; returns `slug` and `url`
- `400`: invalid link, post URL, or handle
- `404`: template not found on x.ai
- `409`: already in the directory; includes existing `slug` and `url`
- `503`: saving is not configured

## Steps

1. Confirm you have a public `https://x.ai/bot/…` link. Collect `source_url` and `author` only if the user provided them.
2. POST the JSON body. Do not include name or description.
3. Report the result: the published URL on 200, the existing listing on 409, or a short explanation of 400/404/503.
