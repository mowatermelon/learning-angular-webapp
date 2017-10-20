"use strict";

app.directive('appHead',[function(){
    return {
        restrict: 'A',//AEMC
        replace: true,
        templateUrl:'view/template/head.html'
    }
}])