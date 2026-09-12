// Almacenamiento en memoria
const messages = [];
const movies = [
  { titulo: "Pulp Fiction", tipo: "Película", genero: "Crimen / Drama", anio: 1994, calificacion: "8.9" },
  { titulo: "Stranger Things", tipo: "Serie", genero: "Sci-Fi / Horror", anio: 2016, calificacion: "8.7" },
  { titulo: "El Padrino", tipo: "Película", genero: "Crimen", anio: 1972, calificacion: "9.2" }
];

const home = (req, res) => res.render("home", { title: "CineVintage - Inicio", movies });
const about = (req, res) => res.render("about", { title: "Acerca de CineVintage" });

const contact = (req, res) => res.render("contact");

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  messages.push({ nombre, email, mensaje });
  res.redirect("/admin");
};

const admin = (req, res) => res.render("admin", { messages });

// Controlador de Películas y Series
const moviesPage = (req, res) => res.render("movies", { movies });

const saveMovie = (req, res) => {
  const { titulo, tipo, genero, anio, calificacion } = req.body;
  movies.push({ titulo, tipo, genero, anio, calificacion });
  res.redirect("/movies");
};

module.exports = {
  home,
  about,
  contact,
  saveContact,
  admin,
  moviesPage,
  saveMovie
};