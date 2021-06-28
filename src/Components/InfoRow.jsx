import React from 'react'
import { container, left, right } from './InfoRow.module.css'
import { useHistory } from 'react-router-dom'

export default function SidebarRow({ icon, text, location, dispatch }) {
    const history = useHistory()

    const handleClick = ()=> {
        dispatch({type: location})
        history.push(location)
    }

    return (
        <div className={container}>
            <div className={left}>
                {icon}
            </div>
            <div className={right}>
                <a onClick={handleClick}>{text}</a>
            </div>
        </div>
    )
}
