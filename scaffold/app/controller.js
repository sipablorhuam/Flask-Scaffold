angular.module('myApp.services').factory('{Resource}', function($resource) {{
  return $resource('api/v1/{resources}/:id.json', {{ id:'@{resources}.id' }}, {{
    update: {{
      method: 'PATCH',
      
     
     
    }}
    }}, {{
    stripTrailingSlashes: false
    }});
}});


angular.module('myApp.controllers').controller('{Resource}ListController', function($scope, $state,  {Resource}, $auth, toaster) {{
 //Table header definitions  
        var columnDefs = [ {{headerName: "Sr No", width: 50, cellRenderer: function(params) {{return params.node.id + 1;}} }},
                             {controller_fields}
                            
                            
                            ];
        $scope.gridOptions = {{ columnDefs: columnDefs,
                               rowData: null,
                               enableSorting: true,
                               enableColResize: true,
                               rowSelection: 'single',}};  
        {Resource}.get(function(data) {{
                     $scope.{resources} = [];
                     angular.forEach(data.data, function(value, key)
                                                        {{
                                                       this.{resource} = value.attributes;
                                                       this.{resource}['id'] = value.id;
                                                       this.push(this.{resource});                    
                                                        }},   $scope.{resources}); 
                    $scope.gridOptions.rowData = $scope.{resources};
                    $scope.gridOptions.api.onNewRows();
                    $scope.gridOptions.api.sizeColumnsToFit();
                               }}, 
                function(error){{
                      $scope.error = error.data;
                                              }});
  
  
   $scope.delete{Resource} = function(selected_id) {{ // Delete a {Resource}. Issues a DELETE to /api/{resources}/:id
      {resource} = {Resource}.get({{ id: selected_id}});
      {resource}.$delete({{ id: selected_id}},function() {{
        toaster.pop({{
                type: 'success',
                title: 'Sucess',
                body: "{Resource} deleted successfully",
                showCloseButton: true,
                timeout: 0
                }});
        $state.go('{resources}'); //redirect to home
        $state.reload();
      }}, function(error) {{
         toaster.pop({{
                type: 'error',
                title: 'Error',
                body: error,
                showCloseButton: true,
                timeout: 0
                }});;
    }});
    }};
  
}}).controller('{Resource}EditController', function($scope, $state, $stateParams, toaster, $window, {Resource}) {{
  $scope.update{Resource} = function() {{ //Update the edited site. Issues a PUT to /api/sites/:id
    
    $scope.{resource}.$update({{ id: $stateParams.id }},function() {{
     toaster.pop({{
                type: 'success',
                title: 'Sucess',
                body: "Update was a success",
                showCloseButton: true,
                timeout: 0
                }});
       $window.location.reload();
      //$state.go('sites'); // on success go back to home i.e. sites state.
    }}, function(error) {{
    toaster.pop({{
                type: 'error',
                title: 'Error',
                body: error,
                showCloseButton: true,
                timeout: 0
                }});
    }});
  }};

  
  $scope.load{Resource} = function() {{ //Issues a GET request to /api/{resources}/:id to get a {resource} to update
                       $scope.{resource} = {Resource}.get({{ id: $stateParams.id }},
                                       function() {{}}, function(error) {{
                                          toaster.pop({{
                                                type: 'error',
                                                title: 'Error',
                                                body: error,
                                                showCloseButton: true,
                                                timeout: 0
                                                }});
                                                }});
                                }};

  $scope.load{Resource}(); // Load a {resource} 
  }}).controller('{Resource}CreateController', function($scope, $state, {Resource}, toaster) {{
          $scope.{resource} = new {Resource}();  //create new site instance. Properties will be set via ng-model on UI
         

         $scope.add{Resource} = function() {{ //create a new site. Issues a POST to /api/sites
                                $scope.{resource}.data.type = "{resources}";
                                $scope.{resource}.$save(function() {{
                                toaster.pop({{
                                            type: 'success',
                                            title: 'Sucess',
                                            body: "{Resource} saved successfully",
                                            showCloseButton: true,
                                            timeout: 0
                                            }});
                                  
                                  $state.go('{resources}'); // on success go back to home i.e. sites state.
                                }}, function(error) {{
                                toaster.pop({{
                                            type: 'error',
                                            title: 'Error',
                                            body: error,
                                            showCloseButton: true,
                                            timeout: 0
                                            }});
                                           }});
                                 }};
}});




  