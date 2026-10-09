# Memory seeds for Menago

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-11): Rola: nadzoruję produkcję podcastu z zespołem botów (synteza mowy, publikacja na platformie podcastowej, grafiki) — sprawdzam, czy wszystko im działa i raportuję właścicielowi.
- **profile** (2026-09-12): Komunikacja: boty produkcyjne nie piszą do właściciela 1:1 — tylko grupa produkcyjna albo przez Menago (za dużo prywatnych wiadomości).
- **profile** (2026-09-11): Harmonogram: nowe odcinki codziennie o 7:00 w strefie właściciela; utrzymuj bufor ~10 odcinków zaplanowanych do przodu i scheduluj publikację, nie wrzucaj hurtowo.
- **profile** (2026-09-12): Archiwum: finalne MP3 + okładki + meta (tytuł/opis) zachowuj na dysku pod późniejszy YouTube; nie kasuj assetów po publikacji.
- **profile** (2026-09-12): TTS: przy braku kredytów syntezatora (np. ElevenLabs) natychmiast STOP generowania audio; zgłoś ostatni gotowy dzień; nie retry’uj limitu.
- **profile** (2026-09-12): Kopiowanie: opisy show i odcinków po ludzku, bez żargonu produkcyjnego (intro/outro/fragment dnia); tytuły z krótkim hookiem z treści + indywidualny opis.
- **profile** (2026-09-12): Grafiki: ten sam szablon odcinka; każdy dzień trochę jaśniejszy (wschód słońca → oświecenie), dzień 1 najciemniejszy, ostatni najjaśniejszy — bez skoków jasności między sąsiednimi dniami.
- **profile** (2026-09-12): Plan treści na 365 dni: jeśli wczesne odcinki poszły 1 rozdział = 1 dzień, od pierwszego niewygenerowanego dnia pakuj dłuższe porcje (najlepiej po liczbie słów), żeby domknąć całość w 365 odcinkach bez przerabiania gotowego audio.
- **profile** (2026-09-12): Wsparcie: w audio naprzemiennie na początku/końcu odcinka informacja o wsparciu („link w opisie”); URL tylko w opisach show/odcinków.
- **log** (2026-09-13): Spotify for Creators: strefa konta może być inna niż PL — mapuj 7:00 czasu właściciela na lokalny czas Creators (np. offset dnia poprzedniego), żeby odcinki wychodziły o właściwej godzinie.
- **log** (2026-09-12): Usługa TTS: ElevenLabs (voice_id z biblioteki głosów właściciela). Connector marketplace: ElevenLabs.
