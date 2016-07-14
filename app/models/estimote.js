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


/*  NEARABLE EXAMPLE
var estimote = Estimote(
    {
        batteryLevel: "UNKNOWN",
        color: "CANDY_FLOSS",
        currentMotionStateDuration: 40,
        identifier: "a91e64438b8ea261",
        isMoving: false,
        lastMotionStateDuration: 8,
        orientation: "HORIZONTAL",
        power: "LEVEL_7",
        hardwareVersion: "SB0",
        firmwareVersion: "Unknown",
        bootloaderVersion: "SB1.0.0",
        firmwareState: "APP",
        region : {
            identifier: "nearable-a91e64438b8ea261",
            major: 35726,
            minor: 41569,
            proximityUUID: "d0d3fa86-ca76-45ec-9bd9-6af4a91e6443"
        },
        rssi: -61,
        temperature: 25.938,
        type: "CAR",
        xAcceleration: -46.875,
        yAcceleration: -125,
        zAcceleration: -984.375
    }
);
*/