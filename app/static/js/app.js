angular.module('myApp', ['ui.router', 'ngResource',  "angularGrid" , 'myApp.controllers', 'myApp.services', 'satellizer','toaster', 'ngAnimate']);

angular.module('myApp').config(function( $stateProvider , $urlRouterProvider, $authProvider) {


 $stateProvider  
   .state('home', {
    url: '/',
    templateUrl: 'home.html',    
    
  
  })
   
   
   
   
   
   // States
  // Routes for authors
  .state('authors', {
    url: '/authors',
    templateUrl: 'authors/index.html',
    controller: 'AuthorListController',


  }).state('newAuthor', {
    url: '/authors/new',
    templateUrl: '/authors/add.html',
    controller: 'AuthorCreateController',

    }).state('editAuthor', {
    url: '/authors/:id/edit',
    templateUrl: 'authors/update.html',
    controller: 'AuthorEditController',

        })

        // End Routes for authors
  // Routes for comments
  .state('comments', {
    url: '/comments',
    templateUrl: 'comments/index.html',
    controller: 'CommentListController',


  }).state('newComment', {
    url: '/comments/new',
    templateUrl: '/comments/add.html',
    controller: 'CommentCreateController',

    }).state('editComment', {
    url: '/comments/:id/edit',
    templateUrl: 'comments/update.html',
    controller: 'CommentEditController',

        })

        // End Routes for comments
  // Routes for posts
  .state('posts', {
    url: '/posts',
    templateUrl: 'posts/index.html',
    controller: 'PostListController',


  }).state('newPost', {
    url: '/posts/new',
    templateUrl: '/posts/add.html',
    controller: 'PostCreateController',

    }).state('editPost', {
    url: '/posts/:id/edit',
    templateUrl: 'posts/update.html',
    controller: 'PostEditController',

        })

        // End Routes for posts
 
 
   
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

