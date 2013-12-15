
var webApp = angular.module('webApp',['ui.router']);

webApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    .state('home1', {
      url: "/home1",
      templateUrl: "partials/home1.html",
      controller: 'appController1',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/");

});
//controller
webApp.controller('appController', function($scope, $location){
        $scope.alerts = [];
        $scope.searchText;
        
          //Initializer
        init();
        function init(){
                console.log($location.path());
                
        };
        $scope.isActive = function (viewLocation) { 
        	console.log($location.path());
        return viewLocation === $location.path();
    };
        
});
webApp.controller('appController1', function($scope, $location){
        $scope.alerts = [];
        $scope.searchText;
        
          //Initializer
        init();
        function init(){
                console.log($location.path());
                
        };
        $scope.isActive = function (viewLocation) { 
        	console.log($location.path());
        return viewLocation === $location.path();
    };
        
});


angular.module('webApp').run(function($http, $rootScope, $location) {
 
 //Slider 
 var slideMenuButton = document.getElementById('slide-menu-button');
            slideMenuButton.onclick = function (e) {
                var cl = document.body.classList;
                if (cl.contains('left-nav')) {
                    cl.remove('left-nav');
                } else {
                    cl.add('left-nav');
                }
            };

//Active menu
 $rootScope.isActive = function (viewLocation) {
        console.log($location.path());
        return viewLocation === $location.path();
 };

});
