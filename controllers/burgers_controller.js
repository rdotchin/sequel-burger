var express = require('express');
var router = express.Router();
var Burgers = require('./../models/burger.js');



/*==================================EXPRESS ROUTES====================================*/
/*router.get('/', function(req, res){
	res.redirect('/index');
});*/

router.get('/', function(req, res){
	Burgers.findAll({}).then(function(data){
		var hbsObject = { burgers: data};
		res. render('index', hbsObject);
		}).catch(function(err){
			console.log(err);
		});
});

router.post('/index/create', function(req, res){
	Burgers.create({
			burger_name: req.body.burger_name,
		}).then(function(data){
			console.log("added burger");
			res.redirect('/');
		}).catch(function(err){
			console.log(err);
		});
});

router.put('/index/update/:id', function(req, res){
	Burgers.update({
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