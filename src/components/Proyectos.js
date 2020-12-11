import { NavLink as Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import query from '../graphql/queries/proyectos'
import './css/Proyectos.css'

const Proyectos = () => {

  const { data, loading, error } = useQuery(query)

  if (loading || error) {
    return null
  }

  return (
    <ul className="flex content-center pr-4">
      {data.allProyectos.data.map(proyecto => (
        <Link
          to={`/proyecto/${proyecto._id}`}
          className="pl-8 text-gray-400 text-base"
          activeClassName="Proyectos__link_activo"
          key={proyecto._id}
        >
          {proyecto.nombre}
        </Link>
      ))}
    </ul>
  )
}

export default Proyectos
