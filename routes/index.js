var express = require('express');
var router = express.Router();

var admin = require('firebase-admin');

const title = "Yummyyummy";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

router.get('/listings', function(req, res, next) {
  res.render('listings', { 
    title: 'Express' 
  });
});

router.get('/elements', function(req, res, next) {
  res.render('elements', { 
    title: 'Express' 
  });
});


router.get('/blog', function(req, res, next) {
  res.render('blog', { 
    title: 'Express' 
  });
});

router.get('/room', function(req, res, next) {
  res.render('room', { 
    title: title
  });
});

router.get('/error', function(req, res, next) {
  res.render('error', { 
    title: title
  });
});

module.exports = router;
