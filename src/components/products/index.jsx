import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";

function Products({ gridColumns = 4 }) {
  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    fetch("/ProductStorage/ProductsStorage.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));

      fetch("/Categories/Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const query = params.get("q")?.toLowerCase() || "";
  const selectedCategory = params.get("cat") || "All";
  const minPrice = parseFloat(params.get("min")) || 0;
  const maxPrice = parseFloat(params.get("max")) || Infinity;
  const sortOption = params.get("sort") || "";

  // Filtering
  const filtered = products.filter((item) => {
    const matchesQuery =
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
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
    <div className="pt-25 pb-20 px-4 min-h-screen bg-[#0b1220]">
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

      {/* Show loading state */}
      {products.length === 0 ? (
        <p className="text-gray-400 text-center">Loading products...</p>
      ) : (
        <ProductList products={sorted} gridColumns={gridColumns} />
      )}
    </div>
  );
}

export default Products;
