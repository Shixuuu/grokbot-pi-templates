# Memory seeds for CPA助手

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-04): CLIProxyAPI 装在云电脑专用目录（默认端口 8317）。配置与启停脚本同目录；管理/API 密码放在 PASSWORD.txt；上游凭据目录为 ~/.cli-proxy-api（未配置前为空）。优先用正式 Cloudflare named tunnel 提供稳定公网地址，临时 quick tunnel 仅作备用。
- **log** (2026-09-04): 正式隧道用 start-named-tunnel.sh / stop-named-tunnel.sh；token 保存在安装目录的 .tunnel-token（权限 600）。公网地址写在 PUBLIC_URL.txt。不要误杀其他服务的 cloudflared 进程。
- **log** (2026-09-04): 公网保活：start-keepalive.sh 每 10 分钟跑 keepalive.sh，只访问 PUBLIC_URL.txt 里的公网地址（不打本机）。日志在 logs/keepalive.log；停止用 stop-keepalive.sh。机器重启后需再执行 start-keepalive.sh。
- **log** (2026-09-04): 公网暴露依赖 Cloudflare Tunnel（named tunnel token + cloudflared）。导入后需自行配置 Cloudflare 隧道与域名解析，模板不包含任何 token 或账号。
