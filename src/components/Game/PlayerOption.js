import React, {useState, useContext} from 'react';
import { plays } from '../../pages/Game/GamePage'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css'


export const PlayerOption = ({setCurrentPlayerPlay}) => {

  function handleSelectedOption(play){
    setCurrentPlayerPlay(play);
  }
  
  return (
    <div className='container d-flex '>
      {plays.map((play) => (
        <div onClick={() => handleSelectedOption(play)}>
          <Card className="card" style={{ width: '12rem' }}>
            <Card.Img variant="top" src={play.image} />
            <Card.Body>
              <Card.Title>{play.name}</Card.Title>
            </Card.Body>
          </Card>
    </div>
      ))}

    </div>
  )

}
