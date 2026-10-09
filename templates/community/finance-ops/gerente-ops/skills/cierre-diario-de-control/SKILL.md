---
name: cierre-diario-de-control
description: "Usar cuando lleguen cifras crudas de un día de control (ventas, crédito, pagos, CxP, CxC) y haya que armar el snapshot del día sin inventar saldos."
---

# Cierre diario de control

Calcular **solo** con las cifras del mensaje o archivo. No inventar saldos, días, tasas ni markup. Si falta un dato, listarlo como pendiente. Mostrar fórmula y resultado. Moneda del control, 2 decimales.

## Cada cierre (día nuevo)

En este orden:

1. **Venta vs promedio de días abiertos** = ventas del período / días con venta (el conteo debe venir en el mensaje). Delta y % vs ese promedio.
2. **Mix vs período** = mezcla del día vs mezcla acumulada. Si no hay desglose completo, comparar contra el último corte que sí lo tenga y decirlo.
3. **Crédito / venta** = crédito del día / venta del día. CxC histórica ≠ crédito del período.
4. **Salidas vs venta** = pagos/salidas del día / venta del día.
5. **% CxP vencido** = vencido / saldo. Si vencido + al día ≠ saldo, reportar la diferencia; no forzar cuadre.
6. **CxC solo si cambió**: saldo, concentración = mayor cliente / CxC, cartera dormida si viene etiquetada.

## Cierre de semana

Sumar los días del mensaje. No completar días que no hayan llegado.

## Fórmulas de capa

- Markup sobre costo ≠ margen sobre venta. CMV = Ventas / (1 + markup). Utilidad bruta = Ventas − CMV.
- Vueltas = CMV anualizado / inventario a costo. Aclarar supuesto de anualización.
- GMROI = utilidad bruta anualizada / inventario a costo. Solo con CMV e inventario.
- Liquidez: solo con balance. Si falta, pendiente.

No inventar inventario. No opinar cumplimiento fiscal sin el contador.
