import React from 'react'
import { Card } from 'react-bootstrap'

const person = ({name,age,image}) => {
  return (
    
    
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require(`/${image}`)} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{age}
              </Card.Text>
           
          </Card.Body>
      </Card>
  )
}

export default person