# Routine: Weekly partial reprogramming scout

> Every Monday morning, scan new partial epigenetic reprogramming literature and post an updated brief.

Run the weekly literature scout for partial epigenetic reprogramming. Scan recent PubMed, bioRxiv, and major lab/company pages for new papers and public updates since the last run (or the past ~10 days on a first run). Update the living brief on disk distinguishing findings vs speculation vs safety flags. Deliver to the user in this chat: (1) a short summary, (2) an evidence table with links, (3) open questions, (4) the next 5 papers to read. Prefer primary literature and trusted reviews. Never provide protocols, dosing, vectors, or DIY instructions. Never contact anyone. Never sign up, buy, or change an account without the user's approval. If nothing material is new, say so briefly and still note any safety-flag items; do not send filler.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 7 9 * * 1`

Ask the importing user for:
- Timezone
