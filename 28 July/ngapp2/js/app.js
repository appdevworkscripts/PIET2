const app=angular.module('myapp',[]);
app.constant('API_PREFIX','https://zenways-contact.herokuapp.com/api/');
app.constant('API_KEY','ZENWAYS01PIET03');
app.value('sum',function(a,b){return a+b});

app.factory('ContactApi',function($http,API_PREFIX,API_KEY){
	return {
		getAllContacts:function(){
			return $http({
				url:API_PREFIX+'contacts',
				headers:{
					key:API_KEY
				}
			})
		},
		createContact:function(contact){
			return $http({
				url:API_PREFIX+'contact',
				method:'POST',
				headers:{
					key:API_KEY
				},
				data:contact
			});
		},
		deleteContact:function(id){
			
			$http({
				url:API_PREFIX+'contact/'+id,
				method:'DELETE',
				headers:{
					key:API_KEY
				}
			})
		}
	}
});

app.service('ContactApiService',function($http,API_PREFIX,API_KEY){
	this.getAllContacts:function(){
		return $http({
			url:API_PREFIX+'contacts',
			headers:{
				key:API_KEY
			}
		})
	};
	this.currentDate=new Date();
	this.createContact:function(contact){
		return $http({
			url:API_PREFIX+'contact',
			method:'POST',
			headers:{
				key:API_KEY
			},
			data:contact
		});
	};
	this.deleteContact:function(id){
		$http({
			url:API_PREFIX+'contact/'+id,
			method:'DELETE',
			headers:{
				key:API_KEY
			}
		});	
	}
});

app.controller('ContactController',function($scope,$http,ContactApi){
	//$scope.contacts=[];
	$scope.refresh=function(){
		ContactApi.getAllContacts().then(function(response){
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
		ContactApi.createContact($scope.contact).then(function(response){
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
		confirm('Are you sure') && ContactApi.deleteContact(contact._id).then(function(response){
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