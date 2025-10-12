import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./cartContext/CartContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
