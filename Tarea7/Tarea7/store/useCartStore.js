import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cart: [],

  // acciones para modificar el carrito
  addToCart: (product) =>
    set((state) => ({
      cart: [
        ...state.cart,
        { cartItemId: Date.now().toString(), ...product },
      ],
    })),

  removeFromCart: (cartItemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
    })),

  clearCart: () => set({ cart: [] }),

  // funciones para persistencia local
  loadCart: () => {
    if (typeof window !== 'undefined') {
      const storedCart = window.localStorage.getItem('cart-storage');
      if (storedCart) {
        set({ cart: JSON.parse(storedCart) });
      }
    }
  },

  saveCart: () => {
    if (typeof window !== 'undefined') {
      const cart = get().cart;
      window.localStorage.setItem('cart-storage', JSON.stringify(cart));
    }
  },
}));

