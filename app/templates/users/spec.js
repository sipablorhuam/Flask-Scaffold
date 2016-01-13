// spec.js
describe('Testing Users CRUD Module', function() {
    
it('Should add a new User', function() {
    browser.get('http://localhost/');
    element(by.id('users_menu')).click();
    element(by.buttonText('New')).click();
      
      
       element(by.name("email")).sendKeys("youremail@flask-scaffold.git");element(by.name('password')).sendKeys("Your Title text here");element(by.name('name')).sendKeys("Your Title text here");element(by.css("input[type='radio'][value='false']")).click();  element(by.name("creation_time")).sendKeys("2014-12-22T03:12:58.019077+00:00");  element(by.name("modification_time")).sendKeys("2014-12-22T03:12:58.019077+00:00"); element(by.name('role')).sendKeys("Your Title text here");
      
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
      
      
   
 
element(by.name("email")).clear();
element(by.name("email")).sendKeys("yourupdatedemail@flask-scaffold.git");
element(by.name("password")).clear();
element(by.name('password')).sendKeys("Your Updated Title text here");
element(by.name("name")).clear();
element(by.name('name')).sendKeys("Your Updated Title text here");
element(by.css("input[type='radio'][value='true']")).click(); 
element(by.name("creation_time")).clear();
element(by.name("creation_time")).sendKeys("2015-12-22T03:12:58.019077+00:00"); 
element(by.name("modification_time")).clear();
element(by.name("modification_time")).sendKeys("2015-12-22T03:12:58.019077+00:00"); 
element(by.name("role")).clear();
element(by.name('role')).sendKeys("Your Updated Title text here");
      
 
element(by.css(".button-primary")).click()    
.then(function(){    
   browser.sleep(3000);
   expect(element(by.name("email")).getAttribute('value')).toBe("yourupdatedemail@flask-scaffold.git");
expect(element(by.name("password")).getAttribute('value')).toBe("Your Updated Title text here");
expect(element(by.name("name")).getAttribute('value')).toBe("Your Updated Title text here"); expect(element(by.name("creation_time")).getAttribute('value')).toBe("2015-12-22T03:12:58.019077+00:00"); expect(element(by.name("modification_time")).getAttribute('value')).toBe("2015-12-22T03:12:58.019077+00:00");
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
