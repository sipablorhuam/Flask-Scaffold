.state('{resources}', {{ // state for showing all {resources}
    url: '/{resources}',
    templateUrl: '{resources}/index.html',
    controller: '{Resource}ListController',
    
  
  }).state('new{Resource}', { //state for adding a new {resource}
    url: '/{resources}/new',
    templateUrl: '/{resources}/add.html',
    controller: '{Resource}CreateController',
    
    }).state('edit{Resource}', { //state for updating a {resource}
    url: '/{resources}/:id/edit',
    templateUrl: '{resources}/update.html',
    controller: '{Resource}EditController',
    
        })