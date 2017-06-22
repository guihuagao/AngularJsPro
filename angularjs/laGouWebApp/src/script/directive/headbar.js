/**
 * Created by DELL on 2017/5/10.
 */
'use strict';
//创建指令appHead->app-head
angular.module('app').directive('appHeadBar',[function () {   //没有依赖，直接定义函数
    return{
        restrict:'A',   //属性的方式调用
        replace:true,     //只能有一个根元素
        templateUrl:'view/template/headBar.html',
        scope:{
            positiontext:'@'
        },
        link:function ($scope) {
            $scope.back=function () {
                window.history.back();
            }
        }
    };
}]);