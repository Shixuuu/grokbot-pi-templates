---
name: unnamed-skill
description: "用户要记忆清理/复盘合并/按主题删旧版规则，或说 memory cleanup、audit memory、dedupe memory 时使用。适用于 Grok Bot、Hermes 等；工作区 memory-cleanup/ 仅续跑索引。批准前禁止删除。"
---

按主题审查并收敛用户相关记忆。在用户批准之前，不要删除任何内容。从现在起，旧版本是删除，而不是再添加另一个版本。

本 skill 可分享、跨运行时（Grok Bot、Hermes、Cursor Agent 等）。某一用户的业务主题名不要写进本 skill；只写在工作区主题文件里。

## 与用户原规则一一对应（不得省略或改弱）

1. 阅读你持有的关于该用户的每一条记忆，包括通常需要搜索才能看到的旧记忆。
2. 按主题对它们进行分组。
3. 对于每个主题，向用户展示：
   - 你认为当前的唯一规则
   - 你会删除的每个旧版或冲突版本
   - 你不确定的事项
4. 标记任何赋予你未经询问即可行动权限的记忆。
5. 一次处理一个主题，并等待用户的批准。
6. 在用户批准一个主题后，保留当前规则并删除过时版本。
7. 最后，向用户展示最终清理后的规则。

另：批准前禁止删除；旧版只删不叠。

## 对用户怎么说话

- 用用户当前交流语言写批阅与收尾（用户用中文就全中文展示；用英文就全英文展示）。
- 展示结构跟下面「主题批阅模板」对齐，不要改成另一套字段名。

## 工作区（仅服务本 skill 续跑，不是记忆真源）

`memory-cleanup/` 不替代、不拦截 Agent 对自己记忆的读取。Agent 仍用各自官方方式读/写记忆；本目录只存本轮清理的索引与主题草稿，方便再次触发时续跑、避免两套主题打架。

布局（先读后建；优先当前工作区根，否则用户指定目录，再否则运行时 scratch）：

```
memory-cleanup/
  INDEX.md
  themes/<nn>-<slug>.md
  archive/
```

### INDEX.md（不存在则新建）

写入 runtime、memory_sources、主题表；status 为 pending / proposed / approved / done / skipped。

### themes/<nn>-<slug>.md

已存在则先读全文再改；禁止另起平行文件。字段：unique_rule、delete_candidates、uncertain、unasked_action_grants。

再次运行：先读 INDEX + 已有 themes，从未完成主题继续。

## 通用主题骨架（可增删；slug 英文、标题跟用户语言）

01 communication 交流与人设；02 identity 身份与环境；03 permissions 站立授权与未问可行动；04 tooling 工具与技能偏好；05 data-privacy 隐私密钥与备份；06 scheduling 定时与安静时段；07 collaboration 多 Agent 协作；08 domain 领域常驻规则；09 episodes 历史过程档案。

私有业务主题只在 INDEX 追加，不写进本 skill 正文。

## 记忆位置（多 Agent）

不写死单一路径。按序探测并写入 INDEX 的 memory_sources：官方记忆 API 优先；常见落盘路径（存在才列）；问该 Agent「你的用户记忆在哪」；API 与磁盘双源时标明 primary。

## 主题批阅模板（批准前发给用户；字段不可缺）

向用户展示：你认为当前的唯一规则；你会删除的每个旧版或冲突版本；你不确定的事项；本主题未经询问即可行动标记（若无则写「无」）。然后请用户回复批准或修改。一次一题，先批后删。

## 批准之后

将唯一规则写入权威记忆；精确删除过时条；主题标 done；可选 archive（无密钥明文）；再开下一主题。

## 全部主题结束后

展示最终清理后的规则，并单独列出全部未经询问即可行动清单。

## 禁止

批准前删除；用新版本叠旧版；把 memory-cleanup/ 当记忆真源；批量清空 episode/log；在聊天复述密钥。

标签：memory-cleanup · memory audit · dedupe · 记忆清理 · 记忆复盘 · Hermes · Grok Bot
