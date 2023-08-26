import styled from 'styled-components'

export const OrderContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding-top: 2.5rem;
  width: 100%;

  @media (max-width: 1032px) {
    flex-direction: column;
    align-items: center;
  }
`