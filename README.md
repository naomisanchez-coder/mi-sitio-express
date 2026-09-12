# 🎬 StreamFlix - Aplicación Web con Express.js y EJS

StreamFlix es una aplicación web desarrollada con **Node.js**, **Express** y el motor de plantillas **EJS**, estilizada con **Materialize CSS** y reglas avanzadas de CSS para recrear una interfaz moderna inspirada en plataformas de streaming.

Este proyecto forma parte del laboratorio de Desarrollo de Aplicaciones Web Avanzado de Tecsup.

---

## 🚀 Características Principales

* **Arquitectura MVC (Modelo-Vista-Controlador):** Separación modular de la lógica de negocio, rutas y vistas.
* **Procesamiento de Formularios:** Captura de datos mediante peticiones `POST` utilizando `express.urlencoded`.
* **Carril de Contenido (Netflix Rail):** Presentación dinámica de películas y series mediante desplazamiento horizontal y tarjetas interactivas.
* **Buzón de Administración:** Almacenamiento en memoria para mensajes enviados desde la página de contacto.
* **Catálogo de Películas/Series:** Formulario interactivo con 5 campos de captura y tabla para listar los registros en tiempo real.
* **Manejo de Errores 404:** Middleware personalizado para capturar URLs inexistentes y mostrar una vista de error amigable.
* **Diseño Responsive:** Adaptable a dispositivos móviles y de escritorio con contraste optimizado y tema oscuro.

---

## 📁 Estructura del Proyecto

```text
mi-sitio-express/
│── controllers/
│   └── mainController.js    # Lógica de procesamiento y gestión de datos en memoria
│── public/
│   └── styles.css          # Estilos personalizados (Tema Oscuro / Netflix UI)
│── routes/
│   └── mainRoutes.js        # Definición de endpoints de la aplicación
│── views/
│   ├── about.ejs           # Vista sobre la aplicación
│   ├── admin.ejs           # Vista del buzón de mensajes recibidos
│   ├── contact.ejs         # Formulario de contacto
│   ├── home.ejs            # Página de inicio con carril horizontal de estrenos
│   ├── movies.ejs          # Formulario y tabla del catálogo de películas/series
│   └── notFound.ejs        # Vista personalizada para rutas no encontradas (404)
│── .gitignore              # Exclusión de node_modules
│── app.js                  # Servidor principal y configuración de Express
│── package.json            # Dependencias del proyecto
└── README.md               # Documentación general