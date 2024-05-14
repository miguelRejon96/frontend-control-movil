# Frontend Template

Este repositorio contiene una plantilla básica para iniciar proyectos frontend utilizando React con Vite, Tailwind CSS, y TypeScript.

## Características

- **React con Vite**: Utilizamos Vite como nuestro bundler para proporcionar un entorno de desarrollo rápido y optimizado para React.
- **Tailwind CSS**: Tailwind CSS es un framework de estilos utilitarios que facilita la creación de interfaces modernas y personalizables.
- **TypeScript**: TypeScript añade tipos estáticos a JavaScript.
- **React Hooks**: Utilizamos los Hooks de React para manejar el estado y el ciclo de vida de los componentes de manera eficiente.
- **React Forms**: Hacemos uso de React Forms para manejar formularios de manera sencilla y efectiva.
- **React Query**: React Query nos proporciona una manera sencilla y poderosa de manejar el estado de la caché y las solicitudes de datos en nuestra aplicación.
- **React Router**: React Router nos proporciona funcionalidad para el manero de rutas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).

## Empezando

1. Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/cicsa-corp/fronted-template.git

```

2. Entra al directorio del proyecto:
```bash
cd fronted-template

```

3. Instala las dependencias del proyecto:
```bash
npm install
```
4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173).

## Estructura del Proyecto

El proyecto sigue una estructura de directorios estándar para una aplicación React con Vite. Aquí hay una descripción rápida de los directorios más importantes:

- **`src/`**: Contiene el código fuente de la aplicación.
  - **`api/`**: Contiene los enpoints, se crea un archivo para cada servicio.
  - **`components/`**: Aquí se encuentran los componentes de React reutilizables.
  - **`helpers/`**: Aqui se encuentran las funciones y variables que se reutilizaran globalmente.
  - **`pages/`**: Contiene las diferentes vistas de la aplicación.
  - **`types/`**: Contiene definiciones de tipos TypeScript personalizados para la aplicación.
  - **`routes/`**: Contiene las configuraciones y definiciones de las rutas de la aplicación.
  - **`layout/`**: Contiene la esctructura del fronted (Header, Navbar, Section, Footer).
  
- **`public/`**: Directorio público que contiene archivos estáticos como imágenes, iconos, etc.


## Componentes Reutilizables

Todos los componentes reutilizables se encuentran en la ruta `src/pages/documentation/`. Estos componentes están diseñados para ser utilizados en toda la aplicación para mantener la consistencia.


## Links de Apoyo

Aquí hay algunos enlaces útiles

- [Documentación de React](https://es.react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React Hook Form](https://react-hook-form.com/)
- [Documentación de React Query](https://react-query.tanstack.com/)
- [Documentación de React Router](https://reactrouter.com/en/main)
