from marshmallow_jsonapi import Schema, fields
from marshmallow import validate
from app.basemodels import db, CRUD_MixIn


class Customers(db.Model, CRUD_MixIn):
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(250), nullable=False)
    address = db.Column(db.Text, nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    mobile = db.Column(db.BigInteger, nullable=False)
    email = db.Column(db.String(250), nullable=False)
    url = db.Column(db.String(250), nullable=False)
    timestamp = db.Column(
        db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)
    date = db.Column(db.Date, nullable=False)
    pricing = db.Column(db.Numeric, nullable=False)

    def __init__(self,  name,  address,  is_active,  mobile,  email,  url,   date,  pricing, ):

        self.name = name
        self.address = address
        self.is_active = is_active
        self.mobile = mobile
        self.email = email
        self.url = url
        self.date = date
        self.pricing = pricing


class CustomersSchema(Schema):

    not_blank = validate.Length(min=1, error='Field cannot be blank')
    id = fields.Integer(dump_only=True)
    name = fields.String()
    address = fields.String()
    is_active = fields.Boolean()
    mobile = fields.Integer()
    email = fields.Email()
    url = fields.URL()
    timestamp = fields.DateTime()
    date = fields.Date()
    pricing = fields.Decimal()

    # self links
    def get_top_level_links(self, data, many):
        if many:
            self_link = "/customers/"
        else:
            self_link = "/customers/{}".format(data['id'])
        return {'self': self_link}

    class Meta:
        type_ = 'customers'
