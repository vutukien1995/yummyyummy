var express = require('express');
var router = express.Router();

// Firebase config
var firebase = require('firebase-admin');

const serviceAccount = require('../common/yummyyummy-84ed5-firebase-adminsdk-ebdli-9f88e88bba.json');
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});
const db = firebase.firestore();

// Constant
const title = "Yummyyummy";


/**
 * Index page
 */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});


/**
 * Room page
 */
router.get('/room', async (req, res) => {

  let messages = [];

  await db.collection("room-message").orderBy("createdDate").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
    });
  });
  
  res.render('room', { 
    title: title,
    messages: messages
  });

  console.log('users: ', users);
});


// /**
//  * Error page
//  */
// router.get('/error', function(req, res, next) {
//   res.render('error', { 
//     title: title
//   });
// });

module.exports = router;
