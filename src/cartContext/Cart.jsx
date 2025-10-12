import { useContext, useMemo, useState } from "react";
import { CartContext } from "../cartContext/CartContext";

function Cart({ discountCodes = [] }) {
  const { cart, removeSelectedFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const [selectedItems, setSelectedItems] = useState([]);
  const [appliedCode, setAppliedCode] = useState("");

  // Total calculation
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  // Calculate discount based on selected code
  const discount = (() => {
    if (appliedCode === "SAVE10") return total * 0.1;
    if (appliedCode === "SAVE20") return total * 0.2;
    if (appliedCode === "HALFOFF") return total * 0.5;
    return 0;
  })();

  const totalAfterDiscount = total - discount;

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    removeSelectedFromCart(selectedItems);
    setSelectedItems([]);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-4 sm:p-8 flex flex-col">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        🛒 Your Cart {cart.length > 0 && `(${cart.length})`}
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-center text-lg mt-10">
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* Product List */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gray-800 rounded-2xl shadow-md"
              >
                {/* Image + Checkbox */}
                <div className="relative w-full sm:w-32 h-32 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="absolute top-2 left-2 w-6 h-6 accent-red-500 cursor-pointer z-10"
                  />
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  )}
                </div>

                {/* Info + Quantity */}
                <div className="flex-1 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-lg sm:text-xl truncate">{item.name}</p>
                    <p className="text-gray-400 text-base sm:text-lg">
                      ${item.price.toFixed(2)} × {item.quantity} ={" "}
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                      className={`px-3 py-2 sm:px-3 sm:py-1 rounded-lg text-lg sm:text-base ${
                        item.quantity === 1
                          ? "bg-gray-600 opacity-50 cursor-not-allowed"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      ➖
                    </button>
                    <span className="text-lg sm:text-base font-bold w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-2 sm:px-3 sm:py-1 rounded-lg text-lg sm:text-base bg-gray-700 hover:bg-gray-600"
                    >
                      ➕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delete Selected & Totals */}
          <div className="mt-6 space-y-4 text-center">
            {selectedItems.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                🗑️ Delete Selected ({selectedItems.length})
              </button>
            )}

            {/* Discount Selector */}
            <div className="my-4 flex flex-col sm:flex-row items-center justify-center gap-2">
              <label className="mr-2">Apply Discount:</label>
              <select
                value={appliedCode}
                onChange={(e) => setAppliedCode(e.target.value)}
                className="bg-gray-800 text-white px-3 py-2 rounded w-full sm:w-auto"
              >
                <option value="">No Discount</option>
                {discountCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>

            {appliedCode && (
              <p className="text-green-400">
                Discount Code Applied: <strong>{appliedCode}</strong>
              </p>
            )}
            <p className="text-gray-300">
              Total before discount: <strong>${total.toFixed(2)}</strong>
            </p>
            <p className="text-gray-300">
              Discount: <strong>-${discount.toFixed(2)}</strong>
            </p>
            <p className="text-2xl sm:text-3xl font-bold">
              Total after discount: ${totalAfterDiscount.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
