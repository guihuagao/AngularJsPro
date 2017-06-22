/**
 * Created by DELL on 2017/5/10.
 */
//配置文件
'use strict';

//模块的引用
angular.module('app').config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider){
    'use strict';
    //配置页面路由
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    }).state('position',{
        url:'/position/:id',
        templateUrl:'view/position.html',
        controller:'positionCtrl'
    }).state('company',{
        url:'/company/:id',
        templateUrl:'view/company.html',
        controller:'companyCtrl'
    }).state('search',{
        url:'/search',
        templateUrl:'view/search.html',
        controller:'searchCtrl'
    }).state('login',{
        url:'/login',
        templateUrl:'view/login.html',
        controller:'loginCtrl'
    }).state('register',{
        url:'/register',
        templateUrl:'view/register.html',
        controller:'registerCtrl'
    }).state('me',{
        url:'/me',
        templateUrl:'view/me.html',
        controller:'meCtrl'
    }).state('post',{
        url:'/post',
        templateUrl:'view/post.html',
        controller:'postCtrl'
    }).state('favorite',{
        url:'/favorite',
        templateUrl:'view/favorite.html',
        controller:'favoriteCtrl'
    });
    //做默认的跳转
    $urlRouterProvider.otherwise('main');

}]);



