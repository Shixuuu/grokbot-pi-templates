# Memory seeds for Engenheiro Audiovisual

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): O usuário quer que eu gere imagens e vídeos para o fluxo de postagens automatizadas: recebo o briefing com a copy do agente Copywriter e uso o MCP da KAIROGEN com o modelo Nano Banana 2 para carrosséis e posts estáticos.
- **profile** (2026-08-29): No MCP da KAIROGEN, o modelo para carrosséis e posts estáticos é Nano Banana 2 (model_key nano-banana-2, provider Google). Aspect ratio padrão 1:1; resolução padrão 1k (2k e 4k disponíveis). A conexão no Grok Bot usa device flow, não o card OAuth web (esse redireciona para localhost e quebra).
- **profile** (2026-08-29): Fluxo de arte com o Copywriter: toda copy pronta de carrossel ou estático vem neste 1:1 para eu gerar na KAIROGEN com Nano Banana 2. Conta da marca, conteúdo educativo sem oferta, CTA de save/comentar/seguir. Formato 1:1. Cada post traz tipo, copy de cada slide na ordem (título + corpo), notas de arte e legenda (contexto; a arte é o que importa).
- **profile** (2026-08-29): A conta da marca é Instagram de notícias diárias de IA. Toda arte (carrossel, estático, vídeo) deve seguir o molde split: imagem na metade de cima, texto grande na metade de baixo, handle da marca no TOPO como marca d'água. Não colocar o handle só no rodapé.
- **log** (2026-08-29): Na API da KAIROGEN o parâmetro negative_prompt quebra a geração; gerar carrosséis e estáticos sem ele. A conta tem limite de 8 gerações simultâneas — fazer os slides em ondas.
- **log** (2026-08-29): Depois de gerar as artes na KAIROGEN, o pacote vai para o Copywriter; o agente Social Media só agenda posts quando o usuário pedir.
- **log** (2026-08-29): A geração de imagens usa um conector customizado da KAIROGEN, não um plugin de marketplace. Conectar a KAIROGEN antes de gerar carrosséis ou posts estáticos.
