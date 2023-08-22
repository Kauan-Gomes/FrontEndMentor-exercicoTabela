import styled from 'styled-components'


export const Valor = styled.h2`
    font-weight: 800;
    font-size: 28px;
    margin: 0;

    color: ${props => props.$cor || "var(--Dark-brown)"}


`