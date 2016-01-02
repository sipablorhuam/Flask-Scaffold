from flask import Flask
# http://flask.pocoo.org/docs/0.10/patterns/appfactories/


def create_app(config_filename):
    app = Flask(__name__, static_folder='templates/static')
    app.config.from_object(config_filename)

    # For Dev purposes only can be removed in Production
    from flask import render_template, send_from_directory
    import os

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/<path:filename>')
    def file(filename):

        return send_from_directory(os.path.join(app.root_path, 'templates'), filename)

    # End

    from app.basemodels import db
    db.init_app(app)

    # Blueprints
    from app.comments.views import comments
    app.register_blueprint(comments, url_prefix='/api/v1/comments')
    from app.authors.views import authors
    app.register_blueprint(authors, url_prefix='/api/v1/authors')
    from app.posts.views import posts
    app.register_blueprint(posts, url_prefix='/api/v1/posts')

    return app
