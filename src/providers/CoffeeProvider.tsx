import { createContext, ReactNode, useState } from "react";

//Tipagem dos coffees
export interface CoffeeType {
  id: string;
  coffee_name: string;
  coffee_image: string;
  type: string[];
  coffee_description: string;
  coffee_value: number;
}

//Tipagem do Contexto CoffeeContext
interface OrdersContextProps {
  addOne: () => void;
  amountCoffee: number;
}

//Criação de contexto
export const CoffeeContext = createContext({} as OrdersContextProps);

//Tipagem do children do component CoffeeContextProvider
interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [amountCoffee, setAmountCoffe] = useState(0);

  function addOne() {
    if (amountCoffee < 9) {
      setAmountCoffe(amountCoffee + 1);
    }
  }

  return (
    <CoffeeContext.Provider value={{ addOne, amountCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}
