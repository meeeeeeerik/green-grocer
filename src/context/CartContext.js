import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    const isInCart = cartItems.some((cartItem) => {
      return product.id === cartItem.id;
    }); // Есть ли в корзине хоть один товар с таким id?

    if (isInCart) {
      setCartItems(
        // ДА, есть
        cartItems.map((cartItem) => {
          if (cartItem.id === product.id) {
            // Товар, на котором я сейчас стою, — тот, что добавляют?
            return { ...cartItem, qty: cartItem.qty + qty }; // ответ ДА → копия с новым количеством
          }
          return cartItem; // ответ НЕТ → товар без изменений
        })
      );
    } else {
      // НЕТ. Его в корзине нет, поэтому мы его туда кладем
      setCartItems([...cartItems, { ...product, qty }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((cartItem) => productId !== cartItem.id));
  };

  const updateQty = (productId, newQty) => {
    if (newQty > 0) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === productId) {
            return { ...cartItem, qty: newQty };
          }
          return cartItem;
        })
      );
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
