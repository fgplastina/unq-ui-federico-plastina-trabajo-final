import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleGoHome } from '../../utils/utils'
import { RoundContext } from '../../context/providerRound'
import './style.css'

export const Header = () => {

	const {setValue} = useContext(RoundContext)
	const navigate = useNavigate()

	return (
		<nav className=" d-flex justify-content-between align-items-center  container-header  px-5">
			<span
				onClick={() => handleGoHome(setValue, navigate)}
				className="logo-header"
				aria-hidden="true"
			>
        Sheldon's game
			</span>
		</nav>
	)
}
