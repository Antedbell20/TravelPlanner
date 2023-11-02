const location = require('./location');
const traveller = require('./traveller');
const trips = require('./trips');

traveller.belongsToMany(location, {
    through:{
        trips
    }
})

location.belongsToMany(traveller, {
    through: trips,
})
module.exports = {Location, traveller, trips};