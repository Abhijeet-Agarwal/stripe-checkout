import stripe
import uvicorn
from fastapi import FastAPI

stripe.api_version = '2020-08-27' # Do not modify
stripe.api_key = 'sk_test_51IVvoGGpCUdxdLKw0LxioK1K3uR2b2tIZXIb3rP7tfotzdtPR7x5hINtPmm1EeIMdZpQRqu4SZgQsC30F62bsBPM00GZ97nIca'
app = FastAPI()

@app.get("/create-checkout-session")
def create_session(priceid: str):
    try:
        checkout_session = stripe.checkout.Session.create(
            success_url='https://example.com/success.html?session_id={CHECKOUT_SESSION_ID}',
            cancel_url='https://example.com/canceled.html',
            mode='subscription',
            line_items=[{
                'price': 'price_1IVvz3GpCUdxdLKwnHD5YcfO',
                'quantity': 1
            }],
        )
        return checkout_session.id
    except Exception as e:
        return {"Hello world!"}
