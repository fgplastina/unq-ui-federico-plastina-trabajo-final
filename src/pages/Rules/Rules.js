import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {plays} from '../Game/GamePage'
import {capitalizeFirstLetter, capitalizeWordsInList } from '../../utils/utils'
import './style.css'


export const Rules = () => {
	return (
		<div className='container mt-5'>
			<h2>Rules:</h2>
			<ListGroup className='rules-list mt-3'variant="flush">
				{plays.map((play, index) => (
					<ListGroup.Item key={index} className='rules-item mb-2'>
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
