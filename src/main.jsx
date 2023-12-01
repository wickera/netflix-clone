import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>
);
