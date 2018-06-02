// spec.js
describe('Testing Faces CRUD Module', function() {

var Face = function() {
        
        var name = element(by.id('name'));
        this.setName = function(nameText) { name.clear(); name.sendKeys(nameText); };
        
        var company = element(by.id('company'));
        this.setCompany = function(companyText) { company.clear(); company.sendKeys(companyText); };
        
        var document = element(by.id('document'));
        this.setDocument = function(documentText) { document.clear(); document.sendKeys(documentText); };
        
        var count = element(by.id('count'));
        this.setCount = function(countText) { count.clear(); count.sendKeys(countText); };
        
        var lastSeen = element(by.id('lastSeen'));
        this.setLastseen = function(lastSeenText) { lastSeen.clear(); lastSeen.sendKeys(lastSeenText); };
        
        var picture = element(by.id('picture'));
        this.setPicture = function(pictureText) { picture.clear(); picture.sendKeys(pictureText); };
        

        this.get = function() {
                                   browser.get('http://localhost:5000/');
                                       };

        this.toast = function(message){
                                        $('.btn.btn-primary').click()  // css selectors http://angular.github.io/protractor/#/api?view=build$
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

it('Should add a new Face', function() {

    var face = new Face();

    // Get faces URL
    face.get();

    // Goto the new menu
    element(by.linkText('Faces')).click();
    element(by.linkText('New')).click();

    // Fill in the Fields
    
        face.setName("Your Title text here");
        face.setCompany("Your Title text here");
        face.setDocument("Your Title text here");
        face.setCount(56); 
        face.setLastseen("2014-12-22T03:12:58.019077+00:00"); 
        face.setPicture("Your Body text here 77569yuii3wui&%$$^"); 

    //Expectations
    face.toast("Face saved successfully");

  });

it('Should  edit a Face', function() {

    var face = new Face();

    face.get();

    //Goto the edit menu
    element(by.linkText('Faces')).click();
     element(by.id('editButton')).click();

    // Fill in the fields
    
        face.setName("Your Updated Title text here");
        face.setCompany("Your Updated Title text here");
        face.setDocument("Your Updated Title text here");
        face.setCount(67); 
        face.setLastseen("2015-12-22T03:12:58.019077+00:00"); 
        face.setPicture("Your Updated Body text here 77569yuii3wui&%$$^"); 

    //Expectations
    face.toast("Update was a success");



});

it('Should  delete a Face', function() {
    browser.get('http://localhost:5000/');
    element(by.linkText('Faces')).click();
    element(by.id('deleteButton')).click()

    .then(function(){

        var EC = protractor.ExpectedConditions;
        var toastMessage = $('.toast-message');

         browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
            .then(function(){

                expect(toastMessage.getText()).toBe("Face deleted successfully")

      });

  });
});

  });
