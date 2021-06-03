import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import "./index.css";
import store from "./redux/store/store";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
console.log(store);
