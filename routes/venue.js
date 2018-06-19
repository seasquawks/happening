var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Venue = require('../models/venue.js');

/* GET ALL Venue */
router.get('/', function(req, res, next) {
    Venue.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Venue BY ID */
router.get('/:id', function(req, res, next) {
    Venue.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Venue */
router.post('/', function(req, res, next) {
    Venue.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Venue */
router.put('/:id', function(req, res, next) {
    Venue.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Venue */
router.delete('/:id', function(req, res, next) {
    Venue.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;