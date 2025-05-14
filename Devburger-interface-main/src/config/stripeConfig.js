import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QkqIUKaE5mZvIHjv7zMQclB5r5gvKTAegabt9JozFaxBAdtyvIzBYaen2sKCmASJu2yhzLNZQuNmwQK4IFW3Nm900Q8qov8pD',
);

export default stripePromise;
