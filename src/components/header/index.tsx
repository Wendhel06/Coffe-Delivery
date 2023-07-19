import { HeaderContainer } from "./styles";
import logoSite from "../../assets/Logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoSite} alt="logotipo-do-site" />
      </a>
    </HeaderContainer>
  );
}
