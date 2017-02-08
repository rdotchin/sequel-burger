var express = require('express');
var router = express.Router();
/*var Burgers = require('./../models/burger.js');*/
var db = require('../models');



/*==================================EXPRESS ROUTES====================================*/
/*router.get('/', function(req, res){
	res.redirect('/index');
});*/

router.get('/', function(req, res){
	db.Burgers.findAll({
		/*include: [db.Temperatures]*/
		}).then(function(data){
		var hbsObject = { burgers: data};
		res. render('index', hbsObject);
		}).catch(function(err){
			console.log(err);
		});
});

router.post('/index/create', function(req, res){
	db.Burgers.create({
			burger_name: req.body.burger_name,
		}).then(function(data){
			console.log("added burger");
			res.redirect('/');
		}).catch(function(err){
			console.log(err);
		});
});

router.put('/index/update/:id', function(req, res){
	//somehow update temperature table using req.body.temp for the temp
	console.log(req.body.temp);
	console.log(typeof req.body.temp);
	db.Temperatures.create({
		temp: req.body.temp
	}, {
		where: {id : req.params.id}
	}).then(function(data){
		console.log("temp updated: " + req.body.temp);
	}).catch(function(err){
		console.log(err);
	});

	db.Burgers.update({
			devoured: 1
		},
		{
			where: {id : req.params.id}
		}).then(function(data){
			res.redirect('/');
		}).catch(function(err){
			console.log(err);
		});
	
});

/*==================================END EXPRESS ROUTES====================================*/


//export router to be required in server.js
module.exports = router;