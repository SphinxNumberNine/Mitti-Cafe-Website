// @flow

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { faCarrot } from "@fortawesome/free-solid-svg-icons/faCarrot";
import { faSeedling } from "@fortawesome/free-solid-svg-icons/faSeedling";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons/faAppleAlt";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons/faFireAlt";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCarrot, faSeedling, faAppleAlt, faFireAlt);

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
