import React from 'react'
import { Valor } from './style'

export default function Titulo({children, corFonte}) {
  return (
    <Valor $cor={corFonte}>
        {children}
    </Valor>
    
  )
}
