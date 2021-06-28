import React from 'react'
import { container, navbarContainer } from './Collection.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom"
import Playlist from './Playlist'
import Podcast from './Podcast'
import Artists from './Artists'
import Albums from './Albums'

export default function Collection() {
    return (
        <Router>
            <div className={container}>
                <div className={navbarContainer}>
                    <Link to='/collection/playlists'>Playlist</Link>
                    <Link to='/collection/podcasts'>Podcast</Link>
                    <Link to='/collection/artists'>Artisti</Link>
                    <Link to='/collection/albums'>Album</Link>
                </div>
                <Switch>
                    <Route path='/collection/playlists' component={Playlist} />
                    <Route path='/collection/podcasts' component={Podcast} />
                    <Route path='/collection/artists' component={Artists} />
                    <Route path='/collection/albums' render={Albums} />
                    <Route exact path='/collection' render={() => <Redirect to='/collection/playlists' />} />
                </Switch>
            </div>
        </Router>
    )
}
