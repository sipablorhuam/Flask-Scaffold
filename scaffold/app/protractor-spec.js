// spec.js
describe('Testing {Resources} CRUD Module', function() {{
    
it('Should add a new {Resource}', function() {{
    browser.get('http://localhost/');
    element(by.id('{resources}_menu')).click();
    element(by.buttonText('New')).click();
      
      
      {protractor_add_elments}
      
element(by.css(".button-primary")).click()    
.then(function(){{
      var EC = protractor.ExpectedConditions;
    var toastMessage = $('.toast-message');
      
 browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
        .then(function(){{


  expect(toastMessage.getText()).toBe("{Resource} saved successfully")

  }});
}});
      
  }});
 
    
    
it('Should  edit a {Resource}', function() {{
    browser.get('http://localhost/');
    element(by.id('{resources}_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('editButton')).click();
      
      
   
 {protractor_edit_elments}
      
 
element(by.css(".button-primary")).click()    
.then(function(){{    

  {protractor_edit_expect_elments}

  }});
}});
    
it('Should  delete a {Resource}', function() {{
    browser.get('http://localhost/');
    element(by.id('{resources}_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('deleteButton')).click()
            
    .then(function(){{

        var EC = protractor.ExpectedConditions;
        var toastMessage = $('.toast-message');

         browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
            .then(function(){{

                expect(toastMessage.getText()).toBe("{Resource} deleted successfully")

      }});
  
  }});
}});
      
  }});
