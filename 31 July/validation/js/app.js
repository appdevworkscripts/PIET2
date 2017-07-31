var app=angular.module('myapp',[]);




app.controller('Actrl',function($scope){
	$scope.submitForm=function(){
		console.log($scope.user);
	}
});

