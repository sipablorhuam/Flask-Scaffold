
// Login.html testing
describe('Testing User Sign Up, Login and Logout, Forgot password', function() {
    
    it('Sign Up', function() {
        browser.get('http://localhost:5000/');
        //Click on the SignUp Link
        element(by.id('signUp')).click();
        // Fill in the fields
        element(by.model('name')).sendKeys("Leo G");    
        element(by.model("email")).sendKeys("leo@localhost");
        element(by.model('password')).sendKeys("Str0ng P@$$w)*&^+=");
        
          
        element(by.css(".button-primary")).click()    
            .then(function(){
                var EC = protractor.ExpectedConditions;
                var toastMessage = $('.toast-message');
                browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
                    .then(function(){
                        expect(toastMessage.getText()).toBe("User created successfully");

      });
    });
          
      });
      
    it(' Test Forgot password and Login', function() {
        browser.get('http://localhost:5000/');
        //Click on the Forgot password Link
        element(by.id('forgotPassword')).click();
        // Fill in the fields
          
        element(by.id("fpass-email")).sendKeys("leo@localhost");
     
        element(by.id("fpass-button")).click()       
            .then(function(){
                var EC = protractor.ExpectedConditions;
                var toastMessage = $('.toast-message');
                browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
                    .then(function(){
                        expect(toastMessage.getText()).toBe("Password reset email has been sent successfully");

                                    });
                         });

        
         //Test LogIn                 
        element(by.id('logIn')).click();
        // Fill in the fields  
       element(by.id("login-email")).clear();
       element(by.id("login-email")).sendKeys("leo@localhost");
        element(by.id("login-password")).clear();
        element(by.id('login-password')).sendKeys("Str0ng P@$$w)*&^+=");
        
      
        element(by.id("login-button")).click()
           .then(function() { 
           
              
                
                        expect(browser.getTitle()).toEqual('Home | Flask-Scaffold');

                });                 
                            
          });
      
});
    
//Roles CRUD Tests

// spec.js
describe('Testing Roles CRUD Module', function() {
  // Page Object https://angular.github.io/protractor/#/page-objects
    var Role = function() {
                   var nameInput = element(by.id("name"));
                   this.get = function() {
                                   browser.get('http://localhost:5000/');
                                       };
                   this.setName = function(name) {
                                        nameInput.clear();
                                        nameInput.sendKeys(name);
                                      };
                    this.toast = function(message){
                                       element(by.css(".button-primary")).click()    
                                            .then(function() {     
                                                  var EC = protractor.ExpectedConditions;
                                                  var toastMessage = $('.toast-message');                                      
                                                  browser.wait(EC.visibilityOf(toastMessage), 6000) //wait until toast is displayed
                                                             .then(function(){
                                                                    expect(toastMessage.getText()).toBe(message);

                                                                        });
                                                                  });                                                    
                                    }                    
                    };
    
    it('Should add a new Role', function() {
        role = new Role();
        //Get Roles URL
        role.get();
        
        // Goto the new menu
        element(by.id('roles_menu')).click();
        element(by.id('roles_new')).click();
        
        // Fill in the fields
        role.nameInput("admin");
        
        // Expectations
        role.toast("Role saved successfully");
        
        });  
    
    it('Should  edit a Role', function() {

        role = new Role();
        
        // Goto the edit menu
        element(by.id('roles_menu')).click();
        element(by.css('.ag-row-level-0')).click();
        element(by.id('editButton')).click();
        
        // Fill in the fields
        role.nameInput("author");
        
        // Expectations
        role.toast("Update was a success");
     
    });
    
    it('Should  delete a Role', function() {
        role = new Role();
        element(by.id('roles_menu')).click();
        element(by.css('.ag-row-level-0')).click();
        element(by.id('deleteButton')).click()            
            .then(function(){
                var EC = protractor.ExpectedConditions;
                var toastMessage = $('.toast-message');
                 browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
                    .then(function(){

                        expect(toastMessage.getText()).toBe("Role deleted successfully")

              });
          
                          });
        });
      
  });


// User CRUD Tests
describe('Testing Users CRUD Module', function() {
    
    it('Should add a new User', function() {
        browser.get('http://localhost/');
        element(by.id('users_menu')).click();
        element(by.id('users_new')).click();
          
          
          element(by.id('name')).sendKeys("Your Title text here");
          element(by.id("email")).sendKeys("Al@localhost");
          element(by.id('password')).sendKeys("Str0ng P@$$w)*&^+=");
          element(by.css("input[type='radio'][value='false']")).click();
         // Drop Down testing
         element(by.cssContainingText('option', 'admin')).click();      
         element(by.css(".button-primary")).click()    
              .then(function(){
                  var EC = protractor.ExpectedConditions;
                  var toastMessage = $('.toast-message');
                  
                  browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
                    .then(function(){


              expect(toastMessage.getText()).toBe("User saved successfully")

              });
            });
          
      });
     
        
        
    it('Should  edit a User', function() {
        browser.get('http://localhost:5000/');
        element(by.id('users_menu')).click();
        element(by.css('.ag-row-level-0')).click();
        element(by.id('editButton')).click();
          
        element(by.id("name")).clear();
        element(by.id('name')).sendKeys("Your Updated Title text here");
        element(by.id("email")).clear();
        element(by.id("email")).sendKeys("flask@localhost"); 
        element(by.id("password")).clear();
        element(by.id('password')).sendKeys("Your Updated Title text here");
        element(by.css("input[type='radio'][value='true']")).click(); 
        element(by.cssContainingText('option', 'role')).click();     
        element(by.css(".button-primary")).click()     
           .then(function(){
                      var EC = protractor.ExpectedConditions;
                      var toastMessage = $('.toast-message');
                      
                      browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
                        .then(function(){


                  expect(toastMessage.getText()).toBe("Update was a success")

                  });
                });
      


      });
    });
    
    it('Should  delete a User', function() {
        browser.get('http://localhost:5000/');
        element(by.id('users_menu')).click();
        element(by.css('.ag-row-level-0')).click();
        element(by.id('deleteButton')).click()
                
        .then(function(){

            var EC = protractor.ExpectedConditions;
            var toastMessage = $('.toast-message');

             browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
                .then(function(){

                    expect(toastMessage.getText()).toBe("User deleted successfully")

          });
      
      });
    });
      
});
