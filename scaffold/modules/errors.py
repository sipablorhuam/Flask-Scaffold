class Error(Exception):

    """Base class for exceptions in this module."""
    pass


class BlueprintError(Error):

    def __init__(self):
        self.msg = "Cannot register Blueprints"

    def __str__(self):
        return repr(self.msg)


class TestScriptError(Error):

    def __init__(self):
        self.msg = "Cannot add tests to bash script"

    def __str__(self):
        return repr(self.msg)
        
        
class AppjsError(Error):

    def __init__(self):
        self.msg = "Cannot add states/routes to app.js"

    def __str__(self):
        return repr(self.msg)