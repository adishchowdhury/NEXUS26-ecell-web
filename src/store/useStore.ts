import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface AppState {
  cart: CartItem[];
  cartOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  setCartOpen: (open: boolean) => void;
  cartTotal: () => number;
  clearCart: () => void;
  hasPass: boolean;
  setHasPass: (val: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
  cart: [],
  cartOpen: false,
  hasPass: false,
  setHasPass: (val) => set({ hasPass: val }),
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
          cartOpen: true,
        };
      }
      return { cart: [...state.cart, item], cartOpen: true };
    }),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),
  setCartOpen: (open) => set({ cartOpen: open }),
  cartTotal: () => {
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  clearCart: () => set({ cart: [] }),
}));

