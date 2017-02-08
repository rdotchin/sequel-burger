module.exports = function(sequelize, DataTypes){
//create a model of the customers table

var Temperatures = sequelize.define('Temperatures', {
	temp: {
		type: DataTypes.STRING
	}
	}/*, {
		classMethods: {
			associates: function(models) {
				Temperatures.belongsTo(models.Burgers, {
					foreignKey: {
						allowNull: false
					}
				}); 
			}
		}
	}*/);
	return Temperatures;
};

