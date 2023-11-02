const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

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
});
module.exports = Traveller;