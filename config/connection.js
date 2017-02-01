/*=======================Connect Node to MySQL==============================*/
//require mysql npm package
var Sequelize = require("sequelize");
//creates a sequilize object that connects to the mysql db by entering 'db_name', 'userName', 'password'
var connection = new Sequelize("burgers_db", "root", "", {
	host: "localhost",
	dialect: 'mysql',
	define: {
		timestamps: false
	}
});

//create a model of the table for sequelize
var Burgers = connection.define('burgers', {
	burger_name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	devoured: {
		type: Sequelize.BOOLEAN,
		default: 0
	},
	date: {
		type: Sequelize.DATE,
		default: 'CURRENT_TIMESTAMP'
	}
});


//establish a connection, sync does not change the mysql table, pull row by id
connection.sync({
	logging: console.log
}).then(function(){
	Burgers.findById(4).then(function(burger){
		console.log(burger.dataValues);
	});
});
/*====================END Connect Node to MySQL==============================*/

//export the mysql connection variable to be used in orm.js
module.exports = connection;


