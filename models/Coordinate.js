//TO-DO implement timestamps

var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Coordinate = mongoose.Schema(
  {
    deviceID: Number,
    latitude: Number,
    longtitude: Number,
  }
);

Coordinate.plugin(timestamps);

module.exports = mongoose.model('Coordinate', Coordinate);
