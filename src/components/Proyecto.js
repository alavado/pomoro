import Metas from './Metas'
import Notas from './Notas'
import Logros from './Logros'
import Timer from './Timer'
import Historial from './Historial'
import { useParams } from 'react-router-dom'

const Proyecto = () => {

  const { id } = useParams()
  console.log(id)

  return (
    <div className="flex flex-col flex-1 md:flex-row">
      <div className="flex flex-col flex-1">
        <Timer />
        <Historial />
      </div>
      <Notas />
      <div className="flex flex-col flex-1">
        <Metas />
        <Logros />
      </div>
    </div>
  )
}

export default Proyecto
