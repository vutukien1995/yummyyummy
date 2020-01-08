var express = require('express');
var router = express.Router();

// Set up firebase
var firebase = require('firebase-admin');
const db = firebase.firestore();

const title = "Yummyyummy";

/** GET message */
router.get('/', async (req, res) => {
  let messages = [];

  await db.collection("room-message").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
    });
  });
  
  res.send(JSON.stringify(messages));
});

/** POST message */
router.post('/', async (req, res) => {

  if (!req.body.name) return res.send("Missing name!");
  if (!req.body.email) return res.send("Missing email!");
  if (!req.body.content) return res.send("Missing content!");

  db.collection("room-message").add({
      name : req.body.name,
      email: req.body.email,
      content: req.body.content,
      createdDate: new Date()
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      res.send("send message successfully!")
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
      res.send('send message failure!');
  });
  
});

module.exports = router;
