const app=angular.module('myapp',[]);


app.controller('MyCtrl',function($scope){
	$scope.state=1;
	$scope.students=[
		{name:'Abc',roll:2},
		{name:'Xyz',roll:5}
	];
	$scope.submitForm=function(){
		$scope.state==1&&$scope.students.push($scope.student);
		$scope.student={};
		$scope.state=1;
	}
	$scope.deleteStudent=function(i){
		confirm('Are you sure?')&&$scope.students.splice(i,1);
	}
	$scope.editStudent=function(stu){
		$scope.student=stu;
		$scope.state=2;		
	}
	$scope.sortStudents=function(key){
		$scope.students.sort(function(o1,o2){
			if(o1[key].toLowerCase()>o2[key].toLowerCase()) return 1;
			else if(o1[key].toLowerCase()<o2[key].toLowerCase()) return -1;
			else return 0;
		});
	}
});