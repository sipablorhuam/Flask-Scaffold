exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [  
   '/home/travis/build/Leo-G/Flask-Scaffold/app/templates/users/spec.js',
   '/home/travis/build/Leo-G/Flask-Scaffold/app/templates/devs/spec.js'
  ]
}

