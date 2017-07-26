const app=angular.module('myapp',[]);


app.controller('MyCtrl',function($scope,$q){
	var square=function(num){
		return num*num;
	}
	
	var asyncSquare=function(num){
		setTimeout(function(){
			console.log('Calculated');
			return num*num;
		},3000);
	}
	
	var promisedSquare=function(num){
		return $q(function(resolve,reject){
			setTimeout(function(){
				num<0&&reject('-ve number not allowed');
				
				console.log('Calculated');
				
				resolve({result:num*num});
			},3000);
		});
	}
	$scope.submitForm=function(){
		//$scope.result=asyncSquare($scope.num);
		promisedSquare($scope.num).then(function(response){
			console.log(response);
			$scope.result=response.result;
		},function(response){
			console.log(response);
		});
	}
});