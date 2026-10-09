---
name: ai-resource-stack
description: "Use this when the user sends one AI topic (optionally beginner, builder, or research) to sweep papers, code, lectures, courses, Reddit, and official lab docs into a filtered stack."
---

Sweep every serious source class for one AI topic, then keep a large filtered stack. Search wide. Write dense. Never dump sludge.

After the stack, ask if they want a follow-up. Do not run extras until they answer.

## Inputs

- Topic: required. If vague ("AI", "LLM"), ask to narrow before searching.
- Level: beginner | builder | research. Default builder.
- One topic per stack.

## Search map (run all)

Do a real pass over each class. If a class has nothing that clears the bar, say so. Do not skip a class in silence.

1. Papers: arXiv first, then the official lab PDF if different. Surveys count for Start here.
2. Code: GitHub official impl, reproduction, or the library people actually import.
3. Models and datasets: Hugging Face only if it is the artifact for this topic.
4. Lectures: university courses, lab talks, author talks, conference recordings.
5. Courses: visible syllabus. Official / university / lab short courses beat marketplaces.
6. Reddit: threads with useful comments (methods, warnings, recipes), not memes.
7. Official labs: docs, cookbooks, blogs, forums of the people who shipped the work (OpenAI, Anthropic, Google, DeepMind, Meta, xAI, Mistral, Microsoft, Hugging Face, PyTorch, etc. as class examples, not a checklist).
8. Guides: only primary notes (author, lab, course notes). No SEO "complete guide".

Prefer the official page over a blog that rewrites it.
Never invent title, URL, date, authors, stars, views.
If you did not open it, do not list it.

## Keep / cut

Keep only if it is a primary source or clearly used by serious work AND it is inspectable (paper, repo, lecture, cookbook, syllabus).

Cut: listicles, affiliate courses, star-bait repos, 60-second AI news, meme Reddit, abstract-rewrites, duplicate coverage of the same object.

If several items clear the bar, keep more, not fewer. Do not stop at 3 if 10 are actually good.

## Detail bar (every kept item)

Number every item in the file (P1, C1, W1...) so the human can say brief P3.

Papers:
- title | year | url
- who / venue if you saw it
- 1 line: the result
- 1 line: why it matters for THIS topic

GitHub / HF:
- name | url
- 1 line: what you get
- 1 line: when to open this vs the others

Watch:
- title | speaker | url
- 1 line: what this video is for (intro / math / walkthrough)

Courses:
- name | url
- 1 line: first module to open and why

Reddit:
- title | url
- 1 line: the useful part (which warning, recipe, or link)

Labs and cookbooks:
- source + page title | url
- 1 line: what the page teaches

No fluff. No hype words. Two short lines max per item in the stack.
Save the long writeup for the brief command.

## Caps

Start here 5
Papers 12
Code 12
Watch 8
Courses 6
Reddit 6
Labs and cookbooks 10
Skip 5
Chat <= 35 lines.

Full stack -> /stacks/{slug}.md
"deeper" or "more papers" -> expand only that section by 8, same bar.

## Chat card

```
# {topic} | {level}

{4 lines: what this topic is right now, what is settled, what is still messy}

## Start here

1. name | url | why first
2.
3.
4.
5.

Full stack: /stacks/{slug}.md
{N} items cleared the bar.
I didn't publish this.
```

## File

```
# {topic} | {level}

{6-8 lines: map of the topic for this level}

## Start here
{5 items, full detail bar}

## Papers
P1 ...

## Code
C1 ...

## Watch
W1 ...

## Courses
E1 ...

## Reddit
R1 ...

## Labs and cookbooks
L1 ...

## Skip
{what you saw and rejected, so the human knows the sweep happened}

## Gaps
{classes you could not open or verify}
```

## After every stack

After the chat card, ask exactly this and stop:

Need a follow-up?

1. brief {id or url}  -> tight notes on one source
2. compare {id} {id}  -> which to open first and why
3. path 2h / path 7d  -> ordered route through this stack
4. setup {id}         -> clone/install/run notes for one repo
5. refresh            -> search again, keep the same bar

Reply with the number or the command. Or send a new topic.

Do not run 1-5 until they answer.
Do not brief every item just in case.

## Follow-ups (only when asked)

### brief {id|url}

Open that one source again.
Chat + file /stacks/{slug}-brief-{id}.md

```
# Brief | {title} | {url}
Type:
For this topic:
## What it is
5-8 lines
## Worth stealing
3-7 bullets
## Skip inside it
## Next
one 20-minute move
```

If it will not open: say so. Do not fake it.

### compare {id} {id} [optional third]

Only items already in the stack.

## Same job?
## Pick this if...
## Skip that if...
## Open first: {id} because...

Max 20 lines.

### path 2h

Five steps max from Start here + one paper or one repo.
Times that fit 2 hours.

### path 7d

One step per day, 30-60 min, using items already in the stack.
Do not add new links unless a gap blocks the path.

### setup {id}

Only for Code items.

## Clone
## Install
## Run
## First file to read

Do not run install commands unless they type INSTALL.

### refresh

Repeat the search map for the same topic and level.
Write a new file. In chat, list only what is new or dropped.

## Hard rules

- Do not clone or install unless they name one repo and type INSTALL.
- Do not post.
- Never invent bibliographic data. If you did not open it, do not list it.
