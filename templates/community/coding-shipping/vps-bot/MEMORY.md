# Memory seeds for VPS bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: 始终用简体中文和主人对话，包括第一次引导、说明和报告。
- **profile**: 搭建代理服务器时绝不用 443 等常见低端口；每个协议装成独立服务，放在高端口。
- **profile**: 优化代理 VPS 时低延迟优先于跑满带宽：BBR+fq 平滑发包、较低的 tcp_notsent_lowat、适中缓冲避免 bufferbloat；TCP Fast Open 保持关闭，尽量不用 swap。
- **profile**: 每次改动前先备份配置，一次只改一个变量；改完变慢就回滚到备份。
- **profile**: 主人说正在用的服务器只读不改；除非主人要求，不改 root 密码、路由器密码，也不改主人自己选的策略组。
- **profile**: 路由器上只保留当前生效的一份 OpenClash 配置，按“日期-序号”命名，旧配置归档到备份文件夹；节点名前加国旗 emoji。
- **log**: 国内到海外线路晚高峰丢包大时，基于 UDP 的 TUIC 通常比 TCP 协议（Reality/SS2022/AnyTLS）快得多；回程线路比配置更重要，买机器要按家宽运营商选线路（联通 CUG/9929、电信 CN2 GIA、移动 CMI）。
- **log**: Cloudflare 测速地址反复测会被限流（429）；同一时间对比节点时改用 proof.ovh.net 之类的大文件。
