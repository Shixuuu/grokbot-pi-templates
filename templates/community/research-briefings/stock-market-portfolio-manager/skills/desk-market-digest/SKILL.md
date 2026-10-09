---
name: desk-market-digest
description: "Use this when Ken's Research Desk runs the daily market digest (the owner's scheduled digest, or \"market digest\" on demand): summarize the prior market session from the stock-market YouTube channel the owner chose, using caption tracks only, into an archive entry in the owner's storage plus a short chat brief. Quiet when nothing was posted. Never trades."
---

# desk-market-digest (Ken's daily market digest)

Ken runs this alone. It exists only if the owner approved it at onboarding (or later).

## Config (set at onboarding, saved in Ken's memory)
- **Channel:** the one YouTube channel covering the stock market that the owner named (channel URL or handle). Never swap in a different channel yourself.
- **Schedule:** whatever the owner set on the digest routine. Each run covers the most recent completed US market session before the run. The owner can change the time.
- **Archive location:** where the owner said digests should be saved (for example a "Market Digests" page or folder in their research storage).
- **Book:** the owner's held names and watchlist (from the connected brokerage, read-only, or the saved pasted book, plus Companies entries with Book role = Watchlist).

## Steps
1. **Find the session's videos.** List the channel's uploads and pick videos published for the most recent completed session: from that session's market open through the start of this run, in the owner's timezone. If nothing was posted for that session, stop and send nothing (on an on-demand run, say in one line that nothing was posted).
2. **Read captions only.** Fetch the caption track (manual subtitles first, else auto-generated) for each video, for example with yt-dlp using `--skip-download --write-subs --write-auto-subs --sub-langs en`. Never download or store video or audio. If no captions exist for a video, note "no captions available" and skip it; never guess the content from the title or thumbnail.
3. **Clean the transcript.** Remove timestamps and duplicated caption lines. Keep the video title, publish time and URL.
4. **Extract.**
   - What kind of day it was (index moves, breadth, the dominant theme) as the channel described it.
   - Macro drivers named (rates, inflation data, Fed speakers, earnings, geopolitics, sector rotation).
   - Every mention of a company or ETF in the owner's book or watchlist, with what was said.
   - Setups, levels or events the host said to watch next.
5. **Label everything.** **CAPTION FACT** = something the host actually said (paraphrase, with the video and approximate timestamp); **INFERENCE** = your own connection or interpretation. Never present the host's opinion as fact, and never add numbers the captions didn't contain. Where the host gave market figures, say they're as stated in the video.
6. **Write the archive entry** in the owner's chosen location, titled `Market Digest — YYYY-MM-DD (session of YYYY-MM-DD)`: sources (video titles, times, links), day summary, macro drivers, a "Touches your book" section (ticker: what was said, labeled), what to watch next, and a short "Inference" section kept separate. Append; never overwrite past digests.
7. **Send the chat brief** (about a two-minute read): what kind of day it was; what touched their book (or "nothing on your names"); the main macro drivers; what to watch next; a link to the archive entry.
8. **Hand-offs, not actions.** If something material touched a held name (guidance, a major contract, dilution, a regulatory event), suggest checking it in daily monitoring or a research Refresh. Don't edit Monitors from this skill.

## Rules
- **Never trade** and never phrase anything as an order ("buy", "sell now"). Setups the host mentions are reported as the host's view, labeled CAPTION FACT, not as recommendations.
- Summarize only the owner's chosen channel; no other sources unless the owner adds them.
- Never invent videos, quotes, prices or events. Missing = say so.
- Keep account details out of the digest; mention holdings by ticker only.
- Research only, not financial advice.
