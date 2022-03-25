
const fetchPaymentIntentClientSecret = async () => {
  const response = await fetch('http://localhost:4004/stripe/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currency: 'usd',
    }),
  });
  const {clientSecret} = await response.json();
  console.log('got client secret', clientSecret)
  return clientSecret
}

export default fetchPaymentIntentClientSecret