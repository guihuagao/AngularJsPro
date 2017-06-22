/**
 * Created by DELL on 2017/5/17.
 */

'use strict';

//创建全局变量,整个模块初始化
angular.module('app').value('dict',{}).run(['dict','$http',function (dict,$http) {
    $http({
        method:'GET',
        url:'data/city.json'
    }).then(function successCallback(response) {
      dict.city=response.data;
    });

    $http({
        method:'GET',
        url:'data/salary.json'
    }).then(function successCallback(response) {
        dict.salary=response.data;
    });

    $http({
        method:'GET',
        url:'data/scale.json'
    }).then(function successCallback(response) {
        dict.scale=response.data;
    });


}]);
