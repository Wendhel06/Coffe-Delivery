import { ShoppingCart } from "@phosphor-icons/react";
import { CartButtonContainer } from "./styles";

export function CartButton() {
  return (
    <CartButtonContainer>
      <ShoppingCart size={19} />
      <span>1</span>
    </CartButtonContainer>
  );
}
