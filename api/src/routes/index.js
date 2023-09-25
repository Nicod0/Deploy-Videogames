const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require("./videogamesRouter");
const genres = require("./genres");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogamesRouter);
router.use("/genres", genres);

module.exports = router;
