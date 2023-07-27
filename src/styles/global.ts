import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: ${({theme}) => theme.fonts.family.primary};
  background-color: ${({theme}) => theme.colors['backround']};
}

h1,h2,h3,h4,h5 {
  line-height: 130%;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  color: ${({theme}) => theme.colors['base-title']};
}

h1 {
  font-size: ${({theme}) => theme.sizes['Title-XL']};
}

h2 {
  font-size: ${({theme}) => theme.sizes['Title L']}
}

h3 {
  font-size: ${({theme}) => theme.sizes['Title M']}
}

h4 {
  font-size: ${({theme}) => theme.sizes['Title S']}
}

h5 {
  font-size: ${({theme}) => theme.sizes['Title XS']}
}

p {
  font-weight: 400;
  line-height: 130%;
  color: ${({theme}) => theme.colors['base-text']};
}

a {
  cursor: pointer;
}
`