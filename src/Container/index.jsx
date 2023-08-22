import React from 'react'
import Cabecalho from '../Cabecalho'
import { Retangulo } from './style'
import Grafico from '../Grafico'

export default function Container() {
  return (
    <Retangulo>
      <Cabecalho/>
      <Grafico/>
    </Retangulo>
  )
}
