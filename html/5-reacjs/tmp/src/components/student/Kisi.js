import React from 'react'

const Kisi = (prop) => {

    const { ad, img, yas, kurs } = prop;

    return (
        <div >
            <h1>{ad}</h1>
            <img src={img} alt="" width={100} height={180} />
            <h4>{yas}</h4>
            <h4>{kurs}</h4>





        </div>
    )
}

export default Kisi