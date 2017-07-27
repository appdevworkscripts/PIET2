const app=angular.module('myapp',[]);


app.controller('MyCtrl',function($scope,$q,$http){
	
	$scope.submitForm=function(){
		$http({
			url:'https://maps.googleapis.com/maps/api/geocode/json',
			params:{
				key:'AIzaSyCCx3X1ggSs-_Nyt0AkwkVDpresyMevNLs',
				address:$scope.address
			}
		}).then(function(response){
			//console.log(response);
			$scope.location=response.data.results["0"].geometry.location;
			$http({
				url:'https://maps.googleapis.com/maps/api/place/textsearch/xml',
				params:{
					key:'AIzaSyCCx3X1ggSs-_Nyt0AkwkVDpresyMevNLs',
					location:$scope.location.lat+','+$scope.location.lng,
					radius:500,
					rankby:'distance',
					type:$scope.type
				}
			}).then(function(response){
				console.log(response);
			},function(response){
				console.log(response);
			});
		},function(response){
			console.log(response);
		});
	}
	
	
});

