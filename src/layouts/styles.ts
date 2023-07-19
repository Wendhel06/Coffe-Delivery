import styled from 'styled-components'

export const LayoutTheme = styled.div`
 max-width: 72.5rem;
 margin: 3rem auto;
 padding: 1.25rem;
 background: ${({theme}) => theme.colors['backround']}
`