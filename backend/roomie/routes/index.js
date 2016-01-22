var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Apartment = require('../models/model.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){

	// var logoPath = "/Users/mahmoudalismail/Desktop/AlWakalat/Logos/cadillac_logo_100x100.png";
	
	var appartmentSchema = new Apartment ({
		"category": "studio", 
		"location":[1,2],
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
      			res.send("Great, saved appartment to mongo!\n");
  		});

});



router.get('/get', function(req, res){

	var apart = Apartment.find({}, function(err, result){
		if(err)
			console.log("ERROR");
		console.log("Results: ", result);

	})
})

module.exports = router;