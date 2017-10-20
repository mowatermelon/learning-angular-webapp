"use strict";

app.directive('appMain',[function(){
    return {
        restrict: 'A',//AEMC
        replace: true,
        templateUrl:'view/main.html'
    }
}])