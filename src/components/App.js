import { Switch, Route } from 'react-router-dom'
import Proyecto from './Proyecto'
import SelectorProyecto from './Proyectos'

const App = () => {
  return (
    <div className="flex bg-gray-700 text-white font-sans w-screen">
      <div className="flex flex-col h-screen flex-1">
        <div className="flex justify-between content-center text-xl p-2 bg-gray-700">
          <h1 className="font-bold pl-2">Pomoro</h1>
          <SelectorProyecto />
        </div>
        <Switch>
          <Route exact path="/">
            <div>Selecciona un proyecto</div>
          </Route>
          <Route path="/proyecto/:id">
            <Proyecto />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
