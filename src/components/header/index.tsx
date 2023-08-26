import logoSite from "../../assets/Logo.png";
import { MapPinLine, ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoSite} alt="logotipo-do-site" />
      </a>
      <div>
        <div>
          <MapPinLine />
          <p>Orlândia, SP</p>
        </div>
        <a>
          <ShoppingCart size={19} />
        </a>
      </div>
    </HeaderContainer>
  );
}
