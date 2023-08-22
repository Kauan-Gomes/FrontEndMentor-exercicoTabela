import React from 'react'
import { ComponenteGrafico} from './style'
import Titulo from 'Titulo'
import Tabela from 'Tabela'


export default function Grafico() {
  return (
    <ComponenteGrafico>
      <Titulo corFonte="var(--Dark-brown)">
        Speding - Last 7 days
      </Titulo>
      <Tabela/>
      
    </ComponenteGrafico>
  )
}
