// src/components/Products/index.jsx
import { useSearchParams } from "react-router-dom";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";

function Products({ gridColumns = 4 }) {
  const [params, setParams] = useSearchParams();
  const query = params.get("q")?.toLowerCase() || "";
  const selectedCategory = params.get("cat") || "All";
  const minPrice = parseFloat(params.get("min")) || 0;
  const maxPrice = parseFloat(params.get("max")) || Infinity;
  const sortOption = params.get("sort") || "";

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
    { name: "Iphone 16 pro max", category: "Mobile Devices", price: 1199.00, rating: "4 star"},
    { name: "PS5", category: "Home Console", price: 549.99, rating: "5 star"},
    { name: "Nintendo Switch", category: "Handheld Console", price: 399.99, rating: "4 star"},
    { name: "Pokemon Scarlet", category: "Console Games", price: 59.99, rating: "3.5 star"},
    { name: "The Last of Us", category: "Console Games", price: 17.16, rating: "2 star"},
  ];
  
  const categories = [
    "All",
    "Computers",
    "Accessories",
    "Audio",
    "Storage",
    "Mobile Devices",
    "Home Console",
    "Handheld Console",
    "Console Games",
  ];

  // Filtering
  const filtered = products.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query);
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    return matchesQuery && matchesCategory && matchesPrice;
  });

  // Sorting
  const sorted = [...filtered];
  switch (sortOption) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating-asc":
      sorted.sort((a, b) => a.rating - b.rating);
      break;
    case "rating-desc":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">🛍️ Products</h2>

      {query && (
        <p className="mb-2 text-white">
          Search results for: <strong>{query}</strong>
        </p>
      )}

      <ProductFilters
        params={params}
        setParams={setParams}
        categories={categories}
        selectedCategory={selectedCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortOption={sortOption}
      />

      <ProductList products={sorted} gridColumns={gridColumns} />
    </div>
  );
}

export default Products;
