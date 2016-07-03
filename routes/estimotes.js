var express = require('express');
var router = express.Router();

/* GET estimotes listing. */
router.get('/test', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://mongodb-server.cloudapp.net:27017/test';
    MongoClient.connect(url, function(err, db) {
        if (err){
            res.send("Error occurred");
            throw err;
        }

        /*
        var cursor = findDoc(db);
        cursor.forEach(function (element) {
            console.log(element);
        });
        */

        //res.setHeader('Content-Type', 'application/json');
        res.send("Connection done.");
    });

    var findDoc = function(db, callback) {
        return db.collection('testCollection').find( );

    };
});

module.exports = router;
