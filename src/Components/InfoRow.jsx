import React from 'react'
import { container, left, right } from './InfoRow.module.css'
import { Link } from 'react-router-dom'

export default function SidebarRow({ icon, text, location }) {
    return (
        <div className={container}>
            <div className={left}>
                {icon}
            </div>
            <div className={right}>
                <Link to={location}>{text}</Link>
            </div>
        </div>
    )
}
