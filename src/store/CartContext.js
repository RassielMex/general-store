import React, { createContext, useState } from "react";
("use client");
export const CartProvider = createContext({});

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (comic) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === comic.id);

    if (isItemInCart) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === comic.id) {
          const itemUpdated = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
          return itemUpdated;
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      const itemCart = { ...comic, quantity: 1 };
      setCart([...cart, itemCart]);
    }
  };

  const removeQtyFromCart = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const itemUpdated = {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
          return itemUpdated;
        }
        return cartItem;
      });
      setCart(updatedCart);
    }

    return cart;
  };

  const removeFromCart = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      const updatedCart = cart.filter((cartItem) => {
        return cartItem.id !== item.id;
      });
      setCart(updatedCart);
    }
  };

  const getTotalItems = () => {
    if (cart.length <= 0) {
      return 0;
    }
    let quantities = cart.map((cartItem) => {
      return cartItem.quantity;
    });
    let total = quantities.reduce((prev, curr) => {
      return prev + curr;
    });
    return total;
  };

  const getTotalPrice = () => {
    if (cart.length <= 0) {
      return 0;
    }
    let subtotals = cart.map((cartItem) => {
      return cartItem.price * cartItem.quantity;
    });
    let totalPrice = subtotals.reduce((prev, curr) => {
      return prev + curr;
    });
    return totalPrice;
  };

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartProvider.Provider
      value={{
        cart,
        addToCart,
        removeQtyFromCart,
        removeFromCart,
        getTotalItems,
        getTotalPrice,
        cleanCart,
      }}
    >
      {children}
    </CartProvider.Provider>
  );
};

export default CartContext;
