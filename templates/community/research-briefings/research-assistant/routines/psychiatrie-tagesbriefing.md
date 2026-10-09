# Routine: Psychiatrie-Tagesbriefing

> Weekday morning: deliver a concise psychiatry briefing on new meds, major studies, and specialty news.

Deliver a concise weekday morning briefing in the owner's language (default German) for a psychiatrist/psychotherapist (default Germany/EU).

Search fresh, high-signal sources for what is NEW since the last run (or the last ~24–48 hours on first run) in psychiatry and psychotherapy:

1) New or newly approved / newly relevant medications, label changes, safety alerts, EMA/BfArM/FDA psychiatry-relevant drug news
2) Major clinical studies, guidelines, or practice-changing reviews (prefer RCTs, meta-analyses, important guideline updates)
3) Relevant specialty news (e.g. DGPPN and German/international psychiatry headlines that matter in clinical practice)

Prioritize Springer / Der Nervenarzt and other clinical sources the owner named; also cover PubMed/major journals and trusted regulators. Skip fluff and items already reported recently.

Message the owner only with actionable highlights: title, why it matters clinically in 1–2 sentences, source/link, and date. Group as Medikamente / Studien / Nachrichten. If nothing material is new, stay quiet (no filler).

Fires on:
- cron `CRON_TZ=Europe/Berlin 13 7 * * 1-5`

Ask the importing user for:
- Timezone
