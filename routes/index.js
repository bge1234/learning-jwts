var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var jwt = require('jsonwebtoken');

  var payload = {id: 7}
  var secret = "galvanize_rocks!";
  var options = {};

  jwt.sign(payload, secret, options, getToken);

  function getToken(token) {
    console.log(token);

    jwt.verify(token, secret, options, verifyToken);

    function verifyToken(err, decoded) {
      console.log(decoded);
    }
  }

  // How to use on front end:
  // - Get token from API and save to local storage.
  // - For every $http request, add token to header.
  // - If there is an unauthenticated error, delete token and send user back to login.
  // - If user logs out, same as last bullet.

  res.render('index', { title: 'Express' });
});

module.exports = router;
