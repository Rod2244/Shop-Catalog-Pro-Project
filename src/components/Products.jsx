import { useSearchParams } from "react-router-dom";

function Products({ gridColumns }) {

  const [params, setParams] = useSearchParams();
  const query = params.get("q")?.toLowerCase() || "";
  const selectedCategory = params.get("cat") || "All";
  const minPrice = parseFloat(params.get("min")) || 0;
  const maxPrice = parseFloat(params.get("max")) || Infinity;
  const sortOption = params.get("sort") || "";

  if (!gridColumns || gridColumns < 1 || gridColumns > 12) {
    gridColumns = 4; 
  }
  
  const products = [
    { name: "Monitor", category: "Accessories",price: 199.99 , rating: "4 star" },
    { name: "System Unit", category: "Computers", price: 799.9, rating: "5 star" },
    { name: "Mouse", category: "Accessories", price: 29.99, rating: "4 star" },
    { name: "Headset", category: "Audio", price: 89.99, rating: "2 star" },
    { name: "Keyboard", category: "Accessories", price: 49.99, rating: "4 star" },
    { name: "Mouse Pad", category: "Accessories", price: 19.99, rating: "4 star" },
    { name: "Webcam", category: "Accessories", price: 59.99, rating: "3 star" },
    { name: "Speakers", category: "Audio", price: 79.99, rating: "4 star" },
    { name: "Microphone", category: "Audio", price: 99.9, rating: "4 star" },
    { name: "Cooling Pad", category: "Accessories", price: 39.99, rating: "1 star" },
    { name: "USB Hub", category: "Accessories", price: 24.99, rating: "4 star" },
    { name: "External HDD", category: "Storage", price: 129.99, rating: "4 star" },
  ];

  const categories = ["All", "Computers", "Accessories", "Audio", "Storage"];
  
  const filtered = products.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query);
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    return matchesQuery && matchesCategory && matchesPrice;
  });

  const sorted = [...filtered];
  switch (sortOption) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating-asc":
      sorted.sort((a, b) => parseInt(a.rating) - parseInt(b.rating));
      break;
    case "rating-desc":
      sorted.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
      break;
    default:
      break;
  }

  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gap: "10px",
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🛍️ Products</h2>

      
      {query && (
        <p className="mb-2">
          Search results for: <strong>{query}</strong>
        </p>
      )}

      
      <div className="mb-4">
        <label htmlFor="category" className="font-semibold mr-2">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => {
            const newCategory = e.target.value;
            const newParams = new URLSearchParams(params);
            newParams.set("cat", newCategory);
            window.history.replaceState(null, "", `?${newParams.toString()}`);
            window.location.reload(); 
          }}
          className="p-2 border border-black-300 rounded-md bg-white text-gray-800"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="font-semibold mr-2">
          Min Price:{" "}
          <input
            type="number"
            value={minPrice === 0 ? "" : minPrice}
            onChange={(e) => {
              const newParams = new URLSearchParams(params);
              newParams.set("min", e.target.value);
              setParams(newParams);
            }}
            className="p-2 border border-black-300 rounded-md w-24 mr-4"
          />
        </label>

        <label className="font-semibold mr-2">
          Max Price:{" "}
          <input
            type="number"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) => {
              const newParams = new URLSearchParams(params);
              newParams.set("max", e.target.value);
              setParams(newParams);
            }}
            className="p-2 border border-black-300 rounded-md w-24"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="font-semibold mr-2">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => {
            const newParams = new URLSearchParams(params);
            newParams.set("sort", e.target.value);
            setParams(newParams);
          }}
          className="p-2 border border-black-300 rounded-md bg-white text-gray-800"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating-asc">Rating: Low → High</option>
          <option value="rating-desc">Rating: High → Low</option>
        </select>
      </div>

      <div style={style}>
        {sorted.length > 0 ? (
          sorted.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 p-4 text-center rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
              <p className="text-sm text-yellow-500">{item.rating}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">
            No products found for "{query}" 😢
          </p>
        )}
      </div>
    </div>
  );
}

export default Products;
