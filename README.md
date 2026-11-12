# CODE PATH · Fundamentos de Programación

Plataforma interactiva para aprender programación desde cero. HTML, CSS y JavaScript puro: sin librerías, sin bases de datos y sin servicios de pago.

## Archivos
- `index.html`: estructura de la página
- `styles.css`: estilos (modo oscuro)
- `script.js`: contenido, lógica, guardado y sesiones

## Guardado del progreso
El progreso se guarda en el `localStorage` del navegador (clave `codepath.v1`).
- Se conserva al cerrar la pestaña y al actualizar la página.
- Es **por navegador y por dispositivo**: no se sincroniza entre computadores o celulares, ni entre navegadores distintos.
- Borrar los datos del sitio en el navegador (o usar modo privado) elimina el progreso.
- Para una futura sincronización, toda la lectura y escritura pasa por el objeto `Store` en `script.js` (`load`, `save`, `clear`). Bastaría reemplazarlo por un adaptador que hable con una base de datos.

## Probar en local
Abre `index.html` en el navegador. No necesita servidor.

## Publicar en GitHub Pages
1. Crea una cuenta en https://github.com (gratis) y un repositorio **público** nuevo, por ejemplo `code-path`.
2. Sube los archivos. Desde la carpeta del proyecto:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "CODE PATH: primera versión"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/code-path.git
   git push -u origin main
   ```
   (También puedes usar **Add file → Upload files** en la web de GitHub y arrastrar los archivos.)
3. En el repositorio ve a **Settings → Pages**.
4. En **Build and deployment**, elige **Source: Deploy from a branch**, rama **main** y carpeta **/(root)**. Guarda.
5. Espera uno o dos minutos. La página quedará en `https://TU_USUARIO.github.io/code-path/`.

Los archivos usan rutas relativas, así que funcionan en esa dirección sin cambios.
