// spec.js
describe('Testing Authors CRUD Module', function() {
    
it('Should add a new Author', function() {
    browser.get('http://localhost/');
    element(by.id('authors_menu')).click();
    element(by.buttonText('New')).click();
      
      
      element(by.name('name')).sendKeys("Your Title text here");element(by.name("profile")).sendKeys("Your Body text here 77569yuii3wui&%$$^");  element(by.name("url")).sendKeys("http://techarena51.com");   
      
element(by.css(".button-primary")).click()    
.then(function(){
      var EC = protractor.ExpectedConditions;
    var toastMessage = $('.toast-message');
      
 browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
        .then(function(){


  expect(toastMessage.getText()).toBe("Author saved successfully")

  });
});
      
  });
 
    
    
it('Should  edit a Author', function() {
    browser.get('http://localhost/');
    element(by.id('authors_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('editButton')).click();
      
      
   
 
element(by.name("name")).clear();
element(by.name('name')).sendKeys("Your Updated Title text here");
element(by.name("profile")).clear();
element(by.name("profile")).sendKeys("Your Updated Body text here 77569yuii3wui&%$$^"); 
element(by.name("url")).clear();
element(by.name("url")).sendKeys("https://github.com/Leo-G/DevopsWiki");   
      
 
element(by.css(".button-primary")).click()    
.then(function(){    

  
expect(element(by.name("name")).getAttribute('value')).toBe("Your Updated Title text here"); expect(element(by.name("profile")).getAttribute('value')).toBe("Your Updated Body text here 77569yuii3wui&%$$^"); expect(element(by.name("url")).getAttribute('value')).toBe("https://github.com/Leo-G/DevopsWiki");

  });
});
    
it('Should  delete a Author', function() {
    browser.get('http://localhost/');
    element(by.id('authors_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('deleteButton')).click()
            
    .then(function(){

        var EC = protractor.ExpectedConditions;
        var toastMessage = $('.toast-message');

         browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
            .then(function(){

                expect(toastMessage.getText()).toBe("Author deleted successfully")

      });
  
  });
});
      
  });
