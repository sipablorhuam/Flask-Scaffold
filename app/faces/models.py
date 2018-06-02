from marshmallow_jsonapi import Schema, fields
from marshmallow import validate
from app.basemodels import db, CRUD_MixIn


class Faces(db.Model, CRUD_MixIn):
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(250), nullable=False)
    company = db.Column(db.String(250), nullable=False)
    document = db.Column(db.String(250), nullable=False)
    count = db.Column(db.Integer, nullable=False)
    lastSeen = db.Column(
        db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)
    picture = db.Column(db.Text, nullable=False)

    def __init__(self,  name,  company,  document,  count,  lastSeen,  picture, ):

        self.name = name
        self.company = company
        self.document = document
        self.count = count
        self.lastSeen = lastSeen
        self.picture = picture


class FacesSchema(Schema):

    not_blank = validate.Length(min=1, error='Field cannot be blank')
    # add validate=not_blank in required fields
    id = fields.Integer(dump_only=True)

    name = fields.String(validate=not_blank)
    company = fields.String(validate=not_blank)
    document = fields.String(validate=not_blank)
    count = fields.Integer(required=True)
    lastSeen = fields.DateTime(required=True)
    picture = fields.String(validate=not_blank)

    # self links
    def get_top_level_links(self, data, many):
        if many:
            self_link = "/faces/"
        else:
            self_link = "/faces/{}".format(data['id'])
        return {'self': self_link}

    class Meta:
        type_ = 'faces'
