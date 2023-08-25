import React from 'react'
import { Colunas, Dia, Conjunto, Numero } from './style'
import { useState } from 'react'


export default function Coluna({gasto,}) {
    const [emCima, setEmCima] = useState(false)
    

    function mudaCor () {
      return `
        ${emCima ? "#3a90d6": "var(--Soft-red)"}
      `
    }


    return (
        <Conjunto>
            <Numero
            $visivel={emCima ? "visible" : "hidden"}
            >
                {`$${gasto.amount}`}
            </Numero>
            <Colunas 
            onMouseEnter={() => setEmCima(true)}
            onMouseLeave={() => setEmCima(false)}
            $altura={gasto.amount}
            $Cor={mudaCor()}
            />
            <Dia>{gasto.day}</Dia>
        </Conjunto>
        
    )
}
