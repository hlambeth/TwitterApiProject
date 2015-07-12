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
  'myTwitter.search',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchController'
    })
})
