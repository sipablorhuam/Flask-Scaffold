Flask-Scaffold let's you prototype a Web Application for example a Blog or a CRUD Web application in Python 3 and Angularjs by simply specifying it's modules and their fields. A RESTFUL API  is also created which allows you to exchange data with other applications like a native mobile application.

![](http://i.imgur.com/gsOwlH5.png)

Flask-Scaffold will prototype applications in  Python 3, Angularjs and can use either a PostgreSQL or a MySQL database
It uses the Flask framework and offers inbuilt Unit testing, E2E testing and Continuous Integration as well.

![](https://travis-ci.org/Leo-G/Flask-Scaffold.svg?branch=master)
[![Gitter](https://badges.gitter.im/Leo-G/Flask-Scaffold.svg)](https://gitter.im/Leo-G/Flask-Scaffold?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

###Installation

Please ensure that development libraries for [PostgreSQL](http://techarena51.com/index.php/flask-sqlalchemy-postgresql-tutorial/) are installed.

####Step 1:Clone the project to your application folder.

    git clone git@github.com:Leo-g/Flask-Scaffold.git YourAppFolderName && cd YourAppFolderName

####Step 2: Install the requirements and add your Database configuration details.
 
    pip install -r requirements.txt 
       
    vim config.py
    #Fill in your database username, password, name, host etc
      
#### Step 3 : Declare your Module and it's fields in a YAML file as follows

For a list of supported fields please see https://github.com/Leo-g/Flask-Scaffold/wiki/Fields

    vim scaffold/blog.yaml
    posts:
     - tittle:string
     - body:text
     - author:string
     - creation_date:date
     - published:boolean
    comments:
     - author:string
     - body:text
     - author_url:url
     - created_on:date
     - approved:boolean
    authors:
     - name:string
     - profile:text
     - url:url
    
#### Step 4 : Run the Scaffolding  and database migrations script

    python scaffold.py scaffold/blog.yaml   
    python db.py db init
    python db.py db migrate
    python db.py db upgrade
   
####  Step 5 : Configure your web server to serve your web app

Note: These instructions are for Nginx and Uwsgi on Ubuntu 14.04.

    #You need to configure the root path in localhost.conf to map to YourAppFolderName/angularjs-frontend/index.html 
    sudo apt-get install nginx
    sudo cp nginx/localhost.conf /etc/nginx/sites-enabled/
    sudo cp -f nginx/nginx.conf /etc/nginx/nginx.conf
    sudo rm -rf /etc/nginx/default
    sudo service nginx restart
    uwsgi --socket 127.0.0.1:8001 --wsgi-file run.py --callable app --processes 4 --threads 2 --stats 127.0.0.1:9195
    
**You should be able to see the web dashboard  at http://localhost

![](http://i.imgur.com/gsOwlH5.png)
   

###Tests
   
####For E2E testing with protractor
Installation instructions for protractor are in the [wiki](https://github.com/Leo-G/Flask-Scaffold/wiki/Headless-Testing-Angularjs-apps-with-Protractor-and-Selenium-on-Ubuntu-14.04)

    protractor angularjs/<module_name>/conf.js
    
####For unit testing with python Unit tests

    python app/<module_name>/test_<module_name>.py

####For testing multiple modules
    bash tests.bash

###API

API calls can be made to the following URL

Note: This example is for a Post module

| HTTP Method  | URL  | Results |
| :------------ |:---------------:| -----:|
| GET      | http://localhost:8001/api/v1/posts.json | Returns a list of all Posts |
| POST     | http://localhost:8001/api/v1/posts.json      |   Creates a New Post |
| GET | http://localhost:8001/api/v1/posts/<post_id>.json      | Returns details for the a single Post |
| PATCH | http://localhost:8001/api/v1/posts/<post_id>.json      | Update a Post |
| DELETE | http://localhost:8001/api/v1/posts/<post_id>.json      | Delete a Post |


The JSON format is per jsonapi.org, for more details on how the API is built read 	http://techarena51.com/index.php/buidling-a-database-driven-restful-json-api-in-python-3-with-flask-flask-restful-and-sqlalchemy/	
	     
###Directory Structure
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
                  
              

