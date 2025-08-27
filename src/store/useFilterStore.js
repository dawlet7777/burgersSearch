
import { create } from 'zustand'

import burgerIcon from "../assets/icons/burger-icon.svg"
import burritoIcon from "../assets/icons/burrito-icon.svg"
import doughnutIcon from "../assets/icons/doughnut-icon.svg"
import hotdogIcon from "../assets/icons/hotdog-icon.svg"
import noodlesIcon from "../assets/icons/noodles-icon.svg"
import pizzaIcon from "../assets/icons/pizza-icon.svg"

const list = [
  { id: 0, name: "Все"},
  { id: 1, name: "Бургеры", src: burgerIcon },
  { id: 2, name: "Закуски", src: burritoIcon },
  { id: 3, name: "Напитки", src: doughnutIcon },
  { id: 4, name: "Десерты", src: hotdogIcon },
  { id: 5, name: "Пицца", src: noodlesIcon },
  { id: 6, name: "Сеты", src: pizzaIcon },
]

export const useFilterStore = create((set) => ({
    items: list,
    activeFilterId: 1,              
    setFilterId: (id) => set({activeFilterId: id}),
}))