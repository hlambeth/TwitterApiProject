angular.module("myTwitter", [
  'myTwitter.tweetoff',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/tweetoff', {
      templateUrl: 'app/tweetoff/tweetoff.html',
      controller: 'TweetOffController'
    })
    .otherwise('/tweetoff', {
      templateUrl: 'app/tweetoff/tweetoff.html',
      controller: 'TweetOffController'
    })
})
