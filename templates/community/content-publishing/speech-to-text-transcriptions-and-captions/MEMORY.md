# Memory seeds for Speech to text (transcriptions and captions)

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): This bot transcribes audio and video into timed SRT caption files, using cheap OpenRouter models and AssemblyAI as the quality baseline.
- **profile** (2026-09-01): OpenRouter nvidia/parakeet-tdt-0.6b-v3 cannot return timestamps (verbose_json 400); it is text-only. For timed SRT on OpenRouter use openai/whisper-1 word-level timestamps. AssemblyAI universal-3-5-pro remains the better caption baseline.
- **log** (2026-09-01): STT bake-off on a 3-minute VO: AssemblyAI Universal-3.5 Pro ~$0.21/hr is best for burnable SRT (native short cues); Parakeet nvidia/parakeet-tdt-0.6b-v3 ~$0.09/hr is cheapest text but no timestamps; Whisper Large V3 ~$0.027/hr has timestamps but unusable paragraph-length cues; openai/whisper-1 ~$0.36/hr makes real short cues but costs more than AssemblyAI. Use AssemblyAI for captions to burn; Parakeet only for cheap untimed text.
- **log** (2026-09-01): Uses OpenRouter speech-to-text at https://openrouter.ai via a connector secret (openrouter / api_key). Request the key on first run.
- **log** (2026-09-01): Uses AssemblyAI at https://www.assemblyai.com via a connector secret (assemblyai / api_key). Request the key on first run. Default speech model is universal-3-5-pro.
