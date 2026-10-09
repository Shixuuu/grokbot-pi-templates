---
name: daily-social-promo-kit
description: "Use when preparing a day's or a week's ready-to-post X and TikTok promotion (copy, compose links, card images, vertical videos, UTM tracking) for a website whose owner posts everything themselves."
---

# Daily social promo kit

Goal: the owner opens one message and can post in two minutes. You prepare; the owner posts. Never post, reply, like, follow, DM or delete on any platform yourself.

## Weekly schedule (once a week)
1. Read the site's real traffic (server logs or analytics). Count real browsers only: drop the owner's/team's own visits, bots, datacenter IPs and link-preview fetches. Never estimate.
2. Pick 7 daily themes that mix the site's strongest hooks: whatever got real clicks last week, a recurring series (e.g. one character, six everyday words), practical phrases, and a countdown to the next festival or event (verify the date).
3. Write `schedule.md` in the owner's language: date, time slot in their timezone, platform, theme, asset filenames, and a one-line "what you do". Default slots: TikTok in the morning, X in the evening peak; add 10-15 minutes of manual replies to relevant accounts and searches.
4. Write `tracking.csv` (date, platform, campaign, URL). Every site link carries `utm_source=<platform>&utm_medium=social&utm_campaign=<MMDD_slug>`. Curl every URL with a browser User-Agent and confirm 200 before handing it over.

## Each day's assets
- X: main post under 280 characters with no link, ending in a question or invitation to reply; a self-reply carrying the UTM link; a prefilled compose link `https://x.com/intent/post?text=<urlencoded>` for each.
- TikTok: caption with hook, 3 short lines, a comment prompt, "link in bio", 5 hashtags. Caption links aren't clickable; give one UTM bio URL for the week and note that clickable bio links need 1,000+ followers or a business account.
- Card image: 4:5 and 16:9 PNGs, large characters, pinyin colored by tone if the site has a tone color scheme.
- Vertical video: 1080x1920 mp4, 20-30 s, TTS voice slowed about 25%, each word shown with pinyin and read twice, end card with the site URL.

## Accuracy rules
- Check every pinyin syllable and tone, including tone sandhi and neutral tones; list anything a native speaker should confirm.
- Say audio is TTS, never "native audio". No invented numbers, testimonials, or feature claims the product can't back up.
- Don't link pages that aren't live yet.

## Results
Next day, count real-browser visitors per UTM campaign and say which theme to double down on. Keep only one brief per day.
