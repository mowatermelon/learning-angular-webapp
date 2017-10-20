'use strict'

app.controller('mainCtrl', function ($scope, $state) {
    $scope.changeState = function () {
        $state.go('/main',{id:main.id},{location:'replace'});
    };
});

app.controller('homeCtrl', function ($scope, $state) {
    $scope.changeState = function () {
        $state.go('/home',{id:home.id},{location:'replace'});     
    };
    $scope.list =[
        {
            "newId": "ASDSDSDS123101B",
            "name": "西瓜新闻在线",
            "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
            "upTime":"2017-05-01",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS123102B",
            "name": "西瓜新闻在线",
            "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
            "upTime":"2017-05-02",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS123103B",
            "name": "西瓜新闻在线",
            "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
            "upTime":"2017-05-03",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          }
    ];
    $scope.checked ="checked-G"; 
    $scope.temp = {
        checkM: {
          'checkedL': false,
          'checkedH': false
        },
        selectNew: ''
    };  
    $scope.toggle = function (item, paraNum, paracheck) {
            /*
            *@parameter item 获取当前的item
            *@parameter paraNum 获取当前的item对应那个属性值
            *@parameter paracheck 获取当前的item对应那个确认状态
            */
            $scope.temp.selectNew = item.newId;
            for (var i in this.newsData) {
              if ($scope.list.newsData[i].newId.indexOf(item.newId) > -1) {
                if (paracheck === 'checkedL' && paraNum === 'loveNum') {
                    $scope.temp.checkM.checkedL = !$scope.temp.checkM.checkedL;
                    if ($scope.temp.checkM.checkedL) {
                      ++$scope.list.newsData[i].loveNum;
                    } else {
                      --$scope.list.newsData[i].loveNum;
                    }
                } else if (paracheck === 'checkedH' && paraNum === 'hateNum') {
                    $scope.temp.checkM.checkedH = !this.checkM.checkedH;
                    if ($scope.tempcheckM.checkedH) {
                      ++$scope.list.newsData[i].hateNum;
                    } else {
                      --$scope.list.newsData[i].hateNum;
                    }
                }
              }
      
            }
      
        }       
});

app.controller('moodCtrl', function ($scope, $state) {
    $scope.changeState = function () {
        $state.go('/mood',{id:mood.id},{location:'replace'});
    };
    $scope.list =[
        {
            "newId": "ASDSDSDS1231012B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-12",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231013B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-13",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231014B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-14",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231015B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-15",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231016B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-16",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231017B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-17",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231018B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-18",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231019B",
            "name": "西瓜心情在线",
            "newTest":"西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线西瓜心情在线",
            "upTime":"2017-05-19",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          }
      ];
});
app.controller('picCtrl', function ($scope, $state) {
    $scope.changeState = function () {
        $state.go('/pic',{id:pic.id},{location:'replace'});
    };
    $scope.list =[
        {
            "newId": "ASDSDSDS1231017B",
            "name": "西瓜美图在线",
            "newTest":"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",
            "upTime":"2017-05-17",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231018B",
            "name": "西瓜美图在线",
            "newTest":"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",
            "upTime":"2017-05-18",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231019B",
            "name": "西瓜美图在线",
            "newTest":"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",
            "upTime":"2017-05-19",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          },
          {
            "newId": "ASDSDSDS1231020B",
            "name": "西瓜美图在线",
            "newTest":"西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线西瓜美图在线",
            "upTime":"2017-05-20",
            "imgUrl":"../../image/MSHKLogo.jpg",
            "visitNum":15416,
            "loveNum":5656,
            "hateNum":5665
          }
      ];    
});
app.controller('settingCtrl', function ($scope, $state) {
    $scope.changeState = function () {
        $state.go('/setting',{id:setting.id},{location:'replace'});
    };
    $scope.list =[
        {
          "Id": "ASDSDSDS123101B",
          "text": "    西瓜设置01",
          "icon":"filter_1",
          "color":"",
          "url":"../detail/newdetail.html"
        },
        {
          "Id": "ASDSDSDS123102B",
          "text": "    西瓜设置02",
          "icon":"filter_2",
          "color":"",
          "url":"../detail/newdetail.html"
        },
        {
          "Id": "ASDSDSDS123103B",
          "text": "    西瓜设置03",
          "icon":"filter_3",
          "color":"",
          "url":"../detail/newdetail.html"
        },
        {
          "Id": "ASDSDSDS123104B",
          "text": "    西瓜设置04",
          "icon":"filter_4",
          "color":"",
          "url":"../detail/newdetail.html"
        },
        {
          "Id": "ASDSDSDS123105B",
          "text": "    西瓜设置05",
          "icon":"filter_vintage",
          "color":"",
          "url":"../detail/newdetail.html"
        },
        {
          "Id": "ASDSDSDS123106B",
          "text": "    西瓜设置06",
          "icon":"filter_drama",
          "color":"",
          "url":"../detail/newdetail.html"
        },
        {
          "Id": "ASDSDSDS123107B",
          "text": "    西瓜设置07",
          "icon":"filter",
          "color":"",
          "url":"../detail/newdetail.html"
        }
      ];    
});