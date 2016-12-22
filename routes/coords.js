var express = require('express');
var router = express.Router();

var coordsSchema = require('../models/Coordinate');

router.get('/terminals', function(req, res, next) {
  var terminalsFromServer;
  console.log(typeof terminalsFromServer);
  coordsSchema.find().distinct('deviceID', function(err, terminals) {
    if (err) return next(err);

    return res.json(terminals);
  })

});

router.get('/position/:id', function(req, res, next) {
  coordsSchema.find({deviceID: req.params.id}, {updatedAt: 1, latitude: 1, longtitude: 1}, function(err, pos) {
    if (err) return next(err);
    return res.json({ pos: pos, id: req.params.id });
  })
})

router.put('/update/:id', function(req, res, next) {
  coordsSchema.update({deviceID: req.params.id}, { $set: { longtitude: -6.6 }}, function(err, pos) {
    if (err) return next(err);
    return res.json("everything's fine");
    })
})

router.post('/newCoord/:id/:lat/:lng', function(req, res, next) {
  var coordinate;
  coordinate = new coordsSchema({
    deviceID: req.params.id,
    latitude: req.params.lat,
    longtitude: req.params.lng
  });
  coordinate.save(function(err) {
    if(!err) {
      return console.log("succesfully created" + coordinate);
    } else {
      return console.log(err);
    }
  });
  return res.json({coordinate: coordinate});
})

router.delete('/deleteterminal/:id', function(req, res, next) {
  coordsSchema.remove( { deviceID: req.params.id }, function(err) {
    if (err) return next(err);
    return res.json("deleed");
  })
})

module.exports = router;
