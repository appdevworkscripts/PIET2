const app=angular.module('myapp',[]);
app.constant('API_PREFIX','https://zenways-contact.herokuapp.com/api/');
app.constant('API_KEY','ZENWAYS01PIET03');
app.value('sum',function(a,b){return a+b});


app.controller('ContactController',function($scope,$http,API_PREFIX,API_KEY,sum){
	//$scope.contacts=[];
	console.log(sum(4,5));
	$scope.refresh=function(){
		$http({
			url:API_PREFIX+'contacts',
			headers:{
				key:API_KEY
			}
		}).then(function(response){
			if(response.data.status){
				$scope.contacts=response.data.contacts;
			}else{
				alert(response.data.error);
				console.error('Error while fetching contacts',response);
			}
		},function(response){
			alert('Something went wrong');
			console.error('Error while fetching contacts',response);
		});
	}
	
	$scope.refresh();
	$scope.submitForm=function(){
		console.log($scope.contact);
		$http({
			url:API_PREFIX+'contact',
			method:'POST',
			headers:{
				key:API_KEY
			},
			data:$scope.contact
		}).then(function(response){
			console.log(response);
			if(response.data.status){
				$scope.contact={};
				$scope.refresh();
				alert('Successfully created contact');				
			}
		},function(response){
			alert('Something went wrong');
			console.error('Error while inserting contact',response);
		});
	}
	$scope.deleteContact=function(contact){
		confirm('Are you sure') && $http({
			url:API_PREFIX+'contact/'+contact._id,
			method:'DELETE',
			headers:{
				key:API_KEY
			}
		}).then(function(response){
			if(response.data.status){
				$scope.contact={};
				$scope.refresh();
				alert('Successfully deleted contact');				
			}
		},function(response){
			alert('Something went wrong');
			console.error('Error while inserting contact',response);
		});
	}
});