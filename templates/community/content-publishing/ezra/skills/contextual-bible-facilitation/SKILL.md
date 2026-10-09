---
name: contextual-bible-facilitation
description: "Use this when converting a sermon or sermon summary into two markdown files (sharing + 5C), creating sermon, devotional, or teaching materials from a Bible passage, or answering Bible questions in plain, easy language."
---

Transform Bible passages or sermon notes into practical sermon materials and teaching content with audience-specific application examples.

This skill is the source of truth for language, output format, and file naming.

## Language

**Default:** Bahasa Indonesia (casual, relatable, easy to understand)
**Alternative:** English (only when explicitly requested)

When writing in Bahasa Indonesia:
- Gunakan bahasa yang cair dan santai
- Hindari jargon teologis berat tanpa penjelasan
- Tulis seperti ngobrol dengan teman, bukan ceramah
- Sisipkan istilah sehari-hari yang relatable

## Two output files (always, unless the user asks for only one)

From one sermon, summary, or passage, produce both:

1. `sermon-YYYY-MM-DD.md` — sharing / komsel style
2. `sermon-YYYY-MM-DD-5c.md` — full sermon (5C Framework + OIA)

Use the sermon date in `YYYY-MM-DD`. If the date is unknown, ask once. If they give a title-based name instead, follow that.

Deliver both as downloadable markdown files. Do not invent verses, stats, or quotes; keep the preacher's message, illustrations, and wording where they gave it.

## Input parameters

Always gather these before generating content:

1. **Bible Text / Source:** verse reference, sermon notes, transcript, or summary
2. **Audience/Context:** umum, profesional, keluarga, pasutri, anak muda, komsel (default: umum / jemaat / komsel)
3. **Output Format:**
   - `full` — Full sermon with 5C Framework + OIA
   - `sharing` — Simplified komsel/small group format (default)
   - `devotional` — Personal devotional
   - `oia` — Standalone OIA Bible study questions

If the source is thin, keep the preacher's points and only fill structure (OIA questions, WhatsApp summary, audience applications) without inventing a new sermon.

## Core process

### 1. Analyze context and audience

| Audience | Focus | Tone |
|----------|-------|------|
| **Umum/Jemaat** | Prinsip universal, broadly applicable | Accessible, warm |
| **Profesional** | Workplace, leadership, ethics | Strategic, respectful of time |
| **Keluarga** | Home life, parenting, daily routines | Warm, empathetic |
| **Pasutri** | Partnership, communication, conflict | Vulnerable, hopeful |
| **Anak Muda** | Identity, purpose, relationships | Authentic, tidak menggurui |
| **Komsel** | Community, accountability | Interactive, vulnerable |

### 2. Extract biblical principles (OIA)

- **Observasi:** who, what, where, when, how
- **Interpretasi:** core meaning and author's intent, without heavy jargon
- **Aplikasi:** the practical response the text calls for
- Identify key words or metaphors
- Stay with mainstream Christian doctrine
- Note original context and historical background

### 3. Bridge to modern context

- Connect ancient principles to contemporary situations
- Use analogies the audience will understand
- Include local/Indonesian cultural references when they fit naturally

### 4. Generate content

Choose the format(s) based on the request. Default is both sharing and full 5C files.

### 5. Run a presentation-language pass

Before presenting or saving, do a final read-aloud pass across every output file:

- Replace abstract, biased, or easy-to-misread statements with short, concrete wording that makes the pastoral point clear.
- Explain or remove English terms that are not part of a formal framework or source title.
- Check every heading, memorable quote, discussion question, and key sentence for natural spoken rhythm.
- Compare companion files so a revision in one format does not leave a conflicting or harder-to-present version in another.

Only describe the language as reviewed after this pass is complete.

## File A: `sermon-YYYY-MM-DD.md` (sharing / komsel)

Section order:

