import {
  ContainerTextHomeIntro,
  InfoCoffeeHome,
  ListCoffeeHomepage,
  MainContainerHome,
  SectionHomeIntro,
} from "./style";
import ImgCoffeeHome from "../../assets/imagem-coffee.png";
import { Coffee, Cube, ShoppingCart, Timer } from "@phosphor-icons/react";
import { ListCoffees } from "../../coffee";
import { CardCoffeesHome } from "../../components/CardHomepage";

export interface CoffeeType {
  id: string;
  coffee_name: string;
  coffee_image: string;
  type: string[];
  coffee_description: string;
  coffee_value: number;
}

export function Home() {
  return (
    <MainContainerHome>
      <SectionHomeIntro>
        <ContainerTextHomeIntro>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <InfoCoffeeHome>
            <div>
              <ShoppingCart size={35} />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <Cube size={35} />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <Timer size={35} />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <Coffee size={35} />
              <p>O café chega fresquinho até você</p>
            </div>
          </InfoCoffeeHome>
        </ContainerTextHomeIntro>
        <img src={ImgCoffeeHome} />
      </SectionHomeIntro>
      <ListCoffeeHomepage>
        <h3>Nossos cafés</h3>
        <div>
          {ListCoffees.map((coffees) => (
            <CardCoffeesHome coffees={coffees} key={coffees.id} />
          ))}
        </div>
      </ListCoffeeHomepage>
    </MainContainerHome>
  );
}
