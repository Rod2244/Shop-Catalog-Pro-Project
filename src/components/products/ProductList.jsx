// src/components/Products/ProductList.jsx
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="grid gap-4 
      grid-cols-1       /* mobile */
      sm:grid-cols-2    /* small screens */
      md:grid-cols-3    /* medium screens */
      lg:grid-cols-4    /* large screens */
      xl:grid-cols-5    /* extra-large screens */
    ">
      {products.length > 0 ? (
        products.map((item, i) => <ProductCard key={i} item={item} />)
      ) : (
        <p className="text-gray-500 col-span-full">
          No products found 😢
        </p>
      )}
    </div>
  );
}

export default ProductList;
