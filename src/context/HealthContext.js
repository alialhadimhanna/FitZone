import { createContext, useState, useEffect } from "react";

export const HealthContext = createContext(null);

export function HealthProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
document.title = "HealthTrack - Cart (" + cart.length + ")";
}, [cart]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => {
    setCart((previousCart) =>
      previousCart.filter((product, i) => i !== index)
    );
  };

  return (
    <HealthContext.Provider value={{ cart, addToCart , removeFromCart}}>
      {children}
    </HealthContext.Provider>
  );
}