import { v4 as uuidv4 } from "uuid";

import tradicional from "../assets/expresso-tradicional.png";
import americano from "../assets/expresso-americano.png";
import cremoso from "../assets/expresso-cremoso.png";
import gelado from "../assets/expresso-gelado.png";
import cafe_com_leite from "../assets/café-com-leite.png";
import late from "../assets/Latte.png";
import capuccino from "../assets/Capuccino.png";
import macchiato from "../assets/Macchiato.png";
import mocaccino from "../assets/Mocaccino.png";
import chocolate_quente from "../assets/Chocolate-quente.png";
import cubano from "../assets/Cubano.png";
import havaiano from "../assets/Havaiano.png";
import arabe from "../assets/árabe.png";
import irlandes from "../assets/árabe.png";

export const ListCoffees = [
  {
    id: uuidv4(),
    coffee_name: "Expresso Tradicional",
    coffee_image: tradicional,
    type: ["Tradicional"],
    coffee_description:
      "O tradicional café feito com água quente e grãos moídos",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Expresso Americano",
    coffee_image: americano,
    type: ["Tradicional"],
    coffee_description: "Expresso diluído, menos intenso que o tradicional",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Expresso Cremoso",
    coffee_image: cremoso,
    type: ["Tradicional"],
    coffee_description: "Café expresso tradicional com espuma cremosa",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Expresso Gelado",
    coffee_image: gelado,
    type: ["Tradicional", "Gelado"],
    coffee_description: "Bebida preparada com café expresso e cubos de gelo",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Café com Leite",
    coffee_image: cafe_com_leite,
    type: ["Tradicional", "Com leite"],
    coffee_description:
      "Meio a meio de expresso tradicional com leite vaporizado",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Late",
    coffee_image: late,
    type: ["Tradicional", "Com leite"],
    coffee_description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Capuccino",
    coffee_image: capuccino,
    type: ["Tradicional", "Com leite"],
    coffee_description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Macchiato",
    coffee_image: macchiato,
    type: ["Tradicional", "Com leite"],
    coffee_description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Mocaccino",
    coffee_image: mocaccino,
    type: ["Tradicional", "Com leite"],
    coffee_description:
      "Café expresso com calda de chocolate, pouco leite e espuma",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Chocolate Quente",
    coffee_image: chocolate_quente,
    type: ["Tradicional", "Com leite"],
    coffee_description:
      "Bebida feita com chocolate dissolvido no leite quente e café",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Cubano",
    coffee_image: cubano,
    type: ["Tradicional", "Alcoólico", "Gelado"],
    coffee_description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Havaiano",
    coffee_image: havaiano,
    type: ["Especial"],
    coffee_description: "Bebida adocicada preparada com café e leite de coco",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Árabe",
    coffee_image: arabe,
    type: ["Especial"],
    coffee_description:
      "Bebida preparada com grãos de café árabe e especiarias",
    coffee_value: 9.9,
  },
  {
    id: uuidv4(),
    coffee_name: "Irlândes",
    coffee_image: irlandes,
    type: ["Especial", "Alcoólico"],
    coffee_description:
      "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    coffee_value: 9.9,
  },
];
