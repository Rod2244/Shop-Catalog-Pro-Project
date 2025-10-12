import { useState } from "react";
import SearchBar from "./SearchBar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white p-3 pt-6 pb-6 shadow-lg">
      {/* Main Header Row */}
      <div className="flex items-center justify-between relative">
        {/* 🧭 Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-12" />
          <span className="text-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-bold tracking-wide hidden sm:block">
            CyberGear
          </span>
          <span className="text-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-bold tracking-wide sm:hidden">
            CG
          </span>
        </Link>

        {/* 🖥️ Desktop menu */}
        <div className="flex items-center gap-6 flex-shrink-0">
          {/* Desktop Links */}
          <div className="hidden sm:flex gap-6 font-bold text-lg bg-white/5 px-4 py-2 rounded-lg">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              🏠 Home
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              🛍️ Products
            </Link>
            <Link
              to="/cart"
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              🛒 Cart
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              ℹ️ About
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-cyan-400 hover:text-pink-400 transition"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Search Bar (absolute center, hidden on mobile) */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-full max-w-lg px-3 sm:px-6 pb-5">
          <SearchBar onSearchSubmit={handleLinkClick} />
        </div>
      </div>

      {/* Mobile Search Bar (underneath top row, hidden on desktop) */}
      <div className="lg:hidden mt-4 px-3">
        <SearchBar onSearchSubmit={handleLinkClick} />
      </div>

      {/* 📱 Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[143px] left-0 w-full flex flex-col mt-1 gap-4 font-bold text-lg bg-gray-800 p-4 rounded-b-lg shadow-xl sm:hidden">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-white hover:text-cyan-400 transition-colors duration-200"
          >
            🏠 Home
          </Link>
          <Link
            to="/products"
            onClick={handleLinkClick}
            className="text-white hover:text-cyan-400 transition-colors duration-200"
          >
            🛍️ Products
          </Link>
          <Link
            to="/cart"
            onClick={handleLinkClick}
            className="text-white hover:text-cyan-400 transition-colors duration-200"
          >
            🛒 Cart
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-white hover:text-cyan-400 transition-colors duration-200"
          >
            ℹ️ About
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
