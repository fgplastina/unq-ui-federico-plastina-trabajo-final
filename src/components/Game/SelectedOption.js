import React from 'react';
import Card from 'react-bootstrap/Card'
import './style.css'

export const SelectedOption = ({currentPlayerPlay, currentMachinePlay}) => {
  return (
    <div className='container d-flex mt-5'>
          <Card className="card" >
            <Card.Body>
              <Card.Title>{currentPlayerPlay.name}</Card.Title>
              <Card.Img variant="top" src={currentPlayerPlay.image} />
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <Card.Title>{currentMachinePlay.name}</Card.Title>
              <Card.Img variant="top" src={currentMachinePlay.image} />
            </Card.Body>
          </Card>
    </div>
  )
  

}
