/**
 * Created by DELL on 2017/5/10.
 */
'use strict';
angular.module('app',['ui.router','ngCookies']);
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




/**
 * Created by DELL on 2017/5/15.
 */
'user strict';

angular.module('app').controller('companyCtrl',['$http','state','$scope',function ($http,$state,$scope) {
$http({
    method:'GET',
    url:'/data/company.json?id='+$state.params.id
    }).then(function successCallback(response) {
   $scope.company=response.data;
});


}]);
/**
 * Created by DELL on 2017/5/10.
 */
'user strict';

angular.module('app').controller('favoriteCtrl',['$http','$scope',function ($http,$scope) {





}]);
/**
 * Created by DELL on 2017/5/10.
 */
'user strict';

angular.module('app').controller('loginCtrl',['$http','$scope',function ($http,$scope) {




}]);
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
/**
 * Created by DELL on 2017/5/10.
 */
'user strict';

angular.module('app').controller('meCtrl',['$http','$scope',function ($http,$scope) {





}]);
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
/**
 * Created by DELL on 2017/5/10.
 */
'user strict';

angular.module('app').controller('postCtrl',['$http','$scope',function ($http,$scope) {



}]);
/**
 * Created by DELL on 2017/5/10.
 */
'user strict';

angular.module('app').controller('registerCtrl',['$http','$scope',function ($http,$scope) {




}]);
/**
 * Created by DELL on 2017/5/17.
 */
'user strict';
angular.module('app')
.controller('searchCtrl',['dict','$http','$scope',function (dict,$http,$scope) {
    $scope.name='';
    $scope.search=function () {
        $http({
            method:'GET',
            url:'data/positionList.json?name='+$scope.name,
        }).then(function successCallback(response) {
            $scope.positionList=response.data;
        });

    };
    $scope.search();
    $scope.sheet={};
    $scope.tabList=[{
    id:'city',
    name:'城市'
},{
    id:'salary',
    name:'薪水'
},{
    id:'scale',
    name:'公司规模'
}];
    $scope.filterObj={};
    var tabId='';
    $scope.tClick=function (id,name) {
        tabId=id;
     $scope.sheet.list=dict[id];
     $scope.sheet.visible=true;
    };
    $scope.sClick=function (id,name) {
        if(id){
            angular.forEach($scope.tabList,function (item) {
                if(item.id===tabId){
                    item.name=name;
                }
            });
            $scope.filterObj[tabId+'Id']=id;
        }else{
            delete $scope.filterObj[tabId+'Id'];
            if(item.id===tabId){
                switch (item.id){
                    case 'city':
                        item.name='城市';
                        break;
                    case 'salary':
                        item.name='薪水';
                        break;
                    case 'scale':
                        item.name='公司规模';
                        break;
                    default:
                }
            }
        }
    }

}]);


/**
 * Created by DELL on 2017/5/10.
 */
'use strict';
//创建指令appHead->app-head
angular.module('app').directive('appCompany',[function () {   //没有依赖，直接定义函数
    return{
        restrict:'A',   //属性的方式调用
        replace:true,     //只能有一个根元素
        scope:{
            com:'='
        },
        templateUrl:'view/template/company.html'


    };
}]);
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
/**
 * Created by DELL on 2017/5/10.
 */
'use strict';
//创建指令appHead->app-head
angular.module('app').directive('appHead',[function () {   //没有依赖，直接定义函数
    return{
        restrict:'A',   //属性的方式调用
        replace:true,     //只能有一个根元素
        templateUrl:'view/template/head.html'
    };
}]);
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
/**
 * Created by DELL on 2017/5/15.
 */
'use strict';
angular.module('app').directive('appPositionInfo',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionInfo.html',
        scope:{
            isActive:'=',
            isLogin:'=',
            pos:'='
        },
        link:function ($scope) {
            $scope.imagePath=$scope.isActive?'image/star-active.png':'image/star.png';

        }
    }
}])
/**
 * Created by DELL on 2017/5/17.
 */

'use strict';

angular.module('app').directive('appSheet',[function () {
    return{
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
            visible:'=',
            select:'&'
        },
        templateUrl:'view/template/sheet.html'

    };
}]);

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
/**
 * Created by DELL on 2017/5/17.
 */
'use strict';
angular.module('app').filter('filterByObj',[function () {
    return function (list,obj) {
        var result=[];
        angular.forEach(list,function (item) {
            var isEqual=true;
            for(var e in obj){
                if(item[e]!==obj[e]){
                    isEqual=false;
                }
            }
            if(isEqual){
                result.push(item);
            }
        });
        return result;
    }
}]);
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