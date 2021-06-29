import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { getCategoryPlaylist } from '../../api/spotify'
import RowTitle from '../../Components/RowTitle'
import Card from '../../Components/Card'

export default function Home() {
    const [playlist, setPlaylist] = useState([])
    const [topLists, setTopLists] = useState([])
    const [mood, setMood] = useState([])

    useEffect(() => {
        getCategoryPlaylist('party')
            .then(res => {
                setPlaylist(res.map(el => ({
                    id: el.id,
                    title: el.name,
                    img: el.images[0].url,
                    description: el.description
                })))
            })

        getCategoryPlaylist('toplists')
            .then(res => {
                setTopLists(res.map(el => ({
                    id: el.id,
                    title: el.name,
                    img: el.images[0].url,
                    description: el.description
                })))
            })

        getCategoryPlaylist('mood')
            .then(res => {
                setMood(res.map(el => ({
                    id: el.id,
                    title: el.name,
                    img: el.images[0].url,
                    description: el.description
                })))
            })
    }, [])

    return (
        <div className={styles.container}>
            <RowTitle title="Buon pomeriggio con le nostre playlist" />
            <div className={styles.rowContainer}>
                {playlist.slice(0, 5).map(el => {
                    return <Card key={el.id} imgUrl={el.img} title={el.title} description={el.description} location={`/playlist/${el.id}`} />
                })}
            </div>
            <RowTitle description="Podcast che ti faranno impazzire." />
            <div className={styles.rowContainer}>
                {playlist.slice(0, 5).map(el => {
                    return <Card key={el.id} imgUrl={el.img} title={el.title} description={el.description} location={`/playlist/${el.id}`} />
                })}
            </div>
            <RowTitle title="Mood" description="Playlist che seguono il tuo umore." />
            <div className={styles.rowContainer}>
                {mood.slice(0, 5).map(el => {
                    return <Card key={el.id} imgUrl={el.img} title={el.title} description={el.description} location={`/playlist/${el.id}`} />
                })}
            </div>
            <RowTitle title="Il meglio del 2020" description="Immergiti nell'ascolto dei migliori brani di ogni genere del 2020" />
            <div className={styles.rowContainer}>
                {topLists.slice(0, 5).map(el => {
                    return <Card key={el.id} imgUrl={el.img} title={el.title} description={el.description} location={`/playlist/${el.id}`} />
                })}
            </div>
        </div>
    )
}
