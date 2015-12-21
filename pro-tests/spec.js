// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://scaffold/');
    element(by.linkText('Devs')).click();
    element(by.linkText('New')).click();
      
      
      element(by.name('name')).sendKeys("Your Title text here");

element(by.name("address")).sendKeys("Your Body text here 77569yuii3wui&%$$^");

element(by.css("input[type='radio'][value='false']")).click();

element(by.name("mobile")).sendKeys(9870654321);

element(by.name("age")).sendKeys(56);

element(by.name("email")).sendKeys("youremail@flask-scaffold.git");
      
element(by.name("url")).sendKeys("http://techarena51.com");      
      
element(by.name("timestamp")).sendKeys("2014-12-22T03:12:58.019077+00:00");

element(by.name("date")).sendKeys("12/11/2015");
      
element(by.name("pricing")).sendKeys("67.89");
      
element(by.css(".button-primary")).click()    
.then(function(){
      var EC = protractor.ExpectedConditions;
    var toastMessage = $('.toast-message');
      
 browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
        .then(function(){


  expect(toastMessage.getText()).toBe("Dev saved successfully")

  });
});
      
  });
    
});