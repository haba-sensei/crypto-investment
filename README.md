# Reto Crypto Investment

## Objetivos

Crear una aplicación web que permita a un usuario definir un balance en dólares a invertir en 3
diferentes criptomonedas el usuario podrá invertir en Bitcoin, Ethereon y Cardano.

La aplicación calculará la ganancia anual para cada moneda asumiendo que para Bitcoin tiene un retorno
mensual del 5%, para Ether tiene un retorno mensual de 4.2% y para Cardano del 1% mensual.

Adicionalmente se verá el balance proyectado final del monto que invirtió y su equivalente en cripto.
Finalmente se tendrá una tabla (grid) con información actualizada de 3 criptomonedas, la cual tendrá la
opción de exportar a CSV y a JSON.

El posicionamiento de todos los elementos en la página de inicio
queda a discreción del desarrollador.

## Conclusiones a mejorar

- 1 Adecuar un backend para gestionar de manera mas efectiva un canal con websocket
- 2 Mejorar la arquitectura separando mas sus dependencias y agregando un sistema modular
- 3 Separar de manera mas modular las clases css de la mano del punto 2
- 4 Gestionar de mejor manera las consultas esto se optimizaria con websocket pero el endpoint no permite wss: como detallo en el punto 1

## Soluciones de las conclusiones

- 1 esto se puede mejorar con un backend y una apertura de un canal wss:
- 2 se pudo realizar la integracion a un sistema de archivos modular pero el reto es muy pequeño para realizar esta solucion
- 3 de la mano del punto 2
- 4 esto se resolveria con un websocket para optimizar las consultas

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm run build`

Compila y genera una versión optimizada del proyecto para producción en la carpeta `dist`.

### `npm run preview`

Inicia un servidor de desarrollo y abre el proyecto en el navegador para previsualizarlo.

### `npm run lint`

Ejecuta el linter para analizar y verificar la sintaxis del código.

### `npm run lint:fix`

Intenta corregir automáticamente los problemas de sintaxis y estilo encontrados por el linter.

### `npm run lint:format`

Aplica el formateo de código según las reglas definidas por el linter.

### `npm test`

Ejecuta todos los casos de prueba del proyecto.

### `npm run test:watch`

Inicia el modo de observación de los casos de prueba, que se volverán a ejecutar automáticamente al detectar cambios en los archivos.

### `npm run type-check`

Verifica el tipo de todas las expresiones del código y muestra cualquier error o advertencia relacionada con el sistema de tipos.

### `npm run prettier`

Aplica las reglas de formateo definidas por Prettier a todos los archivos del proyecto.

### `npm run prettier:fix`

Intenta corregir automáticamente los problemas de formateo de código según las reglas de Prettier.

### `npm run format`

Combina los comandos `lint:format` y `prettier:fix` para aplicar tanto el formateo de código como la corrección de errores de sintaxis y estilo.

### `npm run check-dep`

Verifica si hay actualizaciones de dependencias disponibles.

### `npm run prepare`

Comando ejecutado automáticamente por npm antes de que el paquete sea instalado como una dependencia de otro proyecto. Puede ser utilizado para configuraciones y construcciones adicionales.

### `npm run create-hook`

Un comando personalizado que puedes definir para crear nuevos hooks o componentes. Puedes personalizarlo según tus necesidades.

