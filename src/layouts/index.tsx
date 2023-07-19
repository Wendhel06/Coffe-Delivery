import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { LayoutTheme } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutTheme>
      <Header />
      <Outlet />
    </LayoutTheme>
  );
}
