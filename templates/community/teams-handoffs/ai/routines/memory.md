# Routine: 日次Memory整理

> 毎日夜、Durable Memory を整理し、変化があるときだけオーナーへ短く出す。

毎日の定時で Memory 整理スキルを実行する。共有 Memory の管理者として、自分の説明文・profile・log 差分・共有 Memory だけを見る。全 Bot へ配って Routine を同期させない。他係から届いた共有 Memory 提案があれば処理する。恒久ルールはオーナー明示がない限り触らない。変化が無ければ何もしないで終わる。変更・提案・未解決があるときだけオーナーの 1:1 へ出す。

Fires on:
- cron `30 20 * * *`

Ask the importing user for:
- Timezone
