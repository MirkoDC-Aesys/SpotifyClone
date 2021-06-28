import React from 'react'
import styles from './Collection.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

export default function Collection() {
    return (
        <Router>
            <Switch>
                <Route exact path='/collection' render={() => <div>Home</div>} />
                <Route path='/collection/playlists' render={() => <div>playlists</div>} />
                <Route path='/collection/podcasts' render={() => <div>podcasts</div>} />
                <Route path='/collection/artists' render={() => <div>artists</div>} />
                <Route path='/collection/albums' render={() => <div>albums</div>} />
            </Switch>
        </Router>
    )
}
