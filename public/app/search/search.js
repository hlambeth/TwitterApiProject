angular.module('myTwitter.search', [])

.controller('SearchController', function ($scope, $http) {
  $scope.data;

return $http({
     method: 'GET',
     url: '/tweets'
   }).then(function (resp) {
     $scope.data = resp.data;
     console.log($scope.data.statuses)
   })
}) // end controller
