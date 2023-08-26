import {
  CartList,
  CoffessSelectedContainer,
  PriceContainer,
  PriceTag,
} from "./styles";
import { ListCoffees } from "../../../../coffee/index";
import { HalfCoffeeCard } from "../../../../components/HalfCoffeeCard";

export function CoffeesSelected() {
  return (
    <CoffessSelectedContainer>
      <h3>Cafés selecionados</h3>
      <CartList>
        {ListCoffees.map((coffee) => (
          <HalfCoffeeCard key={coffee.id} coffee={coffee} />
        ))}
        <PriceContainer>
          <PriceTag>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </PriceTag>
          <PriceTag>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </PriceTag>
          <PriceTag>
            <p>Total</p>
            <span>R$ 33,20</span>
          </PriceTag>
        </PriceContainer>
        <button>Confirmar Pedido</button>
      </CartList>
    </CoffessSelectedContainer>
  );
}
