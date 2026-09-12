const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/about", mainController.about);

// Rutas de contacto y administración
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);
router.get("/admin", mainController.admin);

// Rutas para la vista libre (Videojuegos)
router.get("/games", mainController.gamesPage);
router.post("/games", mainController.saveGame);

module.exports = router;