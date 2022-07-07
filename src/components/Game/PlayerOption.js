import React from 'react'
import Card from 'react-bootstrap/Card'
import { plays } from '../../pages/Game/GamePage'
import { capitalizeFirstLetter } from '../../utils/utils'
import './style.css'


export const PlayerOption = ({setCurrentPlayerPlay, currentPlayerPlay}) => {

	function handleSelectedOption(play){
		if (!Object.entries(currentPlayerPlay).length){
			setCurrentPlayerPlay(play)
		}
	}
  
	return (
		<div className='container d-flex '>
			{plays.map((play, index) => (
				<div key={index} onClick={() => handleSelectedOption(play)}>
					<Card className="card">
						<Card.Body>
							<Card.Title> 
								<strong>
									{capitalizeFirstLetter(play.name)}
								</strong>
							</Card.Title>
							<Card.Img variant="bottom" src={play.image} />
						</Card.Body>
					</Card>
				</div>
			))}

		</div>
	)

}
