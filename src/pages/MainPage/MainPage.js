import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {RoundContext} from '../../context/providerRound'
import './style.css'

const MainPage = () => {

	let navigate = useNavigate() 

	const {value, setValue}= useContext(RoundContext)

	function handleChangeValueRound(event) {
		setValue(event.target.value)
	}

	return (
		<div className='main-page-container container d-flex justify-content-center flex-column '>
			<h1 className='tittle-main text-center mb-4'>Sheldon's best game</h1>
			<div className='align-items-center d-flex justify-content-center flex-column text-center'>
				<div className='round-container d-flex justify-content-center align-items-center mb-4'>
					<span className='label-round '>
              rounds
					</span>
					<select className='value-rounds' name="round" value={value.round} onChange={handleChangeValueRound}>
						<option value="1">1</option>




						<option value="3">3</option>
						<option value="5">5</option>
					</select>
				</div>
				<div className='d-flex justify-content-center flex-column text-center mb-5'> 
					<Button className='mb-4 ' variant="outline-success" onClick={() => navigate(`${process.env.PUBLIC_URL}/game`)}>Game start</Button>{' '}
					<Button className='mb-1' variant="outline-danger" onClick={() => navigate(`${process.env.PUBLIC_URL}/rules`)}>Rules</Button>{' '}
				</div>
			</div>
		</div>
	)
}
  



export default MainPage
