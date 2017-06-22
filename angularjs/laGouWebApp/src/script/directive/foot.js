/**
 * Created by DELL on 2017/5/15.
 */
"use strict";

angular.module('app').directive('appFoot',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/foot.html'
    }
}]);