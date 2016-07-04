var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EstimoteSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Estimote', EstimoteSchema);