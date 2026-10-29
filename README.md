# Insight The City · ITC Club

Dos proyectos independientes en React y Vite:

- `Landing/`: landing principal de ITC Club.
- `Soporte/`: página de ayuda y soporte, con estado global de contenido y video en el hero.

## Ejecutar localmente

Desde la carpeta del proyecto que quieras abrir:

```sh
cd Landing # o cd Soporte
npm ci
npm run dev
```

## Compilar

Ejecuta `npm run build` dentro de cada proyecto. El resultado se genera en su carpeta `dist/`.

Para desplegarlos de forma independiente, configura `Landing` o `Soporte` como directorio raíz del servicio, `npm run build` como comando de compilación y `dist` como carpeta de publicación. Para las rutas internas de Soporte, configura el fallback a `index.html`.
