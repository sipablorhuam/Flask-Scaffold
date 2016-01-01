angular.module('myApp.services').factory('Post', function($resource) {
  return $resource('api/v1/posts/:id.json', { id:'@posts.id' }, {
    update: {
      method: 'PATCH',
      
     
     
    }
    }, {
    stripTrailingSlashes: false
    });
});


angular.module('myApp.controllers').controller('PostListController', function($scope, $state,  Post, $auth, toaster) {
 //Table header definitions  
        var columnDefs = [ {headerName: "Sr No", cellRenderer: function(params) {return params.node.id + 1;} },
                             {headerName: "tittle", field: "tittle", width: 300 },{headerName: "body", field: "body", width: 300 },{headerName: "author", field: "author", width: 300 },{headerName: "creation_date", field: "creation_date", width: 300 },{headerName: "published", field: "published", width: 300 },
                            
                            
                            ];
        $scope.gridOptions = { columnDefs: columnDefs,
                               rowData: null,
                               enableSorting: true,
                               enableColResize: true,
                               rowSelection: 'single',};  
        Post.get(function(data) {
                     $scope.posts = [];
                     angular.forEach(data.data, function(value, key)
                                                        {
                                                       this.post = value.attributes;
                                                       this.post['id'] = value.id;
                                                       this.push(this.post);                    
                                                        },   $scope.posts); 
                    $scope.gridOptions.rowData = $scope.posts;
                    $scope.gridOptions.api.onNewRows();
                    $scope.gridOptions.api.sizeColumnsToFit();
                               }, 
                function(error){
                      $scope.error = error.data;
                                              });
  
  
   $scope.deletePost = function(selected_id) { // Delete a Post. Issues a DELETE to /api/posts/:id
      post = Post.get({ id: selected_id});
      post.$delete({ id: selected_id},function() {
        toaster.pop({
                type: 'success',
                title: 'Sucess',
                body: "Post deleted successfully",
                showCloseButton: true,
                timeout: 0
                });
        $state.go('posts'); //redirect to home
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
  
}).controller('PostEditController', function($scope, $state, $stateParams, toaster, $window, Post) {
      $scope.loading = false;
     $scope.updatePost = function() { //Update the edited site. Issues a PUT to /api/sites/:id
     
     $scope.loading = true;
    $scope.post.$update({ id: $stateParams.id },function() {
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

  
  $scope.loadPost = function() { //Issues a GET request to /api/posts/:id to get a post to update
                       $scope.post = Post.get({ id: $stateParams.id },
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

  $scope.loadPost(); // Load a post 
  }).controller('PostCreateController', function($scope, $state, Post, toaster) {
          $scope.post = new Post();  //create new site instance. Properties will be set via ng-model on UI
          $scope.loading = false;

         $scope.addPost = function() { //create a new site. Issues a POST to /api/sites
                                $scope.loading = true;
                                $scope.post.data.type = "posts";
                                $scope.post.$save(function() {
                                toaster.pop({
                                            type: 'success',
                                            title: 'Sucess',
                                            body: "Post saved successfully",
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                   $scope.loading = false;
                                  $state.go('posts'); // on success go back to home i.e. sites state.
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




  