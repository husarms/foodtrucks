//model/foodtrucks.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.

var FoodTrucksSchema = new Schema({
    id: Number,
    name: String,
    shortDescription: String,
    longDescription: String,
    websiteUrl: String,
    truckImageUrl: String,
    menuImageUrl: String,
    isActive: Boolean,
    lastConfirmedDate: Date,
    schedule: [{
        location: String,
        address: String,
        latitude: Number,
        longitude: Number,
        reOccurringDay: String,
        everyWorkday: Boolean,
        specificDates: [Date]
    }]
});

//export our module to use in server.js
module.exports = mongoose.model('FoodTrucks', FoodTrucksSchema);