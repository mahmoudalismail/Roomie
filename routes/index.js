var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Apartment = require('../models/model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendfile("public/index.html");
});

/* get all apartments */
/* AJAX */
router.get('/getAll', function(req, res){

	var apart = Apartment.find({}, function(err, result){
		if(err){
			console.log("ERROR");
			res.send(null);
		}
		console.log("Results: ", result);
		res.send({aparts: JSON.stringify(result)});
	})
})

/* AJAX */
router.get('/find', function(req, res){
/*
 * request data is accessed by: 
 * 	req.query.<yourField>
 */
   res.sendfile("public/find.html");
})


router.get('/filterData', function(req, res){

	// read the JSON request
	var data = req.query;

	var apart = Apartment.find({}, function(err, result){
		if(err){
			console.log("ERROR");
			res.send(null);
		}
		console.log("Results: ", result);
		console.log("length: ", result.length)
		res.send(JSON.stringify(result));	
	});
	
});

/* populate database */
router.get('/fillApart', function(req, res){

	var appartmentSchema = new Apartment ({
		"category": "apartment",
		"location": [25.286865, 51.546529],
		"address": "New Doha Qatar Petroleum Doha Qatar",
		"roommate": 1,
		"price": 6500,
		"numbeds": 1,
		"phonenum": 44376275,
		"metadata": ["170 Square Meters", "bath:1"],
		"interests": [],
		"numImgs": 4
	});

	appartmentSchema.save(function (err, a) {
      		if (err) console.log(err);
      		else
      			console.log(a);
      			console.error('saved appartment to mongo');
      			res.send("Great, saved appartment to mongo!\n");
  		});

});


module.exports = router;
