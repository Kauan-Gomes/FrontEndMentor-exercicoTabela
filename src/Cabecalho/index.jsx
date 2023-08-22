import React from 'react'

import { Cabeca, Textos,Logo } from './style'

import LogoMarca from './logo.svg'
import Titulo from 'Titulo'
import Texto from 'Texto'


export default function Cabecalho() {
  return (
    <Cabeca>
      <Textos>
        <Texto corFonte='var(--Cream)'>My balance</Texto>
        <Titulo corFonte='var(--Cream)'>$921.48</Titulo>
      </Textos>
      <Logo>
        <img src={LogoMarca} alt="Logo da tabela" />
      </Logo>
    </Cabeca>

  )
}
