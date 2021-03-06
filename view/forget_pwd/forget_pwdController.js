angular.module('app')
   .controller('forget_pwdController',['$scope','API','$state','$rootScope','tip','$interval',function($scope,API,$state,$rootScope,tip,$interval){
   	   $scope.arr = {
           Countdown:90,
           disabled:false
       };
       $scope.forget_pwd={
   	   	  phone:'',
   	   	  pwd:'',
   	   	  forget_pwd:'',
   	   	  code1:'',
          code2:'',
          switch_index:false,
          email:''
   	   };
      $scope.Countdown_fn=function(){
            $interval.cancel(Time);
            var Time = $interval(function(){
               if($scope.arr.Countdown == 0 ){
                  $scope.arr.disabled=false;
                  $scope.arr.Countdown=90;
                  $interval.cancel(Time); 
                  $scope.forget_pwd.code1 ='';
               }else{
                $scope.arr.Countdown=$scope.arr.Countdown-1;
                $scope.arr.disabled=true;
                console.log($scope.arr.Countdown);
               }
            },1000);    
       }
       //正则验证
       $scope.reg={
        phone:/^1[35678]\d{9}$/,
        email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
      };
       //修改修改方式切换
       $scope.switch = function(val){
            $scope.forget_pwd={
              phone:'',
              pwd:'',
              forget_pwd:'',
              code1:'',
              code2:'',
              switch_index:val,
              email:''
            }
            console.log($scope.forget_pwd)
       }
      
   	   $scope.obtain_code=function(){

         if($scope.forget_pwd.switch_index){
         //手机获取验证码
             if( $scope.forget_pwd.phone == ''){
              $rootScope.prompt_box('手机号不能为空');
                  return false;
              }else if(!$scope.reg.phone.test($scope.forget_pwd.phone)){
                  $rootScope.prompt_box('请输入正确的手机号码');
                  return false;
              }else{
                tip.loadTips.showLoading();
                    API.fetchPost('http://127.0.0.1:9000/message',$scope.forget_pwd)
                      .then(function(data){
                        tip.loadTips.hideLoading();
                        $scope.Countdown_fn();
                        $scope.forget_pwd.code1 = data.data.code;
                      })
                      .catch(function(err){
                        tip.loadTips.hideLoading();
                        console.log(err);
                      })
                    return true; 
                 }
         }else{
           //email获取验证码
           if( $scope.forget_pwd.email == ''){
              $rootScope.prompt_box('email不能为空');
                  return false;
              }else if(!$scope.reg.email.test($scope.forget_pwd.email)){
                  $rootScope.prompt_box('请输入正确的email');
                  return false;
              }else{
                 tip.loadTips.showLoading();
                 API.fetchPost('http://127.0.0.1:9000/message_email',$scope.forget_pwd)
                   .then(function(data){
                      tip.loadTips.hideLoading();
                      $scope.forget_pwd.code1 = data.data.validCode;
                      $scope.Countdown_fn();
                   })
                   .catch(function(err){
                      tip.loadTips.hideLoading();
                      console.log(err);
                   })
                   return true;
                 }
              
         }

   	   }
       //手机修改密码
   	   $scope.obtain=function(){
        if($scope.forget_pwd.switch_index){
     	   	   if($scope.forget_pwd.phone == ''){
  	   	   	   	$rootScope.prompt_box('手机号不能为空');
  	   	   	   	return false;
     	   	   }else if(!$scope.reg.phone.test($scope.forget_pwd.phone)){
     	   	   	  $rootScope.prompt_box('请输入正确的手机号码');
     	   	  	  return false;
     	   	   }else if($scope.forget_pwd.code2 == ''){
                $rootScope.prompt_box('请输入验证码');
     	   	  	  return false;
     	   	   }else if($scope.forget_pwd.code2 != $scope.forget_pwd.code1){
                $rootScope.prompt_box('验证码不正确');
     	   	  	  return false;
     	   	   }else if($scope.forget_pwd.pwd == ''){
                $rootScope.prompt_box('填写新密码');
     	   	  	  return false;
     	   	   }else if($scope.forget_pwd.pwd.length >16 && $scope.forget_pwd.pwd.length < 6 ){
                $rootScope.prompt_box('密码须在6到16位数');
     	   	  	  return false;
     	   	   }else if($scope.forget_pwd.forget_pwd == '' ){
                $rootScope.prompt_box('请再次输入密码');
     	   	  	  return false;
     	   	   }else if($scope.forget_pwd.pwd != $scope.forget_pwd.forget_pwd ){
                $rootScope.prompt_box('两次密码不一致');
     	   	  	  return false;
     	   	   }else{
     	   	   	     tip.loadTips.showLoading();
                   API.fetchPost('http://127.0.0.1:9000/forget_pwd',$scope.forget_pwd)
                    .then(function(data){
                       tip.loadTips.hideLoading();
                       $rootScope.prompt_box(data.data);
                        $state.go('login');
                    })
                    .catch(function(err){
                       tip.loadTips.hideLoading();
                       console.log(err);
                    })
                    console.log(2);
             }
   	   	   }else{
                  if($scope.forget_pwd.email == ''){
                  $rootScope.prompt_box('email不能为空');
                      return false;
                   }else if(!$scope.reg.email.test($scope.forget_pwd.email)){
                      $rootScope.prompt_box('请输入正确的email');
                      return false;
                   }else if($scope.forget_pwd.code2 == ''){
                      $rootScope.prompt_box('请输入验证码');
                      return false;
                   }else if($scope.forget_pwd.code2 != $scope.forget_pwd.code1){
                      $rootScope.prompt_box('验证码不正确');
                      return false;
                   }else if($scope.forget_pwd.pwd == ''){
                      $rootScope.prompt_box('填写新密码');
                      return false;
                   }else if($scope.forget_pwd.pwd.length >16 && $scope.forget_pwd.pwd.length < 6 ){
                      $rootScope.prompt_box('密码须在6到16位数');
                      return false;
                   }else if($scope.forget_pwd.forget_pwd == '' ){
                      $rootScope.prompt_box('请再次输入密码');
                      return false;
                   }else if($scope.forget_pwd.pwd != $scope.forget_pwd.forget_pwd ){
                      $rootScope.prompt_box('两次密码不一致');
                      return false;
                   }else{
                         tip.loadTips.showLoading();
                         API.fetchPost('http://127.0.0.1:9000/forget_pwd_email',$scope.forget_pwd)
                          .then(function(data){
                             tip.loadTips.hideLoading();
                             $rootScope.prompt_box(data.data);
                             $state.go('login');
                          })
                          .catch(function(err){
                             tip.loadTips.hideLoading();
                             console.log(err);
                          })
                          console.log(2);
                   }
             }
   	   }
      
      
       //email修改密码
       
   }])