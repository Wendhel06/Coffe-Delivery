import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonAddOrRemoveCoffeeContainer } from "./styles";
import { useContext } from "react";
import { CoffeeContext } from "../../providers/CoffeeProvider";

export function ButtonAddOrRemoveCoffee() {
  const { addOne, amountCoffee } = useContext(CoffeeContext);
  return (
    <ButtonAddOrRemoveCoffeeContainer>
      <button>
        <Minus />
      </button>
      <span>{amountCoffee}</span>
      <button onClick={addOne}>
        <Plus />
      </button>
    </ButtonAddOrRemoveCoffeeContainer>
  );
}
