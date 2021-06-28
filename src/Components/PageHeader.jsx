import React, { useEffect, useState } from 'react'
import { getUser } from '../api/spotify'
import {container, imgDiv,info, titleStyle} from './PageHeader.module.css'

export default function PageHeader({
    icona = <i className="fas fa-music"></i>,
    headTitle = 'titolino',
    title = 'titolo'
}) {
    const [userName, setUserName] = useState('')

    useEffect(()=> {
        getUser().then(res => setUserName(res.display_name))
    }, [])

    return (
        <div className={container}>
            <div className={imgDiv}>
                {icona}
            </div>
            <div className={info}>
                <div>{headTitle}</div>
                <div className={titleStyle}>{title}</div>
                <div>{userName}</div>
            </div>
        </div>
    )
}