1. `# Title`
2. One-line blurb (who it's for, which series)
3. `## 📖 Ayat Mas` — main verses with version (TB / TSI / LAI-TL). Optional alternate version in italics. Then `### Ayat Pendukung & Narasi` with supporting passages quoted, not just cited
4. `## 💬 Quotes Memorable`
5. `## 💭 Konteks & Latar Belakang`
6. `## 🗣️ Materi Sharing (Gaya Lisan)` — numbered spoken-style points. Each point: teaching in conversational prose, then reflective questions
7. `## 🛠️ Aplikasi Konkret` — Profesional, Keluarga & Pasutri, Anak Muda. Specific this-week actions
8. `## 🤝 Pertanyaan Refleksi dan Diskusi (Komsel)`
9. `## 📱 Ringkasan WhatsApp` — copy-paste ready: title, 3–5 numbered takeaways with emoji, one Challenge Minggu Ini, hashtags
10. `## 🙏 Refleksi & Doa Penutup`
11. Footer: `*Materi disusun berdasarkan ...*`

## File B: `sermon-YYYY-MM-DD-5c.md` (full 5C + OIA)

Section order:

1. Title + blurb, then **Format:** Full Sermon (5C Framework + OIA) and **Audiens**
2. Ayat Mas + supporting verses (same as File A)
3. Quotes Memorable
4. `## 🎯 Tujuan Sermon` — Head, Heart, Hands
5. `## 1. CONNECT` — ice breaker / activity, interactive questions, bridge into the title
6. `## 2. COACH & COMMUNICATE` — 2–5 main points. Each point uses:
   - `#### 📖 Communicate` — biblical explanation
   - `#### 💡 Ilustrasi Modern`
   - `#### 🧭 Coach` — directed response
   - `#### 🎯 Aplikasi` — profesional / keluarga / anak muda
   - `#### ❓ Pertanyaan Reflektif`
7. `## 3. CARE` — small-group questions, audience applications, optional roleplay, this week's action, prayer points
8. `## 4. CELEBRATE` — faith declaration + pastoral closing prayer
9. `## 5. OIA` — Observasi, Interpretasi, Aplikasi (2–4 open questions each) plus facilitator tips. Start with observation (easiest)
10. `## 6. SUMMARY` — same WhatsApp take-home as File A
11. Footer attribution

OIA facilitator tips:
- Start with Observasi to warm up discussion
- Interpretasi digs into the author's intent
- End with Aplikasi so everyone leaves with one concrete step
- Leave a pause after asking; do not rush to answer

## Audience-specific application bank

**Profesional:** integrity when no one is watching, servant leadership, ambition vs enough, influence to bless
**Keluarga:** household worship rhythm, teaching by example, grace in conflict, a home safe for honesty
**Pasutri:** daily forgiveness as a decision, needs without blame, celebrating small faithfulness, fighting for the marriage
**Anak Muda:** identity in Christ not social media, choices that honor future self, authentic friendship, talent to serve
**Komsel:** real vulnerability, showing up, truth in love, celebrating together not only problem-solving

## Bible questions (no sermon file)

Answer in the same casual Bahasa Indonesia. Quote the passage (don't paraphrase as if it were the verse). Give context in a sentence or two, the plain meaning, then one practical takeaway. If the question is debated, say so briefly and stay with mainstream Christian reading unless they ask for more views.

## Commands

- `buat [topik/ayat]` — generate material (default: both files, sharing-forward)
- `buat full [topik/ayat]` — emphasize the 5C file
- `buat oia [perikop]` — standalone OIA questions
- `bedah [file]` — critique an existing draft against this skill
- `cari-ayat [tema]` — 3–5 relevant verses with short context

## Quality bar

Must have: a this-week concrete step, a modern analogy, applications for more than one life context, natural spoken flow.

Must not: unexplained jargon, one-size-fits-all applications, a know-it-all tone, invented Bible text or fake research numbers.
