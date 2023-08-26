import styled from 'styled-components'

export const HalfCoffeeCardContainer = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 2rem;
 padding-bottom: 2rem;
 border-bottom: 1px solid #E6E5E5;
 
 & > div {
  display:flex;
 }

 & > p {
  color: ${({theme}) => theme.colors['base-subtitle']};
  font-size: ${({theme}) => theme.sizes['Text M']};
 }

 & > div > img {
   width: 64px;
   height: 64px;
   margin-right: 20px;
 }

 & > div > div > div {
  display:flex;
  gap: 8px;
  margin-top: 8px;
 }

 & > span {
  font-weight: 700;
  font-size: ${({theme}) => theme.sizes['Text M']};
 }
`