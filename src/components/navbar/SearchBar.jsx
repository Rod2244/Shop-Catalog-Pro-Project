import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuggestionList from "./SuggestionList";

function SearchBar({ isMobileCompact = false, onSearchSubmit }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/ProductStorage/ProductsStorage.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.map((item) => item.name)));

    fetch("/Categories/Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?q=${encodeURIComponent(query)}`);
      setQuery("");
      setSuggestions([]);
      if (onSearchSubmit) onSearchSubmit(); // Close menu if provided
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) return setSuggestions([]);

    const all = [...products, ...categories];
    setSuggestions(
      all
        .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5)
    );
  };

  const handleSelect = (value) => {
    setQuery(value);
    navigate(`/products?q=${encodeURIComponent(value)}`);
    setSuggestions([]);
    if (onSearchSubmit) onSearchSubmit(); // Close menu if provided
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
  };

  // Compact mode for mobile (simple button)
  if (isMobileCompact) {
    return (
      <button
        onClick={() => {
          navigate("/products"); // Navigate to products (or adjust to open full search)
          if (onSearchSubmit) onSearchSubmit(); // Close mobile menu
        }}
        className="w-full flex items-center justify-center p-2 bg-gray-800 border border-gray-600 rounded-lg text-white hover:bg-gray-700 transition"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold mr-2">
          🔍
        </span>
        Search
      </button>
    );
  }

  // Full mode for desktop (original logic)
  return (
    <div className="relative flex flex-col mt-5 w-full sm:w-80"> {/* Removed hidden sm:flex; responsive width */}
      <form
        onSubmit={handleSearch}
        className="flex bg-gray-800 rounded-lg px-3 py-1 sm:py-2 items-center"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="bg-transparent text-white w-full outline-none placeholder-gray-400"
        />

        {/* ❌ Clear button (only shows when focused and query not empty) */}
        {isFocused && query && (
          <button
            type="button"
            onClick={handleClear}
            className="text-gray-400 hover:text-white px-1 transition"
          >
            ✖
          </button>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold ml-2"
        >
          🔍
        </button>
      </form>

      <SuggestionList
        suggestions={suggestions}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default SearchBar;
