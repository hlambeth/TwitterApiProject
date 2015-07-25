angular.module('myTwitter.tweetoff', [])

.controller('TweetOffController', function ($scope, $http) {
  $scope.nameOne = "katyperry";
  $scope.nameTwo = "jimmyfallon";
  $scope.oneFollowers;
  $scope.twoFollowers;
  $scope.oneUrl = "";
  $scope.twoUrl = "";


  $scope.getTweets = function () {
    // console.log("getTweets Scope, nameOne: " + $scope.nameOne)
    return $http.post('/tweets', {
      nameOne: $scope.nameOne,
      nameTwo: $scope.nameTwo
    })
    .success(function(data, status, headers, config) {
      if (!data[0]) {
        alert(""+ $scope.nameOne + " Doesn't Exsist")
      } else if (!data[1]) {
        alert("" + $scope.nameTwo + " Doesn't Exsist")
      } else {
        $scope.oneFollowers = data[0].followers_count
        $scope.twoFollowers = data[1].followers_count
      }

    var text = /_normal/gi
    var oneUrl = data[0].profile_image_url
    var twoUrl = data[1].profile_image_url

    oneUrl = oneUrl.replace(text, "_400x400")
    twoUrl = twoUrl.replace(text, "_400x400")

    $scope.oneUrl = oneUrl
    $scope.twoUrl = twoUrl

  })
  .error(function(err) {
    alert("That User Wasn't Found")

  });
 } // function
 $scope.getTweets();
}) // controller
