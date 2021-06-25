import React from 'react'
import styles from './Sidebar.module.css'
import InfoRow from './InfoRow'

export default function Sidebar() {

    return (
        <div className={styles.container}>
            <div>
                <InfoRow icon={<i className="fab fa-spotify"></i>} text="Spotify" location={`/`} />
                <InfoRow icon={<i className="fas fa-home"></i>} text="Home" location={`/`} />
                <InfoRow icon={<i className="fas fa-search"></i>} text="Cerca" location={`/search`} />
                <InfoRow icon={<i className="fas fa-book"></i>} text="La tua libreria" location={`/collection`} />
                <InfoRow icon={<i className="fas fa-plus-square"></i>} text="Crea playlist" location={`/`} />
                <InfoRow icon={<i className="fas fa-heart"></i>} text="Brani preferiti" location={`/`} />
            </div>
        </div>
    )
}
