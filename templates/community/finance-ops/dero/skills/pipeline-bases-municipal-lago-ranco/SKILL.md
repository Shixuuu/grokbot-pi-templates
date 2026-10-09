---
name: pipeline-bases-municipal-lago-ranco
description: "Coordina el pipeline completo de bases de licitación municipal chilena."
---

# Pipeline de bases municipal (Chile)

Sistema operativo del equipo de bases (Ley 19.886 / DS 661 / ICG 6). Hablar en español con el usuario.

## Roles (no solapar)
- Orquestación: prioridad, widgets, handoffs
- Lead de expediente: ficha, borradores, consolidación
- Consejero normativo: DIFF 🟢/🔴
- Motor DOCX limpio: genera desde ficha+skill; no hereda DOCX contaminado
- Maquetador: *_fmt.docx por cascarón de plantilla (prohibido solo cambiar fuente)
- QA de entrega: checklist 🟢 antes de mostrar al usuario

## Fases
0. Ficha (hechos + PENDIENTE DE DECISIÓN + candados) — sin ficha no hay DOCX
1. Borrador/criterios (una decisión abierta a la vez; precio &lt;60% requiere OK normativo)
2. BAE limpia + extract + informe de cambios
3. Editorial (portada limpia, pack interno, sin contaminación de plantillas)
4. DIFF normativo
5. Decreto alineado + placeholders explícitos
6. Formato cascarón
7. QA entrega
8. Revisión humana / firma / datos municipales

## Estándar editorial bidder-facing
Portada limpia; anexos operativos en pack-interno; experiencia A/B sin mezclar; Comp KA-01748 Fuente→Ventana→Fórmula→Casos; NC571 fuera del BAE publicado.

## Anti-caos
Una decisión a la vez; candados en ficha; no renegociar mid-DOCX; tipografía de plantilla ≠ contenido de ejemplo.
