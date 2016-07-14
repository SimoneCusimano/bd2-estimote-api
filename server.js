// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://mongodb-server.cloudapp.net:27017/bd2-estimote'); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var Estimote = require('./app/models/estimote');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/test', function(req, res) {
    res.json({ message: 'API up & running!' });
});

// more routes for our API will happen here

// on routes that end in /estimotes
// ----------------------------------------------------
router.route('/estimotes')

    // create an estimote (accessed at POST http://localhost:8080/api/estimotes)
    .post(function(req, res) {

        var estimotes = JSON.parse(req.body.Estimotes);

        // the string parsed is a List<List<Nearable>> with one element that is the List<Nearable> needed
        estimotes = estimotes[0];

        for (var index in estimotes) {
            // create a new instance of the Estimote model
            var estimote = Estimote(estimotes[index]);

            // save the estimote and check for errors
            estimote.save(function (err) {
                if (err)
                    res.send(err);
            });
        }

        res.json({message: estimotes.length + ' Estimote(s) created!'});

    })

    // get all the estimotes (accessed at GET http://localhost:8080/api/estimotes)
    .get(function(req, res) {
        Estimote.find(function(err, estimotes) {
            if (err)
                res.send(err);

            res.json(estimotes);
        });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server runs on port ' + port);