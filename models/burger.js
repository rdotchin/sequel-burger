var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

//create a model of the table for sequelize
var Burgers = sequelize.define('burgers', {
	//validate len will check if the title submitted will be between 6 and 15 letters
	burger_name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: {
			len: {
				args: [6, 25],
				msg: 'Please enter a title wtih at least 6 chars but no more than 15'
			}
		}
	},
	devoured: {
		type: Sequelize.BOOLEAN,
		default: 0,
	},
	date: {
		type: Sequelize.DATE,
		default: Sequelize.literal('CURRENT_TIMESTAMP')
	}
},
{
	timestamps: false
});



var burger = {
	all: function(cb){
		Burgers.findAll({}).then(function(data){
		cb(data);
		}).catch(function(err){
			console.log(err);
		});
	},
	create: function(name, cb){
		Burgers.create({
			burger_name: name,
			devoured: 0
		}).then(function(data){
			console.log("added burger");
			cb();
		}).catch(function(err){
			console.log(err);
		});
	},
	update: function(colVal, condition, cb){
		Burgers.update({
			devoured: condition
		},
		{
			where: {id : colVal}
		}).then(function(data){
			cb();
		}).catch(function(err){
			console.log(err);
		});
	}


};


module.exports = burger;