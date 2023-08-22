import React from 'react'
import { Descricao } from './style'

export default function Texto({ children, corFonte }) {
  return (
    <Descricao $cor={corFonte}>
      {children}
    </Descricao>

  )
}
