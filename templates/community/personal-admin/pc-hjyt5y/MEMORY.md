# Memory seeds for 音声操作PCアシスタント（スマホで挙動確認可能）

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: 音声アシスタントの定型操作に、電源オフやファイル削除など取り返しのつかない操作は入れない。
- **log**: 音声アシスタントは、決まった操作はPCで実行し、それ以外はGrok Botに回す組み合わせ方式。音声認識はPC内で処理し、外部に送るのは定型外の頼みごとの文字だけ。Grok Botには音声出力がないため、結果はスマホに通知する。
- **log**: 音声の聞き取りは滑舌や体調で崩れることがある。意図があいまいなときは、聞こえた言葉をそのまま伝え、推測した意味を添えて短く聞き返す。
