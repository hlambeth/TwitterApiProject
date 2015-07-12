angular.module('myTwitter.search', [])

.controller('SearchController', function ($scope, $http) {
  // $scope.link= {}
  // $scope.link.greet = "hello"
  $scope.data;

  $http({
       method: 'GET',
       url: '/tweets'
     }).then(function (resp) {

       $scope.data = resp.data;
      //  $scope.data = $scope.data.statuses;
       console.log($scope.data.statuses[1])
     })
})
