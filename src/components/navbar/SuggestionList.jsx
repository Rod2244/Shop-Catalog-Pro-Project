// SuggestionList.jsx
import React from "react";

function SuggestionList({ suggestions, onSelect }) {
  if (suggestions.length === 0) return null;

  return (
    <ul className="absolute top-full mt-1 w-full bg-gray-800 rounded-lg shadow-lg max-h-60 overflow-auto z-50">
      {suggestions.map((item, idx) => (
        <li
          key={idx}
          onClick={() => onSelect(item)}
          className="px-3 py-2 hover:bg-gray-700 cursor-pointer text-white"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionList;
