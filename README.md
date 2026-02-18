# Personal Portfolio - Pablo Barrera

Portfolio personal construido con Astro y React, personalizado sobre una plantilla base y adaptado con un tema visual propio.

## Caracteristicas principales

- Arquitectura con Astro + componentes React puntuales
- Tema visual global con gradiente personalizado:
  `#E4E7E4 -> #C0C4CA -> #9BA1B0 -> #777F96 -> #535C7B -> #2E3961 -> #0A1647`
- Modo claro/oscuro con toggle en el navbar (arriba a la derecha)
- Persistencia del tema en `localStorage`
- Diseno responsive para desktop y mobile
- Secciones: Inicio, Proyectos, Sobre mi, Contacto
- Filtrado dinamico de proyectos

## Tecnologias utilizadas

- Astro
- React
- Tailwind CSS
- JavaScript
- Vite

## Estructura del proyecto

```text
/
|-- public/
|   |-- svg/                 # Iconos y recursos estaticos
|-- src/
|   |-- components/          # Componentes Astro/React
|   |   |-- commons/navbar/  # Navbar + theme toggle
|   |-- data/                # Datos de proyectos y experiencia
|   |-- layouts/             # Layout base global
|   |-- pages/               # Paginas principales
|   |-- scripts/             # Scripts de interaccion
|   |-- styles/              # Estilos globales y secciones
|-- astro.config.mjs
|-- package.json
```

## Comandos

| Command         | Action                                  |
|----------------|------------------------------------------|
| `npm install`  | Instala dependencias                     |
| `npm run dev`  | Inicia servidor local en `localhost:4321` |
| `npm run build`| Genera build de produccion               |
| `npm run preview` | Previsualiza el build                 |

## Notas recientes

- Se aplico una paleta gradiente unificada en toda la UI.
- Se implemento el toggle claro/oscuro en el navbar con apariencia personalizada.
- Se mejoro contraste de textos en botones y tarjetas clave.
- Se actualizaron iconos de la seccion Servicios.
- Se agrego Java en:
  - Seccion `Tecnologias` (pagina Sobre mi)
  - Carrusel de tecnologias (pagina principal)
