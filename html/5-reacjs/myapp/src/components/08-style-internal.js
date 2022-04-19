import React from 'react'

const StyleInternal = () => {
    const stil={
        color:"red",
        textAlign:"center" ,
        backgroundColor:"yellow",
        fontWeight:"bold"
        
    };

  return (
      <>
    <div style={stil}>sytle ınternal</div>
    <div style={{...stil,color:"blue",fontSize:"5rem"}}>Hello</div>

    
    </>
  )
}

export default StyleInternal