import React from 'react'
import ProfilCard from './ProfilCard'
import "./ProfilCard.css";

const Info = () => {
    
    return (
        <div>
            <ProfilCard name="Mustafa" age={40} img="dort.jpg" shot={1.25} followers={4550} followings={6548}  />
        </div>
    )
}

export default Info