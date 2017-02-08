module.exports = function(sequelize, DataTypes){
//create a model of the customers table

var Temperatures = sequelize.define('Temperatures', {
	temp: DataTypes.STRING
	}/*, 

	{
		classMethods: {
			associate: function(models) {
				Temperatures.hasOne(models.Burgers, {
					
				}); 
			}
		}
	}*/);
	return Temperatures;
};

