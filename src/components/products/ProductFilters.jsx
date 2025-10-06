import ClearFilters from "./ClearFilter";

function ProductFilters({ params, setParams, categories, selectedCategory, minPrice, maxPrice, sortOption }) {
  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(params);
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    setParams(newParams);
  };

  return (
    <div className="mb-4 text-white flex flex-wrap items-center gap-4">
      {/* Category Filter */}
      <div>
        <label htmlFor="category" className="font-semibold mr-2">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => updateParam("cat", e.target.value)}
          className="p-2 border border-gray-300 rounded-md bg-white text-gray-800"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div>
        <label className="font-semibold mr-2">
          Min Price:
          <input
            type="number"
            value={minPrice === 0 ? "" : minPrice}
            onChange={(e) => updateParam("min", e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-22 mr-2 ml-2"
          />
        </label>

        <label className="font-semibold mr-2">
          Max Price:
          <input
            type="number"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) => updateParam("max", e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-22 ml-2"
          />
        </label>
      </div>

      {/* Sort Filter */}
      <div>
        <label className="font-semibold mr-2">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="p-2 border border-gray-300 rounded-md bg-white text-gray-800"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating-asc">Rating: Low → High</option>
          <option value="rating-desc">Rating: High → Low</option>
        </select>
      </div>
      <div>
        <ClearFilters />
      </div>
    </div>
  );
}

export default ProductFilters;
