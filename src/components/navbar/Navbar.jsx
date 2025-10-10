import { useState } from "react";
import SearchBar from "./SearchBar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-3 shadow-lg z-50">
      <div className="flex items-center justify-between">
        {/* 🧭 Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12" />
          <span className="text-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-bold tracking-wide">
            CyberGear
          </span>
        </Link>

        {/* 🍔 Hamburger button (mobile only) */}
        
        <button
          onClick={toggleMenu}
          className="sm:hidden text-cyan-400 hover:text-pink-400 transition"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        

        {/* 🖥️ Desktop menu + search bar */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex gap-6 font-bold text-lg bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            <Link to="/">🏠 Home</Link>
            <Link to="/products">🛍️ Products</Link>
            <Link to="/cart">🛒 Cart</Link>
            <Link to="/about">ℹ️ About</Link>
          </div>
          <div className="ml-6">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* 📱 Mobile menu */}
      {menuOpen && (
        
        <div className="flex flex-col mt-2 gap-4 font-bold text-lg bg-gray-800 p-4 rounded-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>🛍️ Products</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>🛒 Cart</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ℹ️ About</Link>

          {/* 🔍 Search bar inside mobile menu */}
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
