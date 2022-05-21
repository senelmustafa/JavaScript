import React from 'react'

const TeamMembers = ({image,name,title}) => {
    const imageSrc = require(`../../../../assets/img/team/${image}`);
  return (
  

    <Card>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{title}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default TeamMembers