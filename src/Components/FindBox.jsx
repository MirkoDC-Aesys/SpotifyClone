import React from 'react'
import styles from './FindBox.module.css'
import Button from './Button'

export default function FindBox({
    icona,
    title,
    description,
    testoBottone = 'Invia',
    buttonStyle,
    location = '/'
}) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {icona}
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.desc}>
                {description}
            </div>
            <div>
                <Button location={location} buttonStyle={buttonStyle}>{testoBottone}</Button>
            </div>
        </div>
    )
}
