"use strict";

app.directive('appMoodList',[function(){
    return {
        restrict: 'A',//AEMC
        replace: true,
        templateUrl:'view/template/moodList.html',
        scope: {
            data: '=',
        } 
    }
}])