import React from 'react'
import { Colunas, Dia, Conjunto } from './style'


export default function Coluna({gasto}) {
    return (
        <Conjunto>
            <Colunas $altura={gasto.amount}/>
            <Dia>{gasto.day}</Dia>
        </Conjunto>
        
    )
}
