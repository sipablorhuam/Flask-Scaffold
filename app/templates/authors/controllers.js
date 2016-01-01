angular.module('myApp.services').factory('Author', function($resource) {
  return $resource('api/v1/authors/:id.json', { id:'@authors.id' }, {
    update: {
      method: 'PATCH',
      
     
     
    }
    }, {
    stripTrailingSlashes: false
    });
});


angular.module('myApp.controllers').controller('AuthorListController', function($scope, $state,  Author, $auth, toaster) {
 //Table header definitions  
        var columnDefs = [ {headerName: "Sr No", cellRenderer: function(params) {return params.node.id + 1;} },
                             {headerName: "name", field: "name", width: 300 },{headerName: "profile", field: "profile", width: 300 },{headerName: "url", field: "url", width: 300 },
                            
                            
                            ];
        $scope.gridOptions = { columnDefs: columnDefs,
                               rowData: null,
                               enableSorting: true,
                               enableColResize: true,
                               rowSelection: 'single',};  
        Author.get(function(data) {
                     $scope.authors = [];
                     angular.forEach(data.data, function(value, key)
                                                        {
                                                       this.author = value.attributes;
                                                       this.author['id'] = value.id;
                                                       this.push(this.author);                    
                                                        },   $scope.authors); 
                    $scope.gridOptions.rowData = $scope.authors;
                    $scope.gridOptions.api.onNewRows();
                    $scope.gridOptions.api.sizeColumnsToFit();
                               }, 
                function(error){
                      $scope.error = error.data;
                                              });
  
  
   $scope.deleteAuthor = function(selected_id) { // Delete a Author. Issues a DELETE to /api/authors/:id
      author = Author.get({ id: selected_id});
      author.$delete({ id: selected_id},function() {
        toaster.pop({
                type: 'success',
                title: 'Sucess',
                body: "Author deleted successfully",
                showCloseButton: true,
                timeout: 0
                });
        $state.go('authors'); //redirect to home
        $state.reload();
      }, function(error) {
         toaster.pop({
                type: 'error',
                title: 'Error',
                body: error,
                showCloseButton: true,
                timeout: 0
                });;
    });
    };
  
}).controller('AuthorEditController', function($scope, $state, $stateParams, toaster, $window, Author) {
      $scope.loading = false;
     $scope.updateAuthor = function() { //Update the edited site. Issues a PUT to /api/sites/:id
     
     $scope.loading = true;
    $scope.author.$update({ id: $stateParams.id },function() {
     toaster.pop({
                type: 'success',
                title: 'Sucess',
                body: "Update was a success",
                showCloseButton: true,
                timeout: 0
                });
        
       $window.location.reload();
       $scope.loading = false;
      //$state.go('sites'); // on success go back to home i.e. sites state.
    }, function(error) {
    toaster.pop({
                type: 'error',
                title: 'Error',
                body: error,
                showCloseButton: true,
                timeout: 0
                });
      $scope.loading = false;
    });
  };

  
  $scope.loadAuthor = function() { //Issues a GET request to /api/authors/:id to get a author to update
                       $scope.author = Author.get({ id: $stateParams.id },
                                       function() {}, function(error) {
                                          toaster.pop({
                                                type: 'error',
                                                title: 'Error',
                                                body: error,
                                                showCloseButton: true,
                                                timeout: 0
                                                });
                                                });
                                };

  $scope.loadAuthor(); // Load a author 
  }).controller('AuthorCreateController', function($scope, $state, Author, toaster) {
          $scope.author = new Author();  //create new site instance. Properties will be set via ng-model on UI
          $scope.loading = false;

         $scope.addAuthor = function() { //create a new site. Issues a POST to /api/sites
                                $scope.loading = true;
                                $scope.author.data.type = "authors";
                                $scope.author.$save(function() {
                                toaster.pop({
                                            type: 'success',
                                            title: 'Sucess',
                                            body: "Author saved successfully",
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                   $scope.loading = false;
                                  $state.go('authors'); // on success go back to home i.e. sites state.
                                }, function(error) {
                                toaster.pop({
                                            type: 'error',
                                            title: 'Error',
                                            body: error,
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                 $scope.loading = false;
                                           });
                                 };
});




  