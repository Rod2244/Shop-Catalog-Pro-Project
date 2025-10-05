import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import About from "./components/About"
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears at the top of all pages */}

      <div className="p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart discountCode="SAVE10" />} />
          <Route path="/products" element={<Products gridColumns={3} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
