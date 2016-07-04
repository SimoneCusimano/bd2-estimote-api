// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://mongodb-server.cloudapp.net:27017'); // connect to our database

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
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// on routes that end in /estimotes
// ----------------------------------------------------
router.route('/estimotes')

    // create an estimote (accessed at POST http://localhost:8080/api/estimotes)
    .post(function(req, res) {

        var estimote = new Estimote();      // create a new instance of the Estimote model
        estimote.name = req.body.name;      // set the estimote name (comes from the request)

        // save the estimote and check for errors
        estimote.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'Estimote created!'});
        });
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