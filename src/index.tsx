import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// GLOBAL STYLES
import "bootstrap/dist/css/bootstrap.css";
import "styles/styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
