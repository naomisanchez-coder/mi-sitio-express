// Almacenamiento en memoria
const messages = [];
const games = []; // Registros de temática a libre criterio

const home = (req, res) => res.render("home", { title: "Inicio" });
const about = (req, res) => res.render("about", { title: "Acerca de" });

const contact = (req, res) => res.render("contact");

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  messages.push({ nombre, email, mensaje });
  res.redirect("/admin");
};

const admin = (req, res) => res.render("admin", { messages });

// Controlador para la sección libre (Videojuegos)
const gamesPage = (req, res) => res.render("games", { games });

const saveGame = (req, res) => {
  const { titulo, genero, plataforma, anio, calificacion } = req.body;
  games.push({ titulo, genero, plataforma, anio, calificacion });
  res.redirect("/games");
};

module.exports = {
  home,
  about,
  contact,
  saveContact,
  admin,
  gamesPage,
  saveGame
};