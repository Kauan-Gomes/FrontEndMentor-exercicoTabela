import styled from 'styled-components'

export const Conjunto = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
`

export const Colunas = styled.div`
    height: ${props => props.$altura * 2 + "px"};
    background-color: ${props => props.$Cor};
    width: 50px;
    border-radius: 4px;
    padding: 0 0 20px 0;
    
`

export const Dia = styled.h3`
    font-size:10px;
    color: var(--Dark-brown);
`
export const Numero = styled.span`
    background-color: #000;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #FFF;
    font-size: 10px;
    text-align: center;
    padding: 5px 0;
    visibility: ${props => props.$visivel};
`
