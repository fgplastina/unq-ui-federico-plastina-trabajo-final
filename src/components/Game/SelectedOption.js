import React from 'react'
import Card from 'react-bootstrap/Card'
import { capitalizeFirstLetter } from '../../utils/utils'
import './style.css'

export const SelectedOption = ({currentPlayerPlay, currentMachinePlay}) => {

	return (
		<div className='container d-flex mt-5'>
			<Card className="selected-card" >
				<Card.Body>
					<Card.Title>
						<strong> {currentPlayerPlay.name ? capitalizeFirstLetter(currentPlayerPlay.name) : '' } </strong>
					</Card.Title>
					<Card.Img variant="top" src={currentPlayerPlay.image} />
				</Card.Body>
			</Card>
			<Card className="selected-card">
				<Card.Body>
					<Card.Title>
						<strong>	{currentMachinePlay.name ? capitalizeFirstLetter(currentMachinePlay.name) : '' } </strong>
					</Card.Title>
					<Card.Img variant="top" src={currentMachinePlay.image} />
				</Card.Body>
			</Card>
		</div>
	)
  

}
