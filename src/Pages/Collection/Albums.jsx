import React from 'react'
import styles from './Albums.module.css'
import FindBox from '../../Components/FindBox'

export default function Albums() {
    return (
        <div>
            <FindBox icona={<i className="fas fa-compact-disc"></i>}
                title="Segui il tuo primo album"
                description="Salva gli album toccando l'icona a forma di cuore."
                testoBottone="TROVA ALBUM"
                buttonStyle="btnSecondary"
            />
        </div>
    )
}
