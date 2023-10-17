const functions = require("firebase-functions");

exports.randomNum = functions.https.onRequest((request,response) => {
 const num = Math.round(Math.random() * 100);
 
 response.send(num)
})