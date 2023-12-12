// store.js
import {create} from 'zustand';

const useStore = create((set) => ({
  cart: [], // Array to store the food items in the cart
  totalItems: 0,
  totalPrice: 0,

  // Function to add a food item to the cart
  addToCart: (item) => {
    set((state) => ({
      cart: [...state.cart, item],
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + item.price,
    }));
  },

  // Function to remove a food item from the cart
  removeFromCart: (itemId) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== itemId);
      const removedItem = state.cart.find((item) => item.id === itemId);
      return {
        cart: updatedCart,
        totalItems: state.totalItems - (removedItem ? 1 : 0),
        totalPrice: state.totalPrice - (removedItem ? removedItem.price : 0),
      };
    });
  },
}));

export default useStore;
