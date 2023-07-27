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
`

export const TagsCardsCoffeeHome = styled.div`
  display: flex;
  gap: 4px;

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