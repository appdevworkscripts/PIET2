const app=angular.module('myapp',[]);


app.controller('MyCtrl',function($scope){
	$scope.submitForm=function(){
		//console.log($scope.name);
		//console.log($scope.address);
		//console.log($scope.phone);
		console.log($scope.contact);
		$scope.contact={};
	}
});