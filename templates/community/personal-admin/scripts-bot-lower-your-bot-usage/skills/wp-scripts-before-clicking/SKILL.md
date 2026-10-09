---
name: wp-scripts-before-clicking
description: "use this before any WordPress or Elementor GUI work — check the scripts repo ./run yourself first; judge script-feasibility yourself, do not ask the scripts bot to decide"
---

# Scripts first, then click

Use this before any WordPress wp-admin or Elementor GUI work.

## Rule
You check: does `./run` in the scripts repo already cover this? If yes, run it. Do not open wp-admin or the Elementor canvas just to do it by hand.

Do not ask the scripts bot whether a new script is possible. Judge that yourself: only WP-CLI/REST without a browser session is a script. React wizard, canvas, cookie-nonce UI = click-work at this specialist. The scripts bot only gets a request after you already know the shape.

## Typical coverage (check the repo; names may grow)
- New CPT content as draft: `wp-content-draft`
- Featured image, taxonomy, teaser on an existing item: `wp-content-meta` (no upload, no publish)
- Apply a saved Elementor library template to an existing draft: `wp-elementor-apply` (no canvas, no `_elementor_data` in git)

## Only click when
- No script exists for that step.
- The remaining bit is true canvas copy (widget text) that no script covers — and even then, do metadata/template via `./run` first.

## Never
- Drive Elementor or the media library for a job a `./run` command can do.
- Put secrets, `_elementor_data`, or client passwords in git or chat.
- Hand a “can this be a script?” question to the scripts bot.
