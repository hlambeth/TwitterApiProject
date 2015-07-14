var express = require('express');
var bodyParser = require('body-parser')
var Twit = require('twit')
var app = express();
var tweets;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('index');
})

app.post('/tweets', function (req, res) {
  var name1 = req.body.nameOne;
  var name2 = req.body.nameTwo;
  console.log(name1, name2)

    var T = new Twit({
        consumer_key:         'rs56eiKhu3y7s2E8UsdJPebnV'
      , consumer_secret:      'SSsGJANTDi1QkSW2wooDxH9LlwK4fDN6yan42PGcyCrbMj8iPk'
      , access_token:         '346184360-uaooqMaPD0y4bdNIhulfmigOAC1H5rtH932rvM0q'
      , access_token_secret:  'KxXxWjhBK9UlmNVShmMjWQzr5AXFsG5fy2EHObUCGr6Q5'
    })

    T.get('users/lookup', { screen_name: [name1,name2]}, function(err, data, response) {
      console.log("ONE FOLLOWERS IZ " +data[0].followers_count)
      console.log("TWO FOLLOWERS IZ " +data[1].followers_count)
      console.log(data)
      res.send(data)
    })

  })
app.listen(4000)
