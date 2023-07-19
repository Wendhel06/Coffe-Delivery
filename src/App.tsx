import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Tudo funcionando</h1>
      <p>Subtitulo</p>
      <GlobalStyle />
    </ThemeProvider>
  );
}
