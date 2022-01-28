import { loadStripe } from "@stripe/stripe-js"
import getCheckoutSessionId from '../getCheckoutSessionId'

// Starter code; please ignore

export async function getServerSideProps() {
  return { props: { sessionId: await getCheckoutSessionId() } };
}

export default function IndexPage(props) {
  const goToCheckout = async () => {
    const stripeClient = await loadStripe(
      "pk_test_51IVvoGGpCUdxdLKwR47PihupGDvhI7zXce6UqjsC5r8cemX0oEMgnUWf8tffTlSqmDDeU5FAt0EEdX49oteuFbxj00dOydt3Q5"
    )
    try {
      const { err } = await stripeClient.redirectToCheckout({
        sessionId: props.sessionId
      })
      if (err) console.error(err)
    } catch (err) {
      console.error(err)
    }
  }

  return props.sessionId ? (
    <>
      <div>Session ID: {props.sessionId}</div>
      <button onClick={goToCheckout}>Go to Checkout</button>
    </>
  ) : null
}
