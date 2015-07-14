angular.module('myTwitter.tweetoff', [])

.controller('TweetOffController', function ($scope, $http) {
  $scope.data;
  $scope.nameOne = "";
  $scope.nameTwo = "";

  //  $scope.getTweets = function() {
  //  return $http.post({
  //    method: 'POST',
  //    url: '/tweets',
  //    data: {
  //      nameOne: $scope.nameOne,
  //      nameTwo: $scope.nameTwo
  //    }
  //  })

  $scope.getTweets = function (name) {
    console.log("getTweets Scope, nameOne: " + $scope.nameOne)
    return $http.post('/tweets', {
      nameOne: $scope.nameOne,
      nameTwo: $scope.nameTwo
    })// post
 } // function
}) // controller
