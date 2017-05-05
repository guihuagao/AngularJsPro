var myModule=angular.module("myModule",[]);
myModule.directive("hello",function(){

return {
    restrict:'E', 
    template:'<div>Hi everyone!</div>',
    replace:true
}

});