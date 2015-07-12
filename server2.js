var express = require('express');
var Twitter = require('node-twitter');
var app = express();
var tweets;
// var handler = require('./handler.js')

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('index')
  res.send('index')
})

app.get('/tweets', function (req, res) {
  // res.send(tweets)

  var twitterSearchClient = new Twitter.SearchClient(
      'rs56eiKhu3y7s2E8UsdJPebnV',
      'SSsGJANTDi1QkSW2wooDxH9LlwK4fDN6yan42PGcyCrbMj8iPk',
      '346184360-uaooqMaPD0y4bdNIhulfmigOAC1H5rtH932rvM0q',
      'KxXxWjhBK9UlmNVShmMjWQzr5AXFsG5fy2EHObUCGr6Q5'
  );

  var test = twitterSearchClient.search({'q': 'wimbledon lang:en', 'count': 30}, function(error, result) {
      var searchTweets;
      if (error) {
        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
      }

      if (result) {
        res.send(result);
      }

  });
})
// console.log(tweets)
app.listen(8000)
