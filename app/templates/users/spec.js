// spec.js
describe('Testing Users CRUD Module', function() {

var User = function() {
        
        var email = element(by.id('email'));
        this.setEmail = function(emailText) { email.clear(); email.sendKeys(emailText); };
        
        var password = element(by.id('password'));
        this.setPassword = function(passwordText) { password.clear(); password.sendKeys(passwordText); };
        
        var name = element(by.id('name'));
        this.setName = function(nameText) { name.clear(); name.sendKeys(nameText); };
        
        var active = element(by.id('active'));
        this.setActive = function(activeText) { active.clear(); active.sendKeys(activeText); };
        
        var creation_time = element(by.id('creation_time'));
        this.setCreation_Time = function(creation_timeText) { creation_time.clear(); creation_time.sendKeys(creation_timeText); };
        
        var role = element(by.id('role'));
        this.setRole = function(roleText) { role.clear(); role.sendKeys(roleText); };
        
         
        this.get = function() {
                                   browser.get('http://localhost:5000/');
                                       };    
        
        this.toast = function(message){
                                        $('.form-button .button-primary').click()  // css selectors http://angular.github.io/protractor/#/api?view=build$  
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
    
it('Should add a new User', function() {
    
    var user = new User();
    
    // Get users URL
    user.get();
    
    // Goto the new menu    
    element(by.id('users_menu')).click();
    element(by.id('users_new')).click();
    
    // Fill in the Fields
    
        user.setEmail("Your Title text here");
        user.setPassword("Your Title text here");
        user.setName("Your Title text here");
        user.setActive(56); 
        user.setCreation_Time("2014-12-22T03:12:58.019077+00:00"); 
        user.setRole("Your Title text here");

    //Expectations
    user.toast("User saved successfully");
                 
  });
      
it('Should  edit a User', function() {

    var user = new User();
    
    user.get();
    
    //Goto the edit menu
    element(by.id('users_menu')).click();
    element(by.id('users_list')).click(); 
    element(by.css('.ag-row-level-0')).click();
    element(by.id('editButton')).click();
     
    // Fill in the fields
    
        user.setEmail("Your Updated Title text here");
        user.setPassword("Your Updated Title text here");
        user.setName("Your Updated Title text here");
        user.setActive(67); 
        user.setCreation_Time("2015-12-22T03:12:58.019077+00:00"); 
        user.setRole("Your Updated Title text here");
    
    //Expectations
    user.toast("Update was a success");
      
 

});
    
it('Should  delete a User', function() {
    browser.get('http://localhost:5000/');
    element(by.id('users_menu')).click();
    element(by.id('users_list')).click();
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
