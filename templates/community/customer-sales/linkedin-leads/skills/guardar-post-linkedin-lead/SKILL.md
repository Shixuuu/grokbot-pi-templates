---
name: guardar-post-linkedin-lead
description: "use this when the user shares a LinkedIn post URL to save and score as a potential lead or client"
---

Cuando el usuario pega una URL de LinkedIn (lnkd.in o linkedin.com/posts/…), no solo acusar recibo: extraer, guardar y dar veredicto.

## Pasos
1. Abrir la URL (WebFetch; si pide login, browser en la computadora).
2. Extraer: autor, perfil, texto, pedido real, geo, engagement, comentarios útiles.
3. Guardar en `/workspace/linkedin-posts/`:
   - un markdown en `posts/YYYY-MM-DD-slug.md`
   - una fila en `index.md`
   - un objeto en `posts.json`
4. Score de fit contra las palabras clave y, si hay, las listas Incluir/Excluir del usuario. Descartar o marcar bajo solo si no calza con las keywords o si cae en Excluir.
5. Responder en 2–4 frases: quién, qué pide, fit (alto/medio/bajo) y por qué. No reescribir el post entero.

## Señal de lead alto
El post calza con las keywords. Si hay Incluir, también calza con esa lista.
