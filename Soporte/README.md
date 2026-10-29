# ITC Club · Soporte

Landing en React que conserva el contenido, estructura y estilos de https://itc-club-app.rmj-rafael.chatgpt.site/es/soporte/.
Los cambios solicitados son el navbar transparente sin línea inferior y el video proporcionado como fondo del hero.

```sh
cd Soporte
npm install
npm run dev
```

Para producción: `npm run build`. La vista se sirve en `/` y `/es/soporte/` con el fallback SPA de Vite. Al desplegar, configurar el mismo fallback.

- `src/views/`: vista principal.
- `src/components/`: layout, secciones y renderizador de contenido.
- `src/data/landing.json`: contenido original, sin scripts externos.
- `src/context/LandingContext.jsx`: estado global de contenido y video mediante React Context; expone `content`, `setContent`, `heroVideo` y `setHeroVideo`.
- `src/styles/`: estilos originales y modificaciones solicitadas.
- `public/`: fuentes, imágenes y video locales.

Los enlaces a la app y otros idiomas conservan los destinos de la referencia y requieren las rutas correspondientes en el sitio donde se integre.
