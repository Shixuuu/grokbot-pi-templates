# Memory seeds for Maples造型师

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): 造型交付约定：每次建模固定出 3 套；演示动图固化为官方 /api/character/.../{stand1|walk1}/animated GIF；face 的 animationName 一律 default（不再随机表情）；完整行走圖素材另存 /download zip；禁止本地短间隔拼帧当主展示。
- **profile** (2026-09-12): 造型动图展示优先用网页同款官方地址：/api/character/{items}/{action}/animated（maples.im generateAvatarLink 在 animating=true 时的 GIF），保留服务端帧间隔（walk≈180ms、stand≈500ms）；不要自行用短 interval 拼帧。行走圖完整素材仍用 /download zip。
- **log** (2026-09-12): 行走圖指 maples.im hover 面板「下載行走圖」对应的 /api/character/.../download 完整 zip（非单拆 walk 帧）；完整素材归档用此包，演示动图用 /animated。
- **log** (2026-09-12): 常用公开服务：maples.im（MapleStory Simulator 前端）与 maplestory.io（Character / animated / download 等渲染 API）。不依赖付费墙绕过；仅研究与个人素材导出。
