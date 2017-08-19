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
                url: "http://www.goatocado.com",
                truckImageUrl: "http://2.bp.blogspot.com/-HVB1N5HaiY0/UGZPAHp8PnI/AAAAAAAABAg/o-kOcgWyjsI/s1600/stand.JPG"
            },
            {
                id: 2,
                name: "Dank Eats",
                description: "Funky Pitas",
                locationName: "Troutman Sanders",
                address: "1001 Haxall Point, Richmond, VA 23219",
                latitude: 37.5335044,
                longitude: -77.4383886,
                url: "http://www.dankeats.com",
                truckImageUrl: "https://roaminghunger.com/img/trucks/original/56e89844-abc0-4d3a-b93b-74c346204482.jpg"
            },
            {
                id: 3,
                name: "Arroz",
                description: "Mexican",
                locationName: "Riverfront Plaza",
                address: "901-951 E Byrd St, Richmond, VA 23219",
                latitude: 37.5347684,
                longitude: -77.4388865,
                url: "https://www.facebook.com/ArrozRVA/",
                truckImageUrl: "http://www.richmondfoodtruckassociation.com/wp-content/uploads/2017/04/Arroz-Orange.gif"
            },
            {
                id: 4,
                name: "Simon's Cafe",
                description: "Wraps and Salads",
                locationName: "10th and Cary",
                address: "E Cary & S 10th St, Richmond, VA 23219",
                latitude: 37.5368209,
                longitude: -77.4362292,
                url: "https://foursquare.com/v/simons-caf%C3%A9-a-la-cart/4be43c10cf200f47b5a5113c",
                truckImageUrl: "https://igx.4sqi.net/img/general/width960/slGSaoYk0G83LaNPnL44D_SeQBz8c713l1MLzgbM_z8.jpg"
            },
            {
                id: 5,
                name: "Caribbean Grill",
                description: "Caribbean Style Chicken",
                locationName: "10th and Cary",
                address: "E Cary & S 10th St, Richmond, VA 23219",
                latitude: 37.5368209,
                longitude: -77.4362292,
                url: "https://www.yelp.com/biz/caribbean-grill-richmond",
                truckImageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/08/06/5a/c3/caribbean-grill.jpg"
            },
            {
                id: 6,
                name: "Boka Tako",
                description: "Tacos",
                locationName: "9th and Cary",
                address: "E Cary & S 9th St, Richmond, VA 23219",
                latitude: 37.537369,
                longitude: -77.437113,
                url: "http://bokatruck.com/boka-tako-truck/",
                truckImageUrl: "https://i1.wp.com/bokatruck.com/wp-content/uploads/2011/08/064.jpg"
            }
        ]
    );
});

module.exports = router;