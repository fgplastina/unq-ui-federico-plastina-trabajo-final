import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {plays} from '../Game/GamePage'
import './style.css'

function capitalizeFirstLetter(string){
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeWordsInList(array){
  return array.map((word) => (capitalizeFirstLetter(word)))
}

export const Rules = () => {
  return (
    <div className='container mt-5'>
      <h2>Rules:</h2>
      <ListGroup className='rules-list mt-3'variant="flush">
        {plays.map((play) => (
          <ListGroup.Item className='rules-item mb-2'>
            <strong>{capitalizeFirstLetter(play.name)}</strong> beats
            <strong className="rules-item-wins-text"> {capitalizeWordsInList(play.wins).join(', ')} </strong>
            and loses against
            <strong className="rules-item-losses-text"> {capitalizeWordsInList(play.losses).join(', ')} </strong>
          </ListGroup.Item>
        ) )}
      </ListGroup>



    </div>
  )
}
