from flask import request, jsonify, Blueprint
from .controllers.route_controller import calculate_optimal_route, update_route
from .controllers.tracking_controller import update_shipment_status, track_shipment
from .controllers.user_controller import login_user, signup_user, update_user_profile, update_driver_status

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')
    extra_data = data.get('extra_data', {})
    if not username or not password or not role:
        return jsonify({'message': 'Username, password, and role are required'}), 400
    return jsonify(signup_user(username, password, role, extra_data))

@api.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400
    return jsonify(login_user(username, password))

@api.route('/user/<user_id>/update', methods=['POST'])
def update_user(user_id):
    data = request.json
    return jsonify(update_user_profile(user_id, data))

@api.route('/driver/<driver_id>/status', methods=['POST'])
def driver_status_update(driver_id):
    status = request.json.get('status')
    return jsonify(update_driver_status(driver_id, status))

@api.route('/routes/calculate', methods=['POST'])
def optimize_route():
    start_point = request.json.get('start_point')
    end_point = request.json.get('end_point')
    result = calculate_optimal_route(start_point, end_point)
    return jsonify(result)

@api.route('/routes/<route_id>/update', methods=['POST'])
def route_update(route_id):
    new_start = request.json.get('new_start')
    new_end = request.json.get('new_end')
    return jsonify(update_route(route_id, new_start, new_end))

@api.route('/shipment/<shipment_id>/update_status', methods=['POST'])
def shipment_status_update(shipment_id):
    new_status = request.json.get('status')
    return jsonify(update_shipment_status(shipment_id, new_status))

@api.route('/shipment/<shipment_id>/track', methods=['GET'])
def shipment_track(shipment_id):
    return jsonify(track_shipment(shipment_id))

def init_app(app):
    app.register_blueprint(api, url_prefix='/api')
