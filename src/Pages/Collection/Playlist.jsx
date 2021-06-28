import React, { useEffect } from 'react'
import { container, topBox, title } from './Playlist.module.css'
import Card from '../../Components/Card'
import { getUserPlaylists, getUserTracks } from '../../api/spotify'

export default function Playlist() {
    console.log('playlist')
    return (
        <div className={container}>
            <div className={topBox}>
                <div className={title}>
                    Brani preferiti
                </div>
                <div>
                    0 brani preferiti
                </div>
            </div>
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
            <Card title="prova" description="test"  />
        </div>
    )
}
