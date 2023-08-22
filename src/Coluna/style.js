import styled from 'styled-components'

export const Conjunto = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Colunas = styled.div`
    /* height: 130px; */
    height: ${props => props.$altura * 2 + "px"};
    background-color: var(--Soft-red);
    width: 50px;
    border-radius: 4px;
    padding: 0 0 20px 0;
    
`

export const Dia = styled.h3`
    font-size:10px;
    color: var(--Dark-brown);
`

