// $(document).ready(function () {
//
//   window.tweets = [];
//   $.get( "/tweets")
//   .done(function( data ) {
//     console.log( data);
//     tweets.push(data);
//   });
//
//   })

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
    // .when('/search', {
    //   templateUrl: 'app/search/search.html',
    //   controller: 'SearchController'
    // })
    // .when('/tweetoff', {
    //   templateUrl: 'app/tweetoff/tweetoff.html',
    //   controller: 'TweetOffController'
    // })
})
