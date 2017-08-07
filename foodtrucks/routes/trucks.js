var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');
    console.log(`Getting trucks...`);
    // And insert something like this instead:
    res.json(
        [
            {
                id: 1,
                name: "Goatacado",
                description: "Healthy",
                locationName: "Martin Agency",
                address: "1 Shockoe Slip, Richmond, VA 23219",
                latitude: 37.534491,
                longitude: -77.433533,
                url: "http://www.goatocado.com"
            },
            {
                id: 2,
                name: "Dank Eats",
                description: "Funky Pitas",
                locationName: "Troutman Sanders",
                address: "1001 Haxall Point, Richmond, VA 23219",
                latitude: 37.5335044,
                longitude: -77.4383886,
                url: "http://www.dankeats.com"
            },
            {
                id: 3,
                name: "Arroz",
                description: "Mexican",
                locationName: "Riverfront Plaza",
                address: "901-951 E Byrd St, Richmond, VA 23219",
                latitude: 37.5347684,
                longitude: -77.4388865,
                url: "https://www.facebook.com/ArrozRVA/"
            },
            {
                id: 4,
                name: "Simon's Cafe",
                description: "Wraps and Salads",
                locationName: "James Center at 10th and Cary",
                address: "E Cary & S 10th St, Richmond, VA 23219",
                latitude: 37.5368209,
                longitude: -77.4362292,
                url: "https://foursquare.com/v/simons-caf%C3%A9-a-la-cart/4be43c10cf200f47b5a5113c"
            },
            {
                id: 5,
                name: "Caribbean Grill",
                description: "Caribbean Style Chicken",
                locationName: "James Center at 10th and Cary",
                address: "E Cary & S 10th St, Richmond, VA 23219",
                latitude: 37.5368209,
                longitude: -77.4362292,
                url: "https://www.yelp.com/biz/caribbean-grill-richmond"
            },
            {
                id: 6,
                name: "Boka Tako",
                description: "Tacos",
                locationName: "9th and Cary",
                address: "E Cary & S 9th St, Richmond, VA 23219",
                latitude: 37.537369,
                longitude: -77.437113,
                url: "http://bokatruck.com/boka-tako-truck/"
            }
        ]
    );
});

module.exports = router;