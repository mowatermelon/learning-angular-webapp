"use strict";document.getElementsByTagName("html")[0].style.fontSize=window.screen.width/10+"px";var app=angular.module("myApp",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}).state("home",{url:"/home",templateUrl:"view/home.html",controller:"homeCtrl"}).state("mood",{url:"/mood",templateUrl:"view/mood.html",controller:"moodCtrl"}).state("pic",{url:"/pic",templateUrl:"view/pic.html",controller:"picCtrl"}).state("setting",{url:"/setting",templateUrl:"view/setting.html",controller:"settingCtrl"}),t.otherwise("home")}]),app.controller("mainCtrl",function(e,t){e.changeState=function(){t.go("/main",{id:main.id},{location:"replace"})}}),app.controller("homeCtrl",function(e,t){e.changeState=function(){t.go("/home",{id:home.id},{location:"replace"})},e.list=[{newId:"ASDSDSDS123101B",name:"西瓜新闻在线",newTest:"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",upTime:"2017-05-01",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS123102B",name:"西瓜新闻在线",newTest:"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",upTime:"2017-05-02",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS123103B",name:"西瓜新闻在线",newTest:"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",upTime:"2017-05-03",visitNum:15416,loveNum:5656,hateNum:5665}],e.checked="checked-G",e.temp={checkM:{checkedL:!1,checkedH:!1},selectNew:""},e.toggle=function(t,i,l){e.temp.selectNew=t.newId;for(var m in this.newsData)e.list.newsData[m].newId.indexOf(t.newId)>-1&&("checkedL"===l&&"loveNum"===i?(e.temp.checkM.checkedL=!e.temp.checkM.checkedL,e.temp.checkM.checkedL?++e.list.newsData[m].loveNum:--e.list.newsData[m].loveNum):"checkedH"===l&&"hateNum"===i&&(e.temp.checkM.checkedH=!this.checkM.checkedH,e.tempcheckM.checkedH?++e.list.newsData[m].hateNum:--e.list.newsData[m].hateNum))}}),app.controller("moodCtrl",function(e,t){e.changeState=function(){t.go("/mood",{id:mood.id},{location:"replace"})},e.list=[{newId:"ASDSDSDS1231012B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-12",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231013B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-13",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231014B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-14",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231015B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-15",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231016B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-16",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231017B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-17",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231018B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-18",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231019B",name:"西瓜心情在线",newTest:"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",upTime:"2017-05-19",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665}]}),app.controller("picCtrl",function(e,t){e.changeState=function(){t.go("/pic",{id:pic.id},{location:"replace"})},e.list=[{newId:"ASDSDSDS1231017B",name:"西瓜美图在线",newTest:"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",upTime:"2017-05-17",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231018B",name:"西瓜美图在线",newTest:"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",upTime:"2017-05-18",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231019B",name:"西瓜美图在线",newTest:"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",upTime:"2017-05-19",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665},{newId:"ASDSDSDS1231020B",name:"西瓜美图在线",newTest:"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",upTime:"2017-05-20",imgUrl:"../../image/MSHKLogo.jpg",visitNum:15416,loveNum:5656,hateNum:5665}]}),app.controller("settingCtrl",function(e,t){e.changeState=function(){t.go("/setting",{id:setting.id},{location:"replace"})},e.list=[{Id:"ASDSDSDS123101B",text:"    西瓜设置01",icon:"filter_1",color:"",url:"../detail/newdetail.html"},{Id:"ASDSDSDS123102B",text:"    西瓜设置02",icon:"filter_2",color:"",url:"../detail/newdetail.html"},{Id:"ASDSDSDS123103B",text:"    西瓜设置03",icon:"filter_3",color:"",url:"../detail/newdetail.html"},{Id:"ASDSDSDS123104B",text:"    西瓜设置04",icon:"filter_4",color:"",url:"../detail/newdetail.html"},{Id:"ASDSDSDS123105B",text:"    西瓜设置05",icon:"filter_vintage",color:"",url:"../detail/newdetail.html"},{Id:"ASDSDSDS123106B",text:"    西瓜设置06",icon:"filter_drama",color:"",url:"../detail/newdetail.html"},{Id:"ASDSDSDS123107B",text:"    西瓜设置07",icon:"filter",color:"",url:"../detail/newdetail.html"}]}),app.directive("appFoot",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/foot.html"}}]),app.directive("appHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]),app.directive("appMain",[function(){return{restrict:"A",replace:!0,templateUrl:"view/main.html"}}]),app.directive("appMoodList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/moodList.html",scope:{data:"="}}}]),app.directive("appNewList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/newList.html",scope:{data:"="}}}]),app.directive("appPicList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/picList.html",scope:{data:"="}}}]),app.directive("appSetList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/setList.html",scope:{data:"="}}}]);