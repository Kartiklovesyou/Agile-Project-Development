from app import db
from uuid import uuid4

def generate_id():
    return str(uuid4())

class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.String(36), primary_key=True, default=generate_id)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(50), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'user',
        'polymorphic_on': type
    }

class Customer(User):
    __tablename__ = 'customers'
    user_id = db.Column(db.String(36), db.ForeignKey('users.user_id'), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'customer',
    }

class Driver(User):
    __tablename__ = 'drivers'
    name = db.Column(db.String(100), nullable=False)
    license_number = db.Column(db.String(50), nullable=False)
    availability_status = db.Column(db.String(20), nullable=False, default='Available')

    def __init__(self, username, password, name, license_number):
        super().__init__(username, password, 'Driver')
        self.name = name
        self.license_number = license_number

class Vehicle(db.Model):
    __tablename__ = 'vehicles'
    vehicle_id = db.Column(db.String(36), primary_key=True, default=generate_id)
    type = db.Column(db.String(50), nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    availability_status = db.Column(db.String(20), nullable=False, default='Available')

class Shipment(db.Model):
    __tablename__ = 'shipments'
    shipment_id = db.Column(db.String(36), primary_key=True, default=generate_id)
    origin = db.Column(db.String(100), nullable=False)
    destination = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(50), nullable=False, default='Pending')
    estimated_delivery_time = db.Column(db.DateTime)

class Route(db.Model):
    __tablename__ = 'routes'
    route_id = db.Column(db.String(36), primary_key=True, default=generate_id)
    start_point = db.Column(db.String(100), nullable=False)
    end_point = db.Column(db.String(100), nullable=False)
    distance = db.Column(db.Integer)

    def calculate_distance(self):
        return 100
