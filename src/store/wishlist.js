import { create } from 'zustand';

export const useWishlistStore = create((set, get) => ({
  wishlist: [],
  addToWishlist: (product) => {
    const exists = get().wishlist.find((item) => item._id === product._id);
    if (exists) return { added: false };
    set((state) => ({
      wishlist: [...state.wishlist, product]
    }));
    return { added: true };
  },
  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item._id !== id),
    })),
  clearWishlist: () => set({ wishlist: [] }),
}));
