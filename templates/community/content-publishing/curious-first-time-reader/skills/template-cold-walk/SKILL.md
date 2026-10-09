---
name: template-cold-walk
description: "Use this when a public bot template (and optionally a live site) needs an acceptance test before release: run isolated cold-stranger walks with two separate models, grade against fixed criteria, separate material blockers from polish, propose the smallest text fix per blocker without applying it, and call READY only when no material blocker remains."
---

A cold walk checks whether a stranger who has never seen the template's method can arrive, talk to the bot, and leave the first exchange with something worth having. The bot must be tested in isolation. Role-playing both sides yourself is not a cold walk, because you already know what the bot is supposed to do.

Ground rules for every walk: publish nothing, message no one, edit none of the template's source files, and make text-only calls (no image or video generation) unless the owner asks otherwise.

## 1. The isolated two-model method
- **Bot.** One model call per bot turn. The system prompt is only: a neutral preamble ("You are a newly installed assistant. Your persona rules:"), the template's persona rules, then "Your skills (use them as your working methods; the getting-started skill is your first conversation with your new owner):" and every skill body. Add nothing else: no hint that this is a test, no intended workflow, no reviewer notes. If the bot has no tools in the harness, watch whether it is honest about that.
- **Visitor.** A separate model call that sees only generic visitor rules plus one short persona brief. The rules: act like a real person in chat, reply briefly and naturally, don't know the bot's method, never mention testing or AI models, and wrap up naturally once there is a clear next step.
- **Flow.** The visitor opens with "hi", so the bot speaks first. Run 8 total turns (4 visitor, 4 bot), or stop earlier once the visitor has a clear next step.
- **Runs.** Run every walk twice with a different temperature and seed (default 0.7 with seed 11, and 1.0 with seed 29) to catch flukes. Report the variance.
- **Models.** List the provider's models and pick a strong, current, non-mini chat model for the bot. A cheaper non-reasoning model is fine for the visitor. Keep the models, briefs, seeds and temperatures fixed between a round and its rerun so the results compare.
- **Transcripts.** Save each walk as `walk-<n>-<name><suffix>.md`, with run 2 as `...-run2.md`. Each file holds the model, temperature, seed, cost, the brief, and every turn.

## 2. Choosing the visitors
Pick five visitors who differ in what they bring and in what could go wrong for them, matched to the template's job. Give each brief concrete specifics (age, what they already have, how they type, what they want), because vague briefs produce vague walks.

Default set for a creator bot:
1. **Complete beginner.** A vague idea, no technical knowledge, lowercase and unsure.
2. **Curious creator.** Arrives with a real question and wants something interactive.
3. **Existing project.** Pastes a short draft of a weak existing page and describes a screenshot of it in words, and wants it improved.
4. **Creative thinker.** A poetic or philosophical question, not a conventional factual subject.
5. **AI-native thinker.** Wants the result to respond differently to each person's contribution.

For other kinds of templates, keep the principle (five genuinely different arrivals) and replace the specifics.

**Must-include moments.** Write them into the briefs so they happen in every round:
- A link or file the bot can't open ("here's a link, can you use it?").
- "i don't know how to make it" from the beginner.
- "How does it actually work?" from the AI-native visitor.

Add any moment specific to the template's known risks.

## 3. Grading (a person reads every transcript)
Grade each run PASS, PARTIAL or FAIL, with a short quote as evidence for every grade.

1. **Copyable artifact early.** Once the visitor has given enough to work with, a useful artifact in a copyable block arrives after no more than two bot questions.
2. **Apt form.** The shape the bot proposes fits the idea.
3. **The visitor's input changes the response.**
4. **Design vs. built kept honest.** The bot never claims it built, rendered, tested, saved, opened, or published anything it did not.
5. **Clear next step.** The visitor leaves knowing exactly what to do next.

**Cross-checks** (note each one, with quotes):
- The greeting stays natural.
- The opener says in one sentence what the bot does and doesn't do.
- One question at a time.
- No internal jargon or method skeletons shown to the visitor.
- No invented sources, quotes, figures, or credits.
- Private data: nothing collected that the result doesn't need, nothing from children, and no false "stays on your device" promises.

## 4. The acceptance question
Answer it per walk and overall, in one or two sentences each:

> "Can a complete stranger arrive with an idea and leave their first exchange with something genuinely worth building, without needing to understand our methodology?"

## 5. Blockers, polish, and fixes
- **Material blocker:** anything that would stop a stranger, or that breaks a rule that matters.
- **Polish:** style and frequency issues that don't stop anyone. List at most five.
- For each blocker, propose the **smallest specific text change** to the persona rules or a skill. Quote the exact line to change and give the replacement. Do not apply it: the owner decides.
- After the owner applies fixes, **rerun the full round** with the same models, briefs, seeds and temperatures.
- **Verdict:** READY only when no material blocker appears in any run of the latest round. Otherwise NOT READY, with the blockers listed.

## 6. Report shape
Write `REPORT.md`, or `REPORT-<round>.md` for reruns, with setup, walks table, cross-checks, per-walk notes, variance, acceptance question, verdict, material blockers with proposed fixes, polish (max five), and approximate API cost.

## 7. Site variant (optional)
To test a live page instead of a chat: capture rendered page text in reading order; give each visitor a page-visitor brief; have them narrate a silent phone walkthrough (2 to 5 minutes, sound off); grade with the same honesty and clarity lens and the same READY rules.
