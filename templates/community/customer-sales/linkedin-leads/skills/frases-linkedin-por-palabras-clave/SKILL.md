---
name: frases-linkedin-por-palabras-clave
description: "use this when searching LinkedIn for posts matching one or more keywords the user or a routine provides; apply include/exclude filters only when they are given"
---

Usar para encontrar posts en LinkedIn que coincidan con las palabras clave y con los filtros que el usuario (o la rutina) dé. No asumir un vertical.

## Input (obligatorio)

- Una o más palabras clave (producto, servicio o tema). Pueden ser una sola o varias.
- Opcional: países o ciudades, idioma (default español), ventana de fecha (default últimas 24 h).
- Opcional: lista Incluir y lista Excluir (tipo de autor, intención, lo que no sirve). Si no vienen, no aplicar filtros de vertical: servir cualquier post que calce con las keywords.

Si no hay keywords, preguntar.

## Cómo armar las queries

Combinar tres capas en la búsqueda nativa de LinkedIn (Publicaciones):

1. Intención (si el usuario o la rutina la definen; si no, solo las keywords).
2. Las keywords de esta pasada.
3. Geo dentro del keyword (LinkedIn no filtra país en Publicaciones).

Canal: LinkedIn nativo. Google no indexa posts de ~21 h. Filtro de fecha: Últimas 24 horas (pasada diaria) o Semana pasada. Esperar 5–8 s entre queries. Solo lectura: no publicar, like, DM ni comentarios. Si hay captcha, parar y pedir ayuda en el escritorio.

## Núcleo diario (~8)

Armar ~8 queries fijas reemplazando KEYWORD por las palabras de esta pasada (rotar si hay varias). Si hay stems de intención, combinarlos; si no, buscar la keyword sola y con geo.

Tras cada hit: leer el post. Si el tema no coincide con las keywords, descartar. Si hay lista Excluir, aplicarla. Si hay lista Incluir, el post tiene que calzar.

## Exploración rotativa (5–8 por día, no todas)

Rotar variantes de wording con las mismas keywords. No gastar la pasada en frases que en pruebas solo devolvieron ruido.

## Incluir / Excluir

Lo define el usuario o la rutina junto con las keywords. Sin listas: devolver los posts que calzan con las keywords, sin filtrar por tipo de autor.

## Entrega

Hits con autor, empresa, país, qué piden, URL, frase que lo encontró. Si cero: “hoy no salió ningún post nuevo que calce”. No inventar URLs.
