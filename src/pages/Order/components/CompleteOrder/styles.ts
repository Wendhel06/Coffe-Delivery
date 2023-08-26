import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  width: 57.9%;
  padding-right: 2rem;

  @media (max-width: 1032px) {
    width: 100%;
    max-width: 740px; 
    padding: 0px;
  }

  & > h3 {
    margin-bottom: 1rem;
    font-size: ${({theme}) => theme.sizes['Title XS']};
  }
`

export const BaseContainerCompleteOrder = styled.div`
  background-color: ${({theme}) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

   @media (max-width: 479px) {
    padding: 1.25rem;
   }
`

export const AdressContainer = styled(BaseContainerCompleteOrder)`
  & > div:first-child {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  & > div > div > p:first-child {
    color: ${({theme}) => theme.colors['base-subtitle']} !important;
    font-size: ${({theme}) => theme.sizes['Text M']};
  }

  & > div > div > p:nth_child(2) {
    color: ${({theme}) => theme.colors['base-text']};
    font-size: ${({theme}) => theme.sizes['Text S']};
  }

  & > div > svg {
    color: ${({theme}) => theme.colors['yellow-dark']};
  }
`

export const FormContainer = styled.div`
  display:flex;
  flex-direction: column;

  & > input {
    background-color: ${({theme}) => theme.colors['base-input']};
    padding: 0.75rem;
    border: 1px solid ${({theme}) => theme.colors['base-button']};
    border-radius: 4px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  & > input::-webkit-input-placeholder {
    color: ${({theme}) => theme.colors['base-label']};
  }

  & > input:last-child {
    margin-bottom: 0px;
  }
`

export const FormOfPayment = styled(BaseContainerCompleteOrder)`
  margin-top: 12px;

  & > div {
    display:flex;
    margin-bottom: 2rem;
  }

  & > div:last-child {
    display: grid;
    gap: 12px !important;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 0px;

    @media (max-width: 634px) {
      grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    }
  }

  & > div > svg {
    color: ${({theme}) => theme.colors['brand-purple']};
    display:flex;
    margin-right: 10px;
  }  

  & > div > div > p:first-child {
    color: ${({theme}) => theme.colors['base-subtitle']};
    font-size: ${({theme}) => theme.sizes['Text M']};
  }
  
  & > div > div > p:nth-child(2) {
    font-size: ${({theme}) => theme.sizes['Text S']};
  }  
`

export const CardOfPayment = styled.div`
  display: flex;
  align-items: center!important;
  background-color: ${({theme}) => theme.colors['base-button']};
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;

  & > svg {
    color: ${({theme}) => theme.colors['brand-purple']};
    margin-right: 12px;
  }

  & > p {
    font-size: 10px!important;
    text-transform: uppercase;
  }
`