import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0px;

  & div {
    display:flex;
    align-items: center;
    gap: 0.75rem;
  }

  & div > div{
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.colors['purple-light']};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${({theme}) => theme.colors['purple-dark']};
    font-weight: 600;
    line-height: 130%;
    gap: 4px;
  }

  & div > a{
    background-color: ${({theme}) => theme.colors['yellow-light']};
    padding: 0.5rem 0.7rem;
    border-radius: 6px;
  }
`