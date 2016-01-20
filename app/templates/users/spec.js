
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
    

// spec.js
describe('Testing Users CRUD Module', function() {
    
it('Should add a new User', function() {
    browser.get('http://localhost/');
    element(by.id('users_menu')).click();
    element(by.buttonText('New')).click();
      
      
      element(by.name('name')).sendKeys("Your Title text here");element(by.name("email")).sendKeys("Your Body text here 77569yuii3wui&%$$^"); element(by.name('password')).sendKeys("Your Title text here");element(by.css("input[type='radio'][value='false']")).click(); element(by.name('role')).sendKeys("Your Title text here");
      
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
    browser.get('http://localhost/');
    element(by.id('users_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('editButton')).click();
      
      
   
 
element(by.name("name")).clear();
element(by.name('name')).sendKeys("Your Updated Title text here");
element(by.name("email")).clear();
element(by.name("email")).sendKeys("Your Updated Body text here 77569yuii3wui&%$$^"); 
element(by.name("password")).clear();
element(by.name('password')).sendKeys("Your Updated Title text here");
element(by.css("input[type='radio'][value='true']")).click(); 
element(by.name("role")).clear();
element(by.name('role')).sendKeys("Your Updated Title text here");
      
 
element(by.css(".button-primary")).click()    
.then(function(){    
   browser.sleep(3000);
  
expect(element(by.name("name")).getAttribute('value')).toBe("Your Updated Title text here"); expect(element(by.name("email")).getAttribute('value')).toBe("Your Updated Body text here 77569yuii3wui&%$$^");
expect(element(by.name("password")).getAttribute('value')).toBe("Your Updated Title text here");
expect(element(by.name("role")).getAttribute('value')).toBe("Your Updated Title text here");

  });
});
    
it('Should  delete a User', function() {
    browser.get('http://localhost/');
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
