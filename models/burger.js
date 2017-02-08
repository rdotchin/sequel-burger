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
		defaultValue: 0,
	},
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
	}
},
{
	timestamps: false
});


module.exports = Burgers;