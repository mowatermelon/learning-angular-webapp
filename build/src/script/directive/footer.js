"use strict";

app.directive('appFoot',[function(){
    return {
        restrict: 'A',//AEMC
        replace: true,
        templateUrl:'view/template/foot.html'
    }
}])