from scaffold.modules.errors import ReplaceError


#String to add Routes to app.js
new_route_string = """
   // States
  // Routes for {resources}
  .state('{resources}', {{
    url: '/{resources}',
    templateUrl: '{resources}/index.html',
    controller: '{Resource}ListController',
    
  
  }}).state('new{Resource}', {{
    url: '/{resources}/new',
    templateUrl: '/{resources}/add.html',
    controller: '{Resource}CreateController',
    
    }}).state('edit{Resource}', {{ 
    url: '/{resources}/:id/edit',
    templateUrl: '{resources}/update.html',
    controller: '{Resource}EditController',
    
        }})
        
        // End Routes for {resources}"""

# Strings to add to to main index.html
js_src_string =""" <!-- Controllers -->
    <script type="text/javascript" src="{resources}/controllers.js"></script>"""

menu_string ="""  <!-- menu -->
      <li><a ui-sref="{resources}"> {Resources}</a> </li> """
        
#Strings to test.bash
test_script_string = """
#TESTS
python app/{resources}/test_{resources}.py"""

def replace_string(resource, resources, file, string_to_insert_after, new_string):

    new_string = new_string.format(resources=resources, resource=resource, Resource=resource.title(), Resources=resources.title())

    with open(file, 'r+') as old_file:
        filedata = old_file.read()
    if string_to_insert_after in filedata:
        # replace the first occurrence
        new_filedata = filedata.replace(
            string_to_insert_after, new_string, 1)
        with open(file, 'w') as new_file:
            new_file.write(new_filedata)
            print("Updated", file)
    else:
        error_msg = """Unable to replace {string_to_insert_after}, with {new_string}
                      in file {file} """.format(string_to_insert_after=string_to_insert_after, new_string=new_string,
                                                 file=file)
        raise ReplaceError(error_msg)