"use client";

import { create } from "zustand";
import cars from "@/data/cars.json";

export const useCarStore = create((set, get) => ({
  cars,
  selectedCar: null,
  selectedVariant: null,
  compareCars: [],
  wishlist: [],
  selectCar: (car) =>
    set({
      selectedCar: car,
      selectedVariant: car?.variants?.[0] ?? null
    }),
  selectVariant: (variant) => set({ selectedVariant: variant }),
  toggleCompare: (car) => {
    const exists = get().compareCars.some((item) => item.id === car.id);
    set({
      compareCars: exists
        ? get().compareCars.filter((item) => item.id !== car.id)
        : [...get().compareCars.slice(-2), car]
    });
  },
  toggleWishlist: (car) => {
    const exists = get().wishlist.some((item) => item.id === car.id);
    set({
      wishlist: exists
        ? get().wishlist.filter((item) => item.id !== car.id)
        : [...get().wishlist, car]
    });
  }
}));
