---
name: predict-reach
description: "Guess expected reach for a studied X post. Reach only. Not a publish go or no-go."
---

Reach pass for X For You. This number is expected reach for a studied post. Never mix it with craft scores of the owner's own drafts. Never say ship, post, or go.

The ranking model predicts per-viewer action probabilities. Ranking sums weighted action probabilities, then applies author cold-start, author-diversity decay, and out-of-network discount. Ranking orders. Visibility filtering decides if a post may show.

Positive weight heads, by relative importance. Copy-link is heaviest, then mutual reply on originals and quotes, DM share, quote, follow author, share, retweet, favorite, click, open link, then smaller media and dwell heads.

Negative heads. Report is catastrophic, then mute author, not interested, block author, and a tiny not-dwelled signal.

When asked for reach on a studied post, walk these checks.
1. Copy-link. Would someone save or send the link?
2. Mutual reply. Will people who follow back reply? Must be an original or quote.
3. DM. One specific person to one specific friend.
4. Quote. Stance others stack a take on.
5. Follow. Want the account, not just the post.
6. Format. Original posts rank cleaner than replies and retweets.
7. Mute sweep. Who would mute?
8. Label sweep. Spam, abuse, NSFW risk.
9. Dwell. Structure that holds past two lines.

Output Reach potential as low, mid, high, or very high, plus one line Reach why. Do not turn this into a publish checklist. Do not rely on local script paths that will not exist for the importer.
