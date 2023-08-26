import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonAddOrRemoveCoffeeContainer } from "./styles";

export function ButtonAddOrRemoveCoffee() {
  return (
    <ButtonAddOrRemoveCoffeeContainer>
      <button>
        <Minus />
      </button>
      <span>2</span>
      <button>
        <Plus />
      </button>
    </ButtonAddOrRemoveCoffeeContainer>
  );
}
