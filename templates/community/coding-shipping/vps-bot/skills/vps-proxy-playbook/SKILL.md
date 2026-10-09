---
name: vps-proxy-playbook
description: "用这个当用户要新装/优化代理 VPS、装 Reality/hy2/TUIC/SS2022/AnyTLS、写 OpenClash 或小火箭配置、测速对比节点、或排查节点超时变慢时。"
---

# VPS 代理搭建与调优手册

全程用简体中文和主人沟通。

## 0. 规矩（先读）
- 改任何东西前先备份（配置、systemd 单元、sysctl），备份打包一份放用户电脑。每次只改一个变量，改完测，慢了就回滚。
- 用户说正在用的服务器，只读不改；不擅自改 root 密码、路由器密码、客户端里用户自己选的策略组。
- 密钥、密码只存服务器本地 secrets.env 和用户电脑，不写进聊天总结或分享内容。
- SSH 优先从用户自己的电脑发起（云端机器可能被目标屏蔽或走不通）。

## 1. 摸底
1. 系统版本、CPU/内存/磁盘、带宽套餐。
2. 线路：从服务器 mtr/traceroute 到用户家宽出口，看回程走哪家（联通 4837/CUG/9929、电信 163/CN2、移动 CMI）。线路决定上限，配置只能榨干它。
3. 出口 IP 纯净度。

## 2. 内核调优（低延迟优先）
写进 /etc/sysctl.d/99-proxy-tune.conf，开机持久：
- default_qdisc=fq、tcp_congestion_control=bbr
- tcp_notsent_lowat=16384（不要设成不限）
- 缓冲适中：rmem_max/wmem_max 16M 左右，不堆超大缓冲
- tcp_fastopen=0
- 小 swap + 低 swappiness；CPU performance；不用 IPv6 就关掉

## 3. 协议：每个协议独立 systemd 服务、全部高端口
- 不用 443 等常见低端口，统一放一段高端口。
- 推荐组合：xray VLESS Reality（TCP）、hysteria2（UDP）、tuic v5（UDP）、shadowsocks-rust SS2022（TCP+UDP）、sing-box AnyTLS（TCP）。
- Restart=always；防火墙同时放行 TCP 和 UDP；装完从外部逐个端口验证。
- Reality 伪装站要实测握手能过：部分走 Akamai 的大站会失败，换能过的站，客户端 servername 同步改。
- hy2 服务端带宽设置会覆盖客户端；想让客户端自报带宽就开 ignoreClientBandwidth。
- 重装系统时沿用原 UUID/密钥/端口，客户端就不用改。

## 4. 测速方法
- 同一时间、同一测速源、多次取中位数对比所有节点；晚高峰和白天分开看。
- Cloudflare 测速地址频繁测会 429，改用 proof.ovh.net 之类大文件。
- 先做一次绕过所有代理的直连下载，判断瓶颈是线路还是配置。
- 服务器上看重传率（nstat / ss -ti）：重传 20%+ 说明回程丢包严重，这时 UDP 协议（TUIC 常最好）通常明显快于 TCP 协议。
- 调参后变慢就直接回滚，不要叠加改。

## 5. 超时排查（三点测试）
从用户家、海外机器、同地区另一台服务器同时测 ping 和端口：
- 三处都不通：机器宕机、到期、流量超限或 IP 被机房封，请用户去服务商后台看状态、重启或用 VNC。
- 只有国内不通：被墙或回程问题，考虑换 IP 或中转。
- 只有某个端口不通：服务挂了或防火墙没放行。

## 6. 客户端（OpenClash / 小火箭）
- 配置按“日期-序号”命名；路由器上只留当前生效的一份，旧的归档。
- 节点名前加国旗 emoji。
- 敏感平台单独策略组固定落地地区：域名规则 + 该平台 ASN 的 IP 段（no-resolve）+ 该平台域名 DNS 走加密 DNS 并经同一策略组。
- 防泄露：fake-ip、拒绝出国 QUIC、各层彻底关 IPv6（WAN、LAN RA/DHCPv6、内核、OpenClash 开关、过滤 AAAA）；软路由做主路由比旁路由更不容易漏。
- 中转链（dialer-proxy）：TCP 落地（AnyTLS/Reality）比 UDP 经 SS 中转更稳；SS 腿不要叠 hy2/TUIC。
- 直播推流：推流地区选和代理出口同一地区。
- 给小火箭用户同时出分享链接。

## 7. 买机器建议
按家宽运营商选回程优化线路：联通选 CUG/9929，电信选 CN2 GIA，移动选 CMI。普通国际线晚高峰丢包大，怎么调都有限。
