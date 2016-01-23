var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Apartment = require('../models/model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
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
	res.send("Nothing here for you to see!");
})


router.get('/filterData', function(req, res){

	// read the JSON request
	var data = req.query;

	// send JSON
	res.send(JSON.stringify(data));
	
});

/* populate database */
router.get('/fillApart', function(req, res){

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

module.exports = router;
