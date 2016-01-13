angular.module('myApp', ['ui.router', 'ngResource',  "angularGrid" , 'myApp.controllers', 'myApp.services', 'satellizer','toaster', 'ngAnimate']);

angular.module('myApp').config(function( $stateProvider , $urlRouterProvider, $authProvider) {

   // Satellizer configuration that specifies which API
  // route the JWT should be retrieved from
    $authProvider.loginUrl = '/api/v1/login.json';
    $urlRouterProvider.otherwise('/login')

 $stateProvider.state('login', {
	url: '/login',
	templateUrl: 'login.html',
	controller: 'LoginController',
    resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }

  }).state('ForgotPassword', {
	url: '/forgotpassword/:token',
	templateUrl: 'forgotpassword.html',
	controller: 'LoginController',
    resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }

  }).state('home', {
    url: '/',
    templateUrl: 'home.html',
    resolve: {
          loginRequired: loginRequired
        }

  })

  // Routes for roles
  .state('roles', {
    url: '/roles',
    templateUrl: 'roles/index.html',
    controller: 'RoleListController',
    resolve: {
          loginRequired: loginRequired
        }


  }).state('newRole', {
    url: '/roles/new',
    templateUrl: '/roles/add.html',
    controller: 'RoleCreateController',
    resolve: {
          loginRequired: loginRequired
        }

    }).state('editRole', {
    url: '/roles/:id/edit',
    templateUrl: 'roles/update.html',
    controller: 'RoleEditController',
    resolve: {
          loginRequired: loginRequired
        }

        })

        // End Routes for roles
  // Routes for users
  .state('users', {
    url: '/users',
    templateUrl: 'users/index.html',
    controller: 'UserListController',
    resolve: {
          loginRequired: loginRequired
        }


  }).state('newUser', {
    url: '/users/new',
    templateUrl: '/users/add.html',
    controller: 'UserCreateController',
    resolve: {
          loginRequired: loginRequired
        }

    }).state('editUser', {
    url: '/users/:id/edit',
    templateUrl: 'users/update.html',
    controller: 'UserEditController',
    resolve: {
          loginRequired: loginRequired
        }

        })

    // End Routes for users
    //If a user is already logged in, the Login window if requested need not be displayed.
   function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {

        deferred.reject();

      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

   //Redirect unauthenticated users to the login state
   function loginRequired($q, $location, $auth, $state) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.href='/login';
      }
      return deferred.promise;
    }

     // States

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
}).controller('LogoutCtrl', function($auth, $state, $window, toaster, $scope) { // Logout the user if they are authenticated.

  //Display the Logout button for authenticated users only
  $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.logout = function(){

     if (!$auth.isAuthenticated()) { return; }
     $auth.logout()
      .then(function() {

        toaster.pop({
                type: 'success',
                body: 'Logging out',
                showCloseButton: true,

                });

        $state.go('login');

      });
      }







});


angular.module('myApp.services', []);
angular.module('myApp.controllers', []);
