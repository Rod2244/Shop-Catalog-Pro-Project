import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (location.pathname === "/cart") {
      const newUrl = new URL(window.location.href);
      if (cart.length > 0) {
        newUrl.searchParams.set("cart", cart.length);
      } else {
        newUrl.searchParams.delete("cart");
      }
      window.history.replaceState({}, "", newUrl);
    }
  }, [cart, location.pathname]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // 🗑️ Remove multiple selected products
  const removeSelectedFromCart = (ids) => {
    setCart((prevCart) => prevCart.filter((item) => !ids.includes(item.id)));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeSelectedFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
