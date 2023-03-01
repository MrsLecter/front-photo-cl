import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./components/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const store = setupStore();

const stripePromise = loadStripe(
  "pk_test_51MTpDKHRsHuJ98A4YtgOtq8bX49jTU8k4GckEwG4HbVpSiZvqYe6GwAofUrtVgrV0V5PWUmwy2dyt58pDWWT04oo00xFgaFN2N"
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>
);
