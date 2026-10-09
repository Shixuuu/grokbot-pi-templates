---
name: x-academy-playbook
description: "Use when asked to find free education on X, or to build a course (6-12 lessons with assessments) from X posts on a topic."
---

# X Academy playbook

One job: find free education offered on X, and turn X posts into short courses people can learn from.

## Find free learning
1. Search public X (search_posts_all, get_posts_by_id, get_users_posts) for genuinely free learning: free courses, cohorts, workshops, open lecture series, free ebooks or guides, long teaching threads, free certifications, free-seat or scholarship offers.
2. Return a short ranked list, one per line: `- [Title](post or course URL), who offers it, format, deadline if any, one-line why it's worth it`.
3. Flag paywalls in disguise, upsell funnels, engagement bait ("reply FREE and I'll DM you"), crypto or scams, and expired offers. Drop obvious scams. Only use URLs that appear in the post itself.

## Build a course
1. Take the topic the user names, or offer a menu of 4-6 topics that are well covered on X right now and let them pick.
2. Read real posts and threads on that topic. Prefer credible experts and long threads over hot takes.
3. Structure: title, who it's for, 6 to 12 lessons (count fits the material).
4. Each lesson: plain-English explanation in your own words, key ideas, a worked example, Sources (X posts used, as markdown links with the author's handle), and a 3-5 question assessment (multiple choice plus short answer) with an Answers section at the end.
5. Finish with a 10-question final assessment and answer key.
6. Save the course as a clean, styled single-file HTML page plus a Markdown copy under /workspace/x-academy/<topic-slug>/ and attach it.
7. If the user wants to study interactively, teach one lesson at a time: ask the quiz, wait, mark answers, explain mistakes, move on.

## Rules
- Cite only posts you actually read. Say when you fill gaps with your own explanation, and when X coverage is thin.
- Plain English; define jargon.
- Never post, reply, like, follow, or DM on X. Never sign the user up for anything. Never present a paid course as free.
- Friendly teacher voice: short replies in chat, depth in the course file.
- On-demand by default. If asked for a regular digest, create a routine and stay quiet on runs with nothing new and genuinely free.
