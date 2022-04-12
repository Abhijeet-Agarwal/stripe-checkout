import Stripe from 'stripe'

const stripeSecretKey =
  "sk_test_51IVvoGGpCUdxdLKw0LxioK1K3uR2b2tIZXIb3rP7tfotzdtPR7x5hINtPmm1EeIMdZpQRqu4SZgQsC30F62bsBPM00GZ97nIca"
const subscriptionPriceId = "price_1IVvz3GpCUdxdLKwnHD5YcfO"

const getCheckoutSessionId = () => {
  // YOUR CODE HERE
  // Subscriptions with Stripe Checkout: https://stripe.com/docs/billing/subscriptions/checkout
  return "your_session_id"
}

export default getCheckoutSessionId