var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estimoteSchema =
    new Schema({
        batteryLevel: String,
        color: String,
        currentMotionStateDuration: Number,
        identifier: String,
        isMoving: Boolean,
        lastMotionStateDuration: Number,
        orientation: String,
        power: String,
        hardwareVersion: String,
        firmwareVersion: String,
        bootloaderVersion: String,
        firmwareState: String,
        region : {
            identifier: String,
            major: Number,
            minor: Number,
            proximityUUID: String
        },
        rssi: Number,
        temperature: Number,
        type: String,
        xAcceleration: Number,
        yAcceleration: Number,
        zAcceleration: Number
});

var Estimote = mongoose.model('Estimote', estimoteSchema);

module.exports = Estimote;