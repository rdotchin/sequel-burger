/*=======================Connect Node to MySQL==============================*/
//require mysql npm package
var Sequelize = require("sequelize");
//creates a sequilize object that connects to the mysql db by entering 'db_name', 'userName', 'password'
var sequelize = new Sequelize("burgers_db", "root", "", {
	host: "localhost",
	dialect: 'mysql',
	define: {
		timestamps: false
	}
});


//establish a sequelize, sync does not change the mysql table, pull row by id
sequelize
	.sync({
		logging: console.log
		}).then(function(){
		
		}).catch(function(error){
			console.log(error);
		});
/*====================END Connect Node to MySQL==============================*/

//export the mysql sequelize variable to be used in orm.js
module.exports = sequelize;


