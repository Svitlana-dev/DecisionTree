import { useState } from "react";

export default function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (err) {
      console.error("Помилка при читанні localStorage:", err);
      return initial;
    }
  });

  const set = (next) => {
    setState((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error("Помилка при записі в localStorage:", err);
      }
      return value;
    });
  };

  return [state, set];
}
