def validate_email(email):
    import re
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return re.match(pattern, email) is not None

def is_valid_route(start_point, end_point):
    if start_point == end_point or not start_point or not end_point:
        return False
    return True
