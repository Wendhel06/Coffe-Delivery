import styled from 'styled-components';


export const ButtonAddOrRemoveCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0.5rem;
  background-color: ${({theme}) => theme.colors['base-button']};
  border-radius: 6px;
  min-width: 72px;

  & > button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  & > button > svg {
    color: ${({theme}) => theme.colors['brand-purple']};
  }
`