
export const profile = {
  name: 'Michael Steven Romero Ciro',
  shortName: 'Michael Romero',
  role: 'Técnico en Programación de Software',
  education: 'Aprendiz de Análisis y Desarrollo de Software (ADSO)',
  institution: 'SENA',
  location: 'Medellín, Colombia',
  email: 'romerociroms@gmail.com',
  github: 'https://github.com/Romero-rc',

  headline:
    'Construyendo soluciones, comprendiendo cada línea de código.',

  description:
    'Soy Técnico en Programación de Software y aprendiz de ADSO en el SENA. Me interesa comprender cómo funcionan las aplicaciones, las bases de datos y los sistemas operativos. Aprendo mediante proyectos, experimentación y documentación técnica.'
};

export const skills = [
  {
    id: 1,
    nombre: 'HTML',
    experiencia: 'Desarrollo web',
    icono: 'bi-filetype-html'
  },
  {
    id: 2,
    nombre: 'CSS',
    experiencia: 'Diseño de interfaces',
    icono: 'bi-filetype-css'
  },
  {
    id: 3,
    nombre: 'JavaScript',
    experiencia: 'Programación web',
    icono: 'bi-filetype-js'
  },
  {
    id: 4,
    nombre: 'React',
    experiencia: 'En aprendizaje',
    icono: 'bi-code-slash'
  },
  {
    id: 5,
    nombre: 'Python',
    experiencia: 'En práctica',
    icono: 'bi-filetype-py'
  },
  {
    id: 6,
    nombre: 'Git',
    experiencia: 'Control de versiones',
    icono: 'bi-git'
  }
];

export const projects = [
  {
    id: 1,
    nombre: 'Tienda Evelyn',
    descripcion:
      'Proyecto de gestión comercial orientado al manejo de productos, inventario, ventas y pedidos.',
    tecnologias: ['Python', 'Django', 'PostgreSQL'],
    icono: 'bi-cart3'
  },
  {
    id: 2,
    nombre: 'Veterinaria Vida Animal',
    descripcion:
      'Proyecto de interfaz web para presentar servicios veterinarios y facilitar la navegación.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    icono: 'bi-heart-pulse'
  },
  {
    id: 3,
    nombre: 'Gestor de Soporte',
    descripcion:
      'Ejercicio web con Flask para registrar solicitudes de soporte y validar prioridades.',
    tecnologias: ['Python', 'Flask', 'HTML', 'CSS'],
    icono: 'bi-headset'
  }
];

// Contenido demostrativo de la actividad académica.
// Sustituir por testimonios reales antes de publicar
// este apartado como referencias profesionales.
export const initialRecommendations = [
  {
    id: 1,
    nombre: 'Ejemplo académico 1',
    mensaje:
      'Demuestra responsabilidad y compromiso durante el desarrollo de las actividades.'
  },
  {
    id: 2,
    nombre: 'Ejemplo académico 2',
    mensaje:
      'Tiene disposición para aprender y colaborar en la solución de problemas.'
  },
  {
    id: 3,
    nombre: 'Ejemplo académico 3',
    mensaje:
      'Se interesa por mejorar el código y comprender cómo funcionan las aplicaciones.'
  }
];
