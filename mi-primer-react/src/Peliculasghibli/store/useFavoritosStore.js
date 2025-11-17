import { create } from "zustand";
import { persist } from "zustand/middleware";

// Store global con persistencia en localStorage para los favoritos
export const useFavoritosStore = create(
  persist(
    (set) => ({
      favoritos: [],

      agregarFavorito: (film) =>
        set((state) => ({
          favoritos: [...state.favoritos, film], // añadir la peli
        })),

      eliminarFavorito: (id) =>
        set((state) => ({
          favoritos: state.favoritos.filter((f) => f.id !== id), // eliminar la peli con find
        })),
    }),
    { name: "favoritos-storage" } // El nombre de la clave en localStorage
  )
);
