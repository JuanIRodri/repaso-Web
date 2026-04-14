# 🎤 Competencia de Rap - Sistema de Gestión (SPA)

Esta es una Single Page Application (SPA) premium diseñada para gestionar inscripciones y visualizar participantes de una competencia de rap. El proyecto sigue una arquitectura **MVC (Modelo-Vista-Controlador)** pura, utilizando Javascript moderno (ESM) sin frameworks externos.

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio.
2. Abre una terminal **específicamente en la carpeta raíz del proyecto** (`repaso-front`). Es fundamental estar ubicado aquí para que el servidor encuentre el archivo `index.html` y los módulos.
3. Inicia un servidor estático local. Ejemplos:
   - **Python**: `python3 -m http.server 8080`
   - **Node.js**: `npx serve .`
   - **PHP**: `php -S localhost:8080`
   - **VS Code Extension**: Puedes usar "Live Server" presionando el botón "Go Live" en la barra inferior.
4. Abre `http://localhost:8080` en tu navegador.

---

## 🏗️ Arquitectura del Proyecto (MVC)

El código está organizado de manera modular para facilitar la escalabilidad y el mantenimiento.

### 1. Modelos (`/models`)
Encargados de la lógica de datos y la persistencia.
- **`Database.mjs`**: Punto central de almacenamiento. Utiliza `localStorage` para persistir los datos de forma local y gestiona los datos semilla (seed) iniciales.
- **`ParticipantModel.mjs`**: Gestiona la lógica de los competidores, incluyendo la obtención y el ordenamiento alfabético.
- **`RegistrationModel.mjs`**: Maneja el flujo de validación y guardado de nuevas inscripciones.

### 2. Vistas (`/views`)
Gestionan la manipulación del DOM de forma programática.
- **`HomeView.mjs`**: Renderiza la sección Hero de bienvenida con animaciones.
- **`ParticipantView.mjs`**: Genera la cuadrícula de tarjetas de los MCs inscritos.
- **`InscriptionView.mjs`**: Gestiona el formulario de registro y sus estados (Carga, Éxito, Error).
- **`NavigationView.mjs`**: Controla el menú superior y el estado activo de las secciones.

### 3. Controladores (`/controllers`)
Actúan como mediadores entre Modelos y Vistas.
- **`AppController.mjs`**: El orquestador principal (Router). Gestiona la navegación entre páginas y la **carga dinámica de archivos CSS** específicos para cada sección.
- **`HomeController`**, **`ParticipantController`**, **`InscriptionController`**: Controladores especializados que inyectan los modelos necesarios en sus respectivas vistas.

---

## 🎨 Diseño y Estilos

- **Premium UI**: Se utilizan sombras suaves, efectos de glassmorphism y tipografía 'Inter' de Google Fonts.
- **Responsividad**: El sitio es 100% adaptable mediante CSS Grid y Flexbox.
- **CSS Dinámico**: Solo se cargan los estilos necesarios para la página actual, optimizando el rendimiento.
- **Iconografía**: Uso de FontAwesome 6 para una interfaz rica visualmente.

---

## 🛠️ Notas para Programadores

- **Punto de Entrada**: El sistema se inicializa en `script.js`.
- **Contenedor Principal**: Todas las vistas se inyectan en el elemento `<main id="app">` en `index.html`.
- **Limpieza de Datos**: Al ser un sistema basado en `localStorage`, puedes reiniciar la base de datos limpiando el almacenamiento local desde las herramientas de desarrollo del navegador.

---
*Desarrollado con arquitectura limpia y estética moderna.*
