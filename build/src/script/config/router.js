
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider.state('main',{
            url: '/main',
            templateUrl: 'view/main.html',
            controller: 'mainCtrl'
        }).state('home',{
            url: '/home',
            templateUrl: 'view/home.html',
            controller: 'homeCtrl'
        }).state('mood',{
            url: '/mood',
            templateUrl: 'view/mood.html',
            controller: 'moodCtrl'
            
        }).state('pic',{
            url: '/pic',
            templateUrl: 'view/pic.html',
            controller: 'picCtrl'
            
        }).state('setting',{
            url: '/setting',
            templateUrl: 'view/setting.html',
            controller: 'settingCtrl'
            
        });
        $urlRouterProvider.otherwise('home');
    }]);

   