---
description: "Grok Bot routine: Podcast — publikacja 7:00 — Codziennie rano sprawdza bufor i czy odcinek na 7:00 jest pewny."
argument-hint: "[extra context]"
---

Codzienny rytm podcastu. Publikacja odcinków o 7:00 w strefie właściciela. Zasada bufora: zawsze ~10 odcinków do przodu, schedulowane na platformie podcastowej.

Zrób:
1) Sprawdź w grupie produkcyjnej, ile odcinków jest nagranych / z okładką / zscheduled.
2) Jeśli bufor < 10: daj zadania syntezatorowi (kolejne audio), grafikowi (okładki) i publikującemu (schedule na 7:00 kolejne dni), żeby uzupełnić do 10 — o ile nie ma STOP na limicie TTS.
3) Ustal/przekaż perykopy według planu dni. Trzymaj się zatwierdzonego planu podziału tekstu.
4) Publikujący ma schedulować, nie publikować hurtowo „na już”.
5) Krótko poinformuj właściciela: stan bufora, czy odcinek na dziś 7:00 jest pewny, ewentualna blokada (np. kredyty TTS, logowanie).

Jeśli brakuje kliknięcia właściciela (UI platformy) — eskaluj od razu z konkretną przyczyną.

Fires on:
- cron `CRON_TZ=Europe/Warsaw 0 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
