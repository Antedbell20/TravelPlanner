const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class trips extends Model {}

trips.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrememnt: true,
        allowNull: false,
    },
    trip_budget: {
        type: DataTypes.INTEGER,

    },
    traveller_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,

    },
    traveller_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "traveller",
            key: "id",
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "location",
            key: "id",
        }
    }
});
module.exports = trips;