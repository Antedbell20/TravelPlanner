const Location = require('./location');
const Traveller = require('./traveller');
const Trips = require('./trips');

Traveller.hasMany(location, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
})

module.exports = {Location, Traveller, Trips};