"use strict";

app.directive('appSetList',[function(){
    return {
        restrict: 'A',//AEMC
        replace: true,
        templateUrl:'view/template/setList.html',
        scope: {
            data: '=',
        } 
    }
}])