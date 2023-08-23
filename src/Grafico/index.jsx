import React from 'react'

import { ComponenteGrafico, Componentetexto } from './style'

import Titulo from 'Titulo'
import Tabela from 'Tabela'
import Texto from 'Texto'


export default function Grafico() {
  return (
    <ComponenteGrafico>
      <Titulo corFonte="var(--Dark-brown)">
        Speding - Last 7 days
      </Titulo>
      <Tabela />
      <Componentetexto>
        <div>
          <Texto corFonte='var(--Dark-brown-transparent)'>
            Total this month
          </Texto>
          <Titulo corFonte="var(--Dark-brown)" >
            478.33
          </Titulo>
        </div>
        <div>
          <Titulo corFonte="var(--Dark-brown)" >
            +2.4%
          </Titulo>
          <Texto corFonte='var(--Dark-brown-transparent)' >
            from last month
          </Texto>
        </div>
      </Componentetexto>

    </ComponenteGrafico>
  )
}
