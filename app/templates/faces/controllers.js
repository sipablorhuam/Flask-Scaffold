angular.module('myApp.services').factory('Face', function($resource) {
  return $resource('api/v1/faces/:id.json', { id:'@faces.id' }, {
    update: {
      method: 'PATCH',
      
     
     
    }
    }, {
    stripTrailingSlashes: false
    });
});


angular.module('myApp.controllers').controller('FaceListController', function($scope, $state,  Face, $auth, toaster, 
                                                                                     DTOptionsBuilder) {
        
        
        $scope.dtOptions = DTOptionsBuilder.newOptions()
                            .withBootstrap();
          
        Face.get(function(data) {
                     $scope.faces = [];
                     angular.forEach(data.data, function(value, key)
                                                        {
                                                       this.face = value.attributes;
                                                       this.face['id'] = value.id;
                                                       this.push(this.face);                    
                                                        },   $scope.faces); 
                  
                               }, 
                function(error){
                      $scope.error = error.data;
                                              });
  
  
   $scope.deleteFace = function(selected_id) { // Delete a Face. Issues a DELETE to /api/faces/:id
      face = Face.get({ id: selected_id});
      face.$delete({ id: selected_id},function() {
        toaster.pop({
                type: 'success',
                title: 'Sucess',
                body: "Face deleted successfully",
                showCloseButton: true,
                timeout: 0
                });
      
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
  
}).controller('FaceEditController', function($scope, $state, $stateParams, toaster, $window, Face) {
     $scope.loading = false;
     $scope.updateFace = function() { //Update the face. Issues a PATCH to /v1/api/faces/:id
     
     $scope.loading = true;
    $scope.face.$update({ id: $stateParams.id },function() {
     toaster.pop({
                type: 'success',
                title: 'Sucess',
                body: "Update was a success",
                showCloseButton: true,
                timeout: 0
                });
        
       $state.go('faces.list');
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

  
  $scope.loadFace = function() { //Issues a GET request to /api/faces/:id to get a face to update
                       $scope.face = Face.get({ id: $stateParams.id },
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

  $scope.loadFace(); // Load a face 
  }).controller('FaceCreateController', function($scope, $state, Face, toaster) {
          $scope.face = new Face(); 
          $scope.loading = false;

         $scope.addFace = function() { //Issues a POST to v1/api/face.json
                                $scope.loading = true;
                                $scope.face.data.type = "faces";
                                $scope.face.$save(function() {
                                toaster.pop({
                                            type: 'success',
                                            title: 'Sucess',
                                            body: "Face saved successfully",
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                   $state.go('faces.list');
                                   $scope.loading = false; 
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




  