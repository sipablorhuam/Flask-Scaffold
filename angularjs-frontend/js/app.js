angular.module('myApp', ['ui.router', 'ngResource',  "angularGrid" , 'myApp.controllers', 'myApp.services', 'satellizer','toaster', 'ngAnimate']);

angular.module('myApp').config(function( $stateProvider , $urlRouterProvider, $authProvider) {


 $stateProvider  
 
   
   
   
   
   // States
  // Routes for customers
  .state('customers', {
    url: '/customers',
    templateUrl: 'customers/index.html',
    controller: 'CustomerListController',
    
  
  }).state('newCustomer', {
    url: '/customers/new',
    templateUrl: '/customers/add.html',
    controller: 'CustomerCreateController',
    
    }).state('editCustomer', { 
    url: '/customers/:id/edit',
    templateUrl: 'customers/update.html',
    controller: 'CustomerEditController',
    
        })
  
 
  
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
});
  
angular.module('myApp.services', []);
angular.module('myApp.controllers', []);        