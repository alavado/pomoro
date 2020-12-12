import { Switch, Route } from 'react-router-dom'
import Proyecto from './Proyecto'
import SelectorProyecto from './Proyectos'
import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => {
      this.user = user
      callback(user)
    })
  },
  signout(callback) {
    this.isAuthenticated = false
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      this.user = null
      callback()
    })
  }
}

const App = () => {

  const login = () => {
    netlifyAuth.authenticate(user => {
      console.log({user})
      // this.setState({ redirectToReferrer: true })
    })
  }

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
            <button onClick={login}>Login</button>
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
