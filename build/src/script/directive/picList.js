"use strict";

app.directive('appPicList',[function(){
    return {
        restrict: 'A',//AEMC
        replace: true,
        templateUrl:'view/template/picList.html',
        scope: {
            data: '=',
        } 
    }
}])