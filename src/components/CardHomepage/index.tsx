import { CoffeeType } from "../../pages/Home";
import { GridCardsCoffeeHome, TagsCardsCoffeeHome } from "./styles";

type CoffeeCardHomeType = {
  coffees: CoffeeType;
};
export function CardCoffeesHome({ coffees }: CoffeeCardHomeType) {
  // const { id, coffee_name, coffee_image, type, coffee_description, coffee_value} = coffees;
  const {
    id,
    coffee_name,
    coffee_image,
    type,
    coffee_description,
    coffee_value,
  } = coffees;
  return (
    <GridCardsCoffeeHome>
      <img src={coffees.coffee_image} />
      <TagsCardsCoffeeHome>
        {type.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </TagsCardsCoffeeHome>
    </GridCardsCoffeeHome>
  );
}
