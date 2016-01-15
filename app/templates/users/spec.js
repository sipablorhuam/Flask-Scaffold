// Login.html testing
describe('Testing User Sign Up, Login and Logout, Forgot password', function() {
    
it('Sign Up', function() {
    browser.get('http://localhost:5000/');
    //Click on the SignUp Link
    element(by.id('signUp')).click();
    // Fill in the fields
    element(by.model('name')).sendKeys("Leo G")    
    element(by.model("email")).sendKeys("leo@techarena51.com");
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
      
    element(by.name("model")).sendKeys("leo@techarena51.com");
 
    
      
    element(by.css(".button-primary")).click()    
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
   element(by.model("email")).sendKeys("leo@techarena51.com");
    element(by.model('password')).sendKeys("Str0ng P@$$w)*&^+=");
      
    element(by.css(".button-primary")).click()    
        .then(function(){
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
                .then(function(){
                    expect(browser.getTitle()).toEqual('Home');

                              });
                        });
              });
  
  
  
});


    

