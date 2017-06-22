/**
 * Created by DELL on 2017/5/17.
 */
'use strict';

angular.module('app').directive('appTab',[function () {
    return{
        restrict:'A',
        replace:true,
        scope:{
            tabClick:'&',
            list:'='

        },
        templateUrl:'view/template/tab.html',
        link:function ($scope) {
            $scope.click=function (tab) {
                $scope.selectId=tab.id;
                $scope.tabClick(tab);
            }
        }
    };
}]);