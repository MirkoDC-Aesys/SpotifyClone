import Login from './Pages/Login'
import styles from './App.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import Collection from './Pages/Collection/Collection'
import BrowsePlaylist from './Components/BrowsePlaylist'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import { useReducer } from 'react'

const token = new URLSearchParams(
  window.location.hash.replace('#', '&')
).get('access_token')

if (token) {
  localStorage.setItem('token', token)
  window.history.pushState({}, null, '/')
}

function reducer(navPath, action) {
  switch (action.type) {
    case '/':
      return ''
    case '/search':
      return 'search'
    case '/collection':
      return 'collection'
    default:
      return ''
  }
}

function App() {
  const [navPath, dispatch] = useReducer(reducer, 'home')

  return (
    !localStorage.getItem('token') ?
      <Login />
      :
      <Router>
        <div className={styles.container}>
          <div className={styles.containerTop}>
            <div className={styles.containerSidebar}>
              <Sidebar dispatch={dispatch} />
            </div>
            <div className={styles.containerRight}>
              <div className={styles.containerNavbar}>
                <Navbar navPath={navPath} />
              </div>
              <div className={styles.containerContent}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/search' component={Search} />
                  <Route path='/collection' component={Collection} />
                  <Route path='/playlist/:id' component={BrowsePlaylist} />
                </Switch>
              </div>
            </div>
          </div>
          <div className={styles.containerPlayer}>
            <Player />
          </div>
        </div>
      </Router>
  );
}

export default App;
