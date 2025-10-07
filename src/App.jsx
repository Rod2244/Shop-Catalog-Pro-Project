import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/products";
import About from "./components/About"
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrolltoTop";
import ProductDetails from "./components/ProductDetails";
import ProductSpecs from "./components/ProductSpecs";

function App() {
  return (
    <Router>
      <div className="flex flex-col  min-h-screen bg-gradient-to-b from-[#0f0f1f] via-[#1a1a40] to-[#2b0040]">
        <ScrollToTop />
        <Navbar /> 
          <div className="flex-grow p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart discountCode="SAVE10" />} />
              <Route
              path="/products"
              element={
                <Product
                  gridColumns={{ base: 1, sm: 2, md: 3, lg: 5 }}
                />
              }
            />
              <Route path="/product/:id" element={<ProductDetails />} >
                <Route path="specs" element={<ProductSpecs />} />
              </Route>
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
