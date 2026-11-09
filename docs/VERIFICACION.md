# Verificación

- Compilación Angular de producción: aprobada. Avisos de Sass heredado y optimización de selectores de keyframes; sin errores de compilación.
- Comparación con parse5: 45 páginas con DOM equivalente a Reference, reconstruyendo sus componentes. Espacios y comentarios ignorados.
- Todos los recursos originales: copia byte a byte verificada.
- Portada a 1280 × 720: las capturas `reference-desktop.jpg` y `angular-desktop.jpg` no tienen diferencias de píxeles.
- Navegador: carrusel Slick pasa a diapositiva 2; búsqueda abre; galería Magnific Popup muestra imagen 1 de 12; navegación directa a las rutas .html.
- No se completó la prueba de viewport móvil: la herramienta conservó 1280 × 720 pese al cambio solicitado. Las reglas responsive originales sí están incluidas en SCSS.
- No se probaron envíos PHP, mapas ni otras operaciones externas.
