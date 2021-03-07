const express = require('express');
const router = express.Router();
const fs = require('fs')



router.get('/', (req, res) => {
  res.render('contact', {
  	title: 'Inscription Candidat',
  	status: req.query.status
  });
});

// /contact/send
router.post('/send', (req, res) => {
	

	//var employees = []



	var name = req.body.nom;
	var order = 0
	
	var employee = {"username":name,"order_count":order,"password":"123456"}
		

	fs.readFile(__dirname + '/../users.json', function (err, data) {
		var json = JSON.parse(data);
		json.push(employee);    
		fs.writeFile(__dirname + '/../users.json', JSON.stringify(json, null, 2), function(err){
		  if (err) throw err;
		  console.log('The "data to append" was appended to file!');
		});
	})

	res.redirect('/contact?status=sent')
		
	


});

module.exports = router;
