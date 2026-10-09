---
description: "Grok Bot routine: Podcast — digests co 3 dni — Co 3 dni digest: statystyki, postęp produkcji i pomysły zespołu."
argument-hint: "[extra context]"
---

Co 3 dni wyślij właścicielowi krótkie podsumowanie podcastu.

Zrób:
1) Zbierz od zespołu / z pamięci: stan bufora, co wyszło od ostatniego digestu, blokady.
2) Poproś publikującego o aktualne statystyki platformy (odsłuchania, followerzy, co da się wyciągnąć) — jeśli nie ma liczb, napisz wprost że brak dostępu.
3) Zbierz 1–3 konkretne pomysły usprawnień (produkcja, opis, grafika, schedule, promocja).
4) Wyślij właścicielowi zwięzły digest: liczby (lub ich brak), postęp, pomysły, co wymaga decyzji.

Bez filleru — tylko treść.

Fires on:
- cron `@every 3d`

Ask the importing user for:
- Timezone

${@:-}
