/**
 * Created by DELL on 2017/5/10.
 */
'user strict';

angular.module('app').controller('mainCtrl',['$http','$scope',function ($http,$scope) {

   /*$http ajax请求json数据*/

    $http({
        method: 'GET',
        url: '/data/positionList.json'
    }).then(function successCallback(response) {
        $scope.list = response.data;
    }, function errorCallback(response) {
        // 请求失败执行代码
    });




}]);