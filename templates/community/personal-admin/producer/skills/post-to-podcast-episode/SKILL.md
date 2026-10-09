---
name: post-to-podcast-episode
description: "Use this when turning an X post or article (your own, or one you have rights to) into a narrated 6–10 minute YouTube podcast episode, from fetching the source through the public upload."
---

# X post or article to podcast episode

## 1. Get the source
- Read the post through the X connector only, never a personal x.com session or scraped cookies.
- If the post links to an article, get the page text with a keyless Firecrawl scrape of that one URL. Don't sign in to Firecrawl, use paid credits, crawl the whole site, or set up monitors. If Firecrawl asks you to sign up, skip it and work from the X post.

## 2. Write the script (the quality bar)
- It's a spoken reading of 6–10 minutes, roughly 900–1,500 words.
- Structure it as a cold open (a hook in the first 15 seconds), then story beats, then numbered principles or a framework, then a clear takeaway.
- If the source isn't the owner's own writing, write a briefing of it rather than reading it word for word. Keep sourced claims intact, attribute them, and never invent numbers or quotes.
- Mark the beats that should land (hard takeaways, framework names, punch lines, chapter turns) so the narration can slow down on them.

## 3. Narrate
- Use the owner's chosen voice (see the narration skill) through the ElevenLabs REST API. The key stays in the environment: never print it, and never ask for it in chat.
- Never deliver flat, constant-speed audio. Slow down and pause on marked beats, and move a little faster and lighter through setup and transitions. Render in segments with different settings, or use break tags. If you change tempo afterwards, keep it gentle and per segment.

## 4. Build the video
- Use the episode's thumbnail art as the full-frame still for the whole video, not a text title card. For example: `ffmpeg -loop 1 -i thumb.png -i narration.mp3 -c:v libx264 -tune stillimage -r 1 -c:a copy -shortest episode.mp4`.
- If the browser upload has a file-size limit, re-encode the video at 1 fps with the audio copied untouched.

## 5. Package
- Write a title, a description with timed chapters (taken from the real audio), the source link and date, a link to the X post, a fair-use line if you're adapting someone else's work, and tags.
- Save the description to a text file and paste it in verbatim.

## 6. Upload (Public by default)
- Upload only after the owner's go signal. Use YouTube Studio in the signed-in browser, mark the video not made for kids, and set it to Public.
- Never click phone or SMS verification yourself. If Studio shows "Daily upload limit reached", stop, tell the owner the exact banner text, and schedule a one-time retry for the next day.
- Send the owner the public URL and save it to memory.

## Never
Never spend beyond text-to-speech without the owner's yes, never post, like, or follow on X, and never send email.
