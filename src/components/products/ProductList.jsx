// src/components/Products/ProductList.jsx
import ProductCard from "./ProductCard";

function ProductList({ products, gridColumns }) {
  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gap: "10px",
  };

  return (
    <div style={style}>
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
