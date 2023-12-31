const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection').default;

class location extends Model {}

location.init({
id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrememnt: true,
    allowNull: false,

},
name: {
    type: DataTypes.STRING,
    allowNull: true,

}
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
});
module.exports = location;