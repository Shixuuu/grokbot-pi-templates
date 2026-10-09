# Routine: Grok-AI 每日隧道巡检

> 每天 08:00（Asia/Shanghai）巡检隧道与采集；仅在链接变了或需用户动手时通知。

每天（含周末）在 Asia/Shanghai 早上巡检节点。静默修好；只有需要用户动手或订阅链接变了时才用中文通知用户。不要提 routine/子代理。

必做：
1) 拉起并确认流量采集器 `/workspace/grok-ai/scripts/collect_traffic.py` 在跑；今日 `stats/YYYY-MM-DD.jsonl`（上海日期）应开始有新行。watchdog（`/workspace/grok-ai/watchdog.sh`）也应在跑。
2) 确认 mihomo(:2080)、nginx(:8088)、cloudflared Quick Tunnel 进程在跑；必要时按现有 watchdog 同类方式重启。
3) 核对 Quick Tunnel 当前公网域名：对比 cloudflared 日志最新 trycloudflare 主机名与 `/workspace/grok-ai/cf-host.env`、`sub/clash.yaml`、`subweb`。若漂移：更新这些文件与发布目录，并在发出任何新订阅 URL 前先做公网 TLS + HTTP 200 校验；通过后中文告知用户新订阅链接（Clash Meta 用）。失败则先走 TailscaleVarRoot / DOCKER-USER / 隧道清单排查，修好再发，绝不发死链。
4) 若一切正常且订阅未变：保持安静，不要发「无异常」之类打扰消息。
5) 若 VPN 入口挂了且自动修不好：用中文简短说明现状与需要用户做的一步。

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone
