angular.module('myApp', ['ui.router', 'ngResource',  "angularGrid" , 'myApp.controllers', 'myApp.services', 'satellizer','toaster', 'ngAnimate']);

angular.module('myApp').config(function( $stateProvider , $urlRouterProvider, $authProvider) {


 $stateProvider  
   
   
   
   
   // States
  // Routes for devs
  .state('devs', {
    url: '/devs',
    templateUrl: 'devs/index.html',
    controller: 'DevListController',
    
  
  }).state('newDev', {
    url: '/devs/new',
    templateUrl: '/devs/add.html',
    controller: 'DevCreateController',
    
    }).state('editDev', { 
    url: '/devs/:id/edit',
    templateUrl: 'devs/update.html',
    controller: 'DevEditController',
    
        })
        
        // End Routes for devs
  
 
  
  ;
  
  })
  .directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseFloat(value, 10);
      })
       }
  };
})
.directive('formatdate', function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      
      //format text going to user (model to view)
      ngModel.$formatters.push(function(date) {
        return new Date(date);
      });
      
      //format text from the user (view to model)
     // ngModel.$parsers.push(function(value) {
      //  return value.toLowerCase();
     // });
    }
  }
});        
  
angular.module('myApp.services', []);
angular.module('myApp.controllers', []);

