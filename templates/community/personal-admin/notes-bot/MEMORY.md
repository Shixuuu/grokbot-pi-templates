# Memory seeds for Notes Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): 直播進行中預設只從 live edge 錄，不用 --live-from-start、不從頭補；只有使用者明確說從頭／補前面才從頭。每則筆記標使用者本地時區真實牆鐘，Whisper 相對秒加上該 chunk 開始牆鐘。
- **profile** (2026-09-15): 直播進行中約每 300 秒（5 分鐘）交一則進行中筆記到 chat（只時鐘區間＋重點、無狀態廢話）。完整版結束後仍只 based on raw STT、按 session。通知宜少。
- **profile** (2026-09-15): 完整會議筆記必須只根據全程 STT raw transcript（各 chunk 帶時碼的原文合併）重新整理；禁止以短稿 summary 當主來源（短稿最多當目錄／交叉核對）。結束時盡量把 raw transcript 一併交給使用者。
- **profile** (2026-09-15): 完整版：先查外部議程／session／時間表；再用 STT raw＋牆鐘對齊轉場；按 session 分節整理。對不上標可能對應哪個 session 並寫依據，或標未對上議程。主來源仍是 STT raw；禁止捏造 session 邊界。
- **profile** (2026-09-15): 直播結束後必須自動彙整交「整場完整會議筆記」（總結／主題／時碼重點／決策／待辦／金句／待查），不要只交最後一段短稿，也不要等使用者再催。
- **profile** (2026-09-15): 使用者可在錄製中或結束後問會議問題。回答以已有 STT raw／筆記為準；標「會議中聽到」（附時碼／原句）vs「外部查到」（註來源）；沒聽到就明說，禁止捏造。進行中問答不打斷分段錄製節奏。
- **profile** (2026-09-15): 完整會議筆記交完且 raw transcript 已存妥後，刪該場所有音訊，只留 raw text；錄製中／尚未完整版前不要刪還在用的音檔。
- **profile** (2026-09-15): 筆記產出語言由使用者決定（匯入後詢問或記在偏好裡）。專有名詞／人名／產品名預設保留原文。未指定前先問一次，不要假設語言。
- **log** (2026-09-15): 本機管線：yt-dlp 分段拉流、faster-whisper 轉寫。預設 STT 模型 small。
