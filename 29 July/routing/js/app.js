var app=angular.module('myapp',['ngRoute']);
//https://plnkr.co/edit/iDRwdrB0RGYr8smMocJR?p=preview
app.config(function($routeProvider){
    $routeProvider.when('/a',{
        templateUrl:'views/a.html',
        controller:'ACtrl'
    });
    $routeProvider.when('/b',{
        templateUrl:'views/b.txt'
    });
    $routeProvider.when('/contact/:contact_id',{
        templateUrl:'views/contact.html',
        controller:'ContactController'
    });
});
app.controller('ACtrl',function($scope,$location){
    $scope.y=1000;
    $scope.clickMe=function(){
        $location.path("/b");
    }
    $scope.showModal=function(){
        const dialog=angular.element('.mdl-dialog');
        dialog.showModal();
    }
});
app.controller('BCtrl',function($scope,$http,$location){
    $scope.x=100;
    $http({
        url:'https://zenways-contact.herokuapp.com/api/contacts',
        headers:{
            key:'ABCD'
        }
    }).then(function(response){
        $scope.contacts=response.data.contacts
    },function(response){

    });
    $scope.showContact=function(contact){
        $location.path('/contact/'+contact._id);
    }
});

app.controller('ContactController',function($scope,$http,$routeParams){
    $scope.contact=null;
    $http({
        url:'https://zenways-contact.herokuapp.com/api/contact/'+$routeParams.contact_id,
        headers:{
            key:'ABCD'
        }
    }).then(function(response){
        console.log(response)
        $scope.contact=response.data.contact;
    },function(response){

    })
})