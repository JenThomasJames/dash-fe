import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
    setTotal((currentTotal) => {
      return currentTotal + item.price * item.quantity * 81;
    });
  }

  function updateQuantity(item, quantity) {
    const cart = cartItems;
    const index = cart.findIndex((product) => product.id === item.id);
    cart[index].quantity += quantity;
    if (cart[index].quantity < 1) removeFromCart(item.id);
    setTotal((currentTotal) => {
      return currentTotal + item.price * quantity * 81;
    });

    setCartItems(cart);
  }

  function removeFromCart(itemId) {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
