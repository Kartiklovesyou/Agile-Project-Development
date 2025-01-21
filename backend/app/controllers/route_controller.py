from app.models import Route, db

def calculate_optimal_route(start_point, end_point):
    route = Route.query.filter_by(start_point=start_point, end_point=end_point).first()
    if not route:
        route = Route(start_point=start_point, end_point=end_point)
        db.session.add(route)
        db.session.commit()
    return route

def update_route(route_id, new_start, new_end):
    route = Route.query.get(route_id)
    if route:
        route.start_point = new_start
        route.end_point = new_end
        db.session.commit()
        return {"message": "Route updated successfully"}
    else:
        return {"error": "Route not found"}, 404
