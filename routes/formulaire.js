const express = require('express');
const router = express.Router();
const fs = require('fs')





router.get('/', (req, res) => {
  res.render('formulaire', {
      title: 'Formulaire',
      status: req.query.status
  });
});

// /contact/send
router.post('/send', (req, res) => {
     const name = req.body.nom
     const prenom = req.body.prenom
     const age = req.body.age
     const adresse = req.body.adresse
     const mail = req.body.email
     const num = req.body.numero
     const forma = req.body.formation
     const forma1 = req.body.formation1
     const forma2 = req.body.formation2



    const customer = {"id": 1,"nom": name,"prenom": prenom,"age" : age,"adresse" : adresse,"mail" : mail,"numero" : num,"formations" : [{"formation": forma},{"formation1": forma1},{"formation2": forma2}]}



     const jsonString = JSON.stringify(customer, null, 2)

     fs.readFile(__dirname + '/../projects.json', function (err, data) {
      var json = JSON.parse(data);
      json.push(customer);    
      fs.writeFile(__dirname + '/../projects.json', JSON.stringify(json, null, 2), function(err){
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    })

    //console.log(req.body);
    res.redirect('/contact?status=sent');
});

module.exports = router;