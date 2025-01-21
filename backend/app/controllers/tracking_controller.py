from app.models import Shipment, db

def update_shipment_status(shipment_id, new_status):
    shipment = Shipment.query.get(shipment_id)
    if shipment:
        shipment.status = new_status
        db.session.commit()
        return {"message": "Shipment status updated successfully"}
    else:
        return {"error": "Shipment not found"}, 404

def track_shipment(shipment_id):
    shipment = Shipment.query.get(shipment_id)
    if shipment:
        return {
            "shipment_id": shipment.shipment_id,
            "origin": shipment.origin,
            "destination": shipment.destination,
            "status": shipment.status
        }
    else:
        return {"error": "Shipment not found"}, 404
