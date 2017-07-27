const app=angular.module('myapp',[]);


app.controller('MyCtrl',function($scope,$q,$http){
	
	$http({
		url:'http://zenways-contact.herokuapp.com/api/contacts',
		headers:{
			key:'ABCD'
		}
	}).then(function(response){
		console.log(response);
		$scope.contacts=response.data.contacts;
	},function(response){
		console.log(response);
	});
	
	
});

