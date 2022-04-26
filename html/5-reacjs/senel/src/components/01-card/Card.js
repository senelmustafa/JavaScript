import React from 'react'

import 9 from  "../01-card/9.jpg"
import 13 from "../01-card/13.jpg"
import 15 from "../01-card/15.jpg"

const Card = () => {
  return (
    
         <>
         <h1>bu benim ilk çalışmam</h1>

         <ul>
              <li>Anasayfa</li>
              <li>Hakkımızda</li>
              <li>İletişim</li>
              <li><img src={9}/></li>
              <li><img src={13} /></li>
              <li><img src={15} /></li>
         </ul>
         
         
         </>
        
        
    
  )
}

export default Card