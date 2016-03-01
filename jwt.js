var jwt = require('jsonwebtoken');

var payload = {id: 0}
var secret = "galvanize_rocks!";
var options = {};

jwt.sign(payload, secret, options, getToken);

function getToken(token) {
  console.log(token);
}

jwt.verify(token, secret, options, veifyToken);

function verifyToken(err, decoded) {
  console.log(decoded);
}
