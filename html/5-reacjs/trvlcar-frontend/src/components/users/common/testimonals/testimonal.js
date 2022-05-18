import React from 'react'

const Testimonal = ({title, message,name}) => {
  return (
    <div className="testimon"> 
    <p> {message}</p>
    <h5>{name} </h5>
    <em> {title}</em>
    </div>
  )
}

export default Testimonal