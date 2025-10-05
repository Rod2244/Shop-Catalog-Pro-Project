import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import About from "./components/About"
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar /> {/* Navbar appears at the top of all pages */}

        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart discountCode="SAVE10" />} />
            <Route path="/products" element={<Products gridColumns={3} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
