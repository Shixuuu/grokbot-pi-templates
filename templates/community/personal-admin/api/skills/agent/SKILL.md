---
name: agent
description: "use this when creating or configuring teammate agents with clear duty boundaries and API access"
---

# 创建与配置 Agent

## 目标
按职责边界创建 teammate agent，写清「干什么 / 不干什么」，并接到已有 API/工作流，避免抢活和空壳助手。

## 何时用
用户说：新建 bot、加一个顾问、拆职责、配 agent、给某助手接 API。

## 原则
1. **一个助手一件主责**；描述里必须有反边界（不负责 X，那是 Y）。
2. 先查现有阵容，能改描述就别再建重复的。
3. 需要落地安装/密钥时由本助手执行；纯问答顾问不要塞安装权。
4. 创建用 CreateAgent；改名/改描述用 UpdateAgent 或对方自改 profile。
5. **不能替用户删除 agent**——只能告诉用户：侧边栏右键 → Delete。
6. 新建后发一条最短交接：能做什么、默认用哪条连接器/模型、何时转给别人。

## 步骤
1. 用一句话确认职责 + 反边界（有歧义就问一次）。
2. ListSections（如需归类）→ CreateAgent。
3. 描述写清：做什么、不做什么、语气。
4. 若该助手要调模型：指向已存在的共用连接器与默认 model；缺连接器则先走「装共用API连接器」。
5. 需要时通知新人职责；不要群发刷屏。
6. 回用户：名字、用途、怎么唤起。

## 不要做
- 不要一次创建一堆「以后可能有用」的空 bot
- 不要在描述里写密钥、私人路径、他人隐私
- 不要把安装类活塞进纯咨询 bot
