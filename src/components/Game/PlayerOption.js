import React, {useState, useContext} from 'react';
import { jugadas }from '../../pages/Game/GamePage'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export const PlayerOption = ({setCurrentPlayerPlay}) => {

  function handleSelectedOption(jugada){
    setCurrentPlayerPlay(jugada);
  }
  
  return (
    <div className='container d-flex '>
      {jugadas.map((jugada) => (
        <div onClick={() => handleSelectedOption(jugada)}>
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={jugada.image} />
            <Card.Body>
              <Card.Title>{jugada.name}</Card.Title>
            </Card.Body>
          </Card>
    </div>
      ))}

    </div>
  )

}
