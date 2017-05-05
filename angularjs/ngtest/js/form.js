var userInfoModule=angular.module('userInfoModule',[]);

userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){

$scope.userInfo={

email:"12345@163.com",
password:"12345",
autoLogin:true
};

$scope.getFormData=function(){
	console.log($scope.userInfo);
}

$scope.setFormData=function(){
	$scope.userInfo={
		email:'zhanglm@163.com',
		password:"12345",
        autoLogin:false
	}

};

	$scope.resetFormData=function(){
$scope.userInfo={

email:"12345@163.com",
password:"12345",
autoLogin:true

	}
};

}]);