import React from 'react'
import styles from './Artists.module.css'
import FindBox from '../../Components/FindBox'

export default function Artists() {
    return (
        <div>
            <FindBox icona={<i className="fas fa-user-cog"></i>}
                title="Segui il tuo primo artista"
                description="Segui gli artisti che ti piacciono toccando l'apposito pulsante."
                testoBottone="TROVA ARTISTI"
                buttonStyle="btnSecondary"
            />
        </div>
    )
}
