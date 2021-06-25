import React from 'react'
import styles from './Image.module.css'

export default function CardSearch({id, title, img, color}) {
    return (
        <div className={styles.container} style={{backgroundColor: `rgb(${color.red},${color.green},${color.blue})`}}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.img}>    
                <img src={img} alt="" />
            </div>
        </div>
    )
}
