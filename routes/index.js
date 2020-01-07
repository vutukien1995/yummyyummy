var express = require('express');
var router = express.Router();

var firebase = require('firebase-admin');

const serviceAccount = require('../common/yummyyummy-84ed5-firebase-adminsdk-ebdli-9f88e88bba.json');
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});
const db = firebase.firestore();

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

router.get('/room', async (req, res) => {

  let users = [];

  await db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
  });
  
  res.render('room', { 
    title: title,
    users: users
  });

  console.log('users: ', users);
});

router.get('/error', function(req, res, next) {
  res.render('error', { 
    title: title
  });
});

module.exports = router;
