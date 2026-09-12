const express = require("express");
const app = express();
const path = require("path");

// Configurar motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para procesar datos de formularios POST
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas principales
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Middleware 404 (debe ir al final de todas las rutas)
app.use((req, res) => {
  res.status(404).render("notFound", { url: req.originalUrl });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));