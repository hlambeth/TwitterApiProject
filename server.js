var express = require('express');
var app = express();
var tweets;
// var handler = require('./handler.js')

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('index')
  res.send('index')
})

app.get('/tweets', function (req, res) {
  res.send(tweets)
})


var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.twitter.com",
  "port": null,
  "path": "/1.1/statuses/home_timeline.json?screen_name=HadleyLambeth",
  "headers": {
    "authorization": "OAuth oauth_consumer_key=\"rs56eiKhu3y7s2E8UsdJPebnV\",oauth_token=\"346184360-uaooqMaPD0y4bdNIhulfmigOAC1H5rtH932rvM0q\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1436819092\",oauth_nonce=\"W1zxzt\",oauth_version=\"1.0\",oauth_signature=\"Qu5XAHNOgpP%2FAdtfq%2FvSVEc42E4%3D\""
  }
};
var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    // console.log(body.toString());
    // tweets.push(body.toString())
    tweets = body.toString()
    // console.log(tweets)
  });
});

// print tweets


req.end();
app.listen(3000)
