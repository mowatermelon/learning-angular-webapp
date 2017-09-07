"use strict";

var app = angular.module('myApp',['ui.router']);
// angular.module("app").controller("homeCtrl"); 

// angular.module("app").controller("mainCtrl");

    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider.state('home',{
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

    app.controller('homeCtrl', function ($scope, $state) {
        $scope.changeState = function () {
        $state.go('/home',{id:home.id},{location:'replace'});
        };
    });
    app.controller('moodCtrl', function ($scope, $state) {
        $scope.changeState = function () {
            $state.go('/mood',{id:mood.id},{location:'replace'});
        };
    });
    app.controller('picCtrl', function ($scope, $state) {
        $scope.changeState = function () {
            $state.go('/pic',{id:pic.id},{location:'replace'});
        };
    });
    app.controller('settingCtrl', function ($scope, $state) {
        $scope.changeState = function () {
            $state.go('/setting',{id:setting.id},{location:'replace'});
        };
    });