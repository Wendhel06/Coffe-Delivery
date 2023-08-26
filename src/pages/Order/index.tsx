import { CoffeesSelected } from "./components/CoffeesSelected";
import { CompleteOrder } from "./components/CompleteOrder";
import { OrderContainer } from "./styles";

export function Order() {
  return (
    <OrderContainer>
      <CompleteOrder />
      <CoffeesSelected />
    </OrderContainer>
  );
}
