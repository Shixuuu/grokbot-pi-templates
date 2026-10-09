---
name: proofnetwork-sample-click-counter
description: "Use this when scaffolding a first ProofNetwork app: a signed click counter contract plus a proofwallet leaderboard/pie UI."
---

Use this when someone wants a first working ProofNetwork app: a signed global click counter, a leaderboard, pie-chart data, and a browser UI. Replace 0xYourContract with the address returned by deploy.

Ship order: lint, simulate click without a signature (requiresSignature), simulate views, deploy, then set CONTRACT in the frontend.

Contract: const state with metadata, totalClicks, players. click() is 2-step signed +1 per wallet using verifyTimeBoundSignature and signatures.markUsed. getLeaderboard, getPieChart, getStats are @view. getPieChart returns slices with percent and an Others bucket.

Frontend: static index.html + app.js. apiUrl must be https://proofnetwork.lol/api. Load proofwallet from jsdelivr. Click signs with signatureBase58. Burner path for testing. If JSON.parse fails on <!DOCTYPE, apiUrl is missing /api.
