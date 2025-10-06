// src/components/Products/ProductCard.jsx
function ProductCard({ item }) {
  return (
    <div className="bg-white border border-gray-300 p-4 text-center rounded-lg shadow-sm hover:shadow-md transition">
      <p className="font-semibold">{item.name}</p>
      <p className="text-sm text-gray-500">{item.category}</p>
      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      <p className="text-sm text-yellow-500">{item.rating}</p>
    </div>
  );
}

export default ProductCard;
