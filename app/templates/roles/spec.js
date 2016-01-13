// spec.js
describe('Testing Roles CRUD Module', function() {
    
it('Should add a new Role', function() {
    browser.get('http://localhost/');
    element(by.id('roles_menu')).click();
    element(by.buttonText('New')).click();
      
      
      element(by.name('name')).sendKeys("Your Title text here");
      
element(by.css(".button-primary")).click()    
.then(function(){
      var EC = protractor.ExpectedConditions;
    var toastMessage = $('.toast-message');
      
 browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
        .then(function(){


  expect(toastMessage.getText()).toBe("Role saved successfully")

  });
});
      
  });
 
    
    
it('Should  edit a Role', function() {
    browser.get('http://localhost/');
    element(by.id('roles_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('editButton')).click();
      
      
   
 
element(by.name("name")).clear();
element(by.name('name')).sendKeys("Your Updated Title text here");
      
 
element(by.css(".button-primary")).click()    
.then(function(){    
   browser.sleep(3000);
  
expect(element(by.name("name")).getAttribute('value')).toBe("Your Updated Title text here");

  });
});
    
it('Should  delete a Role', function() {
    browser.get('http://localhost/');
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
