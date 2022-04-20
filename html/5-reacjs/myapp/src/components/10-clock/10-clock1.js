import React from 'react'
import "./10-clock1.css"

const Clock1 = () => {
  return (
    <div className="clock-container">
      <div className="time">Saat</div>
      <div>
          <div className="date">Tarih</div>
          <div className="day">Gün</div>
      </div>
    </div>
  )
}

export default Clock1