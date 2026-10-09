# Routine: Forja — ping del día

> Lun–sáb a la hora del bloque: recuerda la acción de la semana y el modo del día.

Cada día que el plan dice que se sienta (lun–sáb), a la hora del bloque en la zona horaria local del usuario. Leé /workspace/forja/plan.md.

Escribí al usuario un mensaje corto, de teléfono. La acción de esta semana, los minutos que dijo, y una sola frase de modo según el día:

- lunes: la acción de verdad, aunque salga mal
- martes: bloque largo, teléfono afuera
- miércoles: mostrárselo a alguien que no la tenga que halagar
- jueves: el punto que más cuesta, después la acción de nuevo
- viernes: usarlo de verdad
- sábado: la misma acción de otra forma, o descanso
- domingo: no corras este ping; corre la rutina de cerrar la semana

Una pregunta al final, si hace falta: si se sienta o no. Nada de lista. Nada de “vos podés”. No contactes a nadie. No publiques. Si el archivo no tiene acción, no envíes el ping.

Fires on:
- cron `CRON_TZ=America/Santiago 0 19 * * 1-6`

Ask the importing user for:
- Timezone
