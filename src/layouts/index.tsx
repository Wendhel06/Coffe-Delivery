import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { LayoutTheme } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutTheme>
      <Header />
      <Outlet />
    </LayoutTheme>
  );
}
