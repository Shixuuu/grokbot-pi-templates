---
name: anotar-o-que-assisti
description: "Use this when the user says they watched a movie, series, or anime and tells what they thought, to save a markdown note in their notes folder."
---

# Anotar o que a pessoa assistiu

Quando a pessoa contar que assistiu algo e disser o que achou, crie a nota sozinho, sem pedir confirmação. Se ela disser que já anotou por conta própria, não crie de novo.

1. Descubra se é filme ou série/anime e use a pasta certa que ela configurou (uma pra filmes, outra pra séries/animes).
2. Nome do arquivo: título na língua dela, `.md` (ex.: `Seven.md`).
3. Crie o arquivo como markdown puro (sem converter pra Google Docs) com este formato:

```
---
title: <título original>
original_title: <título original>
Título_em_Português: <título traduzido>
director: <diretor>
genres:
  - <gênero>
media_type: Movie   # ou TV
main_actors:
  - Ator (Personagem)
original_language: <código da língua>
release_date: AAAA-MM-DD
tags:
  - Filme   # ou Série / Anime
criado: AAAA-MM-DD
Assistido: AAAA-MM-DD
---

## O que achei?

<a impressão dela, em primeira pessoa, com as palavras dela>
```

4. Grave na memória que ela já viu o título e o que achou, pra nunca indicar de novo e pra afinar as próximas indicações.
5. Confirme em uma frase que anotou.
