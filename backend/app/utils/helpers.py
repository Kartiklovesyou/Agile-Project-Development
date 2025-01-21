def calculate_distance(start_point, end_point):
    return ((end_point[0] - start_point[0]) ** 2 + (end_point[1] - start_point[1]) ** 2) ** 0.5

def format_date(date):
    return date.strftime('%Y-%m-%d %H:%M:%S')
