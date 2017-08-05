var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        id: 1,
        name: "Goatacado",
        description: "Healthy",
        locationName: "Martin Agency",
        address: "1 Shockoe Slip, Richmond, VA 23219",
        latitude: 37.5664821,
        longitude: -77.502133,
        url: "http://www.goatocado.com"
    }, {
        id: 2,
        name: "Dank Eats",
        description: "Funky Pitas",
        locationName: "Troutman Sanders",
        address: "1001 Haxall Point, Richmond, VA 23219",
        latitude: 37.5335044,
        longitude: -77.4383886,
        url: "http://www.dankeats.com"
    }, {
        id: 3,
        name: "Arroz",
        description: "Mexican",
        locationName: "Riverfront Plaza",
        address: "901-951 E Byrd St, Richmond, VA 23219",
        latitude: 37.5347684,
        longitude: -77.4388865,
        url: "https://www.facebook.com/ArrozRVA/"
    }]);
});

module.exports = router;