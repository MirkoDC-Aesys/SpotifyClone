import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ imgUrl, title, description, player = true, location }) {
    return (
        <div className={styles.container}>
            <Link to={location}>
                <div className={styles.img}>
                    {imgUrl ?
                        <img src={imgUrl} alt="" />
                        :
                        <div className={styles.imgDefault}>
                            <i className="fas fa-music"></i>
                        </div>
                    }
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
            </Link>
        </div>
    )
}
