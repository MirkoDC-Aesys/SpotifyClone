import React from 'react'
import { container } from './Collection.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Playlist from './Playlist'
import Podcast from './Podcast'
import Artists from './Artists'
import Albums from './Albums'

export default function Collection() {
    return (
        <div className={container}>
            <Switch>
                <Route path='/collection/podcasts' component={Podcast} />
                <Route path='/collection/playlists' component={Playlist} />
                <Route path='/collection/artists' component={Artists} />
                <Route path='/collection/albums' component={Albums} />
                <Route exact path='/collection' render={() => <Redirect to='/collection/playlists' />} />
            </Switch>
        </div>
    )
}
