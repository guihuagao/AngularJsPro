/**
 * Created by DELL on 2017/5/17.
 */
'use strict';
//自定义服务
angular.module('app')

  /*service服务*/
/*.service('cache',['$cookies',function ($cookies) {
    this.put=function (key,value) {
        $cookies.put(key,value);
    };
    this.get=function (key) {
        return $cookies.get(key);
    };
    this.remove=function (key) {
       $cookies.remove(key);
    }
}])*/


//factory服务，可以定义私有属性，外部不可访问
.factory('cache',['$cookies',function ($cookies) {

   return{
       put:function (key,value) {
           $cookies.put(key,value);
       },
       get:function (key) {
           return $cookies.get(key);
       },
       remove:function (key) {
           $cookies.remove(key);
       }
   }
}]);