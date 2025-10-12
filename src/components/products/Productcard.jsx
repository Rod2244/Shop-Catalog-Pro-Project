import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="bg-white border border-gray-300 p-4 text-center rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full">
        {/* Image container */}
        <div className="w-full h-48 flex items-center justify-center mb-4 bg-white-100 rounded-md overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <p className="font-semibold min-h-[48px] flex items-center justify-center">
            {item.name}
          </p>
          <p className="text-sm text-gray-500">{item.category}</p>
          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
          <p className="text-sm text-yellow-500">{item.rating} Star</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
