angular.module('myApp.services').factory('Customer', function($resource) {
  return $resource('api/v1/customers/:id.json', { id:'@customers.id'}, {
    update: {
      method: 'PATCH',
      
     
     
    }
    }, {
    stripTrailingSlashes: false
    });
});


angular.module('myApp.controllers').controller('CustomerListController', function($scope, $state,  Customer, $auth, toaster) {
 //Table header definitions  
        var columnDefs = [ {headerName: "Sr No", width: 50, cellRenderer: function(params) {return params.node.id + 1;} },
                             {headerName: "name", field: "name", width: 300 },{headerName: "address", field: "address", width: 300 },{headerName: "is_active", field: "is_active", width: 300 },{headerName: "mobile", field: "mobile", width: 300 },{headerName: "email", field: "email", width: 300 },{headerName: "url", field: "url", width: 300 },{headerName: "timestamp", field: "timestamp", width: 300 },{headerName: "date", field: "date", width: 300 },{headerName: "pricing", field: "pricing", width: 300 },
                            
                            
                            ];
        $scope.gridOptions = { columnDefs: columnDefs,
                               rowData: null,
                               enableSorting: true,
                               enableColResize: true,
                               rowSelection: 'single',};  
        Customer.get(function(data) {
                     $scope.customers = [];
                     angular.forEach(data.data, function(value, key)
                                                        {
                                                       this.customer = value.attributes;
                                                       this.customer['id'] = value.id;
                                                       this.push(this.customer);                    
                                                        },   $scope.customers); 
                    $scope.gridOptions.rowData = $scope.customers;
                    $scope.gridOptions.api.onNewRows();
                    $scope.gridOptions.api.sizeColumnsToFit();
                               }, 
                function(error){
                      $scope.error = error.data;
                                              });
  
  
   $scope.deleteCustomer = function(selected_id) { // Delete a Customer. Issues a DELETE to /api/customers/:id
      customer = Customer.get({ id: selected_id});
      customer.$delete({ id: selected_id},function() {
        toaster.pop({
                type: 'success',
                title: 'Sucess',
                body: "Customer deleted successfully",
                showCloseButton: true,
                timeout: 0
                });
        $state.go('customers'); //redirect to home
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
  
}).controller('CustomerEditController', function($scope, $state, $stateParams, toaster, $window, Customer) {
  $scope.updateCustomer = function() { //Update the edited site. Issues a PUT to /api/sites/:id
    
    $scope.customer.$update({ id: $stateParams.id },function() {
     toaster.pop({
                type: 'success',
                title: 'Sucess',
                body: "Update was a success",
                showCloseButton: true,
                timeout: 0
                });
       $window.location.reload();
      //$state.go('sites'); // on success go back to home i.e. sites state.
    }, function(error) {
    toaster.pop({
                type: 'error',
                title: 'Error',
                body: error,
                showCloseButton: true,
                timeout: 0
                });
    });
  };

  
  $scope.loadCustomer = function() { //Issues a GET request to /api/customers/:id to get a customer to update
                       $scope.customer = Customer.get({ id: $stateParams.id },
                                       function() {                                      
                                       
                                       }, function(error) {
                                          toaster.pop({
                                                type: 'error',
                                                title: 'Error',
                                                body: error,
                                                showCloseButton: true,
                                                timeout: 0
                                                });
                                                });
                          
                                };

  $scope.loadCustomer(); // Load a customer 

  }).controller('CustomerCreateController', function($scope, $state, Customer, toaster) {
          $scope.customer = new Customer();  //create new site instance. Properties will be set via ng-model on UI
          
         

         $scope.addCustomer = function() { //create a new site. Issues a POST to /api/sites
                                $scope.customer.data.type = "customers";
                                $scope.customer.$save(function() {
                                toaster.pop({
                                            type: 'success',
                                            title: 'Sucess',
                                            body: "Customer saved successfully",
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                  
                                  $state.go('customers'); // on success go back to home i.e. sites state.
                                }, function(error) {
                                toaster.pop({
                                            type: 'error',
                                            title: 'Error',
                                            body: error,
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                           });
                                 };
});




  