import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./yourpath";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Fragment>
        <App />
      </Fragment>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
