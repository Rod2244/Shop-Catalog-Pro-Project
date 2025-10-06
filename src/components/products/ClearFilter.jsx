// src/reusable-components/ClearFilters.jsx
import { useSearchParams } from "react-router-dom";

function ClearFilters({ label = "Clear Filters", className = "" }) {
  const [, setParams] = useSearchParams();

  const handleClear = () => {
    // Remove query params from the URL
    window.history.replaceState(null, "", window.location.pathname);
    // Reset the params (React Router state)
    setParams(new URLSearchParams());
  };

  return (
    <button
      onClick={handleClear}
      className={`bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40 ${className}`}
    >
      {label}
    </button>
  );
}

export default ClearFilters;
