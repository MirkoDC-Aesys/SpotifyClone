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
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'

const token = new URLSearchParams(
  window.location.hash.replace('#', '&')
).get('access_token')

if (token) {
  localStorage.setItem('token', token)
  window.history.pushState({}, null, '/')
}

function App() {
  return (
    !localStorage.getItem('token') ?
      <Login />
      :
      <Router>
        <div className={styles.container}>
          <div className={styles.containerTop}>
            <div className={styles.containerSidebar}>
              <Sidebar />
            </div>
            <div className={styles.containerRight}>
              <div className={styles.containerNavbar}>
                <Navbar />
              </div>
              <div className={styles.containerContent}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/search' component={Search} />
                  <Route path='/collection' component={Collection} />
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
