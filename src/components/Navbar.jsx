// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"; // adjust the path if needed

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
        navigate(`/products?q=${encodeURIComponent(searchQuery)}`);
        setSearchQuery(""); // optional: clear input after search
        }
    };

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      
      {/* Left: Logo and Title */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Shop Logo"
          className="h-12 w-auto object-contain"
        />
        <span className="text-2xl font-bold tracking-wide">CyberGear</span>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex items-center bg-gray-800 rounded-lg px-3 py-1 w-full sm:w-80 mt-3 sm:mt-0"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent text-white w-full outline-none px-2 placeholder-gray-400"
        />
        <button
          type="submit"
          className="text-yellow-400 font-semibold hover:text-yellow-500 transition-colors"
        >
          🔍
        </button>
      </form>

      {/* Right: Navigation Links */}
      <div className="flex gap-6 text-lg">

        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          🏠 Home
        </Link>
        <Link
          to="/products"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          🛍️ Products
        </Link>
        <Link
          to="/cart"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          🛒 Cart
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          ℹ️ About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
