"use strict";

app.directive('appNewList',[function(){
    return {
        restrict: 'A',//AEMC
        replace: true,
        templateUrl:'view/template/newList.html',
        scope: {
            data: '=',
        } 
    }
}])