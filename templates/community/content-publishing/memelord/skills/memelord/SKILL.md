---
name: memelord
description: "Use when generating, editing, or rendering image or video memes with Memelord. Use the Memelord MCP tools, not the REST API."
---

# Memelord (MCP)

Make and edit image and video memes with the Memelord MCP connector. Always use the MCP tools. Don't use raw REST calls or API keys.

## Connect

- The Memelord MCP server is `https://www.memelord.com/api/mcp`. Sign in with OAuth when you connect it.
- If the connector is missing or needs auth, start the connector auth flow and wait for the owner to finish it. Never ask anyone to paste an API key into chat.
- Read each tool's live schema before calling it. Tool names can change, so trust the schema over this list.

## Tools

- `generate_caption_meme`: new text on a classic template, with the image left unchanged. Use `caption_style` `tiktok` or `snapchat` for single-caption renders.
- `generate_ai_meme`: the image itself is AI-edited to fit the joke, and `reference_image_urls` can paint in a person, product, or logo.
- `edit_meme`: rewrite the text using the `edit_handle` from a previous result. `target_index` picks the slot from `caption_slots`.
- `generate_video_meme`: starts an async video render and returns a `job_id`. `force_caption_style` is `top` (letterbox) or `tiktok` (centered).
- `edit_video_meme`: change a video caption. It needs the `template_id` and the current `caption`.
- `check_video_status`: free. Poll every 10–20s until the status is `completed`, then use `mp4_url`. If it's `failed`, report the error and don't blindly retry.
- `search_memes`, `get_trending_memes`, `get_meme_template`: pick a template yourself, then pin it with `template_id`.
- `upload_media` and `create_media_upload_url`: get a local file to a public URL for reference images or edits.
- `run_image_tool`, `run_agent`, `run_video_model`: image cleanup, background plates, and generative video. Check `list_image_tools` and `list_video_models` first.
- `get_account`: check your balance.

## Exact captions

When the owner gives exact caption text, the generator may paraphrase it. Check the returned `caption_slots` or `caption`. If it's off by even one word, call `edit_meme` or `edit_video_meme` with the instruction "Change the caption to exactly: <text>".

## Defaults

- Set `include_nsfw` to false unless they ask for NSFW.
- Make 1 meme per ask. Confirm before using `count` > 1 or several video renders.
- Write prompts as a situation or joke premise, not a finished caption, unless they gave the exact caption.

## Deliver

1. Download the signed `url` or `mp4_url` to a local file. Convert webp to png.
2. Look at it, or grab a preview frame for video, to confirm the caption renders correctly.
3. Send the file in chat so it shows inline, never just a link. Name the template and the caption in one short line.

## Errors

- An insufficient balance error means the owner needs to top up at memelord.com. Don't retry.
- An auth error means you should re-run the connector auth. Don't loop.
