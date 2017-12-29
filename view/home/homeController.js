angular.module('app')
  .controller('homeController',['$scope','$state',function($scope,$state){
       $scope.click=function(){
          $state.go('pro_detaLayout.product_deta');
       };
  	   $scope.obj=[{
           img:'./img/product_img1',
           txt:'干湿两用电熨斗',
           reg:'￥139',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img2',
           txt:'手持式吸尘器',
           reg:'￥425',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img3',
           txt:'大功率电吹风机',
           reg:'￥198',
           omitted:'...'
  	   }];

  	   $scope.obj2=[{
           img:'./img/product_img4',
           txt:'大功率电吹风',
           reg:'￥154',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img5',
           txt:'电热水壶',
           reg:'￥258',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img6',
           txt:'大功率电吹风机',
           reg:'￥325',
           omitted:'...'
  	   }];

  	   $scope.obj3=[{
           img:'./img/product_img7',
           txt:'家用电风扇',
           reg:'￥37',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img8',
           txt:'大空间冰箱',
           reg:'￥1258',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img9',
           txt:'大松电饭煲',
           reg:'￥305',
           omitted:'...'
  	   }];

  	   $scope.obj4=[{
           img:'./img/product_img10',
           txt:'多功能电饭煲',
           reg:'￥217',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img11',
           txt:'电熨斗',
           reg:'￥138',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img12',
           txt:'可爱热水壶',
           reg:'￥82',
           omitted:'...'
  	   }];
     $scope.home_title=[{
            img:'./img/icon.png',
            txt:'熨烫电器'
     },
     {
            img:'./img/icon1.png',
            txt:'个人护理'
     },
     {
            img:'./img/icon2.png',
            txt:'生活电器'
     },
     {
            img:'./img/icon3.png',
            txt:'西式电器'
     },
     {
            img:'./img/icon4.png',
            txt:'西式电器'
     }]
  	   


  }])