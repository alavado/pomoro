import Logros from './Logros'
import Metas from './Metas'
import Notas from './Notas'
import SelectorProyecto from './SelectorProyecto'
import Timer from './Timer'

const App = () => {
  return (
    <div className="flex bg-gray-700 text-white font-sans w-screen">
      <div className="flex flex-col h-screen flex-1">
        <div className="flex justify-between content-center text-xl p-2 bg-gray-700">
          <h1 className="font-bold">Pomoro</h1>
          <SelectorProyecto />
        </div>
        <div className="flex flex-1">
          <Timer />
          <Notas />
          <div className="flex flex-col flex-1">
            <Metas />
            <Logros />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
