import React from 'react'
import styles from './Navbar.module.css'
import { getUser } from '../api/spotify'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from './Button'

export default function Navbar() {
    const [user, setUser] = useState('')

    useEffect(() => {
        getUser().then(res => setUser(res.display_name))
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.arrows}>
                <div className={styles.arrow}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className={styles.arrow}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div style={{marginLeft: 'auto', marginRight: '5%'}}>
                <Button>EFFETTUA L'UPGRADE</Button>
            </div>
            <div className={styles.user}>
                <div className={styles.userImg}>
                    <i className="far fa-user"></i>
                </div>
                <div className={styles.userName}>
                    {user}
                </div>
                <div className={styles.userArrow}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}
