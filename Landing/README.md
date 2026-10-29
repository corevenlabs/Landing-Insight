# ITC Club · React

Réplica en React de https://itc-club-app.rmj-rafael.chatgpt.site.

## Ejecutar

```sh
npm install
npm run dev
```

`npm run build` genera `dist/`. `npm run preview` sirve la compilación.

## Organización

- `src/views/landing/ReferenceLandingView.jsx`: composición de la vista.
- `src/components/sections/`: componentes separados de las once secciones.
- `src/components/layout/`: cabecera, pie y elementos globales.
- `src/components/ui/`: renderizador de bloques y modal accesible.
- `src/context/LandingContext.jsx`: estado global con React Context, contenido, menú móvil, función seleccionada, conversación de ejemplo, modal y progreso.
- `src/data/landing.json`: contenido y estructura semántica de cada sección. Los componentes consumen estos bloques mediante `useLanding()`.
- `src/data/featureNotes.json`, `chatExamples.json`, `benefitDetails.json`: textos de las interacciones.
- `public/assets/`: imágenes, logotipos y tipografías originales, servidos localmente.
- `src/styles.css`: estilos de la referencia con sus reglas responsive.

Para modificar contenido globalmente, edita los JSON o usa `setContent` desde `useLanding`. No se consulta el HTML remoto durante la ejecución. La referencia no expone una API de contenido.

Interacciones: menú móvil, progreso de lectura, selección de funciones, ejemplos de Yorki, acordeón de preguntas, detalles de beneficios, condiciones y ampliación de capturas. Yorki es una demostración, igual que en la referencia. Los botones de app llevan a la información de la app porque la referencia no incluye enlaces a tiendas.
