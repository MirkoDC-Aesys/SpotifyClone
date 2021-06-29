import React from 'react'
import styles from './TrackListElement.module.css'

export default function TrackListELement({
    num = '#',
    img,
    title = 'nome canzone',
    author = 'autore',
    album = 'nome album',
    date = '#/#/#',
    time = '0:00'
}) {
    return (
        <div className={styles.container}>
            <div className={styles.num}>
                {num}
            </div>
            <div className={styles.title}>
                <div className={styles.imgDiv}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.infoTrack}>
                    <div className={styles.trackTitle}>
                        {title}
                    </div>
                    <div className={styles.trackAuthor}>
                        {author}
                    </div>
                </div>
            </div>
            <div className={styles.album}>
                {album}
            </div>
            <div className={styles.date}>
                {date}
            </div>
            <div className={styles.time}>
                {time}
            </div>
        </div>
    )
}
