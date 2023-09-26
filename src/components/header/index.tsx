import logoSite from "../../assets/Logo.png";
import { MapPinLine } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { CartButton } from "../CartButton";

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
        <NavLink to="/checkout">
          <CartButton />
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
