var app=angular.module('myapp',['ngMessages']);




app.controller('Actrl',function($scope){
	$scope.submitForm=function(){
		console.log($scope.user);
	}
});

