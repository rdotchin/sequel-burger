

module.exports = function(sequelize, DataTypes){
//create a model of the table for sequelize
var Burgers = sequelize.define('Burgers', {
	//validate len will check if the title submitted will be between 6 and 15 letters
	burger_name: {
		type: DataTypes.STRING,
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
		type: DataTypes.BOOLEAN,
		defaultValue: 0,
	},
	date: {
		type: DataTypes.DATE/*,
		defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')*/
	}
},
{
	timestamps: false
},	{
	classMethods: {
		associate: function(models){
			Burgers.belongsTo(models.Temperatures, {
				foreignKey: {
					allowNull: false
				}
			});
		}
	}
});
 return Burgers;
};