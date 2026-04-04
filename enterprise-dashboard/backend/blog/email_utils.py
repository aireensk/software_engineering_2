
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_email(to_email, subject, content):
    key = os.getenv("SENDGRID_API_KEY")
    if not key:
        return
    message = Mail(
        from_email=os.getenv("EMAIL_FROM"),
        to_emails=to_email,
        subject=subject,
        html_content=content
    )
    SendGridAPIClient(key).send(message)
