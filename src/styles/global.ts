import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: ${({theme}) => theme.fonts.family.primary}
}

h1,h2,h3,h4,h5 {
  line-height: 130%;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  font-size: ${({theme}) => theme.sizes['Title-XL']};
}
`