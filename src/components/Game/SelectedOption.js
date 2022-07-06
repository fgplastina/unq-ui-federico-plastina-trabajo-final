import React from 'react'
import Card from 'react-bootstrap/Card'
import { capitalizeFirstLetter } from '../../hook/capitalizeFirstLetter'
import './style.css'

export const SelectedOption = ({currentPlayerPlay, currentMachinePlay}) => {

	return (
		<div className='container d-flex mt-5'>
			<Card className="selected-card" >
				<Card.Body>
					<Card.Title>
						{currentPlayerPlay.name ? capitalizeFirstLetter(currentPlayerPlay.name) : '' } 
					</Card.Title>
					<Card.Img variant="top" src={currentPlayerPlay.image} />
				</Card.Body>
			</Card>
			<Card className="selected-card">
				<Card.Body>
					<Card.Title>
						{currentMachinePlay.name ? capitalizeFirstLetter(currentMachinePlay.name) : '' } 
					</Card.Title>
					<Card.Img variant="top" src={currentMachinePlay.image} />
				</Card.Body>
			</Card>
		</div>
	)
  

}
