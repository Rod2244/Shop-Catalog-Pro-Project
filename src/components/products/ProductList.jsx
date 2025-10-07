import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div
      className="grid gap-4 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {products.length > 0 ? (
        products.map((item, i) => <ProductCard key={i} item={item} />)
      ) : (
        <p className="text-gray-500 col-span-full text-center">No products found 😢</p>
      )}
    </div>
  );
}

export default ProductList;
