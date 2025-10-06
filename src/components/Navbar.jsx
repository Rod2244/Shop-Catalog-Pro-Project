import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      {/* Top bar: Hamburger + Logo + Search */}
      <div className="flex items-center justify-between sm:justify-start gap-3">
        {/* Hamburger (left on mobile) */}
        <button
          className="sm:hidden text-white text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo (center on mobile) */}
        <Link
          to="/"
          className="flex-1 flex justify-center sm:justify-start items-center gap-3"
        >
          <img
            src={logo}
            alt="Shop Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-bold tracking-wide">
            CyberGear
          </span>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden sm:flex items-center bg-gray-800 rounded-lg px-3 py-1 w-90 mt-5"
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
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold hover:text-yellow-500 transition-colors cursor-pointer"
          >
            🔍
          </button>
        </form>
      </div>

      {/* Mobile Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex sm:hidden items-center bg-gray-800 rounded-lg px-3 py-1 mt-2"
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
          className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold hover:text-yellow-500 transition-colors cursor-pointer"
        >
          🔍
        </button>
      </form>

      {/* Navigation Links */}
      <div
        className={`font-bold sm:flex flex-col sm:flex-row sm:items-center gap-6 text-lg mt-2
        text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
        ${menuOpen ? "flex" : "hidden"} sm:flex`}
      >
        <Link to="/" className="hover:text-yellow-400 transition-colors duration-200">
          🏠 Home
        </Link>
        <Link to="/products" className="hover:text-yellow-400 transition-colors duration-200">
          🛍️ Products
        </Link>
        <Link to="/cart" className="hover:text-yellow-400 transition-colors duration-200">
          🛒 Cart
        </Link>
        <Link to="/about" className="hover:text-yellow-400 transition-colors duration-200">
          ℹ️ About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
