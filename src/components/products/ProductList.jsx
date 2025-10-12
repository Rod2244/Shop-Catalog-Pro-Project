import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

function ProductList({ products, gridColumns }) {
  const gridClasses = `
    grid gap-4
    grid-cols-${gridColumns.base || 1}
    sm:grid-cols-${gridColumns.sm || 2}
    md:grid-cols-${gridColumns.md || 3}
    lg:grid-cols-${gridColumns.lg || 4}
    xl:grid-cols-${gridColumns.xl || 5}
    2xl:grid-cols-${gridColumns["2xl"]}
  `;

  return (
    <div className={gridClasses}>
      {products.length > 0 ? (
        products.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:shadow-indigo-300/40 rounded-2xl transition-shadow"
          >
            <ProductCard item={item} />
          </motion.div>
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center">
          No products found 😢
        </p>
      )}
    </div>
  );
}

export default ProductList;

