var express = require('express');
var router = express.Router();

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

module.exports = router;
