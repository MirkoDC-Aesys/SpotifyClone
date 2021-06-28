import React from 'react'
import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const STYLES = ["btnPrimary", "btnSecondary"]

export default function Button({
    children,
    type,
    onClick,
    buttonStyle,
    location
}) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <Link to={location}>
            <button
                className={`${styles.btn} ${styles[checkButtonStyle]}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}
