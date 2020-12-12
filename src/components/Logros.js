import './css/Logros.css'

const Logros = () => {
  return (
    <div className="p-4 mb-4 mr-4 shadow flex-1 flex flex-col bg-gray-800 rounded">
      <h2 className="font-bold mb-2">Logros</h2>
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-wrap content-center h-8 mt-2">
          <LogroUnPomoro />
          <LogroPomoros texto="cinco" cantidad={5} />
          <LogroPomoros texto="diez" cantidad={10} />
          <LogroPomoros texto="veinticinco" cantidad={25} />
          <LogroPomoros texto="cincuenta" cantidad={50} />
          <LogroPomoros texto="cien" cantidad={100} />
        </div>
        <p className="text-gray-400">Has completado 4 pomoros en este proyecto.</p>
      </div>
    </div>
  )
}

const LogroUnPomoro = () => (
  <div
    className="Logros__un_pomoro mx-2 transition"
    title="Completa un pomoro"
  />
)

const LogroPomoros = ({ texto, cantidad }) => (
  <div
    className="Logros__un_pomoro mx-2 transition relative"
    title={`Completa ${texto} pomoros`}
  >
    <p className="absolute right-0 bottom-0 font-bold text-xs pointer-events-none text-gray-200">
      x {cantidad}
    </p>
  </div>
)

export default Logros
