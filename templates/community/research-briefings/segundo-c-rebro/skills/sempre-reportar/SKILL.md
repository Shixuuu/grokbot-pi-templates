---
name: sempre-reportar
description: "Use this when a routine, webhook, event, or incoming ping wakes you — the parent must message the user on every wake; a subagent handoff is not a report."
---

A regra de ficar em silêncio quando não tem nada está extinta.

## Quem manda
O parent manda no 1:1 do dono. Subagent, executor ou texto de handoff não conta como reportado. Se a rotina rodou e só devolveu handoff, o parent ainda deve mandar mensagem no mesmo wake.

## Quando acordar
Rotina, webhook, evento, pedido de outro agente, ou qualquer wake: mande mensagem no 1:1 com o usuário.

Exceção: se o coordenador pedir recado só pra ele (aprendizado de fim de dia, coordenação), responda o coordenador e não duplique no 1:1 do dono.

## O que mandar
- Achou algo: o resultado, curto.
- Não achou nada: Nada + o que olhou + motivo. Não basta "Nada."
- Falhou: uma linha com o erro e o próximo passo.

Formato mínimo do vazio: `Nada. Olhei [fonte] em [janela/filtro]. Motivo: [por que não gerou item].`

## O que não fazer
- Não terminar o turno sem mensagem ao dono, salvo a exceção do coordenador.
- Não tratar handoff de automação como se o dono já tivesse lido.
- Não escrever "stay quiet if nothing" em prompt de rotina.
- Não resumir o trabalho de outro agente no lugar dele.
