import { CoffeeType } from "../../pages/Home";
import { ButtonAddOrRemoveCoffee } from "../ButtonAddOrRemoveCoffee";
import { ButtonRemoveCoffee } from "../ButtonRemoveCoffee";
import { HalfCoffeeCardContainer } from "./styles";

interface HalfCoffeeCardType {
  coffee: CoffeeType;
}

export function HalfCoffeeCard({ coffee }: HalfCoffeeCardType) {
  const { coffee_image, coffee_name } = coffee;
  return (
    <HalfCoffeeCardContainer>
      <div>
        <img src={coffee_image} />
        <div>
          <p>{coffee_name}</p>
          <div>
            <ButtonAddOrRemoveCoffee />
            <ButtonRemoveCoffee />
          </div>
        </div>
      </div>
      <span>R$ 9,90</span>
    </HalfCoffeeCardContainer>
  );
}
