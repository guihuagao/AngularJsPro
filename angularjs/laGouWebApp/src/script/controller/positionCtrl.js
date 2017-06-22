/**
 * Created by DELL on 2017/5/15.
 */
'user strict';

angular.module('app').controller('positionCtrl',['$q','$http','$state','$scope','cache',function ($q,$http,$state,$scope,cache) {
 cache.put('to','zlm');

    $scope.isLogin=false;
//2个异步操作改成同步操作
    function getPosition() {
        var deffer=$q.defer();  //延迟加载对象
        $http({
            method:'GET',
            url:'/data/position.json',
            params:{
                id:$state.params.id
            }
        }).then(function successCallback(response) {
            $scope.position = response.data;
            deffer.resolve(response.data);
        }, function errorCallback(err) {
            // 请求失败执行代码
            deffer.reject(err.data);
        });
        return deffer.promise;
    }

    function getCompany(id) {
        $http({
            method:'GET',
            url:'/data/company.json?id='+id
        }).then(function successCallback(response) {
            $scope.company = response.data;
        })
    }
    getPosition().then(function (obj) {
        getCompany(obj.companyId);
    });

//2个函数执行完之后，执行后一个函数
   /* $q.all([fun1(),fun2()]).then(function (result) {

    });*/




}]);