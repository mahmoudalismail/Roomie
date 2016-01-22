var mongoose = require('mongoose');


router.get('/fillAppartment', function(req, res){

	// var logoPath = "/Users/mahmoudalismail/Desktop/AlWakalat/Logos/cadillac_logo_100x100.png";
	
	var appartmentSchema = new Appartment ({
		"category": "studio", 
		"location": 2,
		"address":"qatar foundation", 
		"roommate":1,
		"price": 100,
		"phonenum": 33867438,
		"metadata":["bed:2", "bath:1"], 
		"interests":["run"]
	});

	appartmentSchema.save(function (err, a) {
      		if (err) console.log(err);
      		else
      			console.log(a);
      			console.error('saved appartment to mongo');
      			res.send("Great, saved appartment to mongo!");
  		});

});


	