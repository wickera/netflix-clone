import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Router from "./router.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </Provider>
);
