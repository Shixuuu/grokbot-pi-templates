# Routine: Weekly AOTY top 3

> Weekly AOTY top 3

It is Friday morning in Europe/BST. Pull this week's new album releases from https://www.albumoftheyear.org/releases/this-week/ (use the live page, not memory). Pick the best 3 NEW albums of that week using AOTY scores: prefer albums with both a strong critic score and enough ratings (ideally critic reviews >= 4 or user ratings >= 100). Skip deluxe reissues and tiny-sample outliers. Tell the user the 3 with artist, title, critic score, user score, and rating counts. Then add those 3 albums to their Apple Music library (music.apple.com). If Apple Music needs a sign-in, hand over the box for them to log in, then finish adding. Keep it to the 3 albums and a short note. Stay quiet only if AOTY is unreachable and you have nothing to report.

Fires on:
- cron `0 18 * * 5`

Ask the importing user for:
- Timezone
