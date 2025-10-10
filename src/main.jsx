
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./cartContext/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <CartProvider>
      <App />
    </CartProvider>
  
);
