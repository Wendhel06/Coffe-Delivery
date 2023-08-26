import styled from 'styled-components'

export const CoffessSelectedContainer = styled.div`
 width: 42.1%;

 @media (max-width: 1032px) {
  width: 100%;
  max-width: 550px;
 }
 & > h3 {
  font-size: ${({theme}) => theme.sizes['Title XS']};
  margin-bottom: 1rem;
 }
`

export const CartList = styled.div`
 padding: 2.5rem;
 border-top-right-radius: 44px;
 border-top-left: 6px;
 border-bottom-left-radius: 44px;
 border-bottom-right-radius: 6px;
 background-color: ${({theme}) => theme.colors['base-card']};

 @media (max-width: 479px) {
    padding: 1.25rem;
 }

 & > button {
  width: 100%;
  margin-top: 24px;
  border: none;
  padding: 12px 8px;
  background-color: ${({theme}) => theme.colors['brand-yellow']};
  border-radius: 6px;
  color: var(--base-white, #FFF);
  font-size: ${({theme}) => theme.sizes['Text L']};
  font-family: ${({theme}) => theme.fonts.family.primary};
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.colors['brand-yellow']};
 }

 & > button:hover {
  background-color: transparent;
  color: ${({theme}) => theme.colors['brand-yellow']};
 }
`
export const PriceContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;

 & > div:last-child > p,
 & > div:last-child > span{
  color: ${({theme}) => theme.colors['base-subtitle']};
  font-size: ${({theme}) => theme.sizes['Text L']};
  font-weight: 700;
 }
`

export const PriceTag = styled.div`
  display:flex;
  justify-content: space-between;

  & > p {
    font-size: ${({theme}) => theme.sizes['Text S']};
  }

  & > span {
    font-size: ${({theme}) => theme.sizes['Text M']};
  }
`