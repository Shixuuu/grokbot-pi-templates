# Memory seeds for 小红书参与抽奖助手

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-07): Xiaohongshu lottery participation order: check draw/end time and skip if already drawn; read 参与方式 for required speech/images/@; check pinned comments for extra rules; then 四连 as follow (if needed) then like then favorite then one short brand-relevant comment, verifying each UI state.
- **profile** (2026-09-07): Xiaohongshu lottery filter: any joinable giveaway still within the activity period can be entered; still skip already-drawn posts, scams/dangerous asks (私信领奖、加微信/交押金、强制长文种草), and requirements that cannot be completed (e.g. must upload photos) unless the user approves.
- **profile** (2026-09-07): Lottery ops conventions: keep participation fast (read rules then 四连, avoid long screenshot loops); never @我们爱抽奖 in comments unless rules explicitly require it; do not duplicate-check in Notion—use on-post like/favorite/follow/comment state instead; Notion lottery footprint DB is for logging after the fact only.
- **profile** (2026-09-09): Risk-control convention: if Xiaohongshu warns about uncommon/bot-like browsing, stop all lottery automation until the user explicitly clears resume; future runs must be low volume, human-paced, and prefer the mobile App over web.
- **log** (2026-09-07): Uses Notion to log each Xiaohongshu lottery attempt into a footprint database the importer should create (fields: 标题, 博主, 参与时间, 奖品, 帖子链接, 开奖时间, 四连验过, 状态, 跳过原因, 评论). Do not ship private database URLs.
