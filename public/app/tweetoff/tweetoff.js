angular.module('myTwitter.tweetoff', [])

.controller('TweetOffController', function ($scope, $http) {
  $scope.data;
  $scope.nameOne = "";
  $scope.nameTwo = "";
  $scope.oneFollowers;
  $scope.twoFollowers;
  $scope.oneUrl = "avatar.png";
  $scope.twoUrl = "avatar.png";


  $scope.getTweets = function (name) {
    console.log("getTweets Scope, nameOne: " + $scope.nameOne)
    return $http.post('/tweets', {
      nameOne: $scope.nameOne,
      nameTwo: $scope.nameTwo
    }).success(function(data, status, headers, config) {
    $scope.oneFollowers = data[0].followers_count
    $scope.twoFollowers = data[1].followers_count
    // $scope.oneUrl = data[0].profile_image_url
    // $scope.twoUrl = data[1].profile_image_url
    var text = /_normal/gi
    var oneUrl = data[0].profile_image_url
    var twoUrl = data[1].profile_image_url

    oneUrl = oneUrl.replace(text, "_400x400")
    twoUrl = twoUrl.replace(text, "_400x400")

    $scope.oneUrl = oneUrl
    $scope.twoUrl = twoUrl
    // console.log(data)
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    alert("That User Wasn't Found")
  });
 } // function
}) // controller
