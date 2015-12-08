.state('{resources}', {{ // state for showing all users
    url: '/{resources}',
    templateUrl: '{resources}/index.html',
    controller: '{Resource}ListController',
    
  
  }).state('new{Resource}', { //state for adding a new user 
    url: '/{resources}/new',
    templateUrl: '/{resources}/add.html',
    controller: '{Resource}CreateController',
    
    }).state('edit{Resource}', { //state for updating a user
    url: '/{resources}/:id/edit',
    templateUrl: '{resources}/update.html',
    controller: '{Resource}EditController',
    
        })