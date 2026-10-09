# Routine: 9am backend job match

> Mon-Sat 9am local Easy Apply job digest. Lists only, does not apply. Never Sunday.

Search LinkedIn AND Indeed for currently listed mid-level backend Easy Apply jobs and send a short scored digest. This bot lists jobs only. Do not apply. Do not invent jobs or URLs. Prefer Easy Apply / Indeed Apply listings. If Indeed is blocked, still send the LinkedIn half and say Indeed could not be fetched; do not skip Indeed as a standing source.

This routine fires Mon-Sat at 9:00 local (never Sunday). Saturday must still get a full digest.

Freshness: ONLY jobs posted in the last 3 days. Drop anything 4+ days old. Prefer last 48 hours when ranking.

Volume: Aim for at least 50 real, profile-matching jobs mixed across LinkedIn and Indeed. Expand queries and cities until you hit 50 or last-3-day inventory is clearly exhausted. Do not pad with AI, junior, senior, frontend, or generic SE roles. If inventory is under 50, send everything that qualifies and say how many you scanned and why it fell short.

Candidate: about 5 years, mid-level only. Exclude junior/intern/fresher/graduate AND senior/staff/lead/principal/director/architect titles. Backend only, scored against the seeker's uploaded resume. Target stack: Python, FastAPI, Flask, Node.js/Express, gRPC, REST, GraphQL, WebSockets, microservices; PostgreSQL, MySQL, MongoDB, ClickHouse; C++, C#, Java, JavaScript, SQL, .NET; AWS, Docker, GitHub Actions. Trading/fintech/OMS is a plus.
HARD EXCLUDE: AI engineer, ML, LLM, RAG, GenAI, data scientist, data engineer, frontend, mobile, intern, and generic software-engineer posts that are not clearly backend.
Locations: primary region first, then secondary region. Do not mix the two lists.

Queries (last 3 days) per location cluster, on both boards: backend developer python FastAPI, backend engineer python, python FastAPI, python Flask backend, backend Node.js Express, backend microservices python, python API developer, plus city variants. On LinkedIn use Easy Apply when available. On Indeed prefer Indeed Apply.

Scoring:
- 100%: mid-level backend using Python + FastAPI/Flask (or equivalent Python API/microservices) plus the resume DBs/cloud, ~4-6 years, in-region, posted ≤3 days.
- 90%: substantial overlap (Python or Node/Express or C#/.NET, APIs, those DBs) ~3-7 years, posted ≤3 days.
- 80%: partial overlap still clearly backend, posted ≤3 days.
Drop below 80, older than 3 days, or unverified.

For each job include: title, company, location, source (LinkedIn or Indeed), Easy Apply yes/no, apply URL, posted date (≤3 days), match %, and 1-2 sentences on why it matches the resume.

Deliver: primary region 100/90/80, then secondary region 100/90/80. Start with a one-line count: N jobs (X LinkedIn, Y Indeed), all last 3 days, Easy Apply preferred.
Stay silent only if BOTH boards return zero reachable listings. Standing Mon-Sat digest; do not delete the routine. Pull LinkedIn and Indeed in the signed-in browser. Do not store board credentials.

Fires on:
- cron `0 9 * * 1-6`

Ask the importing user for:
- Timezone
