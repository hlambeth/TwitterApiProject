angular.module('myTwitter.tweetoff', [])

.controller('TweetOffController', function ($scope, $http) {
  $scope.data;
  $scope.nameOne = "";
  $scope.nameTwo = "";
  $scope.oneFollowers;
  $scope.twoFollowers;

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
    }).success(function(data, status, headers, config) {
    $scope.oneFollowers = data[0].followers_count
    $scope.twoFollowers = data[1].followers_count
    console.log(data)
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
 } // function
}) // controller
