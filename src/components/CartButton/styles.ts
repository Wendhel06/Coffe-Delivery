import styled from 'styled-components'

export const CartButtonContainer = styled.div`
  background-color: ${({theme}) => theme.colors['yellow-light']};
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  position: relative;

& > span{
  background-color: ${({theme}) => theme.colors['brand-purple']};
  color: #fff;
  position: absolute;
  top: -8px;
  right: -5px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

&:hover {
  background-color: ${({theme}) => theme.colors['brand-purple']};
}

& > svg{
  color: #fff;
}
`