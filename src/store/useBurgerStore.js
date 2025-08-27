import { create } from "zustand";

export const useBurgerStore = create((set, get) => ({
  burgers: [],

  addToBurger: (item) => {
    const existingBurger = get().burgers.find((burger) => burger.id === item.id);

    if (existingBurger) {
      
      const updatedBurgers = get().burgers.map((burger) =>
        burger.id === item.id ? { ...burger, count: burger.count + 1 } : burger
      );
      set({ burgers: updatedBurgers });
    } else {

      const newBurger = {
        id: item.id,
        desc: item.desc,
        weight: item.weight,
        img: item.img,
        price: item.price,
        count: 1,
      };
      set({ burgers: [...get().burgers, newBurger] });
    }
  },
  removeFromBurger: (id) => {
    set({
      burgers: get().burgers.filter((item) => item.id !== id),
    });
  },
  clearBurger: () => {
    set({
      burgers: [],
    });
  },
  totalPrice: () => {
    return get().burgers.reduce((acc, item) => acc + item.price * item.count, 0);
  },
  plusCount: (id) => {
    const { burgers } = get();
    burgers.find((item) => item.id === id).count += 1;
    set({ burgers });
  },
  minusCount: (id) => {
    const { burgers } = get();
    burgers.find((item) => item.id === id).count -= 1;
    set({ burgers: burgers.filter((item) => item.count > 0) });
  },
}));
  