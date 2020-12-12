const { createSlice } = require("@reduxjs/toolkit")

export const ESTADO_SIN_INICIAR = 'ESTADO_SIN_INICIAR'
export const ESTADO_CORRIENDO = 'ESTADO_CORRIENDO'
export const ESTADO_PAUSADO = 'ESTADO_PAUSADO'
export const ESTADO_TERMINADO = 'ESTADO_TERMINADO'

const timerSlice = createSlice({
  name: 'timer',
  initialState: { estado: ESTADO_SIN_INICIAR },
  reducers: {
    iniciar: state => state.estado = ESTADO_CORRIENDO,
    pausar: state => state.estado = ESTADO_PAUSADO,
    reanudar: state => state.estado = ESTADO_CORRIENDO,
    resetear: state => state.estado = ESTADO_SIN_INICIAR,
    terminar: state => state.estado = ESTADO_TERMINADO
  }
})

export default timerSlice