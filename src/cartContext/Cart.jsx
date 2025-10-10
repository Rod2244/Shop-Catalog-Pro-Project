import { useContext, useMemo } from "react";
import { CartContext } from "../cartContext/CartContext";
import { motion } from "framer-motion";
import Control from "../reusable-components/Control"

function Cart({ discountCode }) {
  const { cart, removeFromCart } = useContext(CartContext);

  // 🧮 Calculate totals
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  // 🎁 Example: Apply 10% off if code is "SAVE10"
  const discount = discountCode === "SAVE10" ? total * 0.1 : 0;
  const totalAfterDiscount = total - discount;

  return (
    <motion.div
      className="
        fixed top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-full max-w-lg
        bg-gray-800/90 backdrop-blur-lg
        border border-gray-700
        rounded-2xl shadow-2xl
        text-white p-8
        z-1
      "
      initial={{ scale: 0.5, opacity: 0, y: -50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-700 mb-6 max-h-80 overflow-y-auto pr-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-400">${item.price.toFixed(2)}</p>
                </div>
                <Control
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                  label = "Remove"
                />
                  
                
              </li>
            ))}
          </ul>

          {discountCode && (
            <p className="text-green-400 mb-4 text-center text-lg">
              Discount Code Applied: <strong>{discountCode}</strong>
            </p>
          )}

          <div className="text-center space-y-1">
            <p className="text-gray-300 text-lg">
              Total before discount:{" "}
              <strong>${total.toFixed(2)}</strong>
            </p>
            <p className="text-gray-300 text-lg">
              Discount:{" "}
              <strong>-${discount.toFixed(2)}</strong>
            </p>
            <p className="text-2xl font-bold mt-3">
              Total after discount: ${totalAfterDiscount.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Cart;
