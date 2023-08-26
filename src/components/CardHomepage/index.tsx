import { CoffeeType } from "../../pages/Home";
import { ButtonAddOrRemoveCoffee } from "../ButtonAddOrRemoveCoffee";
import { GridCardsCoffeeHome, TagsCardsCoffeeHome, CoffeeSale } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";

type CoffeeCardHomeType = {
  coffees: CoffeeType;
};
export function CardCoffeesHome({ coffees }: CoffeeCardHomeType) {
  const { coffee_name, coffee_image, type, coffee_description, coffee_value } =
    coffees;
  return (
    <GridCardsCoffeeHome>
      <img src={coffee_image} />
      <TagsCardsCoffeeHome>
        {type.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </TagsCardsCoffeeHome>
      <h3>{coffee_name}</h3>
      <p>{coffee_description}</p>
      <CoffeeSale>
        <p>
          <span>
            {coffee_value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <div>
          <ButtonAddOrRemoveCoffee />
          <button>
            <ShoppingCart size={20} />
          </button>
        </div>
      </CoffeeSale>
    </GridCardsCoffeeHome>
  );
}
