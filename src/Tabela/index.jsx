import Coluna from 'Coluna'
import { Dados } from './style'
import gastos from 'db/data'


export default function Tabela() {

  return (
    <Dados>
      {gastos.map((gasto) => 
        <Coluna 
        gasto={gasto} 
        key={gasto.day}
        />
      )}
    </Dados>

  )
}
