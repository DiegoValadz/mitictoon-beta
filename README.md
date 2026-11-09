# Mitictoon — portafolio Angular

Rebranding de la plantilla Creative Agency con la identidad visual de `web`. Home único, servicios, portafolio completo, animaciones y formulario de comisiones.

Consulta `docs/REBRANDING.md` para el inventario de Behance y los pendientes de contenido e integración.

## Ejecutar

```sh
cd angular-template
npm ci
npm start
```

Abrir http://127.0.0.1:4300/. Compilar: `npm run build`. El verificador `npm run verify:reference` se conserva para las páginas originales archivadas.

## Consultar la plantilla original

Abre http://127.0.0.1:4300/plantilla/ para ver el índice de las 45 páginas. Creative Agency: http://127.0.0.1:4300/plantilla/home-creative-agency.html. Los estilos originales están aislados del rebranding y los menús navegan dentro de este prefijo.

## Organización

- `src/app/mitictoon/`: componentes públicos reutilizables, cada uno con HTML, TS y SCSS.
- `public/assets/mitictoon/`: originales de Behance y miniaturas optimizadas.

- `src/app/pages/`: las 45 páginas originales, cada una en su carpeta con `.component.ts`, `.component.html` y `.component.scss`.
- `src/app/shared/`: 43 componentes de secciones reutilizables, con el mismo trío de archivos. Un input `variant` selecciona las variantes originales sin modificar su contenido.
- `src/app/app/`: componente raíz.
- `src/app/template-page.ts`: inicializa los plugins cuando Angular termina de crear la página.
- `src/styles/reference/`: variables, mixins y reglas globales SCSS originales.
- `public/assets/`: copia exacta de todos los recursos originales.
- `src/template-runtime.js`: mismo código de inicialización de `main.js`, expuesto como función para invocarlo después del render de Angular.

Las rutas conservan nombres como `/about-us.html`, `/portfolio-gallery.html` o `/shop-cart.html`. `/` e `/index.html` muestran la portada original. Se mantienen enlaces HTML normales y su navegación con carga de página, tal como funcionan en la plantilla; cada destino lo renderizan componentes Angular y rutas lazy.

## Estilos y fidelidad

Se mantienen textos, imágenes, logo gráfico, colores, fuentes, clases, plugins, tiempos de animación y estructura de las páginas. Solo el título HTML, metadescripción y nombre del proyecto pasan a Mitictoon. El contenido de ejemplo, incluidos nombres de contacto y el logotipo Lamba de la imagen original, permanece intacto.

Los componentes compartidos usan selectores de atributo sobre los elementos HTML originales: no agregan wrappers que alteren flex, grid o selectores entre hermanos. Los SCSS de los componentes principales contienen las reglas originales en mixins. El archivo global los incluye una sola vez y en el orden original para mantener la cascada. Las variantes reutilizan estas mismas reglas; sus SCSS quedan disponibles para futuras ampliaciones.

Se conserva la sintaxis Sass legacy de la fuente, por lo que la compilación muestra avisos de deprecación de `@import`, divisiones y funciones de color. No son errores de compilación.

## Comprobación

`npm run verify:reference` reconstruye los componentes y compara con parse5 el DOM de las 45 páginas contra Reference, ignorando únicamente comentarios y espacios de formato. También comprueba los archivos HTML/TS/SCSS y compara byte a byte todos los assets. Se añadió un cierre de div que el navegador ya insertaba implícitamente en `our-pricing.html`; el DOM resultante es idéntico.

## Funciones externas de la plantilla

Esta migración no configura servicios nuevos. El formulario conserva la URL PHP original; para enviar correo se necesita hosting con PHP y configurar su transporte. Angular CLI sirve archivos estáticos y no ejecuta PHP. Las integraciones externas (Google Maps, videos, fuentes e iconos remotos) dependen de red y credenciales/proveedores válidos. Los scripts de Maps embebidos en el HTML original no son ejecutados por Angular; antes de activar esa integración debe configurarse una clave propia y un cargador autorizado. No se ha probado el envío de mensajes ni pagos.

La compilación queda en `dist/mitictoon/browser`. El servidor de producción debe entregar `index.html` para las rutas Angular, incluidas las terminadas en `.html`; los recursos de `/assets` deben servirse como archivos.
