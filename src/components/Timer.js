import { useState, useEffect } from 'react'

const minutosPomoro = 25

const Timer = () => {

  const [tiempo, setTiempo] = useState(minutosPomoro * 60)
  const [comenzo, setComenzo] = useState(false)

  useEffect(() => {
    let actualizar
    if (comenzo) {
      actualizar = setInterval(() => setTiempo(t => Math.max(0, t - 1)), 1000)
    }
    else {
      clearInterval(actualizar)
    }
    return () => clearInterval(actualizar)
  }, [comenzo])

  const iniciarTimer = () => {
    setComenzo(true)
    setTiempo(25 * 60 - 1)
  }

  const minutos = Math.floor(tiempo / 60)
  const segundos = tiempo % 60
  const tiempoString = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`

  return (
    <div className="p-8 flex flex-col content-center justify-center">
      <p className="text-9xl">{tiempoString}</p>
      <button
        disabled={comenzo}
        onClick={iniciarTimer}
        className="p-2 px-4 mt-4 bg-red-600 text-white rounded hover:bg-red-500 transition self-center"
      >
        Comenzar
      </button>
    </div>
  )
}

export default Timer
