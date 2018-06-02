#!/bin/bash


#TESTS
#Tests for faces
protractor  app/templates/faces/conf.js  &&
python app/faces/test_faces.py
#End Tests for faces

