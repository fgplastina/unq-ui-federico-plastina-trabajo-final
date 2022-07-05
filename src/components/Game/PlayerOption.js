import React from 'react';
import Card from 'react-bootstrap/Card'
import { plays } from '../../pages/Game/GamePage'
import { capitalizeFirstLetter } from '../../hook/capitalizeFirstLetter'
import './style.css'


export const PlayerOption = ({setCurrentPlayerPlay, currentPlayerPlay}) => {

  function handleSelectedOption(play){
    if (!Boolean(Object.entries(currentPlayerPlay).length)){
      setCurrentPlayerPlay(play);
    }
  }
  
  return (
    <div className='container d-flex '>
      {plays.map((play) => (
        <div  onClick={() => handleSelectedOption(play)}>
          <Card className="card">
            <Card.Body>
              <Card.Title>{capitalizeFirstLetter(play.name)}</Card.Title>
              <Card.Img variant="bottom" src={play.image} />
            </Card.Body>
          </Card>
    </div>
      ))}

    </div>
  )

}
