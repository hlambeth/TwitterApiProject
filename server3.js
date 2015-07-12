var express = require('express');
var Twitter = require('node-twitter');
var Twit = require('twit')
var app = express();
var tweets;
// var handler = require('./handler.js')

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('index')
  res.send('index')
})

app.get('/tweets', function (req, res) {

  var T = new Twit({
      consumer_key:         'rs56eiKhu3y7s2E8UsdJPebnV'
    , consumer_secret:      'SSsGJANTDi1QkSW2wooDxH9LlwK4fDN6yan42PGcyCrbMj8iPk'
    , access_token:         '346184360-uaooqMaPD0y4bdNIhulfmigOAC1H5rtH932rvM0q'
    , access_token_secret:  'KxXxWjhBK9UlmNVShmMjWQzr5AXFsG5fy2EHObUCGr6Q5'
  })


  T.get('search/tweets', { q: 'wimbledon lang:en', count: 40}, function(err, data, response) {
    res.send(data)
  })
})
app.listen(4000)
