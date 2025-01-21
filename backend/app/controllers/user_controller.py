from app.models import db, User, Driver, Customer
from werkzeug.security import generate_password_hash, check_password_hash
import uuid

def signup_user(username, password, role, extra_data=None):
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    if role == 'Driver':
        name = extra_data.get('name')
        license_number = extra_data.get('license_number')
        new_user = Driver(username=username, password=hashed_password, name=name, license_number=license_number)
    elif role == 'Customer':
        name = extra_data.get('name')
        address = extra_data.get('address')
        new_user = Customer(username=username, password=hashed_password, name=name, address=address)
    else:
        return {'message': 'Invalid role'}, 400
    try:
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User created successfully'}, 201
    except Exception as e:
        db.session.rollback()
        return {'message': f'Error: {str(e)}'}, 500

def login_user(username, password):
    user = User.query.filter_by(username=username).first()
    if not user:
        return {'message': 'User not found'}, 404
    if check_password_hash(user.password, password):
        session_token = str(uuid.uuid4())
        return {'message': 'Login successful', 'token': session_token}, 200
    else:
        return {'message': 'Invalid credentials'}, 401

def update_user_profile(user_id, new_details):
    user = User.query.get(user_id)
    if user:
        user.username = new_details.get('username', user.username)
        user.password = new_details.get('password', user.password)
        db.session.commit()
        return {"message": "User profile updated successfully"}
    else:
        return {"error": "User not found"}, 404

def update_driver_status(driver_id, new_status):
    driver = Driver.query.get(driver_id)
    if driver:
        driver.availability_status = new_status
        db.session.commit()
        return {"message": "Driver status updated successfully"}
    else:
        return {"error": "Driver not found"}, 404
