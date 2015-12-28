Flask-Scaffold let's you prototype a web app for example a Blog or a CRUD app by simply specifying it's modules and fields
It also creates a RESTFUL API for you, so you can exchange data with your app via a mobile client as well.

Flask-Scaffold will prototype applications in  Python 3, Angularjs 1.5 and can use either a PostgreSQL or MySQL database
It uses the Flask framework and offers inbuilt Unit testing, E2E testing and Continous Integration.

![](https://travis-ci.org/Leo-G/Flask-Scaffold.svg?branch=master)

###Installation

Please ensure that development libraries for [PostgreSQL](http://techarena51.com/index.php/flask-sqlalchemy-postgresql-tutorial/) are installed.

####Step 1:Clone the project to your application folder.

    git clone git@github.com:Leo-g/Flask-Scaffold.git YourAppFolderName && cd YourAppFolderName

####Step 2: Install the requirements and add your Database configuration details.
 
       pip install -r requirements.txt 
       
        vim config.py
        #Fill in your username, password and database name/host etc
    
    
#### Step 3 : Declare your Module and it's fields in a YAML file as follows

For a list of supported fields please see https://github.com/Leo-g/Flask-Scaffold/wiki/Fields

    vim scaffold/module.yaml
    customers:
     - name:string
     - address:text
     - is_active:boolean
     - mobile:integer
     - email:email
     - url:url
     - timestamp:datetime
     - date:date
     - pricing:decimal
    
#### Step 4 : Run the Scaffolding  and database migrations script

    python scaffold.py scaffold/module.yaml   
    python db.py db init
    python db.py db migrate
    python db.py db upgrade
   
####  Step 5 : Configure your web server(nginx) to serve your web app

Note: These instructions are for Ubuntu 14.04

    sudo cp nginx/localhost.conf /etc/nginx/sites-enabled/
    sudo cp -f nginx/nginx.conf /etc/nginx/nginx.conf
    sudo service nginx restart
    uwsgi --socket 127.0.0.1:8001 --wsgi-file run.py --callable app --processes 4 --threads 2 --stats 127.0.0.1:9195
    
**You should be able to see the web dashboard  at http://localhost

![](http://i.imgur.com/brGR8gB.png)
   

####Tests
   
For e2e testing with protractor

    protractor angularjs/conf.js
    
####API

API calls can be made to 



API's can be tested with Python Unit Tests

     python app/customers/test_customers.py
     
     bash tests.bash
     
####Directory Structure
        Project-Folder   
            |-- config.py
            |--run.py
            |--requirements.txt    
            |__ /venv 
            |-- db.py
            |__ /scaffold
            |-- scaffold.py
            |-- tests.bash    #Tests for all modules
            |__ angular-frontend
               |--index.html
               +-- module-1
                               |-- _form.html
                               |-- index.html
                               |-- add.html
                               |-- update.html 
                               |-- controller.js
               +-- module-2
                               |-- _form.html
                               |-- index.html
                               |-- add.html
                               |-- update.html
                               |-- controller.js
            |__ app/
                |-- __init__.py               
                +-- module-1
                    |-- __init__.py
                    |-- models.py           
                    |-- test_module-1.py  # Unit Tests for module 1
                    |-- views.py                  
                                
                +-- module-2
                    |-- __init__.py
                    |-- models.py           
                    |-- test_module-2.py  # Unit Tests for module 2
                    |-- views.py
                  
              

