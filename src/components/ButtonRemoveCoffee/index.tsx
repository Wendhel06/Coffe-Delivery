import { Trash } from "@phosphor-icons/react";
import { ButtonRemoveCoffeeContainer } from "./styles";

export function ButtonRemoveCoffee() {
  return (
    <ButtonRemoveCoffeeContainer>
      <Trash size={16} />
      <p>Remover</p>
    </ButtonRemoveCoffeeContainer>
  );
}
