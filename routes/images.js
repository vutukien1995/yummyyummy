var express = require('express');
var router = express.Router();

var Image = require('../models/Image');

// CONSTANT
const title = 'Image management';

/**
 * Image page
 */
router.get('/', function(req, res, next) {
  res.render('image', {
    title: title
  });
});

/**
 * Image pusher
 */
router.post('/', function(req, res, next) {
  res.render('image', {
    title: title
  });
});

module.exports = router;
