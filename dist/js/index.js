"use strict";var app=angular.module("myApp",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(t,o){t.state("home",{url:"/home",templateUrl:"view/home.html",controller:"homeCtrl"}).state("mood",{url:"/mood",templateUrl:"view/mood.html",controller:"moodCtrl"}).state("pic",{url:"/pic",templateUrl:"view/pic.html",controller:"picCtrl"}).state("setting",{url:"/setting",templateUrl:"view/setting.html",controller:"settingCtrl"}),o.otherwise("home")}]),app.controller("homeCtrl",function(t,o){t.changeState=function(){o.go("/home",{id:home.id},{location:"replace"})}}),app.controller("moodCtrl",function(t,o){t.changeState=function(){o.go("/mood",{id:mood.id},{location:"replace"})}}),app.controller("picCtrl",function(t,o){t.changeState=function(){o.go("/pic",{id:pic.id},{location:"replace"})}}),app.controller("settingCtrl",function(t,o){t.changeState=function(){o.go("/setting",{id:setting.id},{location:"replace"})}});