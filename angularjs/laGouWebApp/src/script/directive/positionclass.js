/**
 * Created by DELL on 2017/5/16.
 */
'use strict';
angular.module('app').directive('appPositionClass',[function () {
    return{
        restrict:'A',
        replace:true,
        scope:{
            com:'='
        },
        templateUrl:'view/template/positionclass.html',
        link:function ($scope) {
            $scope.showPositionList=function(index){
                $scope.positionList=$scope.com.positionClass[index].positionList;
                $scope.isActive=index;
            }
            $scope.showPositionList(0);


        }

    }
}]);