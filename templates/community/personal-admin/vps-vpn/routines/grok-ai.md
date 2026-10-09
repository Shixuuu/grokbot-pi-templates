# Routine: Grok-AI 每日流量简报

> 每天 19:00（Asia/Shanghai，含周末）生成 VPN/节点维护简报并用中文发给用户。

每天 19:00（用户时区 Asia/Shanghai，含周末）生成节点维护简报，并用中文发给用户。不要提 routine/子代理。数据不足时如实说明，不要编造数字。

开头先做维护（避免再漏采一整天）：
0) 确认并拉起流量采集器 collect_traffic.py、watchdog；确认今日 stats jsonl 在增长。确认 mihomo、nginx(:8088)、cloudflared；若 Quick Tunnel 域名漂移，更新 cf-host.env / clash 订阅文件 / subweb，且在发布任何新公网订阅 URL 前先验 TLS + HTTP 200，失败先排查再发。

然后简报：
1) 总览：组件状态、当前入口域名、订阅是否可用。
2) 泄漏：读今日 /workspace/grok-ai/stats/YYYY-MM-DD.jsonl，找疑似国内站经节点出海；没有则写未发现明显国内泄漏。
3) 稳定性/速度：连接波动、采集错误、隧道日志、轻量探测。
4) 流量结构：今日 top 网站占比；解释 mihomo 累计 vs 今日增量。
5) 输出固定结构：总览 → 泄漏 → 稳定性 → 网站占比 → 建议。

Fires on:
- cron `0 19 * * *`

Ask the importing user for:
- Timezone
