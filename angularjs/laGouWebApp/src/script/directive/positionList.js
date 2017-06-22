/**
 * Created by DELL on 2017/5/15.
 */
"use strict";

angular.module('app').directive('appPositionList',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionList.html',
        scope:{
            data:'=',
            filterObj:'='
        }
    }
}]);