	var farzanaApp= angular.module('farzanaApp',['ngRoute']);
       
        farzanaApp.config(function($routeProvider){
               
            $routeProvider
             //Route for Home Page
             .when('/',{
                         templateUrl:'pages/home.html',
                         controller: 'mainController'
			})

             .when('/about',{
                             templateUrl:'pages/about.html',
                             controller : 'aboutContrller'
			    })

            });

        farzanaApp.controller('mainController',function($scope){
                         
                           $scope.Author='Umais Siddiqui';
                            
                                

                          });
