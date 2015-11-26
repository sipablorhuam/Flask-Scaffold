import unittest
import os
import sys

# Add app path to module path
sys.path.append(os.path.dirname(os.path.realpath(__file__).rsplit('/', 2)[0]))
from app import create_app
from app.customers.models import Customers


app = create_app('config')


class TestCustomers(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_read(self):
        self.app = app.test_client()
        rv = self.app.get('/customers/')
        assert "Customers" in rv.data.decode('utf-8')

    def test_01_add(self):
        rv = self.app.post('/customers/add', data=dict(

            name='test string',
            address="""How to build CRUD app with Python, Flask, SQLAlchemy and MySQL

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

                                       Before you continue if you have not built an application on Linux with Flask or Python then
                                       I recommend you read Creating your first Linux App with Python and Flask.
                                       Read more at http://techarena51.com/index.php/flask-sqlalchemy-tutorial/""",
            is_active='False',
            mobile='35678',
            email='testing@flask.pocoo.com',
            url='http://techarena51.com',
            timestamp='2015-12-22T03:12:58.019077+00:00',
            date='2015-06-26',
            pricing='48.6789899',), follow_redirects=True)

        assert 'Add was successful' in rv.data.decode('utf-8')

    def test_02_Update(self):

        with app.app_context():
            id = Customers.query.first().id
            rv = self.app.post(
                '/customers/update/{}'.format(id), data=dict(
                    name='test string',
                    address="""How to build CRUD app with Python, Flask, SQLAlchemy and MySQL

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

                                       Before you continue if you have not built an application on Linux with Flask or Python then
                                       I recommend you read Creating your first Linux App with Python and Flask.
                                       Read more at http://techarena51.com/index.php/flask-sqlalchemy-tutorial/""",
                    is_active='False',
                    mobile='35678',
                    email='testing@flask.pocoo.com',
                    url='http://techarena51.com',
                    timestamp='2015-12-22T03:12:58.019077+00:00',
                    date='2015-06-26',
                    pricing='48.6789899',), follow_redirects=True)
            assert 'Update was successful' in rv.data.decode('utf-8')

    def test_03_delete(self):
        with app.app_context():
            id = Customers.query.first().id
            rv = self.app.post(
                'customers/delete/{}'.format(id), follow_redirects=True)
            assert 'Delete was successful' in rv.data.decode('utf-8')

if __name__ == '__main__':
    unittest.main()
