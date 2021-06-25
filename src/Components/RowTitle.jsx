import React from 'react'
import styles from './RowTitle.module.css'

export default function RowTitle({ title, description }) {
    return (
        <div className={styles.title}>
            <div>
                <a className={styles.titleLeft}>
                    {title}
                </a>
                <div className={styles.descriptionLeft}>
                    {description}
                </div>
            </div>
            <a className={styles.titleRight}>
                VISUALIZZA TUTTO
            </a>
        </div>
    )
}
