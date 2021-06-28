import React from 'react'
import styles from './Card.module.css'

export default function Card({ imgUrl, title, description, player = true }) {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={imgUrl} alt="" />
                {player ?
                <div className={styles.circlePlay}>
                    <i className="fas fa-play"></i>
                </div>
                :
                <div></div>
                }
            </div>
            <div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.desc}>
                    {description}
                </div>
            </div>
        </div>
    )
}
