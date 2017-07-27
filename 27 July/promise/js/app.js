const app=angular.module('myapp',[]);


app.controller('MyCtrl',function($scope,$q,$http){
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
				
				console.log('Calculated square');
				
				resolve({result:num*num});
			},3000);
		});
	}
	var promisedCube=function(num){
		
		return $q(function(resolve,reject){
			if(!num){
				reject('rejected');
				return;
			}
			setTimeout(function(){				
				
				console.log('Calculated cube');
				
				resolve({result:num*num*num});
			},2000);
		});
	}
	$scope.submitForm=function(){
		//$scope.result=asyncSquare($scope.num);
		/*
		promisedSquare($scope.num).then(function(response){
			return promisedCube(response.result);
		},function(response){
			return promisedCube();
		}).then(function(response){
			$scope.result=response.result;
		},function(response){
			console.log(response);
		});
		*/
		$http({
			url:'https://api.fixer.io/latest',
			params:{
				base:$scope.currency
			}
		}).then(function(response){
			console.log(response);
			$scope.result=response.data.rates.INR * $scope.num;
		},function(response){
			console.log(response);
		});
	}
	
	//npm i -g http-server
	
});

