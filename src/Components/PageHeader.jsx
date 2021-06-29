import React, { useEffect, useState } from 'react'
import { getUser } from '../api/spotify'
import {container, imgDiv,info, titleStyle} from './PageHeader.module.css'

export default function PageHeader({
    icona = <i className="fas fa-music"></i>,
    img,
    headTitle = 'titolino',
    title = 'titolo',
    description
}) {
    /*const [userName, setUserName] = useState('')

    useEffect(()=> {
        getUser().then(res => setUserName(res.display_name))
    }, [])*/

    return (
        <div className={container}>
            <div className={imgDiv}>
                {
                    img ? 
                    <img src={img} alt="" />
                    :
                    icona
                }
            </div>
            <div className={info}>
                <div>{headTitle}</div>
                <div className={titleStyle}>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}
