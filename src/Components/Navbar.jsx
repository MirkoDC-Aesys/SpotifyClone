import React from 'react'
import styles from './Navbar.module.css'
import { getUser } from '../api/spotify'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar({ navPath }) {
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
            {
                navPath === '' ?
                    <div style={{ marginLeft: 'auto', marginRight: '5%' }}>
                        <Button>EFFETTUA L'UPGRADE</Button>
                    </div>
                    : navPath === 'search' ?
                        <div style={{ marginRight: 'auto', marginLeft: '5%' }}>
                            <input type="text" />
                        </div>
                        :
                        <div className={styles.collectionContainer}>
                            Collection
                        </div>
            }

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
