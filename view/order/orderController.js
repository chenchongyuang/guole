angular.module('app')
  .controller('orderController',['$scope','$location','$stateParams','$ionicSlideBoxDelegate',function($scope,$location,$stateParams,$ionicSlideBoxDelegate){
  	  $scope.oPrev=function(){
  	  	window.history.go(-1);
  	  };
  	  $scope.title='我的订单';
      $scope.aIndex=$stateParams.index;
      
      $scope.index_click=function(index){
             $scope.aIndex=index;
             $ionicSlideBoxDelegate.slide($scope.aIndex);
      }
    
  	  $scope.all_order=[{
	           txt:'全部'
	  	}, 
	  	{
	  		   txt:'待付款'
	  	},
	  	{
	           txt:'待发货'
	  	},
	  	{
	           txt:'待收货'
	  	},
	  	{
	           txt:'待评价'
	  	}];

	  	$scope.order_product=[{
              img:'./img/product_img9.png',
              txt:'SUPOR/苏泊尔 CFXB40FD8241-86家用4L升智能电饭煲电饭锅3-5-6人',
              reg:'￥:239',
              sum:'x1',
              btn1:'查看物流',
              btn2:'追加评论',
              btn3:'删除订单'
	 },
	 {        img:'./img/product_img12.png',
              txt:'Amoi/夏新 BP-150202电热水壶304不锈钢防烫电热壶烧水壶电水壶',
              reg:'￥:45',
              sum:'x1',
              btn1:'查看物流',
              btn2:'追加评论',
              btn3:'删除订单'
	 },
	 {        img:'./img/product_img6.png',
              txt:'惠能达家用电吹风大功率恒温离子不伤发吹风筒冷热风护发吹风机',
              reg:'￥:57',
              sum:'x1',
              btn1:'查看物流',
              btn2:'追加评论',
              btn3:'删除订单'
	 },
	 {        img:'./img/product_img11.png',
              txt:'飞利浦电熨斗 新款大功率大容量 蒸汽喷射手持式迷你电熨斗家用',
              reg:'￥:299',
              sum:'x1',
              btn1:'查看物流',
              btn2:'追加评论',
              btn3:'删除订单'
	 }];
	 $scope.recommend_pro=[{
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
  	   },
		{
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
  	   }]
  }])