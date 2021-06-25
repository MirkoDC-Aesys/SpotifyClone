import React from 'react'
import { container } from './Login.module.css'

const AUTH_URL = `https://accounts.spotify.com/authorize?
client_id=bc5518e53c8944ab996f713a0e9a921d
&redirect_uri=http://localhost:3000
&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state
&response_type=token`

export default function Login() {
    return (
        <div className={container}>
            <a  className="btn btn-success btn-large" href={AUTH_URL}>Login With Spotify</a>
        </div>
    )
}
