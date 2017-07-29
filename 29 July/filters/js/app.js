var app=angular.module('myapp',[]);




app.controller('Actrl',function($scope){
	console.log('A controller called');
	$scope.x=10.56789015;
	$scope.amount=100.567;
	$scope.str="hElLo";
	$scope.mydate=new Date(2017,0,3);
	$scope.studentsArray=[
				{name:'Abc', roll:1},
				{name:'pqr', roll:2},
				{name:'mno', roll:3},
				{name:'efg', roll:4},
				{name:'Xyz', roll:5},
			];
			
			
	$scope.obj={
		a:100,
		b:1000,
		c:'Hello'
	}
});

app.filter('rev',function(){
	return function(input){
		return input.split("").reverse().join("");
	}
})