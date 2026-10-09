---
name: vps
description: "Use when setting up Clash Meta/mihomo on this computer from scratch through public HTTPS subscription — VLESS+WS, nginx front, Cloudflare Quick Tunnel or Tailscale Funnel, clash.yaml publish, and verify-before-share."
---

# VPS 架代理到订阅

从这台电脑上拉起 Clash Meta/mihomo 入站，经 HTTPS 隧道对外，再发布可导入的 Clash 订阅。用户点名 Clash/mihomo 时只用该栈，勿默认 sing-box。发任何公网订阅/Funnel/隧道 URL 前先跑验链（Verify public subscription URL）。

## 目标架构

```
手机/Clash 客户端
  → https://<公网域名>/  (VLESS+WS over TLS)
  → 隧道 (Cloudflare Quick/Named 或 Tailscale Funnel)
  → 本机 nginx :8088
       ├─ /sub/<token>/clash.yaml  → 静态订阅文件
       └─ /  → mihomo VLESS 入站 :2080 (仅 127.0.0.1)
```

工作目录约定：`/workspace/grok-ai/`（可改，全文一致即可）。

## 1. 安装 mihomo

- 安装 Clash Meta 内核（`mihomo`）到本机 PATH（如 `/usr/local/bin/mihomo`）。
- 目录：`config.yaml`、`logs/`、`sub/`、`subweb/sub/<token>/`、`scripts/`、`cf-host.env`、`secrets.env`（权限收紧）。

## 2. mihomo 入站（仅本机）

`config.yaml` 要点：

- `bind-address: 127.0.0.1`，`allow-lan: false`
- `listeners`：`type: vless`，`listen: 127.0.0.1`，固定端口（例：`2080`）
- 随机生成 `uuid` 与长随机 `ws-path`（勿用弱路径）
- TLS 终结在隧道/Funnel 时，入站可 `allow-insecure: true`（明文只在本机环回）
- `rules` 至少 `MATCH,DIRECT`（入站转发到本机出口）

启动：`mihomo -d /workspace/grok-ai -f /workspace/grok-ai/config.yaml`，确认 `127.0.0.1:2080` 在听。

## 3. nginx 统一反代

监听 `127.0.0.1:8088`：

- `location /sub/` → `alias` 到 `subweb/sub/`，`text/plain`，`Cache-Control: no-store`
- `location /` → `proxy_pass` 到 `http://127.0.0.1:2080`，开启 WebSocket Upgrade、长超时、关闭 buffering

这样同一公网主机名既提供订阅又承载 VLESS+WS。

## 4. 生成订阅 yaml

在 `subweb/sub/<长随机token>/clash.yaml` 写客户端配置：

- `proxies`：一条 `type: vless`，`server`/`servername`/`ws-opts.headers.Host` = 当前公网主机名，`port: 443`，`tls: true`，`network: ws`，`uuid`/`ws-opts.path` 与入站一致
- `proxy-groups` + `rules`（常见：`MATCH,PROXY`）
- 可选同步一份到 `sub/clash.yaml` 便于本机对照

把 token 与主机名记入 `token.env` / `cf-host.env`（勿外泄）。

## 5. 公网隧道（二选一）

**Cloudflare Quick Tunnel（低延迟起步）**

- `cloudflared tunnel --url http://127.0.0.1:8088`
- 从日志读 `*.trycloudflare.com`，写入 `cf-host.env`，并回写订阅里的 `server`/`servername`/`Host`
- Quick Tunnel 重启会换域名：必须同步 yaml + 通知用户，且先验链再发

**Tailscale Funnel（固定 `*.ts.net`）**

- Funnel 指到本机 `8088`（或分路径 `/`→2080、`/sub`→静态）
- 若 Funnel TLS 失败，检查 `TailscaleVarRoot` / `--statedir` 与证书目录可写

有 Cloudflare 已绑域名时可再升级 Named Tunnel（固定主机名）。

## 6. 验链再交付

1. 对本机：`curl` `127.0.0.1:8088/sub/<token>/clash.yaml` 应 200 且为 Clash yaml
2. 对公网：跑 Verify public subscription URL（TLS 开 + HTTP 200 + yaml 像样）
3. 通过后才把 `https://<host>/sub/<token>/clash.yaml` 发给用户（Clash Meta / mihomo-party 导入）
4. 失败：按验链技能走 Funnel / DOCKER-USER / 隧道主机名漂移清单，修好再发，绝不发死链

## 7. 保活与巡检（建议）

- `watchdog.sh`：周期性检查 mihomo(:2080)、nginx(:8088)、cloudflared、可选流量采集脚本；挂了就拉起
- 早间巡检：域名漂移则更新 yaml 并验链后通知；正常则安静
- 晚间简报：组件状态、泄漏/稳定性、流量结构；数据不足如实说，禁止编造数字

## 8. 客户端注意

- 用户说 Clash → 只交付 Clash Meta/mihomo yaml
- 机场/商业订阅账号与 URL 永不写入可分享模板；本技能只覆盖自建节点链路
- Mac Clash Party：可用 Sub-Store JSON 改 URL；合集刷新前先打开「订阅更新」开关（约 10 分钟会自动关掉）

## 完成标准

- 公网订阅 URL TLS+200，yaml 可导入
- 客户端连上节点能访问外网
- watchdog 在跑；Quick Tunnel 换域时有更新流程
