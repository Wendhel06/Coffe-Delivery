import styled from 'styled-components'

export const GridCardsCoffeeHome = styled.div`
  background-color: ${({theme}) => theme.colors['base-card']};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;

  & > img {
    width: 100%;
    max-width: 120px;
    height: auto;
    margin-bottom: 0.75;
  }

  & > h3 {
    text-align: center;
    font-size: ${({theme}) => theme.sizes['Title S']};
    margin-bottom: 0.5rem;
  }

  & > p {
    text-align: center;
    color: ${({theme}) => theme.colors['base-label']};
    margin-bottom: 2rem;
  }

  &  > p:last-child {
    margin:0px;
  }
`

export const TagsCardsCoffeeHome = styled.div`
  display: flex;
  gap: 4px;
  margin: 1rem 0px;

  & > p {
    background-color: ${({theme}) => theme.colors['yellow-light']};
    padding: 4px 8px;
    border-radius: 100px;
    font-weight: 700;
    font-size: ${({theme}) => theme.sizes['Tag']};
    line-height: 1;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors['yellow-dark']};
  }  
`

export  const CoffeeSale = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 208px;
    &  > p > span {
      font-size: ${({theme}) => theme.sizes['Text L']};
      color: ${({theme}) => theme.colors['base-text']};
      font-weight: 800;
    }

    & > div {
      display: flex;
      gap: 5px;
      height: 38px;
    }
    
    & > div > input {
      background-color: ${({theme}) => theme.colors['base-button']};
      color: ${({theme}) => theme.colors['base-title']};
      width: 72px;
      padding: 8px;
      border: none;
      border-radius: 6px;
    }

    & > div > button{
      background-color: ${({theme}) => theme.colors['purple-dark']};
      border: none;
      padding: 8px;
      border-radius: 6px;
      cursor: pointer;
    }

    & > div > button > svg {
      color: ${({theme}) => theme.colors['white']};
    }
  `

export const CoffeeAmount = styled.div`

`