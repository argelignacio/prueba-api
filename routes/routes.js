const express = require("express");
const router = express.Router();

const peliculas = require('../peliculas.json')

router.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

module.exports = router;
