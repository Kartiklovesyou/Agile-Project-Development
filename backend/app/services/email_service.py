from flask_mail import Message
from flask import current_app as app
from app import mail

def send_email(subject, sender, recipients, text_body, html_body=None):
    msg = Message(subject, sender=sender, recipients=[recipients])
    msg.body = text_body
    if html_body:
        msg.html = html_body
    
    mail.send(msg)
