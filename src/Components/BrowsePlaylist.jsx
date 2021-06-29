import React, { useState, useEffect } from 'react'
import styles from './BrowsePlaylist.module.css'
import { useParams } from 'react-router'
import { getPlaylistItems } from '../api/spotify'
import PageHeader from './PageHeader'
import TrackListELement from './TrackListELement'

const msToMinutesSeconds = (msTot) => {
    let ms = msTot % 1000
    let time = (msTot - ms) / 1000
    let s = time % 60
    time = (time - s) / 60
    let min = time % 60

    return `${min}:${s < 10 ? `0${s}` : s}`
}

const parseDate = (date) => {
    const data = new Date(date)
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
}

export default function BrowsePlaylist() {
    const { id } = useParams()
    const [playlist, setPlaylist] = useState([])
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        getPlaylistItems(id)
            .then(res => {
                setPlaylist({
                    id: res.id,
                    img: res.images[0].url,
                    type: res.type,
                    name: res.name,
                    description: res.description,
                    owner: res.owner.display_name
                })

                setTracks(res.tracks.items.map(el => ({
                    id: el.track.id,
                    img: el.track.album.images[2].url,
                    title: el.track.name,
                    author: el.track.artists[0].name,
                    album: el.track.album.name,
                    date: parseDate(el.added_at),
                    time: msToMinutesSeconds(el.track.duration_ms)
                })))
            })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <PageHeader
                    img={playlist.img}
                    headTitle={playlist.type}
                    title={playlist.name}
                    description={playlist.description}
                />
            </div>
            <div>
                icona
            </div>
            <div className={styles.list}>
                {tracks.map((el, i) => {
                    return <TrackListELement
                        key={el.id}
                        num={i + 1}
                        img={el.img}
                        title={el.title}
                        author={el.auhtor}
                        album={el.album}
                        date={el.date}
                        time={el.time}
                    />
                })}
            </div>
        </div>
    )
}
