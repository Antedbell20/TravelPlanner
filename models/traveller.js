const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js').default;

class traveller extends Model {}

traveller.init({
id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrememnt: true,
    allowNull: false,
},
name: {
    type: DataTypes.STRING,
    allowNull: true,
},
email: {
    type: DataTypes.STRING,
    allowNull: true,
}
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveller',
});
module.exports = traveller;