import React from 'react'
import FindBox from '../../Components/FindBox'

export default function Podcast() {
    return (
        <div>
            <FindBox icona={<i className="fas fa-broadcast-tower"></i>}
                title="Segui il tuo primo podcast"
                description="Segui i podcast che ti piacciono toccando l'apposito pulsante."
                testoBottone="TROVA PODCAST"
                buttonStyle="btnSecondary"
            />
        </div>
    )
}
