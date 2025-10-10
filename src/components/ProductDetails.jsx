import { useParams, Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/ProductStorage/ProductsStorage.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === id);
        setProduct(found);
      })
      .catch((err) => console.error("Failed to load product:", err));
  }, [id]);

  if (!product)
    return <p className="text-gray-400 text-center mt-20">Loading...</p>;

  return (
    <div className="pt-50 text-white px-6 py-10">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-800 p-8 rounded-2xl shadow-lg relative">
        {/* Back Button at top-left of card */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-indigo-400 hover:text-indigo-200 flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 shadow-md"
          title="Go Back"
        >
          <ArrowLeft size={24} color="Black" strokeWidth={2} />
          {/* You can also use other props or simply render it without any props */}
          
        </button>

        {/* Left: Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        />

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
            <p className="text-indigo-300 mb-2">{product.category}</p>
            <p className="text-xl font-semibold mb-2">${product.price}</p>
            <p className="text-yellow-400 mb-4">⭐ {product.rating} Star</p>
            <p className="text-gray-300 mb-6">{product.description}</p>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-xl font-semibold"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>

      {/* Tabs for Nested Routes */}
      <div className="max-w-4xl mx-auto mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div className="flex gap-6 border-b border-gray-600 pb-2">
          <Link to="overview" className="hover:text-indigo-400">
            Overview
          </Link>
          <Link to="specs" className="hover:text-indigo-400">
            Specs
          </Link>
        </div>

        {/* Nested route content */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
