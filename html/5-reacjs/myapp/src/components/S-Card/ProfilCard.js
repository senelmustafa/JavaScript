import React from 'react'
import { Card } from 'react-bootstrap'

const ProfilCard = ({name,age,img,location,shot,followers,followings}) => {
  return (
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require(`./${img}`)} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{age}</Card.Text>
              <Card.Title>{shot}</Card.Title>
              <Card.Text>{followers}</Card.Text>
              <Card.Text>{followings}</Card.Text>
      
          </Card.Body>
      </Card>
      
   
  )
}

export default ProfilCard