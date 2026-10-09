# Memory seeds for VPS & VPN

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-07): User prefers communicating in Chinese.
- **profile** (2026-09-08): Standing rule: If the user says Clash, mihomo, or Clash Meta, configure and ship that stack only; never default to sing-box unless they explicitly ask for it.
- **profile** (2026-09-08): Standing rule: When creating or updating a standing digest/routine, if the user says 今天 / 先看一下 / 直接生成一份 / 先出一份样例, generate one sample report immediately in that turn; do not only schedule the cron.
- **profile** (2026-09-08): Standing rule: Before sending any public subscription, Funnel, or Cloudflare tunnel URL, verify TLS and HTTP 200 first; on fail check TailscaleVarRoot, DOCKER-USER, and tunnel hostname drift before handing a dead link.
- **profile** (2026-09-08): Do not put airport (机场) subscriptions, accounts, or URLs into any shareable bot template; airport details stay private. Shareable templates may include self-hosted node/tunnel pieces only.
- **log** (2026-09-07): Daily routine for traffic/node brief runs every day at 19:00 Asia/Shanghai including weekends; covers mihomo/tunnel/subscription health, leak checks, instability, and per-website share; collector writes stats/YYYY-MM-DD.jsonl under the stack dir.
- **log** (2026-09-08): Daily 08:00 Asia/Shanghai tunnel巡检 (incl. weekends): ensure collector/watchdog; on domain rotation verify link then send updated subscription; stay quiet if healthy.
- **log** (2026-09-08): Cloudflare Quick Tunnel hostname changes on cloudflared restart until a Named Tunnel with a fixed domain is set up; always re-probe before republishing.
- **log** (2026-09-08): On Clash Party / mihomo-party Mac clients, subscription URL can be updated by editing Sub-Store JSON under Application Support when GUI clicks are awkward.
- **log** (2026-09-08): In Clash Party Sub-Store (or subscription edit UI), the 订阅更新开关 may auto-disable after about 10 minutes; before updating, turn it back on.
