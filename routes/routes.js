const express = require("express");
const router = express.Router();

const { peliculas } = require("../peliculas.json");

router.get("/peliculas", (req, res) => {
  res.json(peliculas);
});
var control = false;
router.get("/peliculas/:id", (req, res) => {
  const id = req.params.id;
  for (var i = 0; i < peliculas.length; i++) {
    if (peliculas[i]["Identificador"] == parseInt(id)) {
      res.json(peliculas[i]);
      control= true;
    }
  }
  if (control == false ){
    res.send("No encontrado");
  }
  
});

module.exports = router;
