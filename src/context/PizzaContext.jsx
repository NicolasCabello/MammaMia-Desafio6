import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const consultarPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    };

    const consultarPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    };

    consultarPizzas();
    consultarPizza();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, pizza }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
