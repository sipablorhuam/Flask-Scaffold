// spec.js
describe('Testing Posts CRUD Module', function() {
    
it('Should add a new Post', function() {
    browser.get('http://localhost/');
    element(by.id('posts_menu')).click();
    element(by.buttonText('New')).click();
      
      
      element(by.name('tittle')).sendKeys("Your Title text here");element(by.name("body")).sendKeys("Your Body text here 77569yuii3wui&%$$^"); element(by.name('author')).sendKeys("Your Title text here"); element(by.name("creation_date")).sendKeys("12/11/2015"); element(by.css("input[type='radio'][value='false']")).click(); 
      
element(by.css(".button-primary")).click()    
.then(function(){
      var EC = protractor.ExpectedConditions;
    var toastMessage = $('.toast-message');
      
 browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
        .then(function(){


  expect(toastMessage.getText()).toBe("Post saved successfully")

  });
});
      
  });
 
    
    
it('Should  edit a Post', function() {
    browser.get('http://localhost/');
    element(by.id('posts_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('editButton')).click();
      
      
   
 
element(by.name("tittle")).clear();
element(by.name('tittle')).sendKeys("Your Updated Title text here");
element(by.name("body")).clear();
element(by.name("body")).sendKeys("Your Updated Body text here 77569yuii3wui&%$$^"); 
element(by.name("author")).clear();
element(by.name('author')).sendKeys("Your Updated Title text here");
element(by.name("creation_date")).sendKeys("12/23/2015"); 
element(by.css("input[type='radio'][value='true']")).click(); 
      
 
element(by.css(".button-primary")).click()    
.then(function(){    

  
expect(element(by.name("tittle")).getAttribute('value')).toBe("Your Updated Title text here"); expect(element(by.name("body")).getAttribute('value')).toBe("Your Updated Body text here 77569yuii3wui&%$$^");
expect(element(by.name("author")).getAttribute('value')).toBe("Your Updated Title text here"); expect(element(by.name("creation_date")).getAttribute('value')).toBe("2015-12-23");

  });
});
    
it('Should  delete a Post', function() {
    browser.get('http://localhost/');
    element(by.id('posts_menu')).click();
    element(by.css('.ag-row-level-0')).click();
    element(by.id('deleteButton')).click()
            
    .then(function(){

        var EC = protractor.ExpectedConditions;
        var toastMessage = $('.toast-message');

         browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
            .then(function(){

                expect(toastMessage.getText()).toBe("Post deleted successfully")

      });
  
  });
});
      
  });
