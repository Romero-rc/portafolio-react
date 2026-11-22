# Portafolio personal — React y Bootstrap

Portafolio web personal desarrollado como actividad de formación del programa **Tecnología en Análisis y Desarrollo de Software (ADSO)** del SENA.

El proyecto utiliza React para construir una interfaz modular mediante componentes reutilizables y Bootstrap para organizar el diseño adaptable a diferentes dispositivos.

## Información del proyecto

- **Aprendiz:** Michael Steven Romero Ciro
- **Programa:** Análisis y Desarrollo de Software (ADSO)
- **Institución:** SENA
- **Módulo:** Desarrollo Frontend con React.js
- **Actividad:** Creación de un Portafolio Web con React.js y Bootstrap

## Objetivo

Desarrollar una aplicación web de portafolio personal que permita presentar información académica, habilidades técnicas, proyectos y recomendaciones, aplicando los principios fundamentales de React y el sistema de diseño responsivo de Bootstrap.

## Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| React | Construcción de interfaces mediante componentes |
| JavaScript | Lógica, eventos y manejo de datos |
| Vite | Entorno de desarrollo y compilación |
| Bootstrap | Estilos y diseño responsivo |
| React-Bootstrap | Componentes Bootstrap adaptados a React |
| Bootstrap Icons | Iconografía de la interfaz |
| CSS3 | Personalización visual |
| Git y GitHub | Control de versiones y alojamiento del código |
| ESLint | Análisis estático del código |

## Funcionalidades

- Barra de navegación adaptable a dispositivos móviles.
- Presentación personal con información académica.
- Tarjetas reutilizables para mostrar habilidades.
- Sección de proyectos con tecnologías utilizadas.
- Visualización de recomendaciones.
- Formulario interactivo para agregar recomendaciones.
- Botón flotante para regresar al inicio.
- Diseño personalizado en tonos violetas y fondos claros.

**Nota:** las recomendaciones agregadas mediante el formulario se conservan únicamente en el estado de React. No se almacenan en una base de datos y desaparecen al recargar la página.

Las recomendaciones iniciales son ejemplos demostrativos de la actividad académica.

## Organización del proyecto

```text
portafolio-react/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── SkillCard.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── RecommendationCard.jsx
│   │   ├── RecommendationsSection.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── styles/
│   │   └── custom.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Conceptos de React aplicados

**Componentes funcionales:** cada sección tiene una responsabilidad específica.

**Props:** permiten compartir datos entre componentes, por ejemplo, al generar las tarjetas de habilidades y proyectos.

**Renderizado de listas:** se utiliza `map()` para transformar los arreglos de datos en componentes visuales.

**Estado:** se utiliza `useState()` para administrar las recomendaciones y los campos del formulario.

**Eventos:** mediante `onChange`, `onSubmit` y `onClick` se gestionan las interacciones del usuario.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Romero-rc/portafolio-react.git
cd portafolio-react
```

### 2. Instalar dependencias

Se requiere una versión de Node.js compatible con la versión de Vite utilizada.

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador la dirección local que indique Vite.

### 4. Verificar el código

```bash
npm run lint
```

### 5. Generar la compilación de producción

```bash
npm run build
```

Los archivos compilados se generan en el directorio `dist/`.

## Diseño visual

La interfaz conserva las secciones fundamentales de la actividad y utiliza una personalización visual llamada **Minimal Developer — Violet Edition**.

Se priorizaron la legibilidad, la organización del contenido, la adaptación a distintos tamaños de pantalla y la reutilización de componentes.

## Autor

**Michael Steven Romero Ciro**

Técnico en Programación de Software y aprendiz de Tecnología en Análisis y Desarrollo de Software (ADSO).

- GitHub: https://github.com/Romero-rc
- Correo: romerociroms@gmail.com

---

Proyecto desarrollado con fines académicos para aplicar conocimientos de React.js y Bootstrap.