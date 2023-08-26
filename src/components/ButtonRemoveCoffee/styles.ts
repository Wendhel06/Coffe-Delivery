import styled from 'styled-components';

export const ButtonRemoveCoffeeContainer = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  display:flex;
  gap: 4px;
  font-size: ${({theme}) => theme.sizes['Text XS']};
  text-transform: uppercase;
  border: none;
  background-color: ${({theme}) => theme.colors['base-button']};
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > svg {
    color: ${({theme}) => theme.colors['brand-purple']};
  }
`