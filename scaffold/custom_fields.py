######### Protractor Tests ##########
# Add
pro_string="""element(by.name('{field}')).sendKeys("Your Title text here");"""

pro_text= """element(by.name("{field}")).sendKeys("Your Body text here 77569yuii3wui&%$$^"); """

#need to change to name of element
pro_boolean= """element(by.css("input[type='radio'][value='false']")).click(); """

pro_big_int= """ element(by.name("{field}")).sendKeys(9870654321); """

pro_int = """ element(by.name("{field}")).sendKeys(56); """

pro_email = """ element(by.name("{field}")).sendKeys("youremail@flask-scaffold.git");"""

pro_url = """ element(by.name("{field}")).sendKeys("http://techarena51.com");   """

pro_timestamp = """ element(by.name("{field}")).sendKeys("2014-12-22T03:12:58.019077+00:00"); """

pro_date = """ element(by.name("{field}")).sendKeys("12/11/2015"); """

pro_decimal = """ element(by.name("{field}")).sendKeys("67.89"); """

#Edit

update_pro_string="""
element(by.name("{field}")).clear();
element(by.name('{field}')).sendKeys("Your Updated Title text here");"""

update_pro_text= """
element(by.name("{field}")).clear();
element(by.name("{field}")).sendKeys("Your Updated Body text here 77569yuii3wui&%$$^"); """

#need to change to name of element
update_pro_boolean= """
element(by.css("input[type='radio'][value='true']")).click(); """

update_pro_big_int= """
element(by.name("{field}")).clear();
element(by.name("{field}")).sendKeys(9870646321); """

update_pro_int = """
element(by.name("{field}")).clear();
element(by.name("{field}")).sendKeys(67); """

update_pro_email = """
element(by.name("{field}")).clear();
element(by.name("{field}")).sendKeys("yourupdatedemail@flask-scaffold.git");"""

update_pro_url = """
element(by.name("{field}")).clear();
element(by.name("{field}")).sendKeys("https://github.com/Leo-G/DevopsWiki");   """

update_pro_timestamp = """
element(by.name("{field}")).clear();
element(by.name("{field}")).sendKeys("2015-12-22T03:12:58.019077+00:00"); """

update_pro_date = """
element(by.name("{field}")).sendKeys("12/23/2015"); """

update_pro_decimal = """
element(by.name("{field}")).clear();
element(by.name("{field}")).sendKeys("67.79"); """

#expect
expect_pro_string = """
expect(element(by.name("{field}")).getAttribute('value')).toBe("Your Updated Title text here");"""

expect_pro_text = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("Your Updated Body text here 77569yuii3wui&%$$^");"""

#need to add check for boolean
expect_pro_big_int = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("9870646321");"""

expect_pro_int = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("67");"""

expect_pro_email = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("yourupdatedemail@flask-scaffold.git");"""

expect_pro_url = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("https://github.com/Leo-G/DevopsWiki");"""

expect_pro_timestamp = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("2015-12-22T03:12:58.019077+00:00");"""

expect_pro_date = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("2015-12-23");"""

expect_pro_decimal = """ expect(element(by.name("{field}")).getAttribute('value')).toBe("67.79");"""


######### Protractor Tests End ##########

######View Fields###########
add_string = """ request_dict['{}'],"""
######### START TEST FIELDS #####################
####ADD####
string_test = "test string"
boolean_test = "{}"
integer_test = 35678
big_integer_test = 9820109678
email_test = "testing@flask.pocoo.com"
url_test = "http://techarena51.com"
date_time_test ="2015-12-22T03:12:58.019077+00:00"
date_test = "2015-06-26"
time_test = "11:23:19.200283"
decimal_test = "48.6789899"
text_test = "How to build CRUD app with Python, Flask, SQLAlchemy and MySQL. Som reand456989@#$%^%> <html/>"
####UPDATE####
update_string_test = """
                                       {} = 'test string update',"""
update_boolean_test = """
                                       {} = 'True',"""
update_integer_test = """
                                       {} = '356780',"""
update_email_test = """
                                       {} = 'test_update@flask.pocoo.com',"""
update_url_test = """
                                       {} = 'http://techarena51.com/',"""
update_date_time_test = """
                                       {} = '2016-12-22T03:12:58.019077+00:00',"""
update_date_test = """
                                       {} = '2015-05-26',"""
update_time_test = """
                                       {} = '11:24:19.200283',"""
update_decimal_test = """
                                       {} = '48.678989987',"""
update_text_test = """
                                       {} = \"\"\"How to build CRUD app with Python, Flask, SQLAlchemy and MySQL
                                       In this post I will briefly describe,
                                       how you can you build a database driven CRUD (Create, Read, Update, Delete) app on Linux with Python,
                                       Flask, SQLAlchemy and MySQL. I used this process to create a blog and hence the examples below will
                                       describe how to store and modify posts in a MySQL database. You can also download the complete source
                                       code from https://github.com/Leo-g/Flask-Skeleton/
                                       Software Versions
                                       Python 2.7
                                       Flask 0.11
                                       Flask-SQLAlchemy 2.0
                                       Flask-Migrate 1.3
                                       MySQL-python 1.2
                                       Foundation 5
                                       Mariadb 10
                                       This an Update
                                       Before you continue if you have not built an application on Linux with Flask or Python then
                                       I recommend you read Creating your first Linux App with Python and Flask.
                                       Read more at http://techarena51.com/index.php/flask-sqlalchemy-tutorial/\"\"\","""
# ADD Tests to bash script
test_script_string = """
#TESTS
python app/{resources}/test_{resources}.py"""
######### END TEST FIELDS #####################
########### Controller Fields ##########
controller_field = """{{headerName: "{field}", field: "{field}", width: 300 }},"""
########## Form Fields #####################
form_field = """
      <div class="required" >
        <input class="form-field" placeholder="{field}" type="{field_type}" id="{field}" name="{field}"  ng-model="{resource}.data.attributes.{field}"  required>
      </div>"""
date_field_string = """
        <div class="required"  >
            <input class="form-field" placeholder="{field}" type="{field_type}" id="{field}" name="{field}"  formatdate ng-model="{resource}.data.attributes.{field}"   required>
      </div>"""
decimal_form_string = """
        <div class="required">
            <input class="form-field" placeholder="{field}" type="number" step="any" id="{field}" name="{field}"  string-to-number ng-model="{resource}.data.attributes.{field}"   required>
        </div> """
text_form_string  = """
          <div class="required">
          <textarea class="form-field" type="text" placeholder="{field}" name="{field}" ng-model="{resource}.data.attributes.{field}"  required> </textarea> </div>
          """
boolean_form_string = """
    <div class=" required form-radio">
       <label>{Field}</label>
       <input type="radio" ng-model="{resource}.data.attributes.{field}" name="{field}" ng-value="true"  required>
       <label>True</label>
       <input type="radio" ng-model="{resource}.data.attributes.{field}"  name="{field}"ng-value="false">
       <label>False</label>
    </div>
"""
