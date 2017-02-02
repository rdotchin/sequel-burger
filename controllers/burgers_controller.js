var express = require('express');
var router = express.Router();
var burger = require('./../models/burger.js');



/*==================================EXPRESS ROUTES====================================*/
/*router.get('/', function(req, res){
	res.redirect('/index');
});*/

router.get('/', function(req, res){
	burger.all(function(data){
		var hbsObject = { burgers: data };
		/*console.log(hbsObject);*/
		res.render('index', hbsObject);
	});
});

router.post('/index/create', function(req, res){
	burger.create(req.body.burger_name, function(data){
		console.log("redirect");
		res.redirect('/');
	});
});

router.put('/index/update/:id', function(req, res){
	burger.update(req.params.id, 1, function(data){
		res.redirect('/');
	});
	
});

/*==================================END EXPRESS ROUTES====================================*/


//export router to be required in server.js
module.exports = router;