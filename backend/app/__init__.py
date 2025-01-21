from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_mail import Mail
from flask_cors import CORS

mail = Mail()
db = SQLAlchemy()
migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_class)
    db.init_app(app)
    migrate.init_app(app, db)
    mail.init_app(app)

    with app.app_context():
        from app.views import init_app as init_views
        init_views(app)

        @app.errorhandler(404)
        def not_found_error(error):
            return {'error': 'Resource not found'}, 404

        @app.errorhandler(500)
        def internal_error(error):
            db.session.rollback()
            return {'error': 'An internal error occurred'}, 500

    return app
