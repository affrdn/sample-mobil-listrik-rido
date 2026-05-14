"use client";

import { create } from "zustand";
import cars from "@/data/cars.json";

export const useCarStore = create((set, get) => ({
  cars,
  selectedCar: null,
  selectedVariant: null,
  compareCars: [],
  compareVariants: [],
  wishlist: [],
  selectCar: (car) =>
    set({
      selectedCar: car,
      selectedVariant: car?.variants?.[0] ?? null
    }),
  selectVariant: (variant) => set({ selectedVariant: variant }),
  toggleCompareVariant: (car, variant) => {
    const compareItem = {
      id: `${car.id}-${variant.name.toLowerCase().replaceAll(" ", "-")}`,
      carId: car.id,
      carName: car.name,
      category: car.category,
      ...variant
    };
    const exists = get().compareVariants.some((item) => item.id === compareItem.id);
    set({
      compareVariants: exists
        ? get().compareVariants.filter((item) => item.id !== compareItem.id)
        : [...get().compareVariants.slice(-3), compareItem]
    });
  },
  toggleCompare: (car) => {
    const defaultVariant = car?.variants?.[0];
    if (!defaultVariant) {
      return;
    }
    get().toggleCompareVariant(car, defaultVariant);
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
