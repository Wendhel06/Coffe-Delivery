import styled from 'styled-components'

export const MainContainerHome = styled.main`
  display:flex;
  flex-direction: column;
`
export const SectionHomeIntro = styled.section`
  padding: 5.75rem 0;
  display: flex;
  gap: 3.5rem;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 3.125rem 0;
  }
`
export const ContainerTextHomeIntro = styled.div`
 h1 {
  margin-bottom: 1rem;
  font-weight: 800;
 }

 & > p {
  font-weight: 400;
  font-size: ${({theme}) => theme.sizes['Text L']};
  color: ${({theme}) => theme.colors['base-subtitle']};
 }
`
export const InfoCoffeeHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.5rem;

 & div {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 50%;
  margin-bottom: 1.25rem;
 }

 & div:nth-child(3n),
 & div:nth-child(4n) {
  margin-bottom: 0px;
 }

 & > div svg{
  padding: 0.5rem;
  border-radius: 50%;
  color: ${({theme}) => theme.colors.white}
 }

 & > div:first-child svg{
   background-color: ${({theme}) => theme.colors['yellow-dark']}
 }

 & > div:nth-child(2) svg{
  background-color: ${({theme}) => theme.colors['base-text']};
}

& > div:nth-child(3) svg{
  background-color: ${({theme}) => theme.colors['yellow']}
}

& > div:nth-child(4) svg{
  background-color: ${({theme}) => theme.colors['purple']}
}

 & > p {
  font-size: ${({theme}) => theme.sizes['Text M']};
 }

 @media (max-width: 991px) {
  flex-direction: column;

  & div {
    width: 100%;
  }

  & div:nth-child(4n) {
    margin-top: 1.25rem
  }
}
`

export const ListCoffeeHomepage = styled.section`
 padding: 2rem;

 & > h3 {
   font-size: ${({theme}) => theme.sizes['Title L']};
   font-weight: 800;
   margin-bottom: 3.375rem;
 }

 & > div {
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 16rem) !important;
 }

`
