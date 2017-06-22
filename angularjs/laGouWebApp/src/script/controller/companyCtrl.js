/**
 * Created by DELL on 2017/5/15.
 */
'user strict';

angular.module('app').controller('companyCtrl',['$http','state','$scope',function ($http,$state,$scope) {
$http({
    method:'GET',
    url:'/data/company.json?id='+$state.params.id
    }).then(function successCallback(response) {
   $scope.company=response.data;
});


}]);