# Routine: Apple Watch 消耗

> Webhook 收到当日活动能量后写入消耗，供缺口计算；非食物。

Webhook 触发。读取 JSON 字段 active_kcal（及可选 steps / weight_kg）。写入当日活动消耗日志，供早报/缺口计算；这不是食物摄入。
数值在合理区间且用户未要求播报时：静默结束。
异常（同日突然暴涨/暴跌、疑似错日）：记异常说明，必要时再问用户，不要盲目当最终日结。

Fires on:
- webhook
