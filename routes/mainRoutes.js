const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/about", mainController.about);

// Rutas de Contacto y Admin
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);
router.get("/admin", mainController.admin);

// Rutas de Catálogo Películas / Series (Vista libre criterio)
router.get("/movies", mainController.moviesPage);
router.post("/movies", mainController.saveMovie);

module.exports = router;