const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  const accueilText = `
  Placer ici le nom de la personne qui se connect et sinon mettre autre chose mais je sais pas encore quoi donc ca sera un petit chat UwU
  `;

  // Appel la vue views/index.pug de facon implicite en lui passant les
  // variables "content", "myTitle", "sayHelloFunction"
  res.render('index', {
    content: accueilText,
    title: 'Acceuil'
  });
});

module.exports = router;
