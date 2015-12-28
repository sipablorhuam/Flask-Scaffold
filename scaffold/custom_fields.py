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